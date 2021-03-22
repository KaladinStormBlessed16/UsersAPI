<template>
  <q-page class="flex column">
    <div class="row q-mx-auto">
      <q-btn
      label="Create"
      color="secondary"
      @click="CreateUser"
      class="text-left col-12 q-my-md"
    />
    </div>
    <div class="row q-mx-auto">
      <q-table
      :data="users"
      :columns="columns"
      row-key="id"
      hide-bottom
      :pagination.sync="pagination"
      :dense="$q.screen.lt.md"
      @row-click="openEdition"
      class="col-12 q-my-lg"
    />
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  data() {
    return {
      pagination: {
        rowsPerPage: 0,
      },
      columns: [
        {
          name: "id",
          align: "center",
          label: "ID",
          field: "id",
        },
        {
          name: "name",
          label: "Name",
          align: "center",
          field: "name",
        },
        {
          name: "username",
          label: "Username",
          field: "username",
          align: "username",
        },
        {
          name: "email",
          label: "Email",
          align: "center",
          field: "email",
        },
        {
          name: "website",
          label: "Website",
          align: "center",
          field: "website",
        },
      ],
      users: [],
    };
  },
  methods: {
    openEdition(e, row) {
      if (e.target.nodeName === "TD") {
        this.$router.push("/edit/" + row.id);
      }
    },
    async CreateUser() {
      this.$router.push("/create");
    }
  },
  async mounted() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.data.length > 0) {
        this.users = await res.data;
        this.pagination.rowsPerPage = await res.data.length;
      } else this.users = ["Sin Resultados"];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
