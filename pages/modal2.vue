<template>
  <div>
    <div class="flex flex-col justify-center">
      <h1 class="font-semibold text-lg">Exemplo do componente modal-2</h1>
      <div class="pt-8">
        <h2>Abrir modal que foi criada separadamente</h2>
        <button
          @click="openModal"
          class="
            text-white
            rounded
            bg-blue-500
            px-6
            py-4
            my-5
            font-sans font-semibold
            shadow-md
            hover:bg-blue-400
          "
        >
          Open Modal
        </button>

        <h2>Abrir modal que foi inserida nesta página</h2>
        <button
          class="
            text-white
            rounded
            bg-pink-500
            px-6
            py-4
            my-5
            font-sans font-semibold
            shadow-md
            hover:bg-pink-400
          "
          @click="openSecondModal"
        >
          Open Modal
        </button>
      </div>

      <!-- modal default - modal2 -->
      <BaseModal title="Modal title" :dismiss="closeModal">
        <template v-slot:modal-body>
          <p class="text-sm leading-5 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
        </template>
      </BaseModal>
    </div>
  </div>
</template>

<script>
import BaseModal from "@/components/modal-2/BaseModal.vue";
import DialogConfirm from "@/components/DialogConfirm";
import ModalService from "@/components/modal-2/service/ModalService";

export default {
  components: {
    BaseModal,
  },
  methods: {
    openModal() {
      ModalService.open(true, DialogConfirm);
    },
    openSecondModal() {
      ModalService.open(true);
    },
    closeModal() {
      ModalService.close(false);
    },
  },
};
</script>
