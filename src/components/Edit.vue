<template>
  <div class="q-pa-md flex flex-center" style="max-width: 100vw">
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="user.name"
        label="Name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.username"
        label="Username"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.email"
        label="Email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.website"
        label="Website"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <div>
        <q-btn label="Edit" color="primary" @click="EditUser" />
        <q-btn label="Delete" color="negative" class="q-ml-sm" @click="DeleteUser"/>
        <q-btn label="Exit" color="dark" class="q-ml-sm" @click="Salir"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Edit",
  data() {
    return {
      userID: null,
      user: {},
    };
  },
  methods: {
    async EditUser() {
      try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.userID}`, this.user);
        console.log(res);
      } catch (err) {
        console.error(err);
      } finally {
        this.$q.notify({
          message: "User Edited",
          color: "yellow-5",
          textColor: "black",
          icon: "cloud_done",
        });
      }
    },
    async DeleteUser() {
      try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.userID}`);
        console.log(res);
      } catch (err) {
        console.error(err);
      } finally{
          this.$router.push('/');
          this.$q.notify({
          message: "User Eliminated",
          color: "red-5",
          textColor: "white",
          icon: "cloud_done",
        });
      }
    },
    Salir(){
        this.$router.push('/');
    }
  },
  async mounted() {
    try {
      this.userID = this.$route.params.id;

      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users?id=${this.userID}`
      );
      this.user = await res.data[0];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>