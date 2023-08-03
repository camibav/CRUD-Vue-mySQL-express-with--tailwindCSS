<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from '../router';


const nombre = ref('');
const email = ref('');
const mensaje = ref('');
const mensajeClass = ref('');




const crearUsuariaForm= async ()=>{
  try {
    const response = await axios.post('/usuarios', { nombre: nombre.value, email: email.value });
    if (response.status === 200) {
      mensaje.value = 'Registro exitoso';
      mensajeClass.value = 'success';
      nombre.value = '';
      email.value = '';
      
    }
  } catch (error) {
    mensaje.value = 'Error en el registro';
    mensajeClass.value = 'error';
    console.error(error);
  }
}

const submitForm = async () => {
  crearUsuariaForm();
  router.push('/listar');
  
};
</script>


<template>
<div class="flex justify-center items-start min-h-screen bg-black  ">
  <div class="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg mt-[4%]">
    <h1 class="text-yellow-200 text-2xl font-semibold mb-6">Formulario de Registro</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="mb-4">
        <label class="text-yellow-200 block" for="nombre">Nombre:</label>
        <input class="input bg-gray-700 w-full px-3 py-2 rounded focus:outline-none focus:ring focus:border-yellow-500" type="text" v-model="nombre" required />
      </div>

      <div class="mb-4">
        <label class="text-yellow-200 block" for="email">Email:</label>
        <input class="input bg-gray-700  w-full px-3 py-2 rounded focus:outline-none focus:ring focus:border-yellow-500" type="email" v-model="email" required />
      </div>

      <button class="button bg-yellow-500 text-yellow-900 w-[40%] py-2 rounded mt-4 hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-500" type="submit">Agregar usuario</button>
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