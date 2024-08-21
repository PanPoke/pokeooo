<template>
    <div>
      <h2>ポケモンのデータ</h2>
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <PokemonSection :pokemon="pokemon" />
      </div>
      <button @click="addPokemon">ポケモンを追加</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PokemonSection from './PokemonSection.vue'
  
  const pokemons = ref([
    createPokemonData(),
    createPokemonData(),
    createPokemonData(),
    createPokemonData(),
    createPokemonData()
  ])
  
  const createPokemonData = () => ({
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
  })
  
  const addPokemon = () => {
    pokemons.value.push(createPokemonData())
  }
  </script>
  