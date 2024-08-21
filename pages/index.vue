<template>
  <div>
    <h1>ポケモンパーティビルダー</h1>

    <!-- 複数のポケモンセクションを表示 -->
    <div v-for="(pokemon, index) in pokemons" :key="index" class="pokemon-container">
      <!-- PokemonSearchコンポーネントに修正 -->
      <PokemonSearch :modelValue="pokemon.name" @update:modelValue="pokemon.name = $event" />

      <PokemonSection :pokemon="pokemon" />
      <button @click="removePokemon(index)" class="remove-pokemon-button">ポケモンを削除</button>
    </div>

    <!-- ポケモンセクションの追加ボタン -->
    <button @click="addPokemon" class="add-pokemon-button">ポケモンを追加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PokemonSection from '@/components/PokemonSection.vue'
import PokemonSearch from '@/components/PokemonSearch.vue'

// 初期のポケモンデータ
const initialPokemon = {
  name: '',
  statuses: [
    { name: 'HP', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
    { name: '攻撃', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
    { name: '防御', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
    { name: '特攻', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
    { name: '特防', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' },
    { name: '素早さ', ev: 0, iv: 31, actualValue: 0, nature: 'neutral' }
  ],
  moves: ['', '', '', ''],
  notes: ''
}

const pokemons = ref([ { ...initialPokemon } ])

const addPokemon = () => {
  pokemons.value.push({ ...initialPokemon })
}

const removePokemon = (index) => {
  if (pokemons.value.length > 1) {
    pokemons.value.splice(index, 1)
  }
}
</script>

<style scoped>
.pokemon-container {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
.move-input {
  --input-gap: 15px; /* 入力欄の間隔を調整 */
  --input-width: 40px; /* 入力欄の幅を調整 */
}
button {
  margin-top: 10px;
  padding: 5px 10px;
}

.remove-pokemon-button {
  background-color: #ff4d4d;
  color: white;
}

.add-pokemon-button {
  background-color: #007bff;
  color: white;
}

.move-input-container {
  margin-bottom: 0px; /* MoveInputとNotesの間に隙間を作る */
}

.notes-container {
  margin-top: 0px; /* Notesコンポーネントの上に隙間を作る */
}
</style>