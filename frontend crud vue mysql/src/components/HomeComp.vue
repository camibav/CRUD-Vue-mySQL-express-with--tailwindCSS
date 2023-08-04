<template>
    <div class=" bg-center h-screen flex items-center justify-center">
      <div class="bg-yellow-300 p-8 rounded-lg shadow-lg text-center">
        <h1 class="text-4xl font-bold text-black mb-6">{{ title }}</h1>
        <p class="text-black text-lg mb-6">{{ message }}</p>
        <img src="https://eep.io/images/yzco4xsimv0y/433SRjV7TLAaSJqKyzNoAB/e3d906269e81c81885a70e7224b8c58e/Frame_370604_ES.png?w=1520&fm=avif&q=60" alt="Background Image" class="w-48 h-48 rounded-full border-4 border-yellow-600 mx-auto mb-6">
        <p class="text-yellow-600 text-lg font-semibold">¡Para ingresar datos, ve a la tabla "Crear"!</p>
        <p class="text-yellow-600 text-lg font-semibold">¡En "Listar" encontrarás una tabla donde verás los usuarios creados!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref('¡Bienvenido a mi página!');
  const message = ref('Estoy practicando el CRUD utilizando Vue 3 JS Composition API,Tailwind CSS, Express js y MySQL.');
  </script>
  
  <style>
  
  </style>
  