<template>
    <div class="row">
      <Card
        v-for="(producto, index) in productos"
        :key="index"
        :nombre="producto.nombre"
        :descripcion="producto.descripcion"
        :precio="producto.precio"
        :cantidad="producto.cantidad"
        :imagen="require('@/assets/img/' + producto.imagen)"
      />
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue';
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        productos: [
          {
            nombre: 'Desayunos',
            descripcion: 'Contamos con desayunos nutritivos y deliciosos',
            precio: '$2000',
            cantidad: 'Para dos personas',
            imagen: 'desayunos.jpg', // Se usa solo el nombre del archivo
          },
          {
            nombre: 'Colaciones',
            descripcion: 'Almuerzos balanceados y saludables',
            precio: '$3500',
            cantidad: 'Para una persona',
            imagen: 'colaciones.jpg', // Se usa solo el nombre del archivo
          },
          {
            nombre: 'Dulces',
            descripcion: 'Dulces deliciosos para disfrutar en cualquier momento',
            precio: '$1500',
            cantidad: 'Para una persona',
            imagen: 'dulces.jpg', // Se usa solo el nombre del archivo
          },
        ],
      };
    },
  };
  </script>
  