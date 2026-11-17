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
              "Se incluyen obras de ampliación, reforma o rehabilitación que alteren la configuración arquitectónica, volumetría o sistema estructural."
            ],
            c: "Las obras menores de escasa entidad en una sola planta y sin uso residencial/público no exigen proyecto según la LOE."
          }
        ],
        casos: [
          {
            k: "Plazos de Responsabilidad",
            q: "A los 4 años de entregarse un edificio aparecen grietas graves que comprometen los pilares y la estabilidad estructural. ¿Qué plazo de garantía LOE se aplica y quién responde?",
            o: ["Plazo de 3 años de habitabilidad", "Plazo de 10 años por defectos estructurales; responden los agentes implicados", "Plazo de 1 año de acabados"],
            a: 1,
            e: "Los daños estructurales tienen una garantía y responsabilidad civil exigible durante 10 años desde la recepción de la obra (Art. 17.1.a LOE)."
          }
        ],
        cards: [
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía para daños estructurales según la LOE?", a: "10 años (Art. 17.1.a)" }
        ],
        glo: [
          ["LOE", "Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación.", "Marco legal principal del sector en España."]
        ],
        detalle: {
          tipo: "generico",
          titulo: "Esquema General de Proyecto LOE",
          descripcion: "Los agentes intervinientes en el proceso de edificación se regulan según las responsabilidades y obligaciones de la LOE."
        }
      },
      {
        id: "tema-4-cimientos",
        ruta: "Tema 4 › Cimientos y Cimentaciones Directas (DB-SE-C)",
        titulo: "Cimientos y Cimentaciones Directas",
        fuente: "TEMA 4 CIMIENTOS.pdf",
        proc: [
          {
            t: "2 · Rigidez y Control",
            s: [
              "Rigidez estructural: Rígidas si el vuelo $v \le 2h$; flexibles si $v > 2h$.",
              "Nivelación obligatoria: En edificios C-3 y C-4 es obligatorio un sistema de nivelación (precisión 0,1 mm, mín. 4 referencias)."
            ],
            c: "El espesor mínimo de la solera de asiento u hormigón de limpieza es de 10 cm."
          }
        ],
        casos: [
          {
            k: "Rigidez de Zapatas",
            q: "Una zapata aislada tiene un vuelo de 80 cm y un canto de 50 cm. ¿Cómo se clasifica estructuralmente según el DB-SE-C?",
            o: ["Zapata flexible", "Zapata rígida, ya que el vuelo ($80\text{ cm}$) es $\le 2 \times \text{canto}$ ($100\text{ cm}$)", "Zapata combinada"],
            a: 1,
            e: "Se consideran estructuralmente rígidas las zapatas cuyo vuelo es menor o igual que dos veces el canto ($v \le 2h$)."
          }
        ],
        cards: [
          { ty: "Hormigón de limpieza", q: "¿Cuál es el espesor mínimo reglamentario de la solera de asiento bajo zapatas?", a: "Un espesor mínimo de 10 cm." }
        ],
        glo: [
          ["Zapata rígida", "Aquella cuyo vuelo es menor o igual que dos veces su canto ($v \le 2h$).", "Prescripciones EHE."]
        ],
        detalle: {
          tipo: "zapata" // Usaremos el visor interactivo de zapata que ya tenías
        }
      }
    ]
  },
  {
    id: "edificacion-2",
    nombre: "Edificación II",
    temas: [
      {
        id: "tema-1-cubiertas-inclinadas",
        ruta: "Tema 1 › Cubiertas Inclinadas (Tejados) (CTE DB-HS-1)",
        titulo: "Cubiertas Inclinadas: Elementos, Puntos Singulares y Comportamiento Higrotérmico",
        fuente: "TEMA 1  CUBIERTAS INCLINADAS (Rev sept. 2016).pdf",
        proc: [
          {
            t: "1 · Geometría y Tipologías de Cubiertas Inclinadas",
            s: [
              "Definición y elementos geométricos: Faldón (plano inclinado), línea de máxima pendiente, alero (voladizo inferior), limahoya (encuentro cóncavo), limatesa (encuentro convexo), cumbrera (horizontal superior) y hastial (muro testero).",
              "Tipos de cubiertas: A un agua, a dos aguas (simétrica o con cumbrera desplazada), a tres aguas, a cuatro aguas de pabellón y de tipo mansarda.",
              "Soporte y base estructural: Tableros continuos (rasillones cerámicos con capa de mortero, fibrocemento, paneles) o soportes discontinuos con rastreles y correas."
            ],
            c: "El alero debe sobresalir como mínimo 5 cm y como máximo media pieza del soporte para evitar filtraciones y proteger el paramento."
          },
          {
            t: "2 · Comportamiento Higrotérmico y Ventilación (DB-HS-1 / DB-HE)",
            s: [
              "Cubiertas calientes (no ventiladas): El aislamiento térmico forma parte de la hoja principal sin cámara intermedia; se emplea microventilación bajo teja para evitar condensaciones.",
              "Cubiertas frías (ventiladas): La estructura portante está separada del sistema de formación de pendientes, quedando una cámara de aire ventilada intermedia que regula el comportamiento higrométrico.",
              "Condición de ventilación: El cociente entre el área efectiva total de aberturas ($S_s$ en $\text{cm}^2$) y la superficie de cubierta ($A_c$ en $\text{m}^2$) debe cumplir $3 < S_s / A_c < 30$."
            ],
            c: "Las cubiertas frías son habituales cuando no existe aprovechamiento bajo cubierta y ofrecen un excelente control frente a condensaciones."
          }
        ],
        casos: [
          {
            k: "Pendiente Mínima en Teja Curva",
            q: "Según el CTE recogido en los apuntes, ¿cuál es la pendiente mínima exigida por defecto para cubiertas inclinadas con teja curva?",
            o: ["10%", "20%", "32%"],
            a: 2,
            e: "La pendiente mínima exigida para la teja curva es del 32% (pudiendo variar según zona climática y longitud de faldón)."
          }
        ],
        cards: [
          { ty: "Pendiente Mínima Pizarra", q: "¿Cuál es la pendiente mínima exigida para cubiertas de pizarra según la tabla del DB-HS-1?", a: "60%." }
        ],
        glo: [
          ["Cubierta fría", "Sistema de cubierta ventilada donde la estructura portante y el aislamiento están separados del plano de formación de pendientes por una cámara de aire.", "Excelente control higrométrico."]
        ],
        detalle: {
          tipo: "cubierta" // Indicamos que este tema usará el detalle interactivo de cubierta inclinada
        }
      }
    ]
  }
];
