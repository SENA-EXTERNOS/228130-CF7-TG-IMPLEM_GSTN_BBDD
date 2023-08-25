<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de depuración

    p.mb-3 A continuación, se presenta información sobre herramientas de depuración.

    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h3 Generalidades
            p Contar con grandes cantidades de datos provenientes de distintas fuentes, tiene una enorme utilidad para la empresa, especialmente en la toma de decisiones, al aplicar la inteligencia de negocios. Sin embargo, desde el punto de vista técnico, principalmente el precio que toca pagar para depurar dichos datos es demasiado alto, llegando a extremos como formatos desconocidos, y hasta lo más común, información errónea.

            p Esto obliga a las empresas a realizar grandes, tediosos y muy costosos procesos de depuración de datos. Esta situación es frecuente, principalmente por las diferentes fuentes o el origen de la información; una situación clásica en el medio colombiano, es que en la facturación al señor Córdova, lo registran con “b”, es decir, “Córdoba”; en redes sociales, lo escriben con “v”, es decir, “Córdova”, en la EPS lo escriben sin tilde y así sucesivamente.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img-1.png')

        .row
          .col-md-7.mb-4.mb-md-0
            p Esto obliga a las empresas a realizar grandes, tediosos y muy costosos procesos de depuración de datos, que consiste en combinar dos o más archivos, listas de bases de datos, con el objeto de identificar registros similares o iguales, datos incorrectos, no deseados, mal digitados para poder desecharlos, catalogándolos como información no válida para la compañía y, finalmente, obtener registros únicos, bien construidos y con información veraz, que realmente sea de utilidad para la empresa.  Esta situación es frecuente, principalmente por las diferentes fuentes u origen de la información; una situación clásica en el medio colombiano, por ejemplo, es que en la facturación al señor Córdova, lo registran con “b”, es decir, “Córdoba”; en redes sociales, lo escriben con “v”, es decir, “Córdova”, en la EPS lo escribe sin tilde y así sucesivamente.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img-1.png')      
        .row
          .col-md-7.mb-4.mb-md-0
            h3 ¿Realmente cómo funciona o cuáles son los aspectos a tener en cuenta para dicha depuración?
            ul.lista-ul--color
              li 
                i.fas.fa-circle.circle
                p.mb-0 Eliminar las posibles incoherencias estructurales y estadísticas en los datos, entre los cuales se pueden mencionar: actualizar valores nulos, corregir errores de puntuación, suprimir espacios iniciales y finales, etc.

              li 
                i.fas.fa-circle.circle
                p.mb-0 Identificar los patrones presentes en las columnas, ejecutando comprobaciones de validación e incluso de transformación de información no válida o ilegítima, de tal manera que permita que todos los valores cumplan el patrón válido.

              li 
                i.fas.fa-circle.circle
                p.mb-0  Detectar los registros duplicados, construyendo y aplicando algoritmos de coincidencia de datos efectivo y óptimo, adicionalmente las variaciones difusas, exactas y/o numéricas e incluso, variaciones fonéticas de dichos datos.
              
              li 
                i.fas.fa-circle.circle
                p.mb-0 Realizar procesos correctos de integración de datos, utilizando para ellos todas las fuentes de datos disponibles, para obtener como resultado archivos locales, planos, XML, JSON, etc. provenientes de distintas aplicaciones web y, en general, cualquier tipo de aplicación.

              li 
                i.fas.fa-circle.circle
                p.mb-0 Todo lo anterior, basado en la creación de perfiles de datos, como fórmula efectiva para identificar datos actuales y correctos para la empresa.


          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img-2.png')      
          
                
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
