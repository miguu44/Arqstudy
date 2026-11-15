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
              "Se incluyen obras de ampliación, reforma o rehabilitación que alteren la configuración arquitectónica, volumetría o sistema estructural[cite: 6].",
              "Instalaciones fijas, equipamiento propio y elementos de urbanización adscritos forman parte de la edificación[cite: 6]."
            ],
            c: "Las obras menores de escasa entidad en una sola planta y sin uso residencial/público no exigen proyecto según la LOE[cite: 6]."
          },
          {
            t: "2 · Requisitos Básicos de la Edificación (Art. 3)",
            s: [
              "Funcionalidad: Utilización adecuada, accesibilidad para personas con movilidad reducida y acceso a telecomunicaciones[cite: 7].",
              "Seguridad: Seguridad estructural (resistencia mecánica y estabilidad), seguridad en caso de incendio y seguridad de utilización[cite: 7].",
              "Habitabilidad: Higiene, salud y protección medioambiental, protección contra el ruido, ahorro de energía y aislamiento térmico[cite: 7, 8]."
            ],
            c: "El Código Técnico de la Edificación (CTE) es el marco normativo que concreta las exigencias básicas de calidad[cite: 8]."
          },
          {
            t: "3 · Agentes de la Edificación (Art. 8 a 16)",
            s: [
              "Promotor: Decide, impulsa y financia la obra. Debe ostentar derecho sobre el solar y suscribir seguros y recepción[cite: 10].",
              "Proyectista: Redacta el proyecto con titulación habilitante (Arquitecto, Ingeniero, etc. según el uso del edificio)[cite: 10, 11].",
              "Constructor: Asume contractualmente ejecutar la obra con medios humanos y materiales, designando al jefe de obra[cite: 11, 12].",
              "Director de Obra (DO): Dirige el desarrollo técnico, estético y urbanístico de la obra[cite: 12].",
              "Director de la Ejecución de la Obra (DEO): Asume la dirección material, control de calidad y de lo edificado (habitualmente Arquitecto Técnico)[cite: 13]."
            ],
            c: "Cada agente responde individualmente de sus obligaciones contractuales y legales según la LOE[cite: 15]."
          },
          {
            t: "4 · Recepción y Documentación (Art. 6 y 7)",
            s: [
              "Recepción de la obra: Acto donde el constructor entrega la obra al promotor. Puede ser con o sin reservas[cite: 8].",
              "Plazo de recepción: Máximo 30 días desde la terminación certificada; si el promotor no se manifiesta, se entiende tácitamente producida[cite: 9].",
              "Libro del Edificio: Documentación final entregada a los usuarios que incluye el proyecto, actas, agentes e instrucciones de uso y mantenimiento[cite: 9]."
            ],
            c: "El cómputo de los plazos de garantía y responsabilidad civil empieza a contar desde la firma del acta de recepción[cite: 9]."
          },
          {
            t: "5 · Responsabilidades y Garantías (Art. 17 y 19)",
            s: [
              "10 años: Daños materiales por vicios o defectos que afecten a la cimentación, soportes, vigas, forjados o elementos estructurales[cite: 15, 17].",
              "3 años: Daños por vicios o defectos en elementos constructivos o instalaciones que afecten a la habitabilidad[cite: 15, 17].",
              "1 año: Daños por vicios o defectos de ejecución que afecten a elementos de terminación o acabado (responsabilidad del constructor)[cite: 15, 17].",
              "Garantías: Seguros de daños materiales o caución obligatorios para cubrir dichos plazos (o retención del 5% para acabados)[cite: 17]."
            ],
            c: "El promotor responde solidariamente con los demás agentes ante los compradores por los vicios o defectos de construcción[cite: 15]."
          }
        ],
        casos: [
          {
            k: "Plazos de Responsabilidad",
            q: "A los 4 años de entregarse un edificio aparecen grietas graves que comprometen los pilares y la estabilidad estructural. ¿Qué plazo de garantía LOE se aplica y quién responde?",
            o: ["Plazo de 3 años de habitabilidad; responde solo el constructor", "Plazo de 10 años por defectos estructurales; responden los agentes implicados (calculista, DO, DEO, constructor)", "Ya ha expirado el plazo de garantía de 1 año"],
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
              "Características físicas externas e internas del solar[cite: 19].",
              "El Estudio Geotécnico determina características físicas, mecánicas, composición y nivel freático[cite: 19, 20].",
              "Clasificación de la construcción (C-0 a C-4) y grupos de terreno (T-1 favorables, T-2 intermedios, T-3 desfavorables)[cite: 21].",
              "Profundidad y densidad de reconocimientos: mínimo 3 puntos[cite: 22, 23]."
            ],
            c: "El estudio geotécnico debe acometerse en la fase inicial de proyecto y antes de dimensionar totalmente la estructura[cite: 20]."
          },
          {
            t: "2 · Técnicas de Prospección del Terreno",
            s: [
              "Calicatas: excavaciones para observación directa (<4m, sin nivel freático)[cite: 25].",
              "Sondeos mecánicos: perforaciones para extraer testigos y ensayos SPT[cite: 25, 26]."
            ],
            c: "En calicatas de más de 1,5 m de profundidad es obligatorio entibar o retaluzar[cite: 25]."
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
            t: "1 · Preparación del Solar y Replanteo",
            s: [
              "Desbroce y limpieza mecánica: retirada de capa superficial y restos[cite: 45].",
              "Replanteo: trasladar y dibujar sobre el terreno ejes y perímetros[cite: 45]."
            ],
            c: "Es imprescindible verificar las mediciones dos o tres veces y contrastarlas con referencias exteriores fijas[cite: 49]."
          },
          {
            t: "2 · Seguridad y Salud en Zanjas",
            s: [
              "Entibación obligatoria/conveniente en zanjas de h ≥ 1,5 m[cite: 57].",
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
          ["Entibación", "Sistema de contención temporal de paredes en zanjas[cite: 57, 58].", "Necesaria si h ≥ 1,5 m[cite: 57]."]
        ]
      },
      {
        id: "tema-4-cimientos",
        ruta: "Tema 4 › Cimientos y Cimentaciones Directas (DB-SE-C)",
        titulo: "Cimientos y Cimentaciones Directas",
        fuente: "TEMA 4 CIMIENTOS.pdf",
        proc: [
          {
            t: "1 · Tipologías de Cimentaciones Directas",
            s: [
              "Definición: Elementos estructurales enterrados que transmiten cargas de la estructura al terreno (DB-SE-C)[cite: 64].",
              "Tipos principales (Tabla 4.1): Zapata aislada, combinada, corrida, pozo de cimentación, emparrillado y losa[cite: 65, 66]."
            ],
            c: "Se emplearán cimentaciones directas siempre que las condiciones del terreno y la capacidad portante lo permitan[cite: 64]."
          },
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
              "Tipos de pilotes: Por fuste ('flotantes') y por punta ('columna')[cite: 88].",
              "Designación comercial in situ (NTE-CPI): Desde CPI-2 hasta CPI-8, incluyendo pilotes de desplazamiento por rotación (Sistema Omega)[cite: 91, 92, 94, 96, 97]."
            ],
            c: "Se recurre a cimentaciones profundas cuando las superficiales no son técnicamente viables[cite: 88]."
          },
          {
            t: "2 · Micropilotes y Control",
            s: [
              "Micropilotes: Elementos de menor diámetro (~150 mm) inyectados a presión; muy usados en recalces y anclajes[cite: 98, 99, 100].",
              "Ensayos de integridad: Transparencia sónica, impedancia mecánica y sondeos mecánicos (mínimo 1 por cada 20 pilotes)[cite: 106]."
            ],
            c: "Los micropilotes son idóneos para recalces de cimentaciones y espacios reducidos[cite: 99]."
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
              "Definición: Elemento estructural destinado a contener tierras o rellenos artificiales; trabaja fundamentalmente a flexión (como un voladizo empotrado en el cimiento)[cite: 108].",
              "Partes del muro: Coronación, cuerpo o alzado, trasdós, intradós, talón, puntera y tacón[cite: 108].",
              "Muros de gravedad: Soportan empujes con su propio peso; sin armar, trabajan a compresión (ladrillo, mampostería, hormigón en masa)[cite: 109].",
              "Muros en ménsula: De gran esbeltez, trabajan a flexión y requieren armadura importante; admiten alturas de hasta 10 metros[cite: 109].",
              "Muros de sótano: Soportan empujes del terreno y transmiten cargas verticales de la estructura superior; sus desplazamientos horizontales están limitados por los forjados[cite: 110]."
            ],
            c: "El talón no debe invadir propiedades ajenas y el tacón se prescinde si no hay problemas de deslizamiento[cite: 108]."
          },
          {
            t: "2 · Estados Límite y Empujes del Terreno",
            s: [
              "Estados límite principales: Giro, deslizamiento, deslizamiento profundo, rotura por flexión, esfuerzo cortante y esfuerzo rasante[cite: 111, 112].",
              "Empuje activo ($E_r$): Presión que ejerce el terreno sobre el trasdós del muro[cite: 113].",
              "Acciones exteriores: Cargas uniformemente repartidas, cargas en línea paralelas a la coronación y cargas en banda paralela[cite: 113, 114]."
            ],
            c: "El equilibrio del muro de sótano se logra mediante la reacción del forjado ($T_1$), la rozadura de la cimentación ($T_2$) y las tensiones del terreno bajo la base ($\sigma_t$)[cite: 111]."
          },
          {
            t: "3 · Formas de Ejecución: Encofrados, Bataches y Pantallas",
            s: [
              "Encofrados corridos: A una cara (contra el terreno cohesivo) o a dos caras (si hay espacio para taludes)[cite: 114].",
              "Bataches: Ejecución por tramos alternos cortos (2-3 m) al tresvolillo cuando no hay espacio para vaciar todo el solar; requiere superior cuantía de acero y viga de coronación[cite: 116].",
              "Muros pantalla continua (paneles in situ): Se ejecutan antes de vaciar el solar empleando muretes guía, bivalva y lodos bentoníticos para estabilizar la zanja; trabajan como losas empotradas en el terreno[cite: 117, 118].",
              "Otros tipos de pantallas: Pantallas de pilotes secantes/tangentes y pantallas de tablestacas metálicas o de hormigón hincadas[cite: 122]."
            ],
            c: "Las pantallas continuas de paneles in situ se usan especialmente bajo nivel freático o junto a estructuras colindantes delicadas[cite: 117]."
          },
          {
            t: "4 · Juntas en Muros",
            s: [
              "Juntas de dilatación: Separación entre 2 y 4 cm; distancia máxima recomendada de 30 m (o máx. 3 veces la altura del muro); sin armaduras pasantes y con bandas de estanqueidad[cite: 126].",
              "Juntas de retracción (falsas juntas): Se disponen para debilitar la sección y fijar el plano de rotura por retracción del hormigón; separación de 8 a 12 m[cite: 126]."
            ],
            c: "Es fundamental garantizar la estanqueidad y evitar filtraciones de agua a través de todas las juntas del sótano[cite: 126]."
          },
          {
            t: "5 · Drenaje e Impermeabilización",
            s: [
              "Drenaje perimetral: Reglado por el DB-HS1; combinación de excavación en cuña, lámina impermeabilizante en trasdós, lámina drenante (ej. Danodren), grava de drenaje y tubo colector inferior[cite: 128].",
              "Evita la aparición de presiones hidrostáticas descontroladas sobre el muro de sótano[cite: 128]."
            ],
            c: "El sistema de drenaje canaliza y evacúa el agua fuera del edificio, rompiendo la vía puntual de filtración[cite: 128]."
          }
        ],
        casos: [
          {
            k: "Tipología de Muros",
            q: "¿Cómo se denominan los muros de contención que no llevan armadura (sin ferralla), soportan los empujes exclusivamente con su propio peso y trabajan fundamentalmente a compresión?",
            o: ["Muros en ménsula", "Muros de gravedad", "Muros pantalla de paneles"],
            a: 1,
            e: "Los muros de gravedad carecen de armadura y equilibran el empuje de las tierras mediante su propio peso, trabajando a compresión[cite: 109]."
          },
          {
            k: "Ejecución por Bataches",
            q: "¿En qué consiste fundamentalmente la ejecución de muros por el sistema de bataches?",
            o: ["En vaciar todo el solar de una vez y hormigonar de abajo hacia arriba", "En realizar excavaciones y tramos cortos de muro alternos (al tresvolillo) cuando no es posible vaciar todo el perímetro por falta de espacio o seguridad", "En hincar tablestacas metálicas con maza vibratoria"],
            a: 1,
            e: "Los bataches se ejecutan por tramos cortos y no consecutivos para mantener la estabilidad del terreno perimetral[cite: 116]."
          },
          {
            k: "Juntas de Dilatación",
            q: "Según los criterios indicados en los apuntes para muros, ¿cuál es la separación máxima orientativa recomendada entre juntas de dilatación?",
            o: ["De 2 a 4 metros", "No superior a 30 metros (o tres veces la altura del muro)", "Exactamente cada 100 metros"],
            a: 1,
            e: "La distancia entre juntas de dilatación no será superior a 30 m, recomendándose no superar tres veces la altura del muro[cite: 126]."
          }
        ],
        cards: [
          { ty: "Tipos de Muros", q: "¿Cuál es la diferencia principal de trabajo estructural entre un muro de gravedad y un muro en ménsula?", a: "El de gravedad trabaja a compresión por su propio peso (sin armar); el en ménsula trabaja a flexión y requiere armadura importante[cite: 109]." },
          { ty: "Ejecución", q: "¿Qué función principal cumplen los lodos bentoníticos durante la ejecución de pantallas continuas de paneles in situ?", a: "Estabilizar las paredes de la zanja excavada evitando su desmoronamiento antes del hormigonado[cite: 118, 131]." },
          { ty: "Juntas", q: "¿Qué separación habitual se recomienda entre falsas juntas de retracción en muros?", a: "Una separación de 8 a 12 metros[cite: 126]." },
          { ty: "Drenaje", q: "Además de la lámina impermeabilizante, ¿qué elementos componen el sistema de drenaje por el trasdós de un muro según el detalle tipo?", a: "Una lámina drenante, grava de drenaje y un tubo de drenaje en la base[cite: 128]." }
        ],
        glo: [
          ["Muro de contención", "Elemento estructural que sirve de contención a un terreno o relleno, trabajando a flexión como voladizo empotrado[cite: 108].", "Regulado por el CTE DB-SE-C[cite: 132]."],
          ["Bataches", "Sistema de ejecución de muros por tramos cortos alternos (al tresvolillo)[cite: 116].", "Útil cuando no se puede vaciar todo el solar de golpe[cite: 116]."],
          ["Muro Pantalla", "Elemento de contención ejecutado desde la superficie antes de la excavación general[cite: 117, 130].", "Ideal bajo nivel freático o medianeras[cite: 117]."],
          ["Lodos bentoníticos", "Suspensiones acuosas de arcillas tixotrópicas que estabilizan zanjas de pantallas[cite: 131].", "Se van desplazando al hormigonar desde el fondo[cite: 119]."],
          ["Junta de dilatación", "Corte estructural (2-4 cm) para absorber cambios térmicos, sin armaduras pasantes[cite: 126].", "Separación máx. de 30 m[cite: 126]."]
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
