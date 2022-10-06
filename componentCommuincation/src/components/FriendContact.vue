<template>
  <li>
    <h2>{{ name }}{{ favFriend === "1" ? "(Fav)" : "" }}</h2>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFav">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isfavorite"],
  props: {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
    isfavorite: {
      type: Boolean,
      require: false,
      deafult: false,
      validator: function (value) {
        return value === false || value === true;
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      favFriend: this.isfavorite,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFav() {
      if (this.favFriend === "1") {
        this.favFriend = "0";
      } else {
        this.favFriend = "1";
      }
    },
  },
};
</script>
