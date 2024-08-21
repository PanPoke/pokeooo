<template>
  <div class="notes-container">
    <textarea
      v-model="notes"
      placeholder="備考を入力"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notes = ref('')
</script>

<style scoped>
.notes-container {
  padding: 0px; /* 内側の余白を追加 */
  background-color: #f9f9f9; /* 背景色を追加 */
  margin-bottom: 0px; /* 下のスペースを追加 */
}

.notes-container textarea {
  min-width: 600px;
  width: 100%; /* テキストエリアの幅を調整 */
  height: 70px; /* テキストエリアの高さを調整 */
  padding: 8px; /* 内側の余白を追加 */
  border: 1px solid #ddd; /* 枠線を追加 */
  border-radius: 4px; /* 角を丸める */
  box-sizing: border-box; /* 幅と高さの計算に枠線と内側の余白を含める */
}
</style>
