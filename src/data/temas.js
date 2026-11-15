export const ASIGNATURAS = [
  {
    id: "edificacion-1",
    nombre: "Edificación I",
    temas: [
      {
        id: "tema-1-proceso-constructivo",
        ruta: "Tema 1 › Ley de Ordenación de la Edificación (LOE)",
        titulo: "El Proceso Constructivo y la LOE",
        fuente: "TEMA 1 EL PROCESO CONSTRUCTIVO EN LA EDIFICACION.pdf",
        proc: [
          {
            t: "1 · Concepto y Ámbito de Aplicación (Art. 2)",
            s: [
              "Definición de edificación: construcción de carácter permanente (público o privado) para uso administrativo, sanitario, residencial, docente, cultural, industrial, etc.",
              "Se consideran edificaciones las de nueva construcción (salvo construcciones sencillas de una sola planta sin carácter residencial/público).",
              "Se incluyen obras de ampliación, reforma o rehabilitación que alteren la configuración arquitectónica, volumetría o sistema estructural.",
              "Instalaciones fijas, equipamiento propio y elementos de urbanización adscritos forman parte de la edificación."
            ],
            c: "Las obras menores de escasa entidad en una sola planta y sin uso residencial/público no exigen proyecto según la LOE."
          },
          {
            t: "2 · Requisitos Básicos de la Edificación (Art. 3)",
            s: [
              "Funcionalidad: Utilización adecuada, accesibilidad para personas con movilidad reducida y acceso a telecomunicaciones.",
              "Seguridad: Seguridad estructural (resistencia mecánica y estabilidad), seguridad en caso de incendio y seguridad de utilización.",
              "Habitabilidad: Higiene, salud y protección medioambiental, protección contra el ruido, ahorro de energía y aislamiento térmico."
            ],
            c: "El Código Técnico de la Edificación (CTE) es el marco normativo que concreta las exigencias básicas de calidad."
          },
          {
            t: "3 · Agentes de la Edificación (Art. 8 a 16)",
            s: [
              "Promotor: Decide, impulsa y financia la obra. Debe ostentar derecho sobre el solar y suscribir seguros y recepción.",
              "Proyectista: Redacta el proyecto con titulación habilitante (Arquitecto, Ingeniero, etc. según el uso del edificio).",
              "Constructor: Asume contractualmente ejecutar la obra con medios humanos y materiales, designando al jefe de obra.",
              "Director de Obra (DO): Dirige el desarrollo técnico, estético y urbanístico de la obra.",
              "Director de la Ejecución de la Obra (DEO): Asume la dirección material, control de calidad y de lo edificado (habitualmente Arquitecto Técnico)."
            ],
            c: "Cada agente responde individualmente de sus obligaciones contractuales y legales según la LOE."
          },
          {
            t: "4 · Recepción y Documentación (Art. 6 y 7)",
            s: [
              "Recepción de la obra: Acto donde el constructor entrega la obra al promotor. Puede ser con o sin reservas.",
              "Plazo de recepción: Máximo 30 días desde la terminación certificada; si el promotor no se manifiesta, se entiende tácitamente producida.",
              "Libro del Edificio: Documentación final entregada a los usuarios que incluye el proyecto, actas, agentes e instrucciones de uso y mantenimiento."
            ],
            c: "El cómputo de los plazos de garantía y responsabilidad civil empieza a contar desde la firma del acta de recepción."
          },
          {
            t: "5 · Responsabilidades y Garantías (Art. 17 y 19)",
            s: [
              "10 años: Daños materiales por vicios o defectos que afecten a la cimentación, soportes, vigas, forjados o elementos estructurales.",
              "3 años: Daños por vicios o defectos en elementos constructivos o instalaciones que afecten a la habitabilidad.",
              "1 año: Daños por vicios o defectos de ejecución que afecten a elementos de terminación o acabado (responsabilidad del constructor).",
              "Garantías: Seguros de daños materiales o caución obligatorios para cubrir dichos plazos (o retención del 5% para acabados)."
            ],
            c: "El promotor responde solidariamente con los demás agentes ante los compradores por los vicios o defectos de construcción."
          }
        ],
        casos: [
          {
            k: "Plazos de Responsabilidad",
            q: "A los 4 años de entregarse un edificio aparecen grietas graves que comprometen los pilares y la estabilidad estructural. ¿Qué plazo de garantía LOE se aplica y quién responde?",
            o: ["Plazo de 3 años de habitabilidad; responde solo el constructor", "Plazo de 10 años por defectos estructurales; responden los agentes implicados (calculista, DO, DEO, constructor)", "Ya ha expirado el plazo de garantía de 1 año"],
            a: 1,
            e: "Los daños estructurales tienen una garantía y responsabilidad civil exigible durante 10 años desde la recepción de la obra (Art. 17.1.a LOE)."
          },
          {
            k: "Agentes de la Edificación",
            q: "¿Quién asume la función técnica de dirigir la ejecución material de la obra y controlar la calidad de lo edificado según la LOE?",
            o: ["El Promotor", "El Director de Obra (Arquitecto)", "El Director de la Ejecución de la Obra (Arquitecto Técnico)"],
            a: 2,
            e: "El Director de la Ejecución de la Obra (usualmente Arquitecto Técnico) asume el control cuantitativo y cualitativo de la construcción material."
          },
          {
            k: "Recepción de la Obra",
            q: "Terminada la obra y emitido el certificado final, transcurren 35 días sin que el promotor firme el acta ni exprese reservas por escrito. ¿Qué ocurre?",
            o: ["Se entiende la recepción tácitamente producida y empiezan a contar los plazos de garantía", "La obra queda paralizada administrativamente", "Se anula el certificado final de obra"],
            a: 0,
            e: "Transcurridos 30 días desde la terminación sin manifestación del promotor, la recepción se entiende tácitamente producida (Art. 6.4 LOE)."
          }
        ],
        cards: [
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía para daños estructurales según la LOE?", a: "10 años (Art. 17.1.a)" },
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía por defectos de habitabilidad (aislamiento, ruido, humedad)?", a: "3 años (Art. 17.1.b)" },
          { ty: "Pregunta LOE", q: "¿Qué documento obligatorio se entrega a los usuarios finales al finalizar la obra?", a: "El Libro del Edificio" },
          { ty: "Pregunta LOE", q: "En edificación residencial, ¿qué titulación es obligatoria para el Director de Obra (DO)?", a: "Arquitecto" },
          { ty: "Pregunta LOE", q: "En edificación residencial, ¿qué titulación es obligatoria para el Director de la Ejecución de la Obra (DEO)?", a: "Arquitecto Técnico" }
        ],
        glo: [
          ["LOE", "Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación.", "Marco legal principal del sector en España."],
          ["Promotor", "Persona física o jurídica que decide, impulsa, programa y financia las obras.", "Responsable solidario ante los compradores."],
          ["Director de Obra", "Técnico que dirige el desarrollo técnico, estético y urbanístico del proyecto.", "Forma parte de la dirección facultativa."],
          ["Director de Ejecución", "Técnico que dirige la ejecución material y controla la calidad de lo edificado.", "Controla los ensayos y materiales en obra."],
          ["Libro del Edificio", "Conjunto de documentos con la información de la obra ejecutada, agentes y mantenimiento.", "Se entrega obligatoriamente a los usuarios finales."],
          ["Recepción de obra", "Acto de entrega de la obra del constructor al promotor.", "Hito que inicia el cómputo de los plazos de garantía."]
        ]
      },
      {
        id: "zapatas-aisladas",
        ruta: "Bloque 3: Cimentaciones › Tema 7",
        titulo: "Zapatas aisladas",
        fuente: "tema7_cimentaciones.pdf",
        proc: [
          {
            t: "1 · Actuaciones previas y replanteo",
            s: [
              "Revisar planos de cimentación y estudio geotécnico (tensión admisible del terreno).",
              "Replanteo de ejes y cotas con estación total; marcar con camillas y cuerdas.",
              "Comprobar servicios afectados y medianeras antes de excavar."
            ],
            c: "Error de replanteo de ejes: la zapata queda excéntrica respecto al pilar."
          },
          {
            t: "2 · Materiales y medios auxiliares",
            s: [
              "Hormigón de limpieza HL-150/B/20, espesor 10 cm.",
              "Hormigón estructural HA-25 (o según proyecto), acero B500S, separadores homologados.",
              "Medios: retroexcavadora, vibrador de aguja, bomba o canaleta, bombeo de agua si hay nivel freático."
            ],
            c: null
          },
          {
            t: "3 · Fases de ejecución",
            s: [
              "Excavación hasta cota de proyecto, sin sobreexcavar; refino manual del fondo.",
              "Validación del terreno por la dirección facultativa (comparar con geotécnico).",
              "Vertido y nivelado del hormigón de limpieza.",
              "Colocación de armadura inferior con separadores y esperas del pilar.",
              "Hormigonado por tongadas y vibrado.",
              "Curado mínimo 7 días en climas normales."
            ],
            c: "Falta de separadores o recubrimiento insuficiente: corrosión prematura de la armadura."
          },
          {
            t: "4 · Control de calidad y recepción",
            s: [
              "Docilidad: cono de Abrams en cada amasada controlada.",
              "Resistencia: probetas para ensayo a 28 días.",
              "Comprobar dimensiones, cantos y diámetros de armadura antes de hormigonar.",
              "Rechazo: fondo con terreno blando no previsto o armadura sin recubrimiento."
            ],
            c: null
          },
          {
            t: "5 · Seguridad y salud básica",
            s: [
              "Taludes estables o entibación en zanjas profundas.",
              "Barandillas o protección perimetral en el borde de excavación.",
              "Prohibido trabajar bajo cargas suspendidas; señalista en maniobras."
            ],
            c: null
          }
        ],
        casos: [
          {
            k: "Elección técnica",
            q: "Terreno de arcillas blandas con tensión admisible muy baja (0,05 MPa) y cargas elevadas en pilares. ¿Qué solución es más adecuada?",
            o: ["Zapatas aisladas arriostradas", "Losa de cimentación o cimentación profunda", "Zapatas corridas bajo muros únicamente"],
            a: 1,
            e: "Con baja capacidad portante las zapatas aisladas necesitarían superficies enormes y se solaparían; conviene repartir cargas con losa o pasar a pilotes."
          },
          {
            k: "Diagnóstico de patología",
            q: "Aparecen fisuras inclinadas a 45° en un muro de fachada cerca de un pilar y el pilar ha descendido unos milímetros. ¿Causa más probable?",
            o: ["Retracción hidráulica del mortero", "Asiento diferencial de la zapata", "Dilatación térmica del cerramiento"],
            a: 1,
            e: "Las fisuras inclinadas junto con descenso del apoyo indican asiento diferencial: terreno heterogéneo o zapata infradimensionada."
          },
          {
            k: "Detección de errores",
            q: "En obra se hormigona la zapata directamente sobre el terreno, sin hormigón de limpieza, con recubrimiento de 30 mm. ¿Qué se incumple?",
            o: ["Recubrimiento mínimo frente al terreno y ausencia de capa de limpieza", "Nada, es una práctica admitida", "Solo el curado del hormigón"],
            a: 0,
            e: "Hay que usar hormigón de limpieza y mantener recubrimiento nominal suficiente (50 mm con limpieza, 70 mm contra el terreno)."
          }
        ],
        cards: [
          { ty: "Pregunta/Respuesta", q: "¿Para qué sirve el hormigón de limpieza bajo una zapata?", a: "Crea una superficie plana y limpia, evita la contaminación del hormigón estructural por el terreno y apoya las armaduras." },
          { ty: "Completar hueco", q: "El hormigón de limpieza suele tener un espesor mínimo de ____ cm.", a: "10 cm" },
          { ty: "Causa-Efecto", q: "Falta de separadores en la armadura inferior → ¿efecto?", a: "Recubrimiento insuficiente, corrosión de armaduras y pérdida de durabilidad." },
          { ty: "Pregunta/Respuesta", q: "¿Qué ensayo mide la docilidad del hormigón fresco?", a: "El cono de Abrams (asiento en cm)." }
        ],
        glo: [
          ["Zapata aislada", "Elemento de cimentación superficial que transmite al terreno la carga de un único pilar.", "Se dimensiona con la tensión admisible del terreno."],
          ["Hormigón de limpieza", "Capa delgada de hormigón pobre que regulariza el fondo de excavación.", "Se vierte antes de colocar la armadura."],
          ["Encepado", "Elemento de hormigón armado que solidariza la cabeza de varios pilotes.", "Cimentaciones profundas."],
          ["Coquera", "Defecto superficial por huecos o falta de mortero al hormigonar.", "Vibrado insuficiente o armadura muy densa."],
          ["Separador", "Pieza que garantiza el recubrimiento de las armaduras.", "Se coloca antes de hormigonar."],
          ["Asiento diferencial", "Diferencia de descenso entre dos puntos de la cimentación.", "Genera fisuras en cerramientos."],
          ["Camilla", "Soporte de madera con cuerda que materializa ejes y cotas.", "Fase de replanteo."],
          ["Tensión admisible", "Presión máxima que el terreno puede soportar con seguridad.", "Dato del estudio geotécnico."]
        ]
      }
    ]
  }
];
