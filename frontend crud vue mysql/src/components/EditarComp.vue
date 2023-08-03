<script setup>
import {ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import router from '../router';

const route = useRoute();

const id=route.params.id;
const nombre = ref('');
const email = ref('');
const respuesta = ref([]);
const mensaje = ref('');
const mensajeClass = ref('');

const respuestaApi=async(id)=>{
  try{
    
    const response=await axios.get(`/usuarios/${id}`);
    respuesta.value=response.data;
    console.log(response.data);
    if(response.status===200){
      nombre.value=respuesta.value.nombre;
      email.value=respuesta.value.email;
    }
  
  
  }catch(error){
    console.error(error);
  }
}
   respuestaApi(id);

const actualizarUsuario= async(id)=>{
  try{
    const response=await axios.put(`/usuarios/${id}`,{
      nombre:nombre.value,
      email:email.value
    });
    if(response.status===200){
      mensaje.value = 'actualización exitosa';
      mensajeClass.value = 'success';
      nombre.value = '';
      email.value = '';
    }
  }catch(error){
    console.error(error);
  }
}

const submitForm=()=>{
actualizarUsuario(id);
router.push('/listar');
 
}


</script>

<template>
  <div class="flex justify-center items-start min-h-screen bg-black  ">
  <div class="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg mt-[4%] ">
    <h1 class="text-yellow-200 text-lg  font-semibold mb-6">Actualizar registro del usuario</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="mb-4">
        <label class="text-yellow-200 block" for="nombre" placeholder="">Nombre:</label>
        <input class="input bg-gray-700 w-full px-3 py-2 rounded focus:outline-none focus:ring focus:border-yellow-500" type="text" v-model="nombre" required  />
      </div>

      <div class="mb-4">
        <label class="text-yellow-200 block" for="email">Email:</label>
        <input class="input bg-gray-700  w-full px-3 py-2 rounded focus:outline-none focus:ring focus:border-yellow-500" type="email" v-model="email" required />
      </div>

      <button class="button bg-yellow-500 text-yellow-900 w-[40%] py-2 rounded mt-4 hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-500" type="submit">Actualizar usuario</button>
    </form>
    <div v-if="mensaje" :class="mensajeClass" class="text-yellow-200 mt-4">{{ mensaje }}</div>
    
  </div>
</div>
</template>
<style scoped>

h1{
  
  font-size: 30px;
  margin: 6px;
  text-align: center;
  font-family: Arial, sans-serif;
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  outline: 2px solid #FEBF00;
  background: #313030;
  border-radius: 8px;
  margin-top: 6px;
  width:400px ;
}
.form label{
  
  font-size: 16px;
  margin: 6px;
  text-align: left;
  font-family: Arial, sans-serif;
}
.success {
  color: green;
}
.error {
  color: red;
}

  .input {
  border-radius: 10px;
  outline: 2px solid #FEBF00;
  border: 0;
  font-family: Arial, sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  margin: 6px;
  width: 300px;
}

.input:focus {
  outline-offset: 5px;
  background-color: #fff
}
.button{
  border-radius: 10px;
  outline: 2px solid #FEBF00;
  border: 0;
  font-family: Arial, sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  margin-top: 10px;
  font-size:1rem ;
  
}


</style>
