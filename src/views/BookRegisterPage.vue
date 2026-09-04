<template>
    <div class="book-register-page">

        <div class="content">
            <h1 class="page-title">蔵書登録</h1>
            <p class="page-description">ISBNコードを読み取ってください</p>

            <BookRegisterTable />

            <div class="register-action">
                <button type="button" class="register-button">登録</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppHeader from '@/components/Common/AppHeader.vue';
import BookRegisterTable from '@/components/book-register/BookRegisterTable.vue';
</script>

<style scoped>
.book-register-page {
  background-color: #f0f0f0;
  min-height: 100vh;
}

.content {
  padding: 16px 24px;
}

.page-title {
  font-size: 22px;
  margin: 0 0 8px;
}

.page-description {
  font-size: 15px;
  margin: 0 0 8px;
}

.register-action {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.register-button {
  width: 200px;
  padding: 12px 0;
  font-size: 18px;
  font-family: inherit;
  background-color: #d9d9d9;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
}
</style>