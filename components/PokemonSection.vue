<template>
  <div class="pokemon-section">
    <div class="name-section">
      <input v-model="pokemon.name" placeholder="ポケモンの名前" />
    </div>

    <StatusTable :statuses="pokemon.statuses" />

    <!-- MoveInputとNotesの枠を調整できるようにそれぞれのクラスを指定 -->
    <div class="move-input-container">
      <MoveInput :moves="pokemon.moves" />
    </div>

    <div class="notes-container">
      <Notes :notes="pokemon.notes" />
    </div>
  </div>
</template>

<script setup>
import StatusTable from './StatusTable.vue'
import MoveInput from './MoveInput.vue'
import Notes from './Notes.vue'

const props = defineProps({
  pokemon: Object
})

const pokemon = props.pokemon
</script>

<style scoped>
.pokemon-section {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9; /* 背景色を追加 */
}

.name-section {
  margin-bottom: 15px; /* 下のスペースを追加 */
}

.move-input-container {
  margin-bottom: 15px; /* MoveInputとNotesの間にスペースを追加 */
}

.notes-container {
  margin-top: 15px; /* Notesの上にスペースを追加 */
}
</style>