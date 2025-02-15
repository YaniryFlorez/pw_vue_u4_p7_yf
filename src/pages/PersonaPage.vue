<template>
  <formulario/>
</template>

<script>
import formulario from '../components/FormularioComponente.vue'
import {obtenerPorIdFachada} from '../client/PersonaCliente'
export default {
  name:'App',
    components: {
    formulario,
  }
}
</script>

<style>

</style>