<template>
    <div class="rsvp-form bg-black text-gold p-6 min-h-screen flex flex-col items-center">
      <h2 class="text-3xl font-bold mb-4 text-white">Confirmar Presença</h2>
      <p class="mb-6 text-center w-full max-w-md text-white">
        Para a sua segurança e controle de acesso, os dados abaixo são obrigatórios para o cadastro na portaria do prédio.
      </p>
      <form @submit.prevent="confirmar" class="w-full max-w-md">
        <div class="mb-4">
          <label for="nome" class="block mb-2 text-lg text-white">Nome</label>
          <input v-model="nome" id="nome" type="text" required placeholder="Digite seu nome" class="p-3 w-full rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold transition text-gray-700"/>
        </div>
        <div class="mb-4">
          <label for="rg" class="block mb-2 text-lg text-white">RG</label>
          <input v-model="rg" id="rg" type="text" required placeholder="Digite seu RG" class="p-3 w-full rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold transition text-gray-700"/>
        </div>
        <div class="mb-4">
          <label for="whatsapp" class="block mb-2 text-lg text-white">WhatsApp</label>
          <input v-model="whatsapp" id="whatsapp" type="tel" required placeholder="Digite seu WhatsApp" class="p-3 w-full rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold transition text-gray-700"/>
        </div>
        <div class="mb-4">
          <label class="flex items-center text-white">
            <input type="checkbox" v-model="aceitou" required class="mr-2"/> 
            <span class="text-sm">Estou ciente de que é obrigatória a apresentação do RG na entrada do prédio.</span>
          </label>
        </div>
        <button type="submit" class="bg-gold text-black font-bold p-3 w-full rounded-lg hover:bg-yellow-600 transition">Confirmar Presença</button>
      </form>
      <div class="w-full max-w-md mt-4 text-left">
        <router-link to="/" class="text-white flex items-center hover:underline">
          <i class="fas fa-arrow-left mr-2"></i> <!-- Ícone de flecha para a esquerda -->
          Voltar à Página Inicial
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConfirmarPresenca",
    data() {
      return {
        nome: "",
        rg: "",
        whatsapp: "",
        aceitou: false // Adicionando a variável para o checkbox
      };
    },
    methods: {
      confirmar() {
        // Verifica se o checkbox foi marcado
        if (!this.aceitou) {
          alert("Você precisa aceitar que a apresentação do RG é obrigatória.");
          return;
        }
  
        // Construindo a mensagem para enviar via WhatsApp
        const mensagem = `*Confirmação de Presença*\n\nNome: ${this.nome}\nRG: ${this.rg}\nWhatsApp: ${this.whatsapp}`;
        const numero = '+5541996454466';
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
  
        // Abrindo a URL do WhatsApp
        window.open(url, "_blank");
  
        // Opcional: redirecionar ou mostrar mensagem de sucesso
        alert("Presença confirmada! Os dados foram enviados.");
        this.$router.push("/");
      }
    }
  };
  </script>
  
  <style scoped>
  .text-gold {
    color: #FFD700;
  }
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  