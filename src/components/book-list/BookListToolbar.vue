<script setup>
const genre = defineModel('genre');
const status = defineModel('status');
</script>

<template>
    <div class="toolbar">
        <input type="text" class="search-input" placeholder="検索" />

        <!-- <div class="dropdown">
            <button type="button" class="dropdown__button">ジャンル▼</button>
            <ul class="dropdown__menu">
                <li>社会一般</li>
                <li>ビジネス</li>
                <li>資格/試験</li>
            </ul>
        </div> -->

        <div class="dropdown">
            <select v-model="genre" class="dropdown__button">
                <option value="">ジャンル</option>
                <!-- <option value="社会一般" class="dropdown__menu">社会一般</option>
                <option value="ビジネス" class="dropdown__menu">ビジネス</option>
                <option value="資格/試験" class="dropdown__menu">資格/試験</option> -->
                <option value="小説" class="dropdown__menu">小説</option>
                <option value="ファンタジー" class="dropdown__menu">ファンタジー</option>
                <option value="ミステリー" class="dropdown__menu">ミステリー</option>
                <option value="エッセイ" class="dropdown__menu">エッセイ</option>
                <option value="SF" class="dropdown__menu">SF</option>
                <option value="児童書" class="dropdown__menu">児童書</option>
                <option value="青春" class="dropdown__menu">青春</option>
                <option value="恋愛" class="dropdown__menu">恋愛</option>
            </select>
        </div>

        <!-- <div class="dropdown">
            <button type="button" class="dropdown__button">ステータス▼</button>
            <ul class="dropdown__menu">
                <li>貸出可</li>
                <li>貸出中</li>
                <li>修理中</li>
            </ul>
        </div> -->

        <div class="dropdown">
            <select v-model="status" class="dropdown__button">
                <option value="">ステータス</option>
                <option value="貸出可" class="dropdown__menu">貸出可</option>
                <option value="貸出中" class="dropdown__menu">貸出中</option>
                <option value="修理中" class="dropdown__menu">修理中</option>
                <option value="停止/廃棄" class="dropdown__menu">停止/廃棄</option>
            </select>
        </div>

        <button type="button" class="export-button">全てexport</button>
    </div>
</template>

<style scoped>
.toolbar {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    padding: 16px;
}

.search-input {
    flex: 1;
    max-width: 340px;
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 4px;
}

.dropdown {
    position: relative;
}

.dropdown__button {
    width: 180px;
    padding: 10px 0;
    font-size: 16px;
    font-family: inherit;
    background-color: #d9d9d9;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
}

.dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 180px;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #999;
    border-top: none;
    background-color: #fff;
    z-index: 10;
}

.dropdown__menu li {
    padding: 10px 8px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    background-color: #f5f5f5;
}

.dropdown__menu li:last-child {
    border-bottom: none;
}

.export-button {
    width: 160px;
    padding: 10px 0;
    font-size: 16px;
    font-family: inherit;
    background-color: #d9d9d9;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
}
</style>