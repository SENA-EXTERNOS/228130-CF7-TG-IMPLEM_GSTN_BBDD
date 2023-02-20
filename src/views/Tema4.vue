<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Creación <em>data warehause</em> 

    p <em>Data warehouse</em> es un gran repositorio de datos, que nos permite un visión general, global, integrada, de la información de una organización, sin importar la utilización que se decida dar a dicha información, con relación a los usuarios finales; se trata de datos confiables, coherentes, óptimos, verdaderos y, lo más importante, con datos históricos muy precisos.

    p A continuación, se presenta información relevante sobre data <em>warehouse</em>:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-4- fnd-7")
      .row(titulo="Generalidades")
        .col-md-6.mb-4.mb-md-0
          p Las bases de datos relacionales, marcaron la pauta en las soluciones del desarrollo de software durante muchos años, al punto que hoy se continúan utilizando con mucho éxito, aún en el ámbito global, con una enorme cantidad de datos históricos y alto volumen de información, que dificulta el trabajo de los modelos relacionales. Esto obliga a mirar otras posibilidades, otros modelos de datos que, si bien es cierto, se alejan de los relacionales, se acercan más a la posibilidad de poder analizar la información, específicamente las orientadas a la lógica asociativa, sin olvidar las orientadas a columnas.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-2.png')
      .row(titulo="Características")
        .col-md-6.mb-4.mb-md-0
          p Las características más importantes y sobresalientes del <em>data warehouse</em>, son:
          ul.lista-ul--color
            li 
              i.fas.fa-circle.circle
              p.mb-0 De solo lectura para usuarios finales.          
            li 
              i.fas.fa-circle.circle
              p.mb-0 Se basa en un tema central, facilitando su estudio.   
            li 
              i.fas.fa-circle.circle
              p.mb-0 El manejo de datos históricos es uno de sus fuertes, ya que permite fijar fechas determinadas y controlar lapsos de tiempo predeterminados.                             
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-3.png')
      .row(titulo="Tener en cuenta")
        .col-md-6.mb-4.mb-md-0
          p Para la creación de un <em>data warehouse</em> se debe, antes que nada, estar seguros de su necesidad, es decir, haber realizado un análisis completo, complejo y óptimo del problema que se presenta, lo que implica comprender y conocer la situación; es necesario realizar un análisis y posterior diagnóstico, de la cantidad de datos que maneja la empresa, seguido de las actualizaciones, modernizaciones e incluso transformaciones digitales requeridas, para desembocar en la creación de un sistema de gestión de datos, basado en el profundo conocimiento que se debe tener. Con estos requisitos cumplidos y cerciorado el proceso, la conclusión es que definitivamente se necesita un data warehouse, que es el punto central y apoyo en la toma de decisiones.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-4.png')
      .row(titulo="Fuentes de datos")
        .col-md-6.mb-4.mb-md-0
          p Seguidamente, se enfrenta el tema de las fuentes de datos, y como lo más común es que el <em>data warehouse</em> tenga distintas fuentes de datos, lo que obliga a todo el equipo a identificar por completo, los almacenes de datos dedicados o centrados en el tema de negocio de la empresa, advirtiendo que la gama de posibilidades de esas fuentes es muy amplia, novedosa y tradicional; dentro de estas posibilidades, se destacan: 
          ul.lista-ul--color
            li 
              i.fas.fa-circle.circle
              p.mb-0 Base de datos, tanto SQL como NoSQL.
            li 
              i.fas.fa-circle.circle
              p.mb-0 Redes sociales.
            li 
              i.fas.fa-circle.circle
              p.mb-0 Aplicativos <em>webs</em>, móviles, escritorio, etc.
            li 
              i.fas.fa-circle.circle
              p.mb-0 Campañas publicitarias que impliquen encuestas o alguna otra herramienta de obtención de información, entre otros.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-5.png')

      .row(titulo="Creación")
        .col-md-6.mb-4.mb-md-0
          p En este momento es el tiempo de crear el modelo de <em>data warehouse</em>, puesto que ya se establecieron todos los datos y las fuentes de dichos datos, haciendo énfasis en el modelo en estrella, que es el más importante y utilizado en estos casos. En este punto, se hace necesario, recomendar que se debe pasar la página de los modelos relacionales y sus implicaciones, como la integridad relacional; por ejemplo, si se quieren construir consultas eficientes de verdad, óptimas y eficaces, es inevitable repetir columnas (redundancia) que permitan la integración de distintas entidades (desnormalización), simplemente porque así lo demanda la situación, cuando la cantidad de datos es muy alta.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-6.png')
      .row(titulo="Proceso ETL")
        .col-md-6.mb-4.mb-md-0
          p El proceso ETL (en español Extracción, Transformación y Carga), implica obtener datos de distintas fuentes, para su posterior transformación o procesamiento y finalmente cargarlos a un repositorio de datos central.  En realidad, se trata de pequeñas aplicaciones que realizan una “traducción” de los datos, es decir, transforman cualquier tipo de dato de cualquier fuente y los cargan al <em>data warehouse</em>. Sin embargo, es necesario saber escoger la herramienta ETL que se va a utilizar, partiendo por su facilidad de uso, efectividad y agilidad de procesamiento. Entre las herramientas de este tipo más usadas actualmente tenemos <em>Oracle GoldenGate, Microsoft - SQL Server Integrated Services (SSIS),</em> etc.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-7.png')





</template>

<script>
export default {
  name: 'Tema3',
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
