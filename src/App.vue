<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAppStore } from './store/app';
import { GameDifficulties } from './types/types';

// store
const appStore = useAppStore();
const { getGameDifficulty: level } = storeToRefs(appStore);

// methods
const handleChangeLevel = (chosenLevel: GameDifficulties) => {
  appStore.setGameDifficulty(chosenLevel);
};
</script>

<template>
  <div id="app">
    <h1>Memory Board Game</h1>
    <div>
      <span>Dificuldade: </span>
      <strong>{{ level }}</strong>
    </div>

    <ul>
      <li>
        <button @click="handleChangeLevel(GameDifficulties.EASY)">Fácil</button>
      </li>

      <li>
        <button @click="handleChangeLevel(GameDifficulties.MODERATE)">
          Moderado
        </button>
      </li>

      <li>
        <button @click="handleChangeLevel(GameDifficulties.CHALLENGING)">
          Desafiante
        </button>
      </li>

      <li>
        <button @click="handleChangeLevel(GameDifficulties.EXTREME)">
          Extremo
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scroped></style>
