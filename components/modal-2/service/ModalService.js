import Vue from "vue";

// é possível usar ref?
// é possível usar provide / inject ?

export default new Vue({
  methods: {
    close(isVisible) {
      return new Promise((resolve, reject) => {
        this.$root.$emit("close", { isVisible, resolve, reject });
      });
    },

    open(isVisible, component = null, props = {}) {
      return new Promise((resolve, reject) => {
        this.$root.$emit("open", { isVisible, component, props, resolve, reject });
      });
    }
  }
});
