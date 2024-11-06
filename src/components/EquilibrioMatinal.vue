<template>
    <div class="bg-black min-h-screen flex flex-col">
      <header class="bg-yellow-500 text-black py-4">
        <h1 class="text-center text-3xl font-bold">Equilíbrio Matinal</h1>
        <h2 class="text-center text-xl">100 Receitas de Café da Manhã para Emagrecimento Saudável</h2>
      </header>
  
      <main class="flex-grow relative">
        <!-- Hero Section -->
        <div class="hero-banner flex justify-center w-7/12 mx-auto mt-8"> <!-- Ajuste aqui -->
          <div class="flex space-y-4">
            <!-- Coluna do meio -->
            <div class="flex-1">
              <img src="@/assets/banner.png" alt="Banner de Black Friday" class="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
  
        <!-- Conteúdo do banner -->
        <div class="banner-content text-center z-10 mt-4">
          <h3 class="text-white text-2xl font-bold mt-4">Promoção Especial de Black Friday!</h3>
          <button
            @click="redirectToCheckout"
            class="bg-yellow-500 text-black py-2 px-6 mt-8 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            Compre Agora
          </button>
        </div>
  
        <!-- Seção de Copy Persuasiva -->
        <section class="my-10 px-24">
          <div class="grid grid-cols-12">
            <!-- Coluna da esquerda -->
            <div class="col-span-2"></div>
  
            <!-- Coluna do meio -->
            <div class="col-span-8 text-left">
              <h3 class="text-white text-2xl font-bold mb-4">Descubra o Equilíbrio Matinal</h3>
              <p class="text-gray-300 mb-6">
                O **Equilíbrio Matinal** é mais do que um simples e-book; é uma ferramenta que transformará suas manhãs e impactará positivamente a sua saúde e bem-estar. Imagine começar o seu dia com energia renovada, aproveitando refeições deliciosas e nutritivas que não só agradam ao paladar, mas também auxiliam no emagrecimento saudável. Este guia apresenta 100 receitas de café da manhã cuidadosamente elaboradas, que equilibram sabor e nutrição, permitindo que você desfrute de cada mordida enquanto se aproxima dos seus objetivos de saúde.
              </p>
              <p class="text-gray-300 mb-6">
                Através de uma alimentação equilibrada, você não só nutre seu corpo, mas também fortalece sua mente e sua motivação. O **Equilíbrio Matinal** traz dicas práticas sobre como otimizar sua alimentação matinal, destacando a importância do café da manhã para um dia produtivo. Com receitas que vão desde smoothies energéticos a opções saudáveis e saborosas, você encontrará a inspiração necessária para inovar suas refeições e se sentir satisfeito, leve e motivado.
              </p>
              <p class="text-gray-300 mb-10">
                Ao adquirir este e-book, você não está apenas comprando um produto; está investindo em uma mudança de estilo de vida. Com o **Equilíbrio Matinal**, você vai descobrir que emagrecer e manter-se saudável não precisa ser um sacrifício. Ao contrário, pode ser uma jornada prazerosa, repleta de sabores e satisfação. Faça a escolha certa e transforme suas manhãs para sempre!
              </p>
              <h4 class="text-yellow-500 text-xl font-bold mb-4">Benefícios de Adquirir o E-book:</h4>
              <ul class="list-disc list-inside text-gray-300 mb-6">
                <li>👉 Receitas fáceis e rápidas que se encaixam na sua rotina.</li>
                <li>👉 Melhora na sua saúde e bem-estar, ajudando no emagrecimento saudável.</li>
                <li>👉 Variedade de opções que atendem a diferentes paladares e necessidades nutricionais.</li>
                <li>👉 Dicas exclusivas para otimizar sua alimentação matinal.</li>
                <li>👉 Acesso imediato a um conteúdo rico e de qualidade.</li>
              </ul>
              <button
                @click="redirectToCheckout"
                class="bg-yellow-500 text-black py-2 px-6 mt-4 rounded-lg font-bold hover:bg-yellow-600 transition"
              >
                Adquira o Seu Agora!
              </button>
            </div>
  
            <!-- Coluna da direita -->
            <div class="col-span-2"></div>
          </div>
        </section>
      </main>
  
      <footer class="bg-yellow-500 text-black py-4 text-center">
        <p>© 2024 Herbert Souza. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToCheckout() {
        window.location.href = 'https://pay.kiwify.com.br/SkVuIll';
      },
    },
  };
  </script>
  
  <style scoped>
  .hero-banner {
    position: relative;
    width: 100%; /* Define a largura do banner */
  }
  
  .banner-content {
    position: relative;
    z-index: 10;
    padding: 20px;
  }
  
  .corner-decorations {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .decoration-left {
    position: absolute;
    top: -20px;
    left: -50px;
    transform: rotate(45deg);
    width: 100px;
  }
  
  .decoration-right {
    position: absolute;
    bottom: -20px;
    right: -50px;
    transform: rotate(45deg);
    width: 100px;
  }
  </style>
  