<template>
  <div class="move-input">
    <div class="input-container">
      <input v-for="index in 4" :key="index" v-model="moves[index-1]" placeholder="技を入力" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const moves = ref(['', '', '', ''])
</script>

<style scoped>
.move-input {
  
  padding: 10px; /* 内側の余白を追加 */
  background-color: #f9f9f9; /* 背景色を追加 */
  margin-bottom: 0px; /* 下のスペースを追加 */
}

.input-container {
  display: flex; /* 横並びにする */
  gap: 10px; /* 各入力欄の間にスペースを追加 */
}

.input-container input {
  width: 100px; /* 固定幅 */
  height: 15px; /* 固定高さ */
  padding: 5px; /* 内側の余白を追加 */
  border: 1px solid #ddd; /* 枠線を追加 */
  border-radius: 4px; /* 角を丸める */
}
</style>
