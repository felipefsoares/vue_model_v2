import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",
  components: {},
  props: [],
  data() {
    return {
      user: {
        nome: "",
        senha: ""
      }
    };
  },
  computed: {
    ...mapGetters([])
  },
  mounted() {},
  methods: {
    ...mapActions(["login"])
  }
};
