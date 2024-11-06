<template>
    <div class="gifts bg-black text-gold p-6 min-h-screen flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-4">Sugestões de Presente</h2>
      <ul class="list-disc">
        <li class="mb-2">Presente 1</li>
        <li class="mb-2">Presente 2</li>
        <li class="mb-2">Presente 3</li>
        <!-- Adicione mais sugestões conforme necessário -->
      </ul>
      <button @click="$router.push('/')" class="bg-gold text-black font-bold p-3 w-full rounded mt-6">Voltar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SugestoesPresente"
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
  