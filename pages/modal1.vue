<template>
  <div class="container">
    <div class="flex flex-col justify-center">
      <h1 class="font-semibold text-lg">Exemplo do componente modal-1</h1>
      <div class="pt-8">
        <h2>Abrir modal que foi inserida nesta página</h2>
        <button
          class="
            text-white
            rounded
            bg-green-500
            px-6
            py-4
            my-5
            font-sans font-semibold
            shadow-md
            hover:bg-green-400
          "
          @click="$modal.open({})"
        >
          Open Modal
        </button>

        <h2>Abrir modal que foi criada separadamente</h2>
        <button
          class="
            text-white
            rounded
            bg-red-500
            px-6
            py-4
            my-5
            font-sans font-semibold
            shadow-md
            hover:bg-red-400
          "
          @click="openThirdModal"
        >
          Open Modal
        </button>
      </div>

      <!-- modal default - modal1 -->
      <Modal title="Modal 3 title" :dismiss="closeThirdModal">
        <template v-slot:modal-body>
          <p class="text-sm leading-5 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeThirdModal() {
      this.$modal.close();
    },
    openThirdModal() {
      this.$modal.open({
        component: "Modal-1DialogConfirmTwo",
        props: {
          title: "Remoção",
        },
        onClose: (dados) => {
          console.log("fechou modal", dados);
        },
        backdrop: "static",
      });
    },
  },
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>