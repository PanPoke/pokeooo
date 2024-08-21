<template>
  <table>
    <tr>
      <th>ステータス</th>
      <th>努力値</th>
      <th>個体値</th>
      <th>実数値</th>
      <th>性格補正</th>
    </tr>
    <tr v-for="status in statuses" :key="status.name">
      <td>{{ status.name }}</td>
      <td><input v-model.number="status.ev" type="number" @input="updateActualValue(status)" /></td>
      <td><input v-model.number="status.iv" type="number" @input="updateActualValue(status)" /></td>
      <td>
        <input 
          v-model.number="status.actualValue" 
          type="number" 
          @input="updateEffortValue(status)" 
        />
      </td>
      <td>
        <button 
          :class="{ active: status.nature === 'positive' }" 
          @click="setNature(status, 'positive')">+
        </button>
        <button 
          :class="{ active: status.nature === 'negative' }" 
          @click="setNature(status, 'negative')">-
        </button>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { ref } from 'vue'

// 仮のポケモンデータを元に実数値を計算する
const calculateActualValue = (status) => {
  const natureFactor = status.nature === 'positive' ? 1.1 : status.nature === 'negative' ? 0.9 : 1
  return Math.max(0, (status.iv + (status.ev / 4)) * natureFactor)
}

// 努力値を更新する関数
const updateEffortValue = (status) => {
  // 実数値が手動で設定されている場合は、それに基づいて努力値を計算する
  if (status.actualValue !== undefined) {
    const natureFactor = status.nature === 'positive' ? 1.1 : status.nature === 'negative' ? 0.9 : 1
    // 手動での実数値を使って計算する
    const calculatedEv = (status.actualValue / natureFactor - status.iv) * 4
    // 努力値が計算された場合、それを反映させる
    status.ev = Math.max(0, Math.round(calculatedEv))
  } else {
    status.ev = 0
  }
}

// 実数値を更新する関数
const updateActualValue = (status) => {
  // 努力値や個体値が変更された場合に、実数値を計算し直す
  status.actualValue = calculateActualValue(status)
}

// 性格補正を設定する関数
const setNature = (status, nature) => {
  // 他の全てのステータスの同じ性格をリセット
  statuses.value.forEach(s => {
    if (s !== status && s.nature === nature) {
      s.nature = 'neutral'
    }
  })
  // 指定されたステータスの性格補正を設定
  status.nature = status.nature === nature ? 'neutral' : nature
}

// 初期データ
const statuses = ref([
  { name: 'HP', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
  { name: '攻撃', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
  { name: '防御', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
  { name: '特攻', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
  { name: '特防', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
  { name: '素早さ', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' }
])
</script>

<style scoped>
button {
  border: 1px solid #ddd;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

button.active {
  background-color: #007bff;
  color: white;
}
</style>