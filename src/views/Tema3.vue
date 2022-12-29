<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Slowly Changing Dimensions</em> (SCD)

    p.mb-5 Se presenta a continuación información sobre las dimensiones lentamente cambiantes (<em>Slowly Changing Dimensions -SCD)</em>

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul fnd-6")
      .row(titulo="Antecedentes")
        .col-md-7.mb-4.mb-md-0
          p Desde tiempos inmemoriales, la humanidad tiene muy presente su pasado, llegando hasta a extremos de personas que avanzan un paso, sin antes averiguar qué antecedentes al respecto registra la historia, no obstante, también existe el polo opuesto, es decir, los que no quieren ni acordarse, siquiera, de dicho pasado.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema3/img-1.png')
      .row(titulo="Metodologías")
        .col-md-7.mb-4.mb-md-0
          p En un sistema transaccional “normal”, están a la orden del día las actualizaciones, lo cual implica que el dato actual desaparece (literalmente) y en su lugar se guarda un dato nuevo, puede ser solo de una columna o de todo el registro, si fuera necesario, el problema surge cuando se requiere, de una u otra forma, volver a contar con ese dato antiguo o desactualizado. Conclusión, solo se guarda la última versión de la información.
          p Este concepto en el ámbito del <em>data warehouse</em> no aplica, de hecho, no se puede aplicar y la forma de tener registro de un historial completo, efectivo, óptimo en un sistema <em>data warehouse</em>, tal que permita acceder, consultar y explorar en cualquier momento un dato específico, es aplicando las metodologías<em> Slowly Changing Dimensions (SCD)</em>. En síntesis, cuando unos datos, a través del tiempo, se modifican en reiteradas ocasiones, se puede tomar uno de dos caminos:
          ul.lista-ul--color
            li 
              i.fas.fa-circle.circle
              p.mb-0 Se registran esos cambios en un historial.
            li 
              i.fas.fa-circle.circle
              p.mb-0 Se reemplazan o actualizan dichos cambios.


        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema3/img-2.png')
      .row(titulo="Estrategias")
        .col-md-7.mb-4.mb-md-0
          p <em>Ralph Kimball,</em> el creador de data <em>warehouse</em>, propuso inicialmente, las primeras tres estrategias para trabajar con las SCD, las cuales fueron:  tipo 1, tipo 2 y tipo 3. Pero con el tiempo se requirió la misma necesidad de mejora y se le adicionaron las tipo 4, tipo 5 y tipo 6; estas nuevas categorías, nacieron de los profesionales que trabajan en el tema, modelando y estudiando a profundidad dichos modelos:  
          ul.lista-ul--color
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 0: no cambia o no se tiene en cuenta los cambios.
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 1: sobreescribir.
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 2: añadir fila.
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 3: añadir columna.
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 4: historial separado.
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 5: híbrido (1 y 4).
            li 
              i.fas.fa-circle.circle
              p.mb-0 SCD Tipo 6: híbrido (1, 2 y 3).
          
          p Dependiendo del cambio que se requiera, se selecciona el tipo respectivo, incluido los tipos que son resultado de combinar otros, sin perjuicio de los casos donde es necesario utilizar varios tipos. Se debe recalcar, la importancia y obligatoriedad de utilizar claves subrogadas en las tablas de dimensiones, como requisito indispensable para poder aplicar estas técnicas.

        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema3/img-3.png')










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
