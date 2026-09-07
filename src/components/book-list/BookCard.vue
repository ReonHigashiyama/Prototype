<script setup>
defineProps({
    books: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <div class="book-card" v-for="book in books" :key="book.title">
        <!-- <div class="book-card-img">画像</div> -->
         <img src="../../../img/images.jpg" width="80" height="80" alt="">
        <div class="book-card-info">
            <p>タイトル：{{ book.title }}</p>
            <p>著者：{{ book.author }}</p>
            <p>出版日：{{ book.publicationDate }}</p>
            <p>ジャンル名：{{ book.genre }}</p>
            <p>ステータス：{{ book.status }}</p>
        </div>
        <p class="book-card-isbn">ISBN：{{ book.isbn }}</p>
    </div>
</template>

<style scoped>
.book-card {
    position: relative;
    width: 320px;
    min-height: 180px;
    border: 2px solid #1a2b4c;
    border-radius: 12px;
    padding: 16px;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 12px;
}

.book-card__image {
    width: 100px;
    height: 100px;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.book-card__info p {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
}

.book-card__isbn {
    position: absolute;
    bottom: 16px;
    left: 16px;
    margin: 0;
    font-size: 14px;
}
</style>