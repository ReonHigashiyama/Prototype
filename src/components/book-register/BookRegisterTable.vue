<template>
    <table class="register-table">
        <thead>
            <tr>
                <th>ISBN</th>
                <th>書籍名</th>
                <th>著者</th>
                <th>出版日</th>
                <th>ジャンル</th>
            </tr>
        </thead>
        <tbody>
            <BookRegisterTableRow v-for="n in 3" :key="n" />
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
                    <button type="button" class="add-row-button">+</button>
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import BookRegisterTableRow from './BookRegisterTableRow.vue';
</script>

<style scoped>
.register-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.register-table thead th {
  background-color: #808080;
  color: #fff;
  text-align: left;
  padding: 12px 8px;
  font-size: 16px;
  border: 1px solid #999;
}

.add-row-button {
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  font-family: inherit;
  background-color: #d9d9d9;
  border: none;
  cursor: pointer;
}
</style>