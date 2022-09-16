function getRandomValue(min, max) {
  const randomvalue = Math.floor(Math.random() * (max - min)) + min;

  return randomvalue;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counter: 0,
      currentRound: 0,
      disableHeal: false,
      winner: null,
    };
  },

  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    useSpecialAttack() {
      if (this.counter >= 3) {
        return true;
      }
      return false;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const randomvalue = getRandomValue(5, 12);

      this.monsterHealth -= randomvalue;
      this.attackPlayer();
    },
    attackPlayer() {
      const randomvalue = getRandomValue(8, 18);
      this.playerHealth -= randomvalue;
    },
    specialAttack() {
      this.counter++;
      const randomvalue = getRandomValue(10, 25);
      this.monsterHealth -= randomvalue;
      this.attackPlayer();
    },
    heal() {
      const randomvalue = getRandomValue(15, 20);
      if (this.playerHealth + randomvalue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += randomvalue;
      }
      this.disableHeal = true;
    },
  },
});

app.mount("#game");
