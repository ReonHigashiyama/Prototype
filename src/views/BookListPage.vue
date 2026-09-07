<template>
    <div class="book-list-page">
        <div class="content">
            <h1 class="page-title">蔵書一覧</h1>

            <BookListToolbar v-model:genre="selectedGenre" v-model:status="selectedStatus" v-model:search="searchKeyword"/>

            <div class="book-grid">
                <BookCard :books="paginatedBooks"/>
            </div>

            <div class="pagination">
                <button type="button" class="pagination__button" :disabled="currentPage==1" @click="gotoPrevPage">◀</button>
                <span class="pagination__label">{{ currentPage }}/{{ totalPages }}</span>
                <button type="button" class="pagination__button" :disabled="currentPage==totalPages" @click="gotoNextPage">▶</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import AppHeader from '@/components/Common/AppHeader.vue';
import BookListToolbar from '@/components/book-list/BookListToolbar.vue';
import BookCard from '@/components/book-list/BookCard.vue';

const PAGE_SIZE = 20;

const books = ref([]);
const selectedGenre = ref('');
const selectedStatus = ref('');
const searchKeyword = ref('');
const currentPage = ref(1);

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
    const keyword = searchKeyword.value.trim().toLowerCase();

    return books.value.filter(book => {
        const genreMatch = selectedGenre.value == '' || book.genre == selectedGenre.value;
        const statusMatch = selectedStatus.value == '' || book.status == selectedStatus.value;
        const searchMatch = keyword == '' ||
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.publicationDate.toLowerCase().includes(keyword) ||
            book.isbn.toLowerCase().includes(keyword) ||
            book.genre.toLowerCase().includes(keyword);
        return genreMatch && statusMatch && searchMatch;
    });
});

//絞り込み結果に応じた総ページ数（最低でも１ページは表示）
const totalPages = computed(() => {
    return Math.max(1, Math.ceil(filteredBooks.value.length / PAGE_SIZE));
});

//現在のページに表示する本だけを切り出す
const paginatedBooks = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredBooks.value.slice(start, end);
});

function gotoPrevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function gotoNextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

//絞り込み条件が変わったら1ページ目に戻す
watch([selectedGenre, selectedStatus, searchKeyword], () => {
    currentPage.value = 1;
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