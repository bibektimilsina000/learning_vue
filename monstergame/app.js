function getRandomValue(min, max) {
  return Math.floor(Math.random() * (min - max)) - 5;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(5, 12);
    },
    attackPlayer() {
      this.attackPlayer -= getRandomValue(8, 15);
    },
  },
});

app.mount("#game");
