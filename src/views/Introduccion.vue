<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    p.mb-4 El enfoque tradicional sobre logística menciona el empleo de aprovisionamiento, operaciones y distribución como lo más relevante de la logística en las empresas; una gran parte de la formación académica se orienta a la primera y última, dejando un espacio entre ellas al no incluir las operaciones desde la perspectiva logística, rol que ha desempeñado la administración de las operaciones.
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img1.svg', style="max-width: 100%; margin: auto;")
      .col-lg-6
        p El comercio de mercancías se ha incrementado por los requerimientos de los consumidores y conlleva al aumento del tráfico de mercancías, considerando que cada producto tiene un proceso de transformación para determinado fin. La logística maneja mercancías en todas sus operaciones, lo que hace necesaria la existencia de un sistema adecuado para su control. Aquí el servicio al cliente considera una serie de elementos como confianza, flexibilidad, calidad, certeza y exigencia. La logística también tiene en cuenta otros factores como los procesos de producción y se encamina al aumento de líneas de mejora y eficacia. Para un buen funcionamiento del proceso de desarrollo es importante el manejo de los sistemas de información y optimización existente, así se incrementa la competitividad en la empresa y aumenta la rentabilidad entre los factores que intervienen a fin de cumplir con la demanda local, nacional e internacional.  Lo más relevante es el mejoramiento continuo, la interacción con proveedores, transporte y administración de la empresa.
    p.mb-4 Hoy en día, los planes de producción tienen que adaptarse rápidamente a las cambiantes demandas del mercado, mientras que los métodos convencionales no pueden manejar eventos impredecibles y las alteraciones de manera satisfactoria.
    .row.mb-4.align-items-center
      .col-lg-7
        .cajon1.color-primario1.p-4.mb-4
          p La estructura logística tiene que proporcionar información distribuida sobre los estados locales y diferentes alternativas para permitir la toma de decisiones en general. Para el desarrollo y la evaluación comparativa de tales estrategias de control autónomo, los procesos locales de toma de decisiones y el comportamiento global del sistema.
        p.mb-4 Analizaremos los diferentes procesos de la logística con la finalidad de obtener un resultado para que un producto o servicio lleve su trazabilidad de forma organizada, sin obstáculos para la entrega final al cliente, involucrando aspectos como servicio al cliente, inventarios, almacenamiento y transporte.
        p Así mismo se exponen los indicadores de gestión más relevantes durante el proceso logístico. No todas las empresas han dado el paso necesario que implica establecer las áreas más importantes a analizar para que se pueda medir el éxito de su actividad en el mercado.
      .col-lg-5
        figure
          img(src='@/assets/curso/img2.svg', style="max-width: 100%; margin: auto;")
    .cajon2.color-primario2.p-4
      p Los productos devueltos pueden ser tratados de muy diversas maneras, precisamente uno de los propósitos de este componente de formación es dar a conocer cómo gestionan las empresas las devoluciones y el alcance de sus actividades de logística inversa.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
