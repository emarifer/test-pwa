<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
    </ul>
    <h3>Users</h3>
    <ul>
      <li v-for="(item, index) in users" :key="index">{{ item.name }}</li>
    </ul>
    <h3>Create Users</h3>
    <button @click="sendData">Send</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.showData()
  },
  methods: {
    showData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => this.users = json);
    },
    sendData() {
      const data = {
        "name": "Tonto",
        "email": "tonto@gmail.com",
        "password": "1234",
        "confirm_password": "1234"
      };
      fetch('https://emarinfer-notes.herokuapp.com/users/signup', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.text())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>