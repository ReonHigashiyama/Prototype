import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.get('/books', async (req, res) => {
    try {
        const {
            genre = '',
            status = '',
            search = '',
            page = 1,
            limit = 20
        } = req.query;

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const limitNum = Math.max(1, parseInt(limit, 10) || 20);
        const offset = (pageNum - 1) * limitNum;

        const conditions = [];
        const values = [];
        let paramIndex = 1;

        if (genre) {
            conditions.push(`genre = $${paramIndex++}`);
            values.push(genre);
        }
        if (status) {
            conditions.push(`status = $${paramIndex++}`);
            values.push(status);
        }
        if (search) {
            conditions.push(`title ILIKE $${paramIndex++}`);
            values.push(`%${search}%`);
        }

        const whereClause = conditions.length > 0
            ? `WHERE ${conditions.join(' AND ')}`
            : '';

        const countQuery = `SELECT COUNT(*) FROM books ${whereClause}`;
        const countResult = await pool.query(countQuery, values);
        const totalCount = parseInt(countResult.rows[0].count, 10);

        const dataQuery = `
            SELECT
                id,
                title,
                author,
                publication_date AS "publicationDate",
                genre,
                status,
                isbn
            FROM books
            ${whereClause}
            ORDER BY id
            LIMIT $${paramIndex++} OFFSET $${paramIndex++}
        `;

        const dataValues = [...values, limitNum, offset];
        const dataResult = await pool.query(dataQuery, dataValues);

        res.json({
            data: dataResult.rows,
            totalCount,
            page: pageNum,
            totalPages: Math.max(1, Math.ceil(totalCount / limitNum))
        });
    }
    catch (error) {
        console.error('books取得エラー:', error);
        res.status(500).json({ error: 'サーバーエラーが発生しました' });
    }
});

export default router;