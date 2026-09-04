<template>
    <header class="app-header">
        <RouterLink to="/books" custom v-slot="{navigate,isActive}">
            <button type="button" class="tab" :class="{'tab--active':isActive}" @click="navigate">蔵書一覧</button>
        </RouterLink>

        <RouterLink to="/books/new" custom v-slot="{navigate,isActive}">
            <button type="button" class="tab" :class="{'tab--active':isActive}" @click="navigate">蔵書登録</button>
        </RouterLink>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

function test() {
    alert('fff');
}
</script>

<style scoped>
.app-header {
    display: flex;
    justify-content: center;
    gap: 32px;
    padding: 16px;
    border-bottom: 1px solid #ccc;
    background-color: #f0f0f0;
}

.tab {
    flex: 1;
    max-width: 440px;
    text-align: center;
    padding: 12px 0;
    border: 1px solid #999;
    border-radius: 4px;
    background-color: #e0e0e0;
    font-size: 18px;
    cursor: pointer;
}

.tab--active {
    background-color: #b3b3b3;
    font-weight: bold;
}
</style>