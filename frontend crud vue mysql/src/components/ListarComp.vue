<script setup>
import {ref } from 'vue';
import axios from 'axios';

 const respuesta = ref([]);
const respuestaApi=async()=>{
  try{
    const response=await axios.get('/usuarios');
    respuesta.value=response.data;
    console.log(response.data);
  
    
  }catch(error){
    console.error(error);
  }
}
respuestaApi();

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
    <h1 class="text-yellow-200 text-4xl text-center mb-4 ">Formulario de Registro</h1>
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
            <router-link class="bg-yellow-500 text-black p-2 rounded-md mx-2 hover:bg-blue-400" to="/editar">Editar</router-link>
            <button class="bg-red-400 text-black p-2 rounded-md mx-2 hover:bg-cyan-400" @click="borrarUsuario(usuario.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>
