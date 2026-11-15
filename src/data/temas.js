export const ASIGNATURAS = [
  {
    id: "edificacion-1",
    nombre: "Edificación I",
    temas: [
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
  },
  {
    id: "construccion-2",
    nombre: "Construcción II",
    temas: [
      {
        id: "tema-ejemplo-c2",
        ruta: "Bloque 1 › Tema 1",
        titulo: "Próximo tema de Construcción II",
        fuente: "apuntes.pdf",
        proc: [
          {
            t: "1 · Introducción",
            s: ["Tema preparado para recibir nuevos apuntes."],
            c: null
          }
        ],
        casos: [],
        cards: [],
        glo: []
      }
    ]
  }
];
