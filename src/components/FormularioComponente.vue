<template>
  <div class="form-wrapper">
    <p><label class="label-text" for="id">id:</label></p>
    <input id="id" type="text" v-model="id" />

    <p><label class="label-text" for="idnombre">Nombre:</label></p>
    <input id="idnombre" type="text" v-model="nombre" />

    <p><label class="label-text" for="idapellido">Apellido:</label></p>
    <input id="idapellido" type="text" v-model="apellido" />

    <p><label class="label-text" for="idfecha">Fecha de Nacimiento:</label></p>
    <input id="idfecha" type="text" v-model="fechaNacimiento" />

    <div class="button-group">
      <button class="cancel-btn" v-on:click="guardar()">Guardar</button>
      <button class="save-btn" v-on:click="eliminar()">Eliminar</button>
      <button class="cancel-btn" v-on:click="buscar()">Consultar</button>
      <button class="cancel-btn" v-on:click="actualizar()">
        Actualizar Total
      </button>
      <button class="cancel-btn" v-on:click="actualziarParcial()">
        Actualizar Parcial
      </button>
    </div>
  </div>
</template>
 
<script>
import {
  obtenerPorIdFachada,
  insertarFachada,
  actualizarFachada,
  actualziarParcialFachada,
  eliminarachada,
} from "../client/PersonaCliente";
export default {
  data() {
    return {
      id: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
    };
  },

  methods: {
    async buscar() {
      const data = await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
    },
    async guardar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };
      await insertarFachada(bodyPersona);
      console.log("se guardo");
    },
    async actualizar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };
      await actualizarFachada(this.id, bodyPersona);
      console.log("se actualizarFachada");
    },
    async actualziarParcial() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };
      await actualziarParcialFachada(this.id, bodyPersona);
      console.log("se actualziarParcialFachada");
    },

    async eliminar() {
      await eliminarachada(this.id);
      console.log("se eliminarachad");
    },
  },
};
</script>
 
<style>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  border-radius: 12px;
  background-color: #fde2e4;
  width: 20%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
}

.label-text {
  font-size: 14px;
  color: #a52a6d;
  font-weight: 600;
}

p {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #7d387d;
}

input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #dda0dd;
  background-color: #fff5f8;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-bottom: 2px solid #a52a6d;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 60px;

}

.save-btn,
.cancel-btn {
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  border: none;
}

.save-btn {
  background-color: #ff69b4;
  color: white;
}

.save-btn:hover {
  background-color: #d1478d;
}

.cancel-btn {
  background-color: #dda0dd;
  color: white;
}

.cancel-btn:hover {
  background-color: #b56ba3;
}
</style>