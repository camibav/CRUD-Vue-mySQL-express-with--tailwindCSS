<script setup>
import axios from 'axios';

import { ref, onMounted } from 'vue';

const nombre = ref('');
const email = ref('');
const mensaje = ref('');
const mensajeClass = ref('');
const respuesta = ref([]);
onMounted(() => {
  respuestaApi();
});

const respuestaApi=async()=>{
  try{
    const response=await axios.get('/usuarios');
    respuesta.value=response.data;
    console.log(response.data);
  
    
  }catch(error){
    console.error(error);
  }
}
respuestaApi(respuesta.value);

const submitForm = async () => {
  
  try {
    const response = await axios.post('/usuarios', { nombre: nombre.value, email: email.value });
    if (response.status === 200) {
      mensaje.value = 'Registro exitoso';
      mensajeClass.value = 'success';
      nombre.value = '';
      email.value = '';
      respuestaApi();
    }
  } catch (error) {
    mensaje.value = 'Error en el registro';
    mensajeClass.value = 'error';
    console.error(error);
  }
};
</script>


<template>
  <div class="flex">
  <div>
    <h1 class="text-yellow-200 ">Formulario de Registro</h1>
    <form @submit.prevent="submitForm" class="form">
      <label class="text-yellow-200" for="nombre">Nombre:</label>
      <input class="input" type="text" v-model="nombre" required />

      <label class="text-yellow-200"  for="email">Email:</label>
      <input class="input" type="email" v-model="email" required />

      <button class="button text-yellow-600" type="submit">Enviar</button>
    </form>

    <div v-if="mensaje" :class="mensajeClass">{{ mensaje }}</div>
  </div>
  <div>
    <h1 class="text-yellow-200 ">Lista de Usuarios</h1>
    <table class="table text-yellow-200">
      <thead>
      <tr>
        <th class="text-yellow-200">Name</th>
        <th class="text-yellow-200">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in respuesta" :key="usuario.id">
        <td class="text-yellow-200 ">{{ usuario.nombre }}</td>
        <td class="text-yellow-200 ">{{ usuario.email }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
</template>



<style scoped>


.flex{
  display: flex;
  justify-content:space-around;
  align-items: start;
  flex-wrap: wrap;
  margin-top:10px ;
}
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
.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  border-radius: 3px; /* Agregamos un borde redondeado */
  overflow: hidden;
  color: #FEBF00;

}

/* Estilos para las celdas del encabezado (th) */
.table th {
  background-color: #FEBF00;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #313030;
  border: 1px solid #FEBF00;
  
  
}

/* Estilos para las celdas de datos (td) */
.table td {
  padding: 12px;
  border: 1px solid #FEBF00;
  
  
 
}

.table tbody tr:hover {
  background-color: #FEBF00;
  color: white;
  border: 1px solid #000;
}
.table th:nth-child(even) {
  background-color: #0000;
  color: #FEBF00;
  

}
@media (max-width: 768px) {
  .table {
    font-size: 14px;
  }
  .table th,
  .table td {
    padding: 8px;
  }
}


</style> 