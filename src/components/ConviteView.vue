<template>
  <div class="invitation bg-black text-gold p-6 min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl md:text-4xl font-bold">70 Anos de Wauri Alves de Souza</h1>
    <p class="mt-4 text-center">Rua República Argentina, 1336</p>

    <!-- Ícones -->
    <div class="icons mt-6 flex gap-6">
      <button @click="irParaConfirmacao" class="icon-button bg-gold-gradient p-4 rounded-full">
        <i class="fa fa-check text-black"></i>
        <span>Confirmar Presença</span>
      </button>
      <button @click="abrirLocalizacao" class="icon-button bg-gold-gradient p-4 rounded-full">
        <i class="fa fa-map-marker text-black"></i>
        <span>Local do Evento</span>
      </button>
      <button @click="irParaSugestoes" class="icon-button bg-gold-gradient p-4 rounded-full">
        <i class="fa fa-gift text-black"></i>
        <span>Sugestão de Presente</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConviteView",
  methods: {
    irParaConfirmacao() {
      this.$router.push("/confirmar-presenca");
    },
    abrirLocalizacao() {
      const endereco = "Rua República Argentina, 1336";
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`, "_blank");
    },
    irParaSugestoes() {
      this.$router.push("/sugestoes-presente");
    }
  }
};
</script>

<style scoped>
.invitation {
  background-image: url("../assets/back.png");
  background-size: contain; /* Altera para 'contain' para mostrar a imagem inteira */
  background-position: center;
  background-repeat: no-repeat; /* Evita repetição da imagem */
  height: 100vh; /* Garante que a altura ocupe toda a tela */
}
.text-gold {
  color: #f5e37e;
}
.bg-gold-gradient {
  background: linear-gradient(90deg, #f3db6e, #C2B280); /* Gradiente de dourado claro a dourado escuro */
}
.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #000;
}
</style>
