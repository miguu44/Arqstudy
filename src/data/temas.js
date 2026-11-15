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
              "Definición de edificación: construcción de carácter permanente (público o privado) para uso administrativo, sanitario, residencial, docente, cultural, industrial, etc.[cite: 6]",
              "Se consideran edificaciones las de nueva construcción (salvo construcciones sencillas de una sola planta sin carácter residencial/público)[cite: 6].",
              "Se incluyen obras de ampliación, reforma o rehabilitación que alteren la configuración arquitectónica, volumetría o sistema estructural[cite: 6]."
            ],
            c: "Las obras menores de escasa entidad en una sola planta y sin uso residencial/público no exigen proyecto según la LOE[cite: 6]."
          },
          {
            t: "5 · Responsabilidades y Garantías (Art. 17 y 19)",
            s: [
              "10 años: Daños materiales por vicios o defectos que afecten a la cimentación, soportes, vigas, forjados o elementos estructurales[cite: 15, 17].",
              "3 años: Daños por vicios o defectos en elementos constructivos o instalaciones que afecten a la habitabilidad[cite: 15, 17].",
              "1 año: Daños por vicios o defectos de ejecución que afecten a elementos de terminación o acabado[cite: 15, 17]."
            ],
            c: "El promotor responde solidariamente con los demás agentes ante los compradores por los vicios o defectos de construcción[cite: 15]."
          }
        ],
        casos: [
          {
            k: "Plazos de Responsabilidad",
            q: "A los 4 años de entregarse un edificio aparecen grietas graves que comprometen los pilares y la estabilidad estructural. ¿Qué plazo de garantía LOE se aplica y quién responde?",
            o: ["Plazo de 3 años de habitabilidad", "Plazo de 10 años por defectos estructurales; responden los agentes implicados", "Plazo de 1 año de acabados"],
            a: 1,
            e: "Los daños estructurales tienen una garantía y responsabilidad civil exigible durante 10 años desde la recepción de la obra (Art. 17.1.a LOE)[cite: 15, 17]."
          }
        ],
        cards: [
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía para daños estructurales según la LOE?", a: "10 años (Art. 17.1.a)[cite: 15, 17]" }
        ],
        glo: [
          ["LOE", "Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación.", "Marco legal principal del sector en España."]
        ]
      },
      {
        id: "tema-2-suelos",
        ruta: "Tema 2 › Suelos, Estudio Geotécnico y Acciones (DB-SE)",
        titulo: "Suelos, Estudio Geotécnico y Acciones",
        fuente: "TEMA 2 SUELOS.pdf",
        proc: [
          {
            t: "1 · Características del Solar y Estudio Geotécnico (DB-SE-C)",
            s: [
              "El Estudio Geotécnico determina características físicas, mecánicas, composición y nivel freático[cite: 19, 20].",
              "Clasificación de la construcción (C-0 a C-4) y grupos de terreno (T-1 favorables, T-2 intermedios, T-3 desfavorables)[cite: 21]."
            ],
            c: "El estudio geotécnico debe acometerse en la fase inicial de proyecto y antes de dimensionar totalmente la estructura[cite: 20]."
          }
        ],
        casos: [
          {
            k: "Estudio Geotécnico",
            q: "Se proyecta un edificio en terreno desfavorable con arcillas expansivas (Grupo T-3). ¿Qué tipo de reconocimiento se requiere?",
            o: ["Ninguno", "Sondeos mecánicos y profundidades adaptadas al grupo T-3", "Una calicata manual de 50 cm"],
            a: 1,
            e: "Los terrenos desfavorables (T-3) exigen campañas rigurosas con sondeos mecánicos según el DB-SE-C."
          }
        ],
        cards: [
          { ty: "Geotecnia", q: "¿Cuál es el número mínimo de puntos de reconocimiento a realizar en un solar?", a: "Un mínimo de tres puntos." }
        ],
        glo: [
          ["Estudio Geotécnico", "Conjunto de datos y ensayos sobre las características físicas y mecánicas del terreno para diseñar cimientos[cite: 19, 20].", "Documento obligatorio de proyecto."]
        ]
      },
      {
        id: "tema-3-replanteo-movimiento-tierras",
        ruta: "Tema 3 › Replanteos y Movimiento de Tierras",
        titulo: "Replanteos y Movimiento de Tierras",
        fuente: "TEMA 3 REPLANTEO Y MOVIMIENTO DE TIERRAS.pdf",
        proc: [
          {
            t: "2 · Seguridad y Salud en Zanjas",
            s: [
              "Entibación obligatoria/conveniente en zanjas de $h \ge 1,5\text{ m}$[cite: 57].",
              "Zona libre de cargas: mantener al menos 2 m libres de acopios y vehículos junto al borde[cite: 57, 58]."
            ],
            c: "Tras lluvias es obligatorio revisar los taludes y achicar el agua de inmediato[cite: 57]."
          }
        ],
        casos: [
          {
            k: "Seguridad en Zanjas",
            q: "¿A partir de qué profundidad en zanjas se establece la conveniencia de disponer entibación?",
            o: ["0,5 metros", "Igual o superior a 1,5 metros", "5 metros"],
            a: 1,
            e: "A partir de 1,5 m de profundidad es conveniente entibar o proteger adecuadamente la zanja[cite: 57]."
          }
        ],
        cards: [
          { ty: "Seguridad", q: "¿Qué distancia libre de cargas se debe mantener junto al borde de una zanja?", a: "Una zona de unos 2 metros[cite: 57]." }
        ],
        glo: [
          ["Entibación", "Sistema de contención temporal de paredes en zanjas[cite: 57, 58].", "Necesaria si $h \ge 1,5\text{ m}$[cite: 57]."]
        ]
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
              "Rigidez estructural: Rígidas si el vuelo $v \le 2h$; flexibles si $v > 2h$[cite: 66].",
              "Nivelación obligatoria: En edificios C-3 y C-4 es obligatorio un sistema de nivelación (precisión 0,1 mm, mín. 4 referencias)[cite: 86]."
            ],
            c: "El espesor mínimo de la solera de asiento u hormigón de limpieza es de 10 cm[cite: 78, 82]."
          }
        ],
        casos: [
          {
            k: "Rigidez de Zapatas",
            q: "Una zapata aislada tiene un vuelo de 80 cm y un canto de 50 cm. ¿Cómo se clasifica estructuralmente según el DB-SE-C?",
            o: ["Zapata flexible", "Zapata rígida, ya que el vuelo ($80\text{ cm}$) es $\le 2 \times \text{canto}$ ($100\text{ cm}$)", "Zapata combinada"],
            a: 1,
            e: "Se consideran estructuralmente rígidas las zapatas cuyo vuelo es menor o igual que dos veces el canto ($v \le 2h$)[cite: 66]."
          }
        ],
        cards: [
          { ty: "Hormigón de limpieza", q: "¿Cuál es el espesor mínimo reglamentario de la solera de asiento bajo zapatas?", a: "Un espesor mínimo de 10 cm[cite: 78, 82]." }
        ],
        glo: [
          ["Zapata rígida", "Aquella cuyo vuelo es menor o igual que dos veces su canto ($v \le 2h$)[cite: 66].", "Prescripciones EHE[cite: 66]."]
        ]
      },
      {
        id: "tema-5-cimentaciones-profundas",
        ruta: "Tema 5 › Cimentaciones Profundas y Pilotes (DB-SE-C)",
        titulo: "Cimentaciones Profundas: Pilotes y Micropilotes",
        fuente: "TEMA 5  CIMENTACIONES PROFUNDAS.pdf",
        proc: [
          {
            t: "1 · Definición y Tipos de Cimentaciones Profundas",
            s: [
              "Definición: Cimentación cuyo extremo inferior en el terreno está a una profundidad superior a 8 veces su diámetro o ancho ($> 8D$)[cite: 88].",
              "Tipos de pilotes: Por fuste ('flotantes') y por punta ('columna')[cite: 88]."
            ],
            c: "Se recurre a cimentaciones profundas cuando las superficiales no son técnicamente viables[cite: 88]."
          }
        ],
        casos: [
          {
            k: "Definición de Cimentación Profunda",
            q: "¿A partir de qué profundidad relativa se considera formalmente que una cimentación es profunda según el CTE?",
            o: ["Cuando su profundidad es superior a 2 veces su diámetro", "Cuando su extremo inferior está a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)", "Exclusivamente a partir de 15 metros"],
            a: 1,
            e: "Se considera cimentación profunda si su extremo inferior en el terreno se encuentra a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)[cite: 88]."
          }
        ],
        cards: [
          { ty: "Definición", q: "¿Cuál es el límite geométrico que define una cimentación profunda frente a una superficial?", a: "Profundidad superior a 8 veces su diámetro o ancho ($>8D$)[cite: 88]." }
        ],
        glo: [
          ["Pilote", "Elemento prismático de cimentación profunda cuya longitud es mucho mayor que su sección transversal[cite: 88, 89].", "Puede ser prefabricado o in situ[cite: 89, 90]."]
        ]
      },
      {
        id: "tema-6-muros",
        ruta: "Tema 6 › Muros de Contención y Sótano (DB-SE-C)",
        titulo: "Muros de Contención, Sótano y Pantallas",
        fuente: "TEMA 6 MUROS.pdf",
        proc: [
          {
            t: "1 · Definición y Tipologías de Muros",
            s: [
              "Definición: Elemento estructural destinado a contener tierras; trabaja fundamentalmente a flexión (como un voladizo empotrado en el cimiento)[cite: 108].",
              "Muros de gravedad: Soportan empujes con su propio peso; sin armar, trabajan a compresión[cite: 109]."
            ],
            c: "El talón no debe invadir propiedades ajenas y el tacón se prescinde si no hay problemas de deslizamiento[cite: 108]."
          }
        ],
        casos: [
          {
            k: "Tipología de Muros",
            q: "¿Cómo se denominan los muros de contención que no llevan armadura y soportan los empujes con su propio peso?",
            o: ["Muros en ménsula", "Muros de gravedad", "Muros pantalla"],
            a: 1,
            e: "Los muros de gravedad carecen de armadura y equilibran el empuje de las tierras mediante su propio peso[cite: 109]."
          }
        ],
        cards: [
          { ty: "Tipos de Muros", q: "¿Cuál es la diferencia principal de trabajo estructural entre un muro de gravedad y un muro en ménsula?", a: "El de gravedad trabaja a compresión por su propio peso; el en ménsula trabaja a flexión y requiere armadura[cite: 109]." }
        ],
        glo: [
          ["Muro de contención", "Elemento estructural que sirve de contención a un terreno, trabajando a flexión como voladizo empotrado[cite: 108].", "Regulado por el CTE DB-SE-C[cite: 132]."]
        ]
      },
      {
        id: "tema-7-estructuras",
        ruta: "Tema 7 › Estructuras y Seguridad Estructural (DB-SE)",
        titulo: "Estructuras, Elementos y Acciones",
        fuente: "TEMA 7 ESTRUCTURAS.pdf",
        proc: [
          {
            t: "1 · Definición y Elementos Componentes",
            s: [
              "Estructura: Conjunto de elementos portantes capaces de soportar cargas y transmitirlas, junto a su peso propio, hasta los cimientos[cite: 135].",
              "Elementos verticales: Pilares y muros; reciben cargas de plantas superiores y trabajan fundamentalmente a compresión[cite: 136]."
            ],
            c: "Los zunchos y brochales son elementos horizontales que transmiten cargas a vigas o pilares, o sirven de atado y formación de huecos[cite: 137]."
          },
          {
            t: "3 · Clasificación de las Acciones",
            s: [
              "Acciones permanentes (G): Actúan en todo instante con magnitud constante o variación monótona (peso propio, terreno)[cite: 140].",
              "Acciones variables (Q): Actúan o no según el uso o condiciones climáticas[cite: 140].",
              "Acciones accidentales (A): Pequeña probabilidad de ocurrencia pero gran importancia (sismo, incendio, impacto)[cite: 140]."
            ],
            c: "Las acciones se clasifican también por su variación en el tiempo, naturaleza (directas/indirectas) y respuesta estructural (estáticas/dinámicas)[cite: 141]."
          },
          {
            t: "4 · Aptitud al Servicio: Flechas y Desplazamientos",
            s: [
              "Flecha relativa con tabiques frágiles: menor que $1/500$[cite: 141].",
              "Flecha relativa con tabiques ordinarios: menor que $1/400$; resto de casos: menor que $1/300$[cite: 141].",
              "Desplazamiento horizontal (desplome total): menor que $1/500$ de la altura total del edificio; desplome local: menor que $1/250$ de la altura de planta[cite: 142]."
            ],
            c: "Las limitaciones de deformación evitan fisuraciones y daños en elementos constructivos no estructurales[cite: 141, 142]."
          }
        ],
        casos: [
          {
            k: "Clasificación de Acciones",
            q: "Según el CTE DB-SE, ¿cómo se clasifican las acciones debidas al sismo, el incendio o una explosión por su probabilidad de ocurrencia y efectos?",
            o: ["Acciones permanentes (G)", "Acciones variables (Q)", "Acciones accidentales (A)"],
            a: 2,
            e: "Las acciones accidentales (A) son aquellas cuya probabilidad de ocurrencia es pequeña pero de gran importancia, como el sismo o el incendio[cite: 140]."
          }
        ],
        cards: [
          { ty: "Acciones", q: "¿Qué diferencia existe entre una acción permanente (G) y una variable (Q)?", a: "La permanente actúa en todo instante con valor constante o de variación monótona; la variable puede actuar o no (uso, clima)[cite: 140]." }
        ],
        glo: [
          ["Acción permanente", "Acción cuya variación en magnitud con el tiempo es despreciable o monótona[cite: 140, 145].", "Ej: peso propio[cite: 140]."]
        ]
      },
      {
        id: "tema-8-forjados",
        ruta: "Tema 8 › Forjados Unidireccionales y Losas Alveolares",
        titulo: "Forjados: Elementos, Apoyos y Ejecución",
        fuente: "TEMA 8   FORJADOS.pdf",
        proc: [
          {
            t: "1 · Definición y Elementos Constituyentes",
            s: [
              "Forjados unidireccionales: Constituidos por elementos prefabricados y hormigón vertido in situ[cite: 148].",
              "Vigueta: Elemento longitudinal resistente prefabricado (armado o pretensado)[cite: 148].",
              "Losa alveolar pretensada: Elemento superficial plano aligerado mediante alvéolos longitudinales, con juntas laterales preparadas para transmitir cortantes[cite: 148].",
              "Pieza de entrevigado: Elemento aligerante o colaborante (cerámica, hormigón, poliestireno expandido)[cite: 148].",
              "Losa superior de hormigón: Vertida en obra con armadura para repartir cargas y dotar de acción diafragma y arriostramiento[cite: 148]."
            ],
            c: "Las piezas colaborantes participan en la sección resistente y su resistencia a compresión no será menor que la del hormigón vertido[cite: 158]."
          },
          {
            t: "2 · Apoyos de Forjados y Placas Alveolares",
            s: [
              "Apoyos directos: Enlazan a cadenas de atado de muros o vigas de canto[cite: 150].",
              "Apoyos indirectos: Enlazan a vigas planas, mixtas o brochales[cite: 150].",
              "Entrega mínima en placas alveolares (apoyo directo): 50 mm nominales (tolerancia 10 mm, mínimo real 40 mm) si la sobrecarga es $\le 4\text{ kN/m}^2$, canto $\le 30\text{ cm}$ y $V_d \le V_{u2}/2$[cite: 153]."
            ],
            c: "Es obligatorio hormigonar en todo el canto del forjado las juntas en los extremos de las losas y disponer armadura pasiva transversal y longitudinal[cite: 154]."
          },
          {
            t: "3 · Hormigón en Obra y Condiciones Geométricas",
            s: [
              "Tipificación del hormigón: $T-R/C/TM/A$ (ej. HA-25/B/20/...) con resistencia característica mínima de $25\text{ N/mm}^2$[cite: 158].",
              "Espesor mínimo de la losa superior ($h_0$): 40 mm sobre viguetas, piezas cerámicas/hormigón y losas alveolares; 50 mm sobre otros materiales o zonas sísmicas ($a_c > 0,16g$)[cite: 159]."
            ],
            c: "El tamaño máximo del árido ($TM$) será menor que $0,4$ veces el espesor mínimo de la losa superior y no superará los 20 mm[cite: 158]."
          },
          {
            t: "4 · Ejecución, Acopio y Desapuntalado",
            s: [
              "Acopio: Apilados limpios sobre durmientes alineados en vertical, con vuelos máximos de $0,50\text{ m}$ y altura de pilas $\le 1,50\text{ m}$[cite: 161].",
              "Apuntalado: Puntales arriostrados en dos direcciones; estudio detallado si el peso propio es $>3\text{ kN/m}^2$ o altura $>4\text{ m}$[cite: 161].",
              "Hormigonado y curado: Simultáneo en nervios y losa superior, con superficies limpias y húmedas; curado según EHE[cite: 162].",
              "Desapuntalado: Según artículo 75 de la EHE; retirada desde el centro del vano hacia los extremos y sin golpes bruscos[cite: 163]."
            ],
            c: "Si alguna vigueta o losa alveolar resulta dañada afectando a su capacidad portante, deberá ser desechada antes de su colocación[cite: 161]."
          }
        ],
        casos: [
          {
            k: "Espesor de Losa Superior",
            q: "En un forjado unidireccional con viguetas y bovedillas cerámicas situado en una zona sin riesgo sísmico especial, ¿cuál es el espesor mínimo reglamentario ($h_0$) de la losa superior de hormigón?",
            o: ["20 mm", "30 mm", "40 mm"],
            a: 2,
            e: "El espesor mínimo de la losa superior es de 40 mm sobre viguetas y piezas de entrevigado cerámicas o de hormigón[cite: 159]."
          },
          {
            k: "Normas de Acopio",
            q: "A la hora de realizar el acopio en obra de viguetas y losas alveolares pretensadas, ¿cuál es el límite máximo reglamentario para los vuelos sobre los durmientes?",
            o: ["No mayores que 0,50 metros", "No mayores que 1,50 metros", "Exactamente 1,00 metro"],
            a: 0,
            e: "Las viguetas y losas alveolares se apilarán con vuelos no mayores que 0,50 m ni alturas de pila superiores a 1,50 m[cite: 161]."
          }
        ],
        cards: [
          { ty: "Elementos", q: "¿Qué diferencia principal existe entre una pieza de entrevigado aligerante y una colaborante?", a: "La aligerante solo actúa como relleno o peso muerto; la colaborante participa como parte de la sección resistente del forjado[cite: 158]." },
          { ty: "Apoyos", q: "¿Cuál es la entrega nominal mínima exigida para una placa alveolar en apoyo directo bajo condiciones estándar?", a: "50 mm nominales (con tolerancia de 10 mm, mínimo real de 40 mm)[cite: 153]." },
          { ty: "Desapuntalado", q: "¿Cuál debe ser el orden correcto para la retirada de los puntales en un forjado?", a: "Desde el centro del vano hacia los extremos, y en voladizos desde el extremo libre hacia el arranque[cite: 163]." }
        ],
        glo: [
          ["Vigueta", "Elemento longitudinal resistente prefabricado (armado o pretensado) para forjados[cite: 148].", "Instalado junto a piezas de entrevigado[cite: 148]."],
          ["Losa alveolar", "Elemento superficial plano de hormigón pretensado aligerado mediante alvéolos longitudinales[cite: 148].", "Transmite cortantes por sus juntas laterales[cite: 148]."],
          ["Pieza colaborante", "Pieza de entrevigado que forma parte de la sección resistente con resistencia $\ge$ al hormigón vertido[cite: 158].", "Cerámica u hormigón[cite: 158]."],
          ["Acción diafragma", "Capacidad de la losa superior de hormigón para repartir cargas horizontales y arriostrar la estructura[cite: 148].", "Fundamental ante sismo o viento."]
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
