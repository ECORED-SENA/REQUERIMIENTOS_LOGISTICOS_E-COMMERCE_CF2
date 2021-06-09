<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3
          span 3
      .h3 Logística inversa
    p.mb-4 La logística inversa es lo contrario de la cadena de suministro estándar. Los bienes se mueven desde el usuario final hasta el vendedor o el fabricante. Puede incluir las devoluciones del comercio electrónico y la venta al por menor, así como los componentes para el reacondicionamiento y la refabricación. Los productos pueden revenderse o eliminarse definitivamente.
    .row.mb-5
      .col-lg-5.bg-color2.p-5
        p(style="margin-top: 20px") Es el procedimiento inverso de la logística tradicional, en vez de llevar un producto de fábrica al consumidor, es el proceso de recoger un bien no aceptado ya sea por imperfecciones o fin de vida útil del consumidor a la fábrica o lugar determinado para este tipo de devoluciones.
      .col-lg-7.bg-color3.p-5
        p(style="background-color: #F2FCFD; padding: 50px; margin:-25px") La gestión de las devoluciones es el proceso de gestión de la cadena de suministro que las empresas utilizan para todas las actividades relacionadas con las devoluciones, la logística inversa, el control y la evasión dentro de la empresa y en todos los elementos de la cadena de suministro. Es el equivalente a la gestión de los envíos de salida.
    .row.align-items-center.mb-4.bg-color4
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img10.svg', style="max-width: 80%; margin: auto;")
      .col-lg-6
        p.mb-4 Se estima que las devoluciones de los clientes de mercancía general son aproximadamente del 6%, aunque las tasas de devolución varían significativamente según el sector. En muchos sectores, aprender a gestionar el flujo inverso es de suma importancia, porque un gran volumen de productos devueltos representa un costo significativo. Además del costo de producir y transportar el producto, la empresa puede tener que afrontar los costos de pérdida del producto.
        p Las devoluciones son una parte esperada del comercio hoy en día, por lo que la falta de un programa completo decepcionará a los consumidores, lo que provocará malas críticas y la pérdida de cuota de mercado. Los clientes son más propensos a comprar si entienden la política de devoluciones, incluso, si no devuelven el producto. Un proceso de devolución respaldado por un sistema de logística inversa les da tranquilidad especialmente para el comercio electrónico.
    p.mb-5 La logística inversa se utiliza cuando las mercancías se trasladan desde su destino final a otro lugar para recuperar su valor o para su eliminación final. El producto puede ser devuelto porque no se ajusta a las necesidades del cliente o porque ha llegado al final de su vida útil.
    figure
      img(src='@/assets/curso/img1.png', style="max-width: 100%; margin: auto;")
    figcaption Fuente: Monroy N & Ahumada C, 2006
    .row.justify-content-center.mt-5.mb-5
      .col-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Posibles cadenas de suministro en un proceso
    .hr1
    .bloque-texto-b.color-secundario.p-4.mb-5
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        span.p.mb-0 En el proceso de la logística encontramos la cadena de suministros, que se ocupa del producto desde materias primas hasta el producto final, lo cual incluye procesos como logística inversa y flujo más difícil, puesto que la cadena no termina en consumidores, contempla el post-uso. En logística se conocen diferentes tipos de cadenas que manejan el desarrollo de logística inversa, estos dependen de quien recupera el producto y para qué es recuperado de acuerdo con su naturaleza. Es un proceso cerrado. En la gráfica de posibles cadenas de suministro en un proceso, se muestra que el primer tipo se da cuando el producto es recuperado por la misma empresa productora, (cadena 1, ejemplo llantas Michelin - Icollantas). En la segunda cadena, la empresa productora recupera su propio producto y el de la competencia, para alcanzar el límite de volumen necesario y realizar el proceso, (cadena 2, ejemplo baterías MAC). En tercer lugar, se presenta el caso en el cual la empresa que recupera el producto es distinta a la productora, y los residuos se utilizan para el mismo producto. (cadena 3, ejemplo Ofipaim, que recupera cartuchos de impresión de la competencia, usados, para producir sus cartuchos). Por último, se puede presentar el caso en el cual la empresa que recupera el producto es distinta a la productora, y este es utilizado para un proceso de producción completamente distinto al original, (cadena 4, ejemplo Tetrapak – Cantonal-Ecoplak, quienes utilizan los empaques usados, para producir cartón y maderas sintéticas)
        i.fas.fa-quote-right
      .bloque-texto-d__autor 
        p.mb-0 #[b - (Monroy, 2006)]
    .cajon2.color-primario2.p-4.mb-5
      p En este sentido, las empresas emplean más esfuerzos en estrategias para conseguir clientes uniendo a los participantes del proceso de distribución, buscando de esta forma integrar eficiencia en la logística, en la que perfeccionan los procesos de transporte y embalaje, ofreciendo así una satisfacción al cliente de manera oportuna, disminuyendo costos de elaboración, e incluso de impacto ambiental. Se puede entonces afirmar que la logística inversa puede referirse a cualquiera de las siguientes actividades después de la compra inicial:
    .row.mb-5.justify-content-center
      .col-8
        figure
          img(src='@/assets/curso/img11.svg', style="max-width: 100%; margin: auto;")
    p.mb-4 El flujo inverso es otro término para la logística inversa en la cadena de suministro. Incluye la planificación, la aplicación y el control del flujo de entrada eficiente, así como el almacenamiento de mercancías y la información relacionada para recuperar el valor o la eliminación adecuada.
    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-4 El proceso depende de la empresa, pero esencialmente la logística inversa implica cualquier proceso o gestión posterior a la venta del producto. Comienza con un motivo de devolución y el cliente se pone en contacto con la parte adecuada para iniciar la devolución. En el caso de muchos productos de venta al por menor, el fabricante pide al usuario final que se ponga en contacto con él directamente en lugar de devolver el producto a la tienda. La parte responsable organiza el transporte del producto devuelto, lo que puede implicar el envío de una etiqueta de envío para la recogida de un paquete, o la organización de la recogida en camión para los artículos más grandes. El artículo devuelto debe tener el mismo nivel de visibilidad que tiene un paquete de salida.
        p El objetivo principal de la logística inversa es recuperar el valor de los activos para aumentar los ingresos y reducir los gastos. Establecer una estrategia de logística inversa también puede impulsar la eficiencia de una cadena de suministro tradicional al separar las operaciones.
      .col-lg-6
        figure
          img(src='@/assets/curso/img12.svg', style="max-width: 100%; margin: auto;")
    .cajon1.color-primario1.p-4.mb-5
      p La logística tradicional, consiste en llevar el producto al mercado y utilizar sistemas de información automatizados para el seguimiento de los artículos. La cadena de suministro directa abarca el desarrollo de productos, la fabricación, la distribución y la entrega a los usuarios finales. La logística inversa se refiere a todas las operaciones relacionadas con el traslado de las mercancías desde el usuario final para recuperar el valor de los productos o para su correcta eliminación.
    .row.mb-5.justify-content-center
      .col-10
        figure
          img(src='@/assets/curso/img13.svg', style="max-width: 100%; margin: auto;")
    p.mb-5 Factores claves que hay que tener en cuenta a la hora de planificar la logística inversa en un comercio electrónico. Los consumidores de todo tipo consideran que las devoluciones son una parte crucial de cualquier propuesta de valor. Para el comercio electrónico y los vendedores minoristas, las devoluciones rápidas y fáciles son un costo de hacer negocios. Por lo tanto, es fundamental conocer el índice de devoluciones de los productos, el costo de recogida y envío de las devoluciones y el valor potencial que se puede recuperar de los productos devueltos. Establecer un sistema de clasificación para identificar las devoluciones en función de su disposición es vital. Comprender el valor de los artículos: en el caso de algunos de bajo valor, el costo de la gestión de las devoluciones supera cualquier beneficio potencial de la recuperación.
    .h4 Procedimientos y políticas que definen la logística inversa.
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img14.svg', style="max-width: 100%; margin: auto;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p La cadena de suministro inversa se refiere al movimiento de mercancías desde el cliente hasta el proveedor o al menos un paso hacia atrás en la cadena de suministro. Devolver un motor eléctrico de un proveedor comercial al fabricante, por un defecto de embalaje, es un ejemplo de logística inversa que no implica al usuario final. Es lo contrario del movimiento tradicional de la cadena de suministro de los productos desde el proveedor hasta el cliente. La logística inversa es una perspectiva de nivel superior, que incluye el proceso global de planificación, implementación y control del flujo de entrada y almacenamiento de bienes secundarios y su información relacionada.
    p.mb-4 La logística inversa completa el ciclo de vida del producto para apoyar la utilización y reutilización de productos y materiales. Puede recuperar el valor de los artículos revendiéndolos tal cual, renovándolos o vendiéndolos a un liquidador de descuentos. Algunos materiales pueden reciclarse o enviarse para su eliminación final de forma responsable con el medio ambiente.
    .cajon2.color-primario2.p-4.mb-4
      p Sin una estrategia de logística inversa, una empresa perderá ingresos potenciales por recuperación de activos y satisfacción del cliente porque no tiene un sistema para reciclar, reutilizar o eliminar de forma segura los productos devueltos. Una solución de logística inversa satisfactoria aumenta la satisfacción del cliente y la fidelidad a la marca, ya que los clientes pueden realizar mejor las devoluciones u obtener un producto de sustitución en un plazo razonable.
    p.mb-4 Una política de logística inversa bien planificada y personalizada, puede reducir los costes de almacenamiento y distribución, mejorar la reputación de la empresa, satisfacer las necesidades de los clientes y crear una cadena de suministro más sostenible. Muchas empresas utilizan sus políticas de devolución como un diferenciador competitivo.
    .row
      .col-lg-7.mb-4.mb-lg-0
        .cajon1.color-primario1.p-4.mb-4
          p Con una estrategia integral de logística inversa, puede reducir los costos administrativos, de transporte y de asistencia, al tiempo que aumenta la velocidad de los productos. Un programa sólido de logística inversa es un factor clave para la satisfacción de los clientes, lo que conduce a un aumento de la cuota de mercado y a la mejora de los niveles de retención. Una cadena de suministro funcionará de forma más eficiente cuando esté optimizada en ambas direcciones.
        p En este sentido, la logística inversa sostenible, proporciona una serie de beneficios, desde la eliminación de las multas de las organizaciones gubernamentales por la eliminación inadecuada, hasta la mejora de la percepción pública de la empresa, así como la recuperación del valor de los activos. Una estrategia de logística inversa debe incluir planes para hacer frente a los equipos al final de su vida útil, a las retiradas de productos, la refabricación y los fallos de los equipos. Con un sistema establecido, la empresa puede responder rápidamente, reduciendo el riesgo de pleitos legales y acciones reguladoras e insatisfacción del cliente.
      .col-lg-5
        figure
          img(src='@/assets/curso/img15.svg', style="max-width: 100%; margin: auto;")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
