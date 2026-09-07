<template>
    <div class="book-list-page">
        <div class="content">
            <h1 class="page-title">蔵書一覧</h1>

            <BookListToolbar v-model:genre="selectedGenre" v-model:status="selectedStatus"/>

            <div class="book-grid">
                <BookCard :books="filteredBooks"/>
            </div>

            <div class="pagination">
                <button type="button" class="pagination__button">◀</button>
                <span class="pagination__label">1/4</span>
                <button type="button" class="pagination__button">▶</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import AppHeader from '@/components/Common/AppHeader.vue';
import BookListToolbar from '@/components/book-list/BookListToolbar.vue';
import BookCard from '@/components/book-list/BookCard.vue';

const books = ref([]);
const selectedGenre = ref('');
const selectedStatus = ref('');

async function LoadBooks() {
    try {
        const response = await fetch('/books.json');
        if (!response.ok) throw new Error(`HTTPエラー! ステータス: ${response.status}`);
        books.value = await response.json();
        console.log(books.value);
    }
    catch (error) {
        console.error('読み込みに失敗しました:', error);
    }
}

onMounted(() => {
    LoadBooks();
});

const filteredBooks = computed(() => {
    return books.value.filter(book => {
        const genreMatch = selectedGenre.value == '' || book.genre == selectedGenre.value;
        const statusMatch = selectedStatus.value == '' || book.status == selectedStatus.value;
        return genreMatch && statusMatch;
    });
});
</script>

<style scoped>
.book-list-page {
    background-color: #f0f0f0;
    min-height: 100vh;
}

.content {
    padding: 16px 24px;
}

.page-title {
    font-size: 22px;
    margin: 0 0 16px;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 16px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
}

.pagination__button {
    font-size: 18px;
    padding: 6px 14px;
    border: 1px solid #999;
    border-radius: 4px;
    background-color: #d9d9d9;
    cursor: pointer;
}

.pagination__label {
    font-size: 18px;
}
</style>