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
            p Estimado aprendiz, a través del presente componente formativo conocerá sobre las fuentes de datos, procesos ETL, creación data <em>warehause,</em> herramientas de depuración y gestión de bodegas de datos.  Cuando se registró el nacimiento de las DBASE, se cerró una enorme brecha en cuanto a las soluciones de <em>software</em> empresariales del momento, no obstante, la evolución normal que se dio, desde ese mismo momento, especialmente, en el tema de la cantidad de registros que se generan, obligó a acelerar los adelantos y tecnología existentes, trayendo consigo conceptos revolucionarios como el de las bodegas de datos o data <em>darehouse</em>. Lo invitamos a ver el siguiente video para documentarse sobre cada una de las temáticas comprendidas.
            p
              b ¡Muchos éxitos en este proceso de aprendizaje!

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
