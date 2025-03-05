const app = Vue.createApp({
  data() {
    return {
      name: "Andrii Hadar",
      age: 28,
      enteredValue: "",
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/10337/10337609.png",
    };
  },
  methods: {
    getFutureAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
