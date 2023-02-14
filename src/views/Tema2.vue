<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos ETL

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-7
        p La sigla ETL, Extraer, Transformar y Cargar (<em>Extract, Transform, Load</em>), se refiere a tres fases que manejan este proceso, que tiene como principal objetivo, una gestión efectiva, óptima y eficiente de datos y, en general, cualquier tipo de información que las empresas generen, almacenen y manejen; esta información debe analizar y producir unos resultados, basados en su interpretación. Es necesario dejar claro que la extracción de los datos se da de diferentes fuentes, incluyendo otros sistemas o aplicaciones; seguidamente, dichos datos, son procesados, para poder transformarlos, e incluso, adaptarlos, en las salidas y/o sirvan de insumo para la toma de decisiones que requiera la empresa. Es obligatorio hacer énfasis, en el hecho que puede existir la más completa, interesante y precisa información de una empresa, pero sin el tratamiento adecuado, dichos datos no tienen valor alguno. 

      .col-md-6.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/img-1.png')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.fnd-2 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-2.svg')
            .col-lg-8.bor-d
              .bloque-texto-a__texto.p-4
                p Aunque pueda parecer extraño, seguramente por su difusión actual, ETL viene desde los años 70, producto de la imperiosa necesidad de las empresas de poseer y almacenar en sus bases de datos, información relevante, que ayudara en los distintos procesos comerciales, especialmente en la toma de decisiones. No obstante, sus inicios no fueron nada fáciles, puesto que, en esa época, se trabajaba primordialmente de forma manual, lo que propició el surgimiento del ETL, que hizo posible la integración de toda esa cantidad de información, en un único sitio centralizado y perfectamente controlado y administrado y que hoy en día se conoce como data warehouse, creado a inicios de la década de los 90. 

        .cajon.color-acento-contenido.p-4.mb-4.fnd-3 
          p Es decir, ETL es el que gestiona esa gran cantidad de datos, muy bien organizados, repartidos y almacenados, de diversas fuentes, tanto externas como internas, y consideradas como propiedad de la organización. Sin embargo, la extracción de dichos datos es bastante compleja, al igual que su consolidación. Ahora bien y al margen de todas sus implicaciones, es necesario que la antes mencionada extracción, sea programada en periodos de tiempos precisos, con el objeto que los mencionados datos tengan la más oportuna actualización. (Martínez & Gallegos, 2017)
          
    .row.justify-content-center.align-items-center.mb-5
      .col-1
        figure
          img.img-44(src='@/assets/curso/temas/tema2/img-3.svg')
      .col-10 
        p El manejo de grandes cantidades de datos es una tecnología de punta y en evolución constante, que basa su funcionamiento en los procesos ETL, que son un paso obligatorio, previo a la utilización de dicha información, sus fases son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5.btn-m
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-4.svg')
          .tarjeta.fnd-5.p-3(x="11.4%" y="91%" numero="+")
            p Se refiere a la extracción de la información, que proviene de diversas y muy variadas fuentes, basados en la premisa que, entre más datos, su estudio nos brinda mejores resultados.
          .tarjeta.fnd-5.p-3(x="49.9%" y="91%" numero="+")
            p Los datos extraídos, se procesan con el objeto de realizar una depuración óptima que redunda en su mejor aprovechamiento.
          .tarjeta.fnd-5.p-3(x="87.3%" y="91%" numero="+")
            p Luego de transformar los datos, se cargan a los almacenes de datos para realizar las consultas y reportes que nos permitan la toma de decisiones.






















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
