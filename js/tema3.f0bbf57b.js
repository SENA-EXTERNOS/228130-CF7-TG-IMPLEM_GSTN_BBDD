(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"02a8":function(a,e,s){a.exports=s.p+"img/img-3.67e05edf.png"},"7be8":function(a,e,s){a.exports=s.p+"img/img-1.23c684c1.png"},d260:function(a,e,s){a.exports=s.p+"img/img-2.043f5c2c.png"},eb46:function(a,e,s){"use strict";s.r(e);var i=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"curso-main-container pb-3"},[i("BannerInterno"),i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),a._m(1),a._m(2),i("AcordionA",{attrs:{tipo:"b","clase-tarjeta":"tarjeta tarjeta--azul fnd-6"}},[i("div",{staticClass:"row",attrs:{titulo:"Antecedentes"}},[i("div",{staticClass:"col-md-7 mb-4 mb-md-0"},[i("p",[a._v("Desde tiempos inmemoriales, la humanidad tiene muy presente su pasado, llegando hasta a extremos de personas que avanzan un paso, sin antes averiguar qué antecedentes al respecto registra la historia, no obstante, también existe el polo opuesto, es decir, los que no quieren ni acordarse, siquiera, de dicho pasado.")])]),i("div",{staticClass:"col-md-5"},[i("figure",[i("img",{attrs:{src:s("7be8")}})])])]),i("div",{staticClass:"row",attrs:{titulo:"Metodologías"}},[i("div",{staticClass:"col-md-7 mb-4 mb-md-0"},[i("p",[a._v("En un sistema transaccional “normal”, están a la orden del día las actualizaciones, lo cual implica que el dato actual desaparece (literalmente) y en su lugar se guarda un dato nuevo, puede ser solo de una columna o de todo el registro, si fuera necesario, el problema surge cuando se requiere, de una u otra forma, volver a contar con ese dato antiguo o desactualizado. Conclusión, solo se guarda la última versión de la información.")]),i("p",[a._v("Este concepto en el ámbito de data warehouse no aplica; de hecho, no se puede aplicar y la forma de tener registro de un historial completo, efectivo, óptimo en un sistema de data warehouse, tal que permita acceder, consultar y explorar en cualquier momento un dato específico, es aplicando las metodologías SCD ("),i("em",[a._v("Slowly Changing Dimensions")]),a._v("). En síntesis, cuando unos datos, a través del tiempo, se modifican en reiteradas ocasiones, se puede tomar uno de dos caminos:")]),i("ul",{staticClass:"lista-ul--color"},[i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("Se registran esos cambios en un historial.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("Se reemplazan o actualizan dichos cambios.")])])])]),i("div",{staticClass:"col-md-5"},[i("figure",[i("img",{attrs:{src:s("d260")}})])])]),i("div",{staticClass:"row",attrs:{titulo:"Estrategias"}},[i("div",{staticClass:"col-md-7 mb-4 mb-md-0"},[i("p",[i("em",[a._v("Ralph Kimball,")]),a._v(" el creador de data "),i("em",[a._v("warehouse")]),a._v(", propuso inicialmente, las primeras tres estrategias para trabajar con las SCD, las cuales fueron: tipo 1, tipo 2 y tipo 3. Pero con el tiempo se requirió la misma necesidad de mejora y se le adicionaron las tipo 4, tipo 5 y tipo 6; estas nuevas categorías, nacieron de los profesionales que trabajan en el tema, modelando y estudiando en profundidad dichos modelos: ")]),i("ul",{staticClass:"lista-ul--color"},[i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 0: no cambia o no se tiene en cuenta los cambios.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 1: sobreescribir.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 2: añadir fila.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 3: añadir columna.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 4: historial separado.")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 5: híbrido (1 y 4).")])]),i("li",[i("i",{staticClass:"fas fa-circle circle"}),i("p",{staticClass:"mb-0"},[a._v("SCD Tipo 6: híbrido (1, 2 y 3).")])])]),i("p",[a._v("Dependiendo del cambio que se requiera, se selecciona el tipo respectivo, incluidos los que son resultado de combinar otros, sin perjuicio de los casos donde se hace necesario utilizar varios modelos. Se debe recalcar, la importancia y obligatoriedad de utilizar claves subrogadas en las tablas de dimensiones, como requisito indispensable para poder aplicar estas técnicas. ")])]),i("div",{staticClass:"col-md-5"},[i("figure",[i("img",{attrs:{src:s("02a8")}})])])])])],1)],1)},t=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"titulo-principal color-acento-contenido"},[s("div",{staticClass:"titulo-principal__numero"},[s("span",[a._v("3")])]),s("h1",[s("em",[a._v("Slowly Changing Dimensions")]),a._v(" (SCD)")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("p",[a._v("Las Dimensiones lentamente cambiantes o SCD ("),s("em",[a._v("Slowly Changing Dimensions")]),a._v(") son dimensiones en las cuales sus datos tienden a modificarse a través del tiempo, ya sea de forma ocasional, o constante.")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("p",{staticClass:"mb-5"},[a._v("Se presentan a continuación, generalidades sobre las Dimensiones lentamente cambiantes SCD ("),s("em",[a._v("Slowly Changing Dimensions")]),a._v("):")])}],o={name:"Tema3",data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},n=o,l=s("2877"),c=Object(l["a"])(n,i,t,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=tema3.f0bbf57b.js.map