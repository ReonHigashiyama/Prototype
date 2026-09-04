<template>
    <div class="book-card">
        <div class="book-card-img">画像</div>
        <div class="book-card-info">
            <p>タイトル</p>
            <p>著者</p>
            <p>出版日</p>
            <p>ジャンル名</p>
            <p>ステータス</p>
        </div>
        <p class="book-card-isbn">ISBN:</p>
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