<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gestión de bodega de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Una bodega de datos no es más que es un tipo de base de datos específica y especializada que reúne, completa, organiza e incluso llega a integrar una gran cantidad de datos, para que pueda ser analizada de forma menos compleja y con su consecuente procesamiento, como fórmula efectiva para facilitar la toma de decisiones. También, y bajo la misma línea conceptual, se puede afirmar que es un conjunto de datos orientados y/o integrados a una meta específica u objetivos bien determinados, que seguramente tendrán variaciones en el tiempo, pero que realmente son permanentes, comúnmente conocidos como datos históricos. Siempre, buscando la toma de decisiones, con base en el aprovechamiento óptimo de los grandes volúmenes de información que manejan.
      .col-lg-5
        figure
            img(src='@/assets/curso/temas/tema6/img-1.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema6/img-2.svg')
          .col-lg-8
            p Básicamente las bodegas de datos basan su funcionamiento en los siguientes procesos organizacionales de alto nivel:
            ul.lista-ul--color
              li 
                i.fas.fa-circle.circle
                p.mb-0 Transacciones normales, cotidianas, diarias que produce la empresa con su negocio.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Búsqueda permanente por parte de la empresa sobre la mejor forma de tratar sus productos, para que lleguen a sus clientes con mayor fluidez y facilidad, aplicando la inteligencia de negocios.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Finalmente, se determinan acciones nuevas, que se adicionan a las operaciones y al quehacer diario empresarial, producto de los dos ítems anteriores, (Wanumen et al., 2017).

    .row.mt-5
      ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-square
            h3 Consultas y reportes de bodegas de datos

    p.mb-5 Una vez que se tienen los datos almacenados en la bodega de datos, es decir, posterior a su extracción, procesamiento y cargue, existen herramientas que permiten su consulta, reportes y, en general, facilitan la toma de decisiones que se fundamenta en esta información. Algunas herramientas para consultas y reportes, son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/temas/tema6/img-3.png')    
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="OLAP") <em>Online Analytical Processing</em> o procesamiento analítico en línea, es un método informático, diseñado para que los usuarios realicen consultas y/o extraigan datos de manera fácil y selectiva, con el fin de poder analizarlos desde diferentes perspectivas. Dichas consultas ayudan a llegar a conclusiones en temas como previsión de ventas, modas o tendencias, planificación de campañas para productos en el mercado, etc. Por ejemplo, se requiere realizar un análisis de la temporada turística de fin de año en Santa Marta, de los años 2020 y 2021, para conocer cuáles bloqueadores solares se vendieron más e para intensificar las campañas publicitarias al respecto, para lo cual se construye la consulta y el reporte en una hoja de Excel, así como los puntos de vista. OLAP nos facilita este proceso. 
          p.text-small(numero="2" titulo="<em>Data mining </em>") Ominería de datos, es una herramienta utilizada para el análisis de grandes cantidades de información para identificar determinados comportamientos o patrones que permitan la mejora de los procesos. Esto permite que el <em>Data mining </em>sea utilizado en sectores como las finanzas, el <em>marketing, e-comerce, </em>entre otros, basados en que, al tener los datos cargados, se pueden construir consultas y reportes que permiten la toma de decisiones con un buen nivel de certeza, puesto que los resultados que muestran dichos reportes, producto de las mencionadas consultas, redundan directamente en el crecimiento de la empresa, (Wanumen et al., 2017).
 

    .row.mt-5
      ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-square
            h3 Sistemas de soporte y apoyo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La diversidad de criterios en torno los sistemas de soporte y apoyo son muchas y muy variadas, principalmente por la gran cantidad de posibilidades que se pueden aplicar, específicamente en la toma de decisiones. No obstante, en forma global un DSS (por sus siglas en inglés <em>Decision support system</em>) que en español quiere decir sistema de apoyo a las decisiones, es una aplicación informática utilizada para apoyar la toma de decisiones, se debe entender que esto no implica automatizar este proceso; además, es necesario tener en cuenta que cada decisión se toma basada en alternativas que se estiman y en los valores de dichas estimaciones. Directamente este apoyo consiste en ofrecer información para generar alternativas muy inteligentes y viables, acompañado de su consecuente toma de decisión respecto a la alternativa a escoger.   
        p Los DSS hacen parte de todas las áreas del saber, lo que les otorga la característica de multidisciplinarios, incluyendo, el tema investigativo acerca de las bases de datos (sin que sea exclusivo a estos temas), como también a la inteligencia artificial, sin dejar de mencionar las interacciones hombre-máquina, el <em>software</em> y las telecomunicaciones, etc., (Wanumen et al., 2017).

      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/temas/tema6/img-4.svg') 
      .col-lg-8
        .cajon.color-acento-contenido.p-4.fnd-3 
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          

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
