<template>
    <tr class="table-row">
        <td><input type="text" class="cell-input" /></td>
        <td><input type="text" class="cell-input" /></td>
        <td><input type="text" class="cell-input" /></td>
        <td><input type="text" class="cell-input" /></td>
        <td><input type="text" class="cell-input" /></td>
  </tr>
</template>

<style scoped>
.table-row td {
  border: 1px solid #999;
  padding: 0;
}

.cell-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 8px;
  font-size: 15px;
  border: none;
  background-color: transparent;
  font-family: inherit;
}

.cell-input:focus {
  outline: 2px solid #4a90d9;
  background-color: #fff;
}
</style>