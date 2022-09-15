function getRandomValue(min, max) {
  return Math.floor(Math.random() * (min - max)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  computed: {
    monsterBarStyle() {
      return;
    },
  },

  methods: {
    attackMonster() {
      const randomvalue = getRandomValue(5, 12);
      this.monsterHealth -= randomvalue;
      this.attackPlayer();
    },
    attackPlayer() {
      const randomvalue = getRandomValue(8, 15);
      this.playerHealth -= randomvalue;
    },
  },
});

app.mount("#game");
