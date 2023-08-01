<script setup>
import {RouterLink } from 'vue-router'
</script>

<template>
   <header class="header bg-yellow-200">
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/crear" class="nav-link">Crear</RouterLink>
        <RouterLink to="/listar" class="nav-link">Listar</RouterLink>
        <RouterLink to="/editar" class="nav-link">Editar</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  
</template>


<style scoped>
.header {
  
  padding: 20px 0; /* Espacio interno (arriba y abajo) para el contenido */
  font-family: sans-serif;
}

.wrapper {
  max-width: 1200px; /* Ancho máximo del contenido */
  margin: 0 auto; /* Centrar el contenido horizontalmente */
}

.nav {
  display: flex; /* Hace que los enlaces se muestren en línea (uno al lado del otro) */
  justify-content: center; /* Centrar los enlaces horizontalmente */
}

.nav-link {
  color: #313030; /* Color del texto de los enlaces */
  text-decoration: none; /* Quita la subrayado de los enlaces */
  margin: 0 10px; /* Espacio entre los enlaces */
  font-weight: bold; /* Texto en negrita */
  font-size: 16px; /* Tamaño de fuente */
}

.nav-link:hover {
  color: white; /* Color del texto de los enlaces al hacer hover */
}
</style>