<template>
  <div class="q-pa-md flex flex-center" style="max-width: 100vw">
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="newUser.name"
        label="Name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="newUser.username"
        label="Username"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="newUser.email"
        label="Email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="newUser.website"
        label="Website"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <div>
        <q-btn label="Save" color="positive" @click="SaveUser" />
        <q-btn label="Exit" color="dark" class="q-ml-sm" @click="Salir" />
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
      newUser: {
        name: "",
        username: "",
        email: "",
        website: "",
      },
    };
  },
  methods: {
    async SaveUser() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.newUser.id = res.data.length + 1;
      } catch (err) {
        console.error(err);
      }
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          this.newUser
        );
        console.log(res);
      } catch (err) {
        console.error(err);
      } finally {
        this.$router.push("/");
        this.$q.notify({
          message: "User Created",
          color: "green-5",
          textColor: "white",
          icon: "cloud_done",
        });
      }
    },
    Salir() {
      this.$router.push("/");
    },
  },
};
</script>