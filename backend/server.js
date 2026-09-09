import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバー起動:http://localhost:${PORT}`);
});