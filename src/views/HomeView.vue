<template>
  <div class="productos">
    <Productos />
  </div>

</template>

<script>
// @ is an alias to /src
import Productos from '../components/Productos.vue';

export default {
  components: {
    Productos
  }
}

</script>

<style>
.productos{
  margin-top:150px;
}
</style>