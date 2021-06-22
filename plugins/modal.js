import Vue from "vue";

const modal = new Vue({
  data: {
    props: {},
    isVisible: false,
    component: null,
    onClose: null,
    backdrop: null
  },
  methods: {
    async close(value) {
      this.isVisible = false;
      this.props = {};
      this.component = null;
      this.backdrop = null;
      
      if (this.onClose != null) {
        await this.onClose(value)
      }
    },
    open({ component = null, props = {}, onClose, backdrop }) {
      this.component = component != null ? component : null;
      this.props = props;
      this.isVisible = true;
      this.onClose = onClose;
      this.backdrop = backdrop === 'static' ? 'static' : null;
    }
  }
});

const modalPlugin = {
  install(Vue) {
    Vue.prototype.$modal = modal;
  }
};
Vue.use(modalPlugin);
