import React, { ReactElement } from "react";

import { Box, ListItem, OrderedList, Stack, Text, UnorderedList } from "@chakra-ui/react";

/**
 * Terms and conditions component
 * @returns {ReactElement} terms and conditions
 */
export const TermsAndConditionsText = (): ReactElement => (
  <Stack spacing={3}>
    <Text>
      Los presentes Términos y Condiciones (los <u>“Términos y Condiciones”</u>) representan un
      acuerdo jurídicamente vinculante que rige la prestación de servicios (los <u>“Servicios”</u>)
      entre <b>GETKOOP, S.A.P.I. DE C.V.</b> (<u>“NETA”</u>) y el cliente (el <u>“Cliente”</u> o el{" "}
      <u>“Usuario”</u> y conjuntamente con NETA, las <u>“Partes”</u>), dentro del sitio web:
      https://neta.mx/ (el <u>“Sitio”</u> o la <u>“Plataforma”</u>).
    </Text>
    <Text>
      NETA declara ser una Sociedad Anónima Promotora de Inversión de Capital Variable debidamente
      constituida, registrada y válidamente existente de conformidad con las leyes de México.
    </Text>
    <Text>
      Declara el Usuario en caso de ser una persona física que cuenta con la mayoría de edad y con
      la capacidad legal para contratar y contraer toda clase de obligaciones. En caso de ser una
      persona moral, el Usuario declara tener capacidad para contratar a nombre de tal entidad y de
      obligar a la misma, conforme a lo establecido en estos Términos y Condiciones.
    </Text>

    <Stack spacing={3}>
      <b>1. Aceptación Expresa</b>
      <Text>
        El Usuario acepta haber leído y entendido todas las condiciones establecidas en los
        presentes Términos y Condiciones y en el Aviso de Privacidad, así como en los demás
        documentos incorporados a los mismos por referencia.
      </Text>
      <Text>
        En caso de que el Usuario no acepte estos Términos y Condiciones o no le son comprensibles
        en su totalidad, deberá abstenerse de utilizar la Plataforma de NETA.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>2. Definiciones</b>
      <Text>
        <b>2.1. Aviso de Privacidad: </b>se refiere a las políticas de privacidad de NETA, las
        cuales se encuentran debidamente publicadas en la Plataforma.
      </Text>
      <Text>
        <b>2.2. Carrito Virtual: </b>se refiere a la herramienta informática desplegada en la
        Plataforma que permitirá al Usuario identificar el o los Productos que haya preseleccionado
        para realizar una transacción.
      </Text>
      <Text>
        <b>2.3. Orden de Compra: </b>se refiere a el pedido particular de un Usuario para la compra
        de determinados Productos a través de la Plataforma. En la Orden de Compra se detalla la
        cantidad a comprar, el tipo de producto, el precio, las condiciones de pago y otros datos
        importantes para llevar a cabo la operación comercial.
      </Text>
      <Text>
        <b>2.4. Productos: </b>se refiere a los bienes y mercaderías de abarrotes, comercializados a
        través de la Plataforma.
      </Text>
      <Text>
        <b>2.5. Punto de Entrega: </b>se refiere al establecimiento comercial que el Cliente elija
        para recoger los Productos y realizar el pago de los mismos.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>3. Uso de la Plataforma</b>
      <Text>
        NETA exhibe a través de la Plataforma los Productos con su respectiva descripción con el fin
        de que el Cliente seleccione el o los Productos de su interés, que se irán reflejando en el
        Carrito Virtual. Al momento de seleccionar la opción de pago, la Plataforma mostrará un
        total a pagar, consistente en la suma del precio de todos los Productos seleccionados. Una
        vez el Usuario esté de acuerdo con el precio final y con los Productos seleccionados, deberá
        llenar un formulario con los siguientes datos, mismos que recibirán el tratamiento que se
        establece en el Aviso de Privacidad de NETA:
      </Text>
      <Box ml="30px">
        <OrderedList>
          <ListItem>Nombre completo</ListItem>
          <ListItem>Número de teléfono móvil o cuenta de correo electrónico</ListItem>
          <ListItem>Punto de Entrega que más le convenga.</ListItem>
        </OrderedList>
      </Box>
      <Text>
        Una vez llenado el formulario, se generará una Orden de Compra y el Cliente recibirá un
        mensaje con la confirmación del pedido. NETA se reserva el derecho de solicitar algún
        comprobante y/o dato adicional para efectos de corroborar los datos proporcionados.
      </Text>
      <Text>
        En cuanto esté listo el pedido en el Punto de Entrega, se le enviará un mensaje de texto al
        Cliente indicandole que ya puede recoger sus Productos. El Cliente deberá tener en cuenta
        que existen circunstancias imprevistas o extraordinarias que pueden afectar la fecha de
        entrega.
      </Text>
      <Text>
        NETA se reserva el derecho de rechazar cualquier solicitud de compra, sin que esté obligado
        a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a
        indemnización o resarcimiento.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>4. Entrega de los Productos y Pago</b>
      <Text>
        La entrega de los Productos se hará únicamente en el Punto de Entrega seleccionado por el
        Cliente, en la fecha que NETA le haya comunicado a éste por medio de un mensaje de texto o
        de un correo electrónico
      </Text>
      <Text>
        El Cliente podrá recoger el pedido personalmente, para lo cual deberá presentar el número de
        pedido junto con una identificación o bien designar a otra persona para que recoja el pedido
        en su nombre, en cuyo caso, ésta deberá presentar el número de pedido junto su propia
        identificación
      </Text>
      <Text>
        El Cliente recibirá los Productos una vez haya realizado el pago completo de los mismos,
        incluidos aquellos cargos adicionales que se pudieran llegar a incurrir por gastos de envío
        o bien en el momento de la entrega.
      </Text>
      <Text>
        A efectos de los presentes Términos y Condiciones, se entenderá que el pedido ha sido
        &quot;entregado&quot; en el momento en el que el Cliente o un tercero indicado por el mismo,
        adquiera la posesión material de los productos en el Punto de Entrega convenido.
      </Text>
      <Text>
        Los riesgos de los productos estarán a cargo del Cliente a partir del momento de su entrega.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>5. Disponibilidad</b>
      <Text>
        Es posible que ciertos Productos no se encuentren disponibles una vez que el Cliente haya
        generado la Orden de Compra, por cuestiones ajenas al control de NETA. En ese caso, NETA se
        comunicará con el Cliente, y le dará las siguientes opciones: (i) solicitar la sustitución
        del o de los Productos cuya disponibilidad se haya agotado, o (iii) esperar a que dichos
        Productos vuelvan a tener disponibilidad, en cuyo caso se le avisará al Cliente de
        inmediato.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>6. Descripciones del producto</b>
      <Text>
        Toda la información acerca de los Productos contenida en nuestra Plataforma se proporciona
        únicamente con fines informativos. Antes de usar los Productos el Usuario siempre deberá
        leer las etiquetas, advertencias e instrucciones de uso de los productos. NETA intenta ser
        tan preciso como sea posible, pero no garantiza que las descripciones o el contenido de
        cualquier otro servicio sea preciso, completo o libre de errores. Si el Cliente considera
        que un producto ofrecido en la Plataforma no cumple con su descripción, podrá devolverlo,
        siempre y cuando sea devuelto sin haberse utilizado y siguiendo el proceso descrito en el
        punto 15 de los presentes Términos y Condiciones
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>7. Precios</b>
      <Text>
        Excepto que se indiquen de manera separada, todos los precios mostrados a través de la
        Plataforma de NETA incluyen los impuestos aplicables.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>8. Promociones</b>
      <Text>
        NETA se reserva el derecho de ofrecer descuentos y promociones a los Usuarios como parte de
        campañas de marketing para incentivar el uso de la plataforma, entre otras razones.
        Cualquier concurso o promoción presentado o publicado en la Plataforma se regirá por las
        normas que se describen en relación con el concurso o promoción.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>9. Facturas</b>
      <Text>
        La factura correspondiente al Servicio de NETA puede ser solicitada enviando un correo
        electrónico a <u>diego.yarza@neta.mx</u> dentro de un plazo de 7 días naturales contados
        desde la fecha de la compra. Es responsabilidad del Usuario introducir correctamente y
        revisar los datos de facturación antes de solicitar la generación de la factura.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>10. Obligaciones del Cliente</b>
      <Text>
        Con la aceptación de los presentes Términos y Condiciones de uso de la Plataforma, el
        Usuario se obliga a:
      </Text>
      <Box ml="30px">
        <UnorderedList>
          <ListItem>
            Proporcionar información verdadera al momento de realizar una transacción a través de la
            Plataforma.
          </ListItem>
          <ListItem>
            Pagar oportunamente en el Punto de Entrega la contraprestación económica definida en el
            proceso de compra.
          </ListItem>
          <ListItem>
            En general, todas aquellas conductas necesarias para la ejecución de la transacción,
            como i) la recepción de los productos solicitados, ii) exhibir la identificación en caso
            de compra de productos de uso restringido, iii) verificar al momento de la validación
            que los Productos seleccionados sí corresponden a los necesitados, iv) informarse sobre
            las instrucciones de uso y consumo de los Productos y v) pagar el precio en el Punto de
            Entrega.
          </ListItem>
        </UnorderedList>
      </Box>
    </Stack>

    <Stack spacing={3}>
      <b>11. Prohibiciones</b>
      <Text>Los Clientes no podrán:</Text>
      <Box ml="30px">
        <UnorderedList>
          <ListItem>
            Acceder y/o usar la Plataforma para realizar actos contrarios a la moral, al orden
            público, a las buenas costumbres o actos o hechos ilícitos en contra de NETA, los Puntos
            de Entrega o terceros afiliados;
          </ListItem>
          <ListItem>
            Realizar conductas que atenten contra el buen funcionamiento de la Plataforma;
          </ListItem>
          <ListItem>Suplantar la identidad de otros consumidores;</ListItem>
          <ListItem>
            Descifrar, descompilar o apropiarse de cualquier elemento de la Plataforma o de
            cualquiera de sus partes.
          </ListItem>
        </UnorderedList>
      </Box>
      <Text>
        En caso de que el Usuario realice algún acto contrario a las leyes y/o a las prohibiciones
        establecidas en estos Términos y Condiciones, se le aplicarán las acciones legales
        pertinentes, así como también será responsable de indemnizar a NETA por los daños
        ocasionados.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>12. Límite de Responsabilidad</b>
      <Text>
        En ningún caso NETA será responsable por daños indirectos, especiales, incidentales o
        consecuenciales.
      </Text>
      <Text>
        El Cliente reconoce que todas sus decisiones se realizan única y exclusivamente a nombre y
        cuenta propia y sin injerencia ni asesoría de ningún tercero. En consecuencia, cada Cliente
        está obligado a llevar a cabo una evaluación independiente respecto de las transacciones que
        puede llevar a cabo en la plataforma de NETA, los Servicios otorgados por ésta y cualquier
        otra circunstancia relacionada con la misma.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>13. Notificaciones</b>
      <Text>
        NETA tomará como medio de contacto principal el número de teléfono móvil proporcionado por
        el Usuario así como las notificaciones que se envían al correo electrónico del Usuario.
      </Text>
      <Text>
        NETA también podrá utilizar la dirección de correo electrónico del Cliente para otras
        comunicaciones, incluidos los avisos con respecto a los Términos y Condiciones y sus
        operaciones, así como cualquier otra comunicación futura entre el Cliente y NETA.
      </Text>
      <Text>
        NETA, en ningún momento solicitará datos confidenciales de sus Clientes por medio de correo
        electrónico ni ningún medio distinto al Sitio seguro identificado con el prefijo https.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>14. Centro de atención y soporte</b>
      <Text>
        Si el Cliente recibe un producto en mal estado o un producto equivocado, deberá repórtalo
        enviado un correo electrónico a <u>diego.yarza@neta.mx </u> o mandando un mensaje de
        Whatsapp al siguiente número de teléfono 55 8819 2563 para que sea atendido.
      </Text>
      <Text>
        Asimismo, en el caso de que los Productos se encuentren incompletos el Usuario deberá
        informar a NETA de tal situación. En todo caso, no se cobrará por el faltante, por lo que el
        Usuario solo tendrá que realizar el pago de los Productos que sí le hayan entregado.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>15. Errores Técnicos</b>
      <Text>
        Es posible que, debido a factores tecnológicos, mantenimientos programados u otros factores,
        la Plataforma u otros servicios sean interrumpidos temporalmente. Si bien NETA hará todo lo
        posible para solucionar dichos factores, el Cliente acepta que NETA no es responsable por
        los daños y perjuicios derivados de dicha interrupción y renuncia a cualquier derecho o
        acción que pudiere tener en contra de NETA, por motivos de errores en el sistema.
      </Text>
      <Text>
        NETA tampoco será responsable por cualquier virus que pudiera infectar el equipo del Usuario
        como consecuencia del acceso, uso o revisión de su sitio web o a raíz de cualquier
        transferencia de datos, archivos, imágenes, textos, o audio contenidos en el mismo. Los
        Usuarios no podrán imputarle responsabilidad alguna ni exigir pago por lucro cesante, en
        virtud de perjuicios resultantes de dificultades técnicas o fallas en los sistemas o en
        Internet.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>16. Derechos de propiedad intelectual</b>
      <Text>
        El Usuario reconoce que todos los derechos de propiedad intelectual de la Plataforma y la
        tecnología de la misma, en cualquier parte del mundo pertenecen a NETA. Asimismo, reconoce
        que los derechos de la Plataforma están licenciados (no vendidos) al Usuario y que éste no
        tiene derechos sobre la Plataforma o la tecnología distintos del derecho a utilizarlos de
        conformidad con lo establecido en estos Términos y Condiciones. Por último, el Cliente
        reconoce que no tiene derecho a tener acceso al código fuente de la Plataforma.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>17. Modificaciones</b>
      <Text>
        Los presentes Términos y Condiciones podrán ser modificados, adicionados o reformados, en
        cuyo caso se actualizarán y serán puestos a disposición de los Usuarios en la Plataforma,
        siendo la última versión publicada la que regulará inmediatamente las relaciones comerciales
        que se generen al momento de realizarse la transacción.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>18. Jurisdicción y Ley Aplicable</b>
      <Text>
        Este acuerdo estará regido en todos sus puntos por las leyes vigentes en los Estados Unidos
        Mexicanos
      </Text>
      <Text>
        Cualquier controversia derivada del presente acuerdo, su existencia, validez,
        interpretación, alcance o cumplimiento, será sometida a las leyes aplicables y a los
        Tribunales competentes de la Ciudad de México, y los procedimientos se llevarán a cabo en
        idioma castellano, renunciando expresamente al fuero que pudiese corresponderle por razón de
        su domicilio presente o futuro, reconociendo que su solución, en su caso, debe hacerse por
        la vía mercantil, aplicándose el Código de Comercio y supletoriamente el Código Civil
        Federal.
      </Text>
    </Stack>

    <Stack spacing={3}>
      <b>19. Firma electrónica</b>
      <Text>
        El Cliente acepta como válidas todas aquellas comunicaciones intercambiadas por medios
        electrónicos, ya sea para la formación de acuerdos de voluntades o intercambio de
        notificaciones, teniendo en cuenta que tendrá los mismos efectos que la legislación mexicana
        otorga a la firma autógrafa, en términos del Título Segundo, del Libro Segundo, del Código
        de Comercio.
      </Text>
      <Text>
        Para esto, el Cliente deberá mantener su número de teléfono móvil y dirección de correo
        electrónico actualizada y notificar a NETA de cualquier cambio a la misma.
      </Text>
    </Stack>
  </Stack>
);
