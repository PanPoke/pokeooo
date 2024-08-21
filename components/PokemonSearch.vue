<template>
  <div class="pokemon-search-container">
    <input
      type="text"
      v-model="searchQuery"
      @input="onInput"
      placeholder="ポケモン名を入力"
    />
    <ul v-if="filteredPokemons.length" class="suggestions-list">
      <li
        v-for="(pokemon, index) in filteredPokemons.slice(0, 4)"
        :key="index"
        @click="selectPokemon(pokemon.name)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { searchPokemons } from '@/services/pokemonService'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const searchQuery = ref(props.modelValue || '')
const allPokemons = ref([])

// 日本語のポケモン名を取得
const fetchPokemons = async () => {
  const results = await searchPokemons('')  // 空のクエリで全ポケモン取得
  allPokemons.value = results.map(pokemon => ({
    name: pokemon.name_ja,  // 日本語名のみ
    url: pokemon.url
  }))
}

const filteredPokemons = computed(() => {
  return allPokemons.value.filter(pokemon =>
    pokemon.name.includes(searchQuery.value)
  )
})

const onInput = () => {
  emit('update:modelValue', searchQuery.value)
}

const selectPokemon = (name) => {
  searchQuery.value = name
  emit('update:modelValue', name)
}

fetchPokemons()
</script>

<style scoped>
.pokemon-search-container {
  position: relative;
}

.suggestions-list {
  position: absolute;
  border: 1px solid #ccc;
  background-color: white;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.suggestions-list li {
  padding: 8px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background-color: #f0f0f0;
}
</style>