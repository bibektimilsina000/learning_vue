<template>
  <li>
    <h2>{{ name }}{{ isfavorite ? "(Fav)" : "" }}</h2>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFav">Toggle Favorite</button>
    <button @click="$emit('delete', id)">Delete</button>
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
    id: {
      type: String,
      require: true,
    },
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
      // validator: function (value) {
      //   return value === false || value === true;
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,

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
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
