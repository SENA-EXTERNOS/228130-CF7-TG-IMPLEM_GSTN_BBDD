<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.fnd-1 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/img-intro.svg')
        .col-lg-8.bor-d
          .bloque-texto-a__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá sobre las fuentes de datos, procesos ETL, creación de data warehouse, herramientas de depuración y gestión de bodegas de datos. 

    .row.mt-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fj3zHwTwVsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
 










</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
