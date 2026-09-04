<template>
    <div class="toolbar">
        <input type="text" class="search-input" placeholder="検索" />

        <div class="dropdown">
            <button type="button" class="dropdown__button">ジャンル▼</button>
            <ul class="dropdown__menu">
                <li>社会一般</li>
                <li>ビジネス</li>
                <li>資格/試験</li>
            </ul>
        </div>

        <div class="dropdown">
            <button type="button" class="dropdown__button">ステータス▼</button>
            <ul class="dropdown__menu">
                <li>貸出可</li>
                <li>貸出中</li>
                <li>修理中</li>
            </ul>
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
    display: none;
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