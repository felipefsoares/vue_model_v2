import { mapActions } from "../../../node_modules/vuex";

export default {
  name: "home",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    ...mapActions(["logout"])
  }
};
