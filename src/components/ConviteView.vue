<template>
  <div class="bg-blue-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
    <!-- Título do Convite -->
    <h1 class="text-4xl font-bold text-center text-gold mb-8">Convite Especial</h1>

    <!-- Foto do Aniversariante -->
    <div class="mb-8">
      <img
        src="../assets/wauri.jpg"
        alt="Wauri Alves de Souza"
        class="w-32 h-32 rounded-full border-4 border-gold mx-auto"
      />
    </div>

    <!-- Detalhes do Evento -->
    <h2 class="text-2xl font-semibold text-center mb-2">70 Anos de Wauri Alves de Souza</h2>
    <p class="text-center text-lg mb-4">Data: 01/12 | Local: Spira Business</p>

    <!-- Texto para os Convidados -->
    <p class="text-center text-lg text-gray-300 mb-8 px-6">
      Venha celebrar conosco esta data especial! Sua presença tornará este momento ainda mais inesquecível.
    </p>

    <!-- Ícones para Interação -->
    <div class="flex gap-6 mb-8">
      <!-- Icone de Localização -->
      <button
        @click="abrirLocalizacao"
        class="flex items-center justify-center bg-gold text-blue-900 p-4 rounded-full shadow-lg hover:bg-gold-dark"
      >
        <i class="fa fa-map-marker-alt text-xl mr-2"></i>
        <span>Local do Evento</span>
      </button>

      <!-- Icone de Confirmar Presença -->
      <button
        @click="irParaConfirmacao"
        class="flex items-center justify-center bg-gold text-blue-900 p-4 rounded-full shadow-lg hover:bg-gold-dark"
      >
        <i class="fa fa-check text-xl mr-2"></i>
        <span>Confirmar Presença</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConviteView",
  methods: {
    abrirLocalizacao() {
      const endereco = "https://www.google.com/maps/place/Av.+Rep.+Argentina,+1336+-+Vila+Izabel,+Curitiba+-+PR,+80620-010/@-25.4581241,-49.291949,892m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94dce37f2b991337:0x98f1a04aa9de5102!8m2!3d-25.4581241!4d-49.2893687!16s%2Fg%2F11c0xnc_j8?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D";
      window.open(endereco, "_blank");
    },
    irParaConfirmacao() {
      this.$router.push("/confirmar-presenca");
    }
  }
};
</script>

<style scoped>
.text-gold {
  color: #f5e37e;
}

.bg-gold {
  background-color: #f5e37e;
}

.bg-gold-dark {
  background-color: #c2a130;
}
</style>
