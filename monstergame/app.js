function getRandomValue(min, max) {
  const randomvalue = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomvalue);
  return randomvalue;
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
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMonster() {
      const randomvalue = getRandomValue(5, 12);

      this.monsterHealth -= randomvalue;
      this.attackPlayer();
    },
    attackPlayer() {
      const randomvalue = getRandomValue(6, 13);
      this.playerHealth -= randomvalue;
    },
  },
});

app.mount("#game");
