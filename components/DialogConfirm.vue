<template>
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
    >
      <div class="bg-white px-4 pt-4 pb-4 sm:p-5 sm:pb-5">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div class="flex items-center justify-between mb-4">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Remoção do ator
              </h3>
              <button @click.prevent="dismiss('modal dismissed')">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-2 flex justify-center items-center">
              Deseja continuar?
          </div>
        </div>
      </div>
      <div class="px-4 py-6 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
          @click.prevent="close('modal closed')"
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
              sm:ml-2
            ">Finalizar</button>
          <button
            @click.prevent="dismiss('modal dismissed')"
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
              sm:mr-2
            "
          >
            Cancelar
          </button>
      </div>
      </div>
    </div>
</template>

<script>
import ModalMixin from "@/components/modal-2/mixins/Modal2Mixin";

export default {
  mixins: [ModalMixin],
};
</script>