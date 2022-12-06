<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La capacidad de innovar 

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-5.mb-3

          figure
            img(src='@/assets/curso/temas/tema1/img-1.svg')

      .col-md-6.col-lg-7
        p Expresiones como: <b>“Quien tiene la información, maneja al mundo”</b> o <b>“Solo el que tiene los datos, puede administrar todo”,</b> etc., señalan claramente la importancia de las fuentes de datos, las cuales pueden ser muy variadas y de distinta índole, según las propias necesidades de quien las utiliza. Por ejemplo, los ERP o <em>software</em> ERP, <em>(Enterprise Resource Planning)</em>, lo que equivale en español a decir sistema de planificación de recursos empresariales o sistemas de gestión de recursos empresariales, son las aplicaciones dedicadas al almacenamiento global de todo tipo de información, que tenga alguna importancia para la empresa.

        p Indiscutiblemente, en la actualidad el <em>Big Data</em> tiene un uso de grandes cantidades de información empresarial, óptimo y efectivo, no obstante, cuando se logra su manejo y se le adicionan las características de los ERP, los avances en cuanto a rendimiento, optimización y resultados son mayores, lo que redunda en encontrar nuevas posibilidades de negocios, tomar mejores decisiones y, es decir, avanzar hacia una mejora ostensible de procesos. Incluso, se puede entrar en el terreno de las predicciones, basándose en el estudio de determinados comportamientos de clientes. Siempre se menciona como una desventaja el alto costo de estos procesos y herramientas, sin embargo, a futuro y con los resultados mostrados, termina siendo un ahorro de costos muy importante, (Crespo et al., 2012).

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fj3zHwTwVsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Sistemas transaccionales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.fnd-2 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-2.svg')
            .col-lg-8.bor-d
              .bloque-texto-a__texto.p-4
                p Son un tipo de sistemas de información desarrollados para recolectar, almacenar, actualizar y consultar todo tipo de datos generados a partir del normal y diario funcionamiento de la empresa; es decir, se deriva de sus transacciones. Clarifiquemos que una transacción es un suceso que genera un movimiento en la información, lo cual indica que puede adicionar, modificar, consultar y hasta eliminar datos, previamente producidos por un sistema de información. Los sistemas transaccionales son una de las posibilidades a la hora de construir sistemas de información, su utilización se aumenta en todo el <em> software</em> de intercambio de datos, como transferir dinero de una cuenta a otra, manipular información de personas, manejar información de productos, etc.    

    p.mb-5 Lo sistemas transaccionales deben proveer a sus usuarios de características específicas como: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Inflexibles") Es obligatorio la uniformidad y su consecuente validación de la información, puesto que estos datos deben ser iguales para todos y con el mayor porcentaje de veracidad posible.  
          p.text-small(numero="2" titulo="Confiables") Específicamente en las transacciones que implican manejo de dinero y/o divisas, por ejemplo, debemos contar con herramientas confiables, seguras, que transmitan la seguridad requerida. 
          p.text-small(numero="3" titulo="Velocidad") El tiempo se traduce en dinero y por ende se requieren sistemas rápidos, ágiles, eficientes y eficaces, que permitan el flujo de los procesos. Regresando al ejemplo del manejo del dinero, sirve de muy poco que realicemos una transacción bancaria y solo obtengamos resultados luego de varios días de haberse realizado.      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-3.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.fnd-3 
          p Todo lo anterior, se traduce en agilidad de procesos automatizados, en dar la posibilidad de realizar tareas complicadas en forma muy sencilla, realizar almacenamiento y gestión masiva de datos, etc.


    separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Bases de datos

    p.mb-5 A continuación, se presenta información sobre las bases de datos. 

    
    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            p Una base de datos es un conjunto de datos, muy bien estructurados, ordenados y almacenados, a los cuales se le pueden efectuar procesos como adicionar, consultar, modificar y eliminar. No se puede olvidar que la operación de dichos datos, dependen de sus características o tipología.  Es necesario resaltar que el <em>boom</em> de las bases de datos es relativamente nuevo, puesto que aun podemos recordar las bases de datos analógicas, es decir, que había información en papel y/o textos impresos; esto cambió radicalmente con la llegada de la era digital y en la actualidad, la tecnología del big data, hace cada vez más imprescindible su utilización.  En general, digitalizar las bases de datos, fue el hecho que permitió manejar grandes cantidades de información, solucionando sus consecuentes problemas de manejo; analizando solamente la cantidad de espacio físico que era requerido para almacenar, estas cantidades alarmantes de información, el adelanto y facilidad fueron enormes (Wanumen et al., 2017). 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-4.svg')
        .row
          .col-md-7.mb-4.mb-md-0
            p Aunque en su momento, el concepto de base de datos fue la revolución de informática, los elementos que traen consigo dicho concepto, fueron realmente los elementos que marcaron la diferencia en este campo, siendo el más importante de ellos el <em>Database Management System </em>(DBMS) o, en español, los gestores de bases de datos (SGBD). La masificación de estos programas permitió el almacenamiento masivo de grandes cantidades de datos o registros y su posterior manipulación, en aras de facilitar su uso, aunque inicialmente, solamente las grandes empresas tenían acceso a dicho<em> software.</em> Una vez tenemos la información almacenada, se tiene que manipular la información, para lo cual se requieren las llamadas consultas o<em> Query,</em> que se aplican a los gestores de bases de datos, es decir, desde dicho gestor podemos consultar, modificar, eliminar y adicionar (el famoso CRUD por sus siglas en inglés). Estas consultas las construimos en el lenguaje SQL que, aunque es un estándar que aplica a todos los motores de base de datos, cada uno de ellos tiene sus propias especificaciones (Wanumen et al., 2017).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-5.png')
        .row
          .col-md-7.mb-4.mb-md-0
            p No obstante, y aunque parezca muy obvio, las bases de datos computarizadas almacenan objetos, es decir, es un contenedor de objetos; lo que implica que cada base de datos puede contener objetos como tablas, índices, procedimientos almacenados, funciones, vistas, etc. Luego entonces, por ejemplo, un sistema de nómina puede tener 10 tablas, 5 vistas, 20 índices, etc., todos dentro de la misma base datos. Realmente los datos se almacenan en las tablas de las bases de datos; generalmente de forma estructurada, como es común en los registros llamados “normales”, sin embargo, esto no aplica cuando se requiere almacenar datos que no tienen una configuración común como los archivos multimedia y documentos de texto.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-6.svg')
        .row
          .col-md-7.mb-4.mb-md-0
            p Sin embargo, esta realidad y maravillas actuales, no han existido siempre. Comparando sus inicios, por allá en los años 1960, cuando se hablaba de las bases de datos de navegación, que no era más que una base de datos jerárquica basada en un modelo de árbol que hacía posible relaciones de uno a muchos, para luego evolucionar a las bases de datos de red, que ya permitía relaciones múltiples, que realmente fueron las primeras herramientas que permitían un almacenamiento y manipulación de datos, cercano a lo que se conoce hoy. Luego en la década de 1980, donde las bases de datos relacionales revolucionaron al mundo del <em> software</em>, a tal punto que incluso hoy, las seguimos utilizando. Cuando aparecieron las bases de datos orientadas a objetos, ya en los años 1990 y finalmente por estos días, trabajamos con las bases de datos NoSQL, que aparecen como necesidad apremiante y obligatoria en el <em>boom</em> insospechado de internet e imperiosa de contar con mayor y mayor velocidad para el manejo de los datos no estructurados, como su nombre lo indica. Todo lo anterior, para facilitar las bases de datos en la nube e incluso las de autogestión, que vislumbran un futuro inmediato prometedor y que genera muchas expectativas puesto que la gestión de almacenamiento de datos aún tiene puntos más altos que aprovechar y explotar (Wanumen et al., 2017).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-7.svg')


    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipos de bases de datos

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-6.mb-5

          figure
            img(src='@/assets/curso/temas/tema1/img-8.svg')

      .col-md-6.col-lg-6
        p Actualmente el marketing es una fuente de ventas y aumento de ellas; en todos los campos de la sociedad moderna, todas las empresas buscan mejorar sus ingresos, aumentado sus ventas, basados en distintos modelos de divulgación y estrategias comerciales, que tienen un denominador común: las bases de datos. Es tanto el auge exponencial de este campo, que se hacen chistes, memes al respecto y hasta se plantean teorías conspirativas en torno a que las gigantes corporativas nos escuchan y hasta nos leen los pensamientos. Lo que es necesario que se tenga claro es que estas estrategias, acciones y demás aspectos del tema, parten de una simple base datos de sus clientes, es decir, el principio es muy simple: ¿qué se le puede ofrecer a los clientes si no se sabe que necesitan? Esto traduce en que se debe tener la información clave de los clientes para poder tomar las decisiones correctas en cuanto al ofrecimiento de uno u otro producto, lo cual desemboca en escoger el tipo de base datos que se requiere, teniendo en cuenta que el merado nos ofrece varias posibilidades, (Valderrey, 2020).

    p.mb-5 Las bases de datos nos presentan una amplia gama de posibilidades, dependiendo de la necesidad que tenga el proyecto de desarrollo de software en construcción, lo cual da la facilidad de utilizar específicamente la que cubra esa necesidad. Se presentan a continuación algunos tipos: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-9.svg')
          .tarjeta.fnd-5.p-3(x="41.8%" y="31%" numero="1")
            h3 Bases de datos relacionales: 
            p conjunto de tablas, con sus relaciones, cada tabla, está compuesta por filas y columnas que componen los registros y cada registro o fila tiene un dato único e irrepetible.
          .tarjeta.fnd-5.p-3(x="64.2%" y="25%" numero="2")
            h3 Bases de datos orientadas a objetos:
            p la información que se maneja en ellas se representa en forma de objetos. 
          .tarjeta.fnd-5.p-3(x="26.3%" y="60%" numero="3")
            h3 Almacenes de datos:
            p creados para manejo de datos a gran escala.
          .tarjeta.fnd-5.p-3(x="69.3%" y="59.1%" numero="4")
            h3 Bases de datos NoSQL: 
            p hacen posible el almacenamiento de grandes cantidades de información, sin la utilización de las relaciones entre sus objetos.

        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.img-44(src="@/assets/curso/temas/tema1/img-10-.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para conocer un poco más sobre los diferentes tipos de bases de datos se le invita a consultar el siguiente documento.  
                .col-sm-auto
                  a.boton.color-acento-botones.nn(:href="obtenerLink('downloads/CF7_228130_Anexo.pdf')" target="_blank")
                    span.nn Descargar
                    i.nn.fas.fa-file-download

    separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Archivos planos
    p.mb-5 A continuación, información importante para tener en cuenta sobre los archivos planos: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
            img(src='@/assets/curso/temas/tema1/img-10.svg')
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-4 fnd-7")
          .row(titulo="Definición")
              p Los archivos planos son una recopilación de información que está guardada digitalmente y se puede acceder a ella muy organizadamente en una base de datos. Muchas veces, es utilizada para guardar información, con la condición de que no es estructurada.
          .row(titulo="Uso")
              p Es imposible ocultar que cuando se pretenden trabajar con una cantidad grande de información, es muy incómodo. Uno de los casos más frecuentes de la utilización de archivos planos, son los famosos documentos CSV (valores separados por coma), que, como su nombre lo indica, presenta cada campo o columna separados por una coma. Además, la información almacenada en este tipo de archivos (CSV), respetan el estándar estadounidense conocido como Código ASCII, utilizado mundialmente para el intercambio de información.
          .row(titulo="Contenido")
              p El contenido propiamente dicho de los archivos planos, realmente no tiene un formato especifico, salvo algunos datos alfanuméricos. Ahora bien, las longitudes de cada columna o campo, adicionado a los antes citados formatos, definen la estructura de la información almacenada en ellos.
          .row(titulo="¿Qué es?")
              p Una base de datos de archivo plano no es más que un repositorio bidimensional simple de datos afines, los cuales están organizados en filas o registros, dentro de dichas filas en columnas o campos. Por supuesto que cada fila tiene el mismo tipo de datos que su correspondiente de otras filas del archivo plano. Todo esto define cada columna con sus tipos de datos, estableciendo un límite en la cantidad de caracteres disponibles para representar la información del mencionado campo. Como es apenas lógico en este tipo de archivos, separamos cada campo por una coma, cuyo carácter ASCII es la combinación de teclas Alt + 44, aunque también se separan por un retorno de carro, cuyo carácter ASCII es la combinación de las teclas Atl + 13.
          .row(titulo="Características")
              p Las bases de datos de archivos planos, carecen de un límite predeterminado para el número de filas o registros, muy a pesar de la dificultad de su manejo. Esto da como resultado que el tamaño de una base de datos de archivos planos, solamente lo limitan las condiciones y características de los sistemas operativos del equipo de cómputo o en su defecto, de los correspondientes administradores de archivos. La excepción que confirma esta regla es que algunas aplicaciones de base de datos, al momento de crear bases de datos de archivos planos, tiene políticas definidas en torno a la longitud de filas, columnas y del propio archivo (Wanumen et al. 2017).
          

    separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 APIs


    .row.justify-content-between.mb-5
      .col-md-6.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/img-11.svg')

      .col-md-6.col-lg-7
        p Las API o <em>Application Programming Interface</em>, que en español quiere decir interfaz de programación de aplicaciones, son módulos que hacen posible la comunicación entre dos componentes de <em>software</em>, mediante una serie de protocolos y definiciones. Un ejemplo clásico, que incluso es parte de la vida cotidiana, son los portales del instituto de meteorología que, cumpliendo con su función, genera datos meteorológicos permanentemente y se los “comenta” a los teléfonos para que la población esté informada de los cambios climáticos, realizando actualizaciones permanentes y periódicas. Haciendo el desglose del término en español “interfaz de programación de aplicaciones”, encontramos que la palabra aplicación hace referencia un software con una función distinta al propio o actual; por su parte, Interfaz hace referencia a un mutuo acuerdo (contrato) de compartir servicios entre dos aplicaciones; dicho acuerdo hace especial énfasis y se centra en enviar y recibir solicitudes, con sus consecuentes respuestas. Finalmente, la documentación de cada API debe poseer los parámetros que los desarrolladores deben respetar para construir y/o estructurar las mencionadas solicitudes y respuestas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-3 
          p La forma más sencilla y simpe de explicar la arquitectura de las API, es utilizando el modelo cliente-servidor, donde quien envía solicitudes es el cliente y quien las responde es el servidor.  En un restaurante se tiene N cantidad de comensales, que realizan todo tipo de pedidos, son los clientes y el personal del restaurante que atiende y responde cada uno de esos pedidos, son el servidor.

    p.mb-5 Básicamente, las APIs pueden funcionar dependiendo del motivo y en qué momento fue creada, así:

    .row.justify-content-center.mb-5
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="<em>SOAP</em>") En este caso, los mensajes son intercambiados mediante XML entre el cliente y el servidor, por tal razón es más rígida, pero muy utilizada en años anteriores.  
          p.text-small(numero="2" titulo="<em>RPC</em>") Conocidas como llamadas a procedimientos remotos. 
          p.text-small(numero="3" titulo="<em>WebSocket</em>") Ya utilizando una tecnología más moderna, específicamente en el ambiente web, los mensajes se envían y reciben mediante objetos JSON, permitiendo comunicación bidireccional entre el cliente y el servidor. Esto hace a este tipo de APIs más eficientes que la anterior. 
          p.text-small(numero="4" titulo="<em>REST</em>") Son las más sencillas, flexibles y, por ende, más populares y utilizadas, porque el cliente envía sus solicitudes como datos sencillos, a lo cual el servidor responde, previo proceso, con datos de salida al respectivo cliente, (Martínez & Gallegos, 2017). 
      .col-lg-5
        figure
            img(src='@/assets/curso/temas/tema1/img-12.svg')

    separador 

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Ficheros de texto
    p.mb-5 A continuación, se mencionan algunos formatos de ficheros de texto.

    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 XML
            p El Extensible Markup Language o XML (por sus siglas en inglés), es un lenguaje de marcado que tiene estructurado y muy bien especificado un conjunto de reglas para la codificación de documentos. Precisando el concepto, lo que se llama “lenguaje de marcado” es una serie de reglas con sus consecuentes códigos, que se emplean para analizar información, previamente leída de textos que anteriormente fueron creados por humanos o computadores. En otras palabras, un poco menos técnicas, XML nos provee de una plataforma para especificar elementos que permitan la creación de formatos y elaborar un lenguaje que puede llegar a ser personalizado. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')    
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 XML
            p La estructura propiamente dicha de un archivo XML tiene dos grandes partes:<em> prolog y body.</em> El<em> prolog </em>se fundamenta en los llamados metadatos administrativos, que pueden ser declaración XML o también instrucción de procesamiento opcional, incluso declaración de tipo de documento y, finalmente, comentarios. A su vez el<em> body </em>se divide en dos, la estructural y el propio contenido, que también las encontramos en los textos simples.  El XML es utilizado en muchos servicios web, puesto que es muy simple, general y muy fácil de usar; al punto que hay sistemas, que específicamente, se dedican a brindar ayuda a los lenguajes que utilizan esta tecnología, incluyendo <em>APIs</em> especializadas en el procesamiento de este tipo de datos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')    
        .row.align-items-center
          .col-lg-8
          .col-md-7.mb-4.mb-md-0
            h3 XML
            p El XML nació realmente como una evolución y optimización de su predecesor, el lenguaje SGML <em>(Standard Generalized Markup Language)</em>, que consiste en un formato antiguo que fue utilizado exactamente con la misma finalidad.  La entrada en vigencia del XML fue definitiva y contundente puesto que, en la actualidad, está presente en la gran mayoría de los dispositivos electrónicos, partiendo de las computadoras de los autos, hasta llegar a los mismos teléfonos móviles; sin perder de vista que su principal función es la transmisión de datos en todo el mundo del desarrollo <em>web</em>.  Se puede decir que el XML evolucionó para facilitar y mejorar el uso (y hasta abuso), de los datos que circulan en internet, lo cual implica que las funciones fueron repartidas de tal manera que HTML sea el encargado de la presentación o la visual de la red y XML el encargo de la información, con sus consecuentes estructuras. Finalmente se debe tener en cuenta que XML es un metalenguaje, puesto que además es utilizado para la creación de nuevos lenguajes, como es el caso del XHTML que fue creado con una combinación de etiquetas HTML con código XML (Martínez & Gallegos, 2017). 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')    
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 JSON
            p <b>JSON</b> quiere decir <em>JavaScript Object Notation </em>(por sus siglas en inglés), que en español significa algo como notación de objetos de <em>JavaScript</em>; es un formato para el intercambio de datos que es muy sencillo de leer y, lo más importante, de escribir para los desarrolladores e igualmente sencillo de interpretar y crear para las computadoras. Es muy importante dejar claro que JSON es un formato de texto, completamente independiente de todos los lenguajes de programación, no obstante, para su construcción, se utilizan términos muy conocidos por los programadores, por su semejanza con herramientas de programación como <em>Java, C, C++, Python, JavaScript, Perl, C#,</em> por mencionar los más utilizados. JSON básicamente utiliza seis tipos de datos, a saber: cadenas, booleanos, matrices, objetos, numéricos y nulo. Es necesario precisar que por llevar el nombre <em>JavaScript </em>en sus siglas, no es necesariamente parte de este lenguaje, también debe quedar claro que se trata de un estándar que se basa en texto plano, utilizado en el intercambio de datos, es decir, cuando se requiere que un aplicativo le envíe información a otro aplicativo y dichos datos sean de fácil lectura e interpretación. Otro aspecto a tener en cuenta aclarar, por la cantidad de confusión que produce, es que JSON no es un lenguaje de programación, reiteramos, se utiliza solo para transferir datos. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png')    
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 JSON
            p Uno de los aspectos que resalta la importancia de su funcionamiento consiste en que es un formato independiente de todos los lenguajes de programación, es decir, los servicios que comparten datos mediante  JSON no necesitan hablar el mismo idioma, lo cual indica que el emisor y el receptor pueden ser dos herramientas de desarrollo completamente diferentes como<em> Python y Java</em>; simplemente porque cada uno de ellos, tiene su propia forma y herramientas (librerías, etc.) para codificar y decodificar los mensajes. A medida que va pasando el tiempo, JSON se está afianzando como la más importante alternativa de XML, por su potencia para serializar y deserializar objetos de casi todas las herramientas de programación.
            p Su funcionamiento está basado en la estructuración de una colección de pares con nombre y valor, cuyo contenido es:
            ul.lista-ul--color
              li 
                i.fas.fa-circle.circle
                p Clave que cumple con la función de identificador del contenido. 
              li 
                i.fas.fa-circle.circle
                p Valor que, a su vez, es el encargado de representar el contenido correspondiente. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png')    
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 JSON
            p JSON surge en la década de los 90, cuando se presenta la necesidad de que computadoras con aplicativos diferentes “hablaran” el mismo idioma, es decir, compartieran información, muy a pesar de sus diferencias técnicas. La solución planteada fue XML, pero los problemas surgían cuando la cantidad de información era muy alta, porque el XML hacia el procesamiento muy lento. Surgió entonces la nueva necesidad de formatos alternativos de intercambio de información, siendo JSON el de mayor éxito y utilización. Por esta razón, una de las principales características de JSON es reducir el tamaño de los archivos y por ende el volumen de datos (Martínez & Gallegos, 2017). 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png')                                










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
