const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      // this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userInput.value;
      // this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

let Message = "hello ";

let longMessage = Message + " Worldd";

console.log(longMessage);

Message = "hey";

console.log(longMessage);

const data = {
  message: "hello  ",
  longMessage: "hello Worldd",
};

const handler = {
  set(target, key, value) {
    if (key == "message") {
      target.longMessage = value + "worlddddd";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);
console.log((proxy.message = "hello atuo"));
