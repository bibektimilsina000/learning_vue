<template>
  <form @submit.prevent="addFrnd">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label for=""> Email Address </label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <button @click="$emit('delete', id)">Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ["add-friends"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },

  methods: {
    addFrnd() {
      const friendData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };

      this.$emit("add-friends", friendData);
    },
  },
};
</script>

<style></style>
