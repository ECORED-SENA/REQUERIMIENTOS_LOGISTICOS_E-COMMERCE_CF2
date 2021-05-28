<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3
          span 1
      .h3 Diagnóstico en procesos logísticos
    p En la logística se integran varias actividades que de manera colaborativa y con la implementación de estrategias de una forma eficiente uniendo los componentes generan como resultado un producto o servicio al cliente en los tiempos adecuados. Normalmente se conocen cinco procesos por medio de los cuales se mide la calidad de la logística dentro de la empresa, compras, servicio al cliente, gestión de inventarios, almacenamiento y el transporte. En este sentido, y deteniéndose en el proceso para la cadena logística, se debe tener en cuenta las siguientes variables para su diagnóstico:
    figure
          img(src='@/assets/curso/img3.svg', style="max-width: 60%; margin: auto;")
    .cajon1.color-primario1.p-4.mb-4
      p Los productos sufren transformaciones a lo largo de la cadena, se pueden volver obsoletos, averiarse, no ser funcionales o devueltos al punto de origen para ser revisados o disponer de ellos de otra forma. La logística inversa puede requerir de un diseño aleatorio independiente; en la cadena de abastecimiento termina el proceso con el producto final y la inversa debe incluirse dentro de las estrategias de planificación y control.
    p.mb-4 Para conocer los diferentes conceptos de las actividades logísticas, presentamos un resumen de acuerdo a los autores relacionados en la siguiente tabla:
    TabsC.color-primario.mb-4
      .py-3.py-md-4(titulo="Eduardo Arbonés")
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
          .col-lg-6.mb-4.mb-md-0
            .h4 Actividades logísticas
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Gestión de almacenes
              li
                i.fas.fa-angle-right
                | Manejo de materiales
              li
                i.fas.fa-angle-right
                | Gestión de inventarios
              li
                i.fas.fa-angle-right
                | Previsión de demanda
              li
                i.fas.fa-angle-right
                | Organización de transportes
              li
                i.fas.fa-angle-right
                | Localización y dimensionamiento de
              li
                i.fas.fa-angle-right
                | Instalaciones de producción y almacenaje
              li
                i.fas.fa-angle-right
                | Administración de las esperas
      .py-3.py-md-4(titulo="Ronald Ballou")
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
          .col-lg-6.mb-4.mb-md-0
            .row
              .col-6
                .h4 Claves
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Definición de estándares de servicio
                  li
                    i.fas.fa-angle-right
                    | Transporte
                  li
                    i.fas.fa-angle-right
                    | Manejo de inventarios
                  li
                    i.fas.fa-angle-right
                    | Procesamiento de pedidos
              .col-6
                .h4 De soporte
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Almacenamiento
                  li
                    i.fas.fa-angle-right
                    | Manejo de materiales
                  li
                    i.fas.fa-angle-right
                    | Compras
                  li
                    i.fas.fa-angle-right
                    | Cooperación con producción y operaciones

                  li
                    i.fas.fa-angle-right
                    | Mantenimiento de información
      .py-3.py-md-4(titulo="D. Bowersox y D. Cross")
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
          .col-lg-6.mb-4.mb-md-0
            .h4 Actividades logísticas
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Transportes
              li
                i.fas.fa-angle-right
                | Inventarios
              li
                i.fas.fa-angle-right
                | Soportes de manufactura
              li
                i.fas.fa-angle-right
                | Distribución
      .py-3.py-md-4(titulo="CSCMP")
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
          .col-lg-6.mb-4.mb-md-0
            .h4 Actividades logísticas
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Administración de transporte interno y externo
              li
                i.fas.fa-angle-right
                | Administración de fletes
              li
                i.fas.fa-angle-right
                | Manejo de materiales
              li
                i.fas.fa-angle-right
                | Almacenamiento
              li
                i.fas.fa-angle-right
                | Diseño de redes logísticas
              li
                i.fas.fa-angle-right
                | Manejo de inventarios
              li
                i.fas.fa-angle-right
                | Planeación oferta/demanda
              li
                i.fas.fa-angle-right
                | Administración de proveedores de servicios logísticos
      .py-3.py-md-4(titulo="Jordi Pau i Cos")
        .row.align-items-center
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 100%; margin: auto;")
          .col-lg-6.mb-4.mb-md-0
            .row
              .h4 Actividades logísticas
              .col-6
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Previsiones
                  li
                    i.fas.fa-angle-right
                    | Gestión de órdenes
                  li
                    i.fas.fa-angle-right
                    | Expedición de productos de los depósitos al consumidor
                  li
                    i.fas.fa-angle-right
                    | Gestión de Stock productos acabados
                  li
                    i.fas.fa-angle-right
                    | Manutención de los depósitos de distribución
                  li
                    i.fas.fa-angle-right
                    | Transporte de fábrica a los depósitos
                  li
                    i.fas.fa-angle-right
                    | Acondicionamiento y embalaje
              .col-6
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Programación de fábrica
                  li
                    i.fas.fa-angle-right
                    | Almacenes de fábrica
                  li
                    i.fas.fa-angle-right
                    | Control de obra en curso
                  li
                    i.fas.fa-angle-right
                    | Suministro, alinea y transporte
                  li
                    i.fas.fa-angle-right
                    | Almacenes de materias primas
                  li
                    i.fas.fa-angle-right
                    | Transporte de materias primas
                  li
                    i.fas.fa-angle-right
                    | Gestión de stock de materias primas
                  li
                    i.fas.fa-angle-right
                    | Cálculo de necesidades
                  li
                    i.fas.fa-angle-right
                    | Aprovisionamiento
    p A partir de la información anterior, se puede notar que existe similitud en gran parte de los autores referenciados, en cuanto a las actividades que conforman el proceso logístico y más cuando se asocian en funciones, ya que se reparten en cuatro temas: aprovisionamiento, producción, operaciones y distribución.
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
