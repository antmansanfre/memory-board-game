import { defineStore } from 'pinia';
import { Difficulties } from '@/interfaces/game';

export const useAppStore = defineStore('app', {
  state: () => ({
    difficulty: Difficulties.EASY,
  }),
  getters: {
    getGameDifficulty(): Difficulties {
      return this.difficulty;
    },
  },
  actions: {
    setGameDifficulty(chosenDifficulty: Difficulties) {
      this.difficulty = chosenDifficulty;
    },
  },
});
