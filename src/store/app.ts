import { defineStore } from 'pinia';
import { GameDifficulties } from '@/types/types';

export const useAppStore = defineStore('app', {
  state: () => ({
    level: GameDifficulties.EASY,
  }),
  getters: {
    getGameDifficulty(): GameDifficulties {
      return this.level;
    },
  },
  actions: {
    setGameDifficulty(chosenLevel: GameDifficulties) {
      this.level = chosenLevel;
    },
  },
});
