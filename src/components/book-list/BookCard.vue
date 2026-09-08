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
         <img  class="book-card__image" src="../../../img/images.jpg" alt="">
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
    box-sizing: border-box;
    width: 100%;
    min-height: 180px;
    /* border: 2px solid #1a2b4c; */
    border-radius: 12px;
    padding: 16px;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 12px;
    background-color: rgb(218, 219, 219);
}

.book-card__image {
    width: 140px;
    height: 140px;
    /* background-color: #e0e0e0; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding-top: 70px;
}

.book-card-info {
    padding-left: 50px;
}

</style>