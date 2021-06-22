<template>
  <portal to="modal" :disable="!modal && modal.isVisible === false">
    <transition
      enter-active-class="transition ease-out duration-200"
      leave-active-class="transition ease-out duration-200"
      enter-class="transform translate-y-5 opacity-0"
      leave-to-class="transform translate-y-5 opacity-0"
    >
      <div
        v-if="modal.isVisible"
        class="
          fixed
          inset-x-0
          top-1/4
          px-4
          pb-4
          sm:flex
          sm:items-center
          sm:justify-center
          sm:inset-0
        "
      >
        <div class="fixed inset-0 transition-opacity">
          <div
            @click.prevent="dismiss"
            class="absolute inset-0 opacity-25 bg-black"
          ></div>
        </div>

        <component
          v-if="modal.component && modal.isVisible"
          :is="modal.component"
          v-bind:close="modal.close"
          v-bind:dismiss="modal.dismiss"
          v-bind="modal.props"
          exclude="BaseModal"
        />

        <div
          class="
            z-10
            bg-white
            rounded-lg
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:max-w-lg
            sm:w-full
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          v-if="!modal.component && modal.isVisible"
        >
          <div class="bg-white px-4 pt-4 pb-4 sm:p-5 sm:pb-5">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex items-center justify-between mb-4">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {{ title }}
                  </h3>
                  <button @click.prevent="dismiss">
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-2" :class="{ scrollable: scrollable }">
                  <slot name="modal-body" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:px-6 sm:flex sm:flex-row-reverse">
            <slot name="modal-footer"></slot>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                @click.prevent="dismiss"
                type="button"
                class="
                  inline-flex
                  justify-center
                  w-full
                  rounded-md
                  border border-gray-300
                  px-4
                  py-2
                  bg-white
                  text-base
                  leading-6
                  font-medium
                  text-gray-700
                  shadow-sm
                  hover:text-gray-500
                  focus:outline-none
                  focus:border-blue-300
                  focus:shadow-outline-blue
                  transition
                  ease-in-out
                  duration-150
                  sm:text-sm
                  sm:leading-5
                "
              >
                Cancelar
              </button>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
import ModalService from "./service/ModalService";

export default {
  name: "BaseModal",
  props: {
    title: {
      type: String,
      required: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
      require: false,
    },
    dismiss: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    handlerClose() {
      ModalService.$on("close", ({ isVisible, resolve, reject }) => {
        this.modal = {
          isVisible,
          close: (value) => {
            this.modal = {};
            resolve(value);
          },
          dismiss: (reason) => {
            this.modal = {};
            reject(reason);
          },
        };
      });
    },

    handlerOpen() {
      ModalService.$on(
        "open",
        ({ isVisible, component, props, resolve, reject }) => {
          this.modal = {
            isVisible,
            component,
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
  },
  created() {
    this.handlerOpen();
    this.handlerClose();
  },
};
</script>

<style scoped>
.scrollable {
  @apply overflow-y-auto overflow-x-hidden h-72;
}
</style>