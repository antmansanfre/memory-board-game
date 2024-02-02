<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from './store/app';
import { Difficulties } from './interfaces/game';

// store
const appStore = useAppStore();
const { getGameDifficulty: difficulty } = storeToRefs(appStore);

// methods
const handleChangeDifficulty = (chosenDifficulty: Difficulties) => {
  appStore.setGameDifficulty(chosenDifficulty);
};
</script>

<template>
  <div id="app">
    <h1>Memory Board Game</h1>

    <div>
      <span>Dificuldade: </span>
      <strong>{{ difficulty }}</strong>
    </div>

    <ul>
      <li>
        <button @click="handleChangeDifficulty(Difficulties.EASY)">
          Fácil
        </button>
      </li>

      <li>
        <button @click="handleChangeDifficulty(Difficulties.MODERATE)">
          Moderado
        </button>
      </li>

      <li>
        <button @click="handleChangeDifficulty(Difficulties.CHALLENGING)">
          Desafiante
        </button>
      </li>

      <li>
        <button @click="handleChangeDifficulty(Difficulties.EXTREME)">
          Extremo
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scroped></style>
