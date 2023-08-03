<!-- <script setup>
import {ref } from 'vue';
import axios from 'axios';
import router from '../router';

 const respuesta = ref([]);
const respuestaApi=async()=>{
  try{
    const response=await axios.get('/usuarios');
    respuesta.value=response.data;
  
    
  }catch(error){
    console.error(error);
  }
}
respuestaApi();

const editarUsuario=async(id)=>{
 router.push(`/editar/${id} `);
}

const borrarUsuario=async(id)=>{
  try{
    const response=await axios.delete(`/usuarios/${id}`);
    if(response.status===200){
      respuestaApi();
    }
  }catch(error){
    console.error(error);
  }
}

</script>
<template>
 <div class="flex justify-center  min-h-screen bg-black">
  <div class="w-full max-w-3xl px-4 py-8">
    <h1 class="text-yellow-200 text-4xl text-center mb-4 ">Usuarios registrados</h1>
    <table class="table text-yellow-200 w-full bg-gray-900 border border-yellow-500 rounded-lg">
      <thead>
        <tr>
          <th class="px-6 py-3 text-left">Id</th>
          <th class="px-6 py-3 text-left">Name</th>
          <th class="px-6 py-3 text-left">Email</th>
          <th class="px-6 py-3 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in respuesta" :key="usuario.id" class="bg-gray-800 hover:bg-gray-700">
          <td class="px-6 py-4">{{ usuario.id }}</td>
          <td class="px-6 py-4">{{ usuario.nombre }}</td>
          <td class="px-6 py-4">{{ usuario.email }}</td>
          <td class="px-6 py-4">
            <button class="bg-yellow-500 text-black p-2 rounded-md mx-2 hover:bg-blue-400" @click="editarUsuario(usuario.id)" >Editar</button>
            <button class="bg-red-400 text-black p-2 rounded-md mx-2 hover:bg-cyan-400" @click="borrarUsuario(usuario.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template> -->

<script setup>
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import router from '../router';

  const respuesta = ref([]);
  const itemsPorPagina = 5; // Aquí definimos cuántos elementos queremos mostrar por página.
  const paginaActual = ref(1);

  const respuestaApi = async () => {
    try {
      const response = await axios.get('/usuarios');
      respuesta.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  respuestaApi();

  const editarUsuario = async (id) => {
    router.push(`/editar/${id}`);
  };

  const borrarUsuario = async (id) => {
    try {
      const response = await axios.delete(`/usuarios/${id}`);
      if (response.status === 200) {
        respuestaApi();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Creamos una función para obtener los usuarios de la página actual.
  const usuariosPaginados = computed(() => {
    const indexInicial = (paginaActual.value - 1) * itemsPorPagina;
    const indexFinal = indexInicial + itemsPorPagina;
    return respuesta.value.slice(indexInicial, indexFinal);
  });

  // Calculamos el número total de páginas basado en la cantidad total de usuarios.
  const totalPaginas = computed(() => Math.ceil(respuesta.value.length / itemsPorPagina));

  // Creamos una función para cambiar a la siguiente página.
  const siguientePagina = () => {
    if (paginaActual.value < totalPaginas.value) {
      paginaActual.value++;
    }
  };

  // Creamos una función para cambiar a la página anterior.
  const paginaAnterior = () => {
    if (paginaActual.value > 1) {
      paginaActual.value--;
    }
  };
</script>
<template>
  <div class="flex justify-center min-h-screen bg-black">
    <div class="w-full max-w-5xl px-4 py-8">
      <h1 class="text-yellow-200 text-4xl text-center mb-4">Usuarios registrados</h1>
      <table class="table text-yellow-200 w-full bg-gray-900  rounded-xl ">
        <thead>
        <tr>
          <th class="px-6 py-3 text-left">Id</th>
          <th class="px-6 py-3 text-left">Name</th>
          <th class="px-6 py-3 text-left">Email</th>
          <th class="px-6 py-3  text-left  ">Acciones</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="usuario in usuariosPaginados" :key="usuario.id" class="bg-gray-800 hover:bg-gray-700">
            <td class="px-6 py-4 ">{{ usuario.id }}</td>
            <td class="px-6 py-4 ">{{ usuario.nombre }}</td>
            <td class="px-6 py-4 w-1/2">{{ usuario.email }}</td>
            <td class="px-6 py-4 ">
              <button class="bg-yellow-500 text-black p-2 rounded-md mx-2 hover:bg-blue-400" @click="editarUsuario(usuario.id)">Editar</button>
              <button class="bg-red-400 text-black p-2 rounded-md mx-2 hover:bg-cyan-400" @click="borrarUsuario(usuario.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Botones de paginación -->
      <div class="flex justify-center mt-4">
        <button class="bg-yellow-500 text-black p-2 rounded-md mx-2 hover:bg-blue-400" @click="paginaAnterior" :disabled="paginaActual === 1">Anterior</button>
        <button class="bg-yellow-500 text-black p-2 rounded-md mx-2 hover:bg-blue-400" @click="siguientePagina" :disabled="paginaActual === totalPaginas">Siguiente</button>
      </div>
    </div>
  </div>
</template>
