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
      logmsgs: [],
    };
  },

  computed: {
    monsterBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
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
    restartGame() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.counter = 0),
        (this.currentRound = 0);
      (this.disableHeal = false), (this.winner = null), (this.logmsgs = []);
    },
    attackMonster() {
      this.currentRound++;
      const randomvalue = getRandomValue(5, 15);

      this.monsterHealth -= randomvalue;
      this.attackPlayer();
      this.battellog("player", "attack", randomvalue);
    },
    attackPlayer() {
      const randomvalue = getRandomValue(8, 18);
      this.playerHealth -= randomvalue;
      this.battellog("monster", "attack", randomvalue);
    },
    specialAttack() {
      this.counter++;
      const randomvalue = getRandomValue(10, 25);
      this.monsterHealth -= randomvalue;
      this.attackPlayer();
      this.battellog("player", "attack", randomvalue);
    },
    heal() {
      const randomvalue = getRandomValue(15, 20);
      if (this.playerHealth + randomvalue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += randomvalue;
      }
      this.disableHeal = true;
      this.battellog("player", "heal", randomvalue);
    },
    surrender() {
      this.winner = "monster";
    },
    battellog(who, what, value) {
      this.logmsgs.unshift({
        actionby: who,
        actiontype: what,
        actionvalue: value,
      });
    },
  },
});

app.mount("#game");
