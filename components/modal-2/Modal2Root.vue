<template>
  <portal to="modal" :disable="!modal && modal.isVisible === false">
    <transition
      enter-active-class="transition ease-out duration-200"
      leave-active-class="transition ease-out duration-200"
      enter-class="transform translate-y-5 opacity-0"
    >
      <component
        v-if="modal"
        :is="modal.component"
        v-bind:close="modal.close"
        v-bind:dismiss="modal.dismiss"
        v-bind="modal.props"
      />
    </transition>
  </portal>
</template>

<script>
import ModalService from "./service/ModalService";

export default {
  data() {
    return {
      modal: {},
    };
  },
  created() {
    ModalService.$on(
      "open",
      ({ isVisible, component, props, resolve, reject }) => {
        this.modal = {
          component,
          isVisible,
          props,
          close: (value) => {
            this.modal = {};
            resolve(value);
          },
          dismiss: (reason) => {
            this.modal = {};
            reject(reason);
          },
        };
      }
    );
  },
};
</script>