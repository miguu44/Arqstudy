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
          },
          {
            t: "5 · Responsabilidades y Garantías (Art. 17 y 19)",
            s: [
              "10 años: Daños materiales por vicios o defectos que afecten a la cimentación, soportes, vigas, forjados o elementos estructurales.",
              "3 años: Daños por vicios o defectos en elementos constructivos o instalaciones que afecten a la habitabilidad.",
              "1 año: Daños por vicios o defectos de ejecución que afecten a elementos de terminación o acabado."
            ],
            c: "El promotor responde solidariamente con los demás agentes ante los compradores por los vicios o defectos de construcción."
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
        id: "tema-2-suelos",
        ruta: "Tema 2 › Suelos, Estudio Geotécnico y Acciones (DB-SE)",
        titulo: "Suelos, Estudio Geotécnico y Acciones",
        fuente: "TEMA 2 SUELOS.pdf",
        proc: [
          {
            t: "1 · Características del Solar y Estudio Geotécnico (DB-SE-C)",
            s: [
              "El Estudio Geotécnico determina características físicas, mecánicas, composición y nivel freático.",
              "Clasificación de la construcción (C-0 a C-4) y grupos de terreno (T-1 favorables, T-2 intermedios, T-3 desfavorables)."
            ],
            c: "El estudio geotécnico debe acometerse en la fase inicial de proyecto y antes de dimensionar totalmente la estructura."
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
          ["Estudio Geotécnico", "Conjunto de datos y ensayos sobre las características físicas y mecánicas del terreno para diseñar cimientos.", "Documento obligatorio de proyecto."]
        ],
        detalle: { tipo: "generico", titulo: "Suelos y Geotecnia", descripcion: "Análisis del terreno y campañas geotécnicas." }
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
              "Entibación obligatoria/conveniente en zanjas de $h \ge 1,5\text{ m}$.",
              "Zona libre de cargas: mantener al menos 2 m libres de acopios y vehículos junto al borde."
            ],
            c: "Tras lluvias es obligatorio revisar los taludes y achicar el agua de inmediato."
          }
        ],
        casos: [
          {
            k: "Seguridad en Zanjas",
            q: "¿A partir de qué profundidad en zanjas se establece la conveniencia de disponer entibación?",
            o: ["0,5 metros", "Igual o superior a 1,5 metros", "5 metros"],
            a: 1,
            e: "A partir de 1,5 m de profundidad es conveniente entibar o proteger adecuadamente la zanja."
          }
        ],
        cards: [
          { ty: "Seguridad", q: "¿Qué distancia libre de cargas se debe mantener junto al borde de una zanja?", a: "Una zona de unos 2 metros." }
        ],
        glo: [
          ["Entibación", "Sistema de contención temporal de paredes en zanjas.", "Necesaria si $h \ge 1,5\text{ m}$."]
        ],
        detalle: { tipo: "generico", titulo: "Replanteo y Tierras", descripcion: "Operaciones de excavación, taludes y entibaciones." }
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
        detalle: { tipo: "zapata" }
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
              "Definición: Cimentación cuyo extremo inferior en el terreno está a una profundidad superior a 8 veces su diámetro o ancho ($> 8D$).",
              "Tipos de pilotes: Por fuste ('flotantes') y por punta ('columna')."
            ],
            c: "Se recurre a cimentaciones profundas cuando las superficiales no son técnicamente viables."
          }
        ],
        casos: [
          {
            k: "Definición de Cimentación Profunda",
            q: "¿A partir de qué profundidad relativa se considera formalmente que una cimentación es profunda según el CTE?",
            o: ["Cuando su profundidad es superior a 2 veces su diámetro", "Cuando su extremo inferior está a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)", "Exclusivamente a partir de 15 metros"],
            a: 1,
            e: "Se considera cimentación profunda si su extremo inferior en el terreno se encuentra a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)."
          }
        ],
        cards: [
          { ty: "Definición", q: "¿Cuál es el límite geométrico que define una cimentación profunda frente a una superficial?", a: "Profundidad superior a 8 veces su diámetro o ancho ($>8D$)." }
        ],
        glo: [
          ["Pilote", "Elemento prismático de cimentación profunda cuya longitud es mucho mayor que su sección transversal.", "Puede ser prefabricado o in situ."]
        ],
        detalle: { tipo: "generico", titulo: "Cimentaciones Profundas", a: "Pilotes y elementos de gran profundidad." }
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
              "Definición: Elemento estructural destinado a contener tierras; trabaja fundamentalmente a flexión (como un voladizo empotrado en el cimiento).",
              "Muros de gravedad: Soportan empujes con su propio peso; sin armar, trabajan a compresión."
            ],
            c: "El talón no debe invadir propiedades ajenas y el tacón se prescinde si no hay problemas de deslizamiento."
          }
        ],
        casos: [
          {
            k: "Tipología de Muros",
            q: "¿Cómo se denominan los muros de contención que no llevan armadura y soportan los empujes con su propio peso?",
            o: ["Muros en ménsula", "Muros de gravedad", "Muros pantalla"],
            a: 1,
            e: "Los muros de gravedad carecen de armadura y equilibran el empuje de las tierras mediante su propio peso."
          }
        ],
        cards: [
          { ty: "Tipos de Muros", q: "¿Cuál es la diferencia principal de trabajo estructural entre un muro de gravedad y un muro en ménsula?", a: "El de gravedad trabaja a compresión por su propio peso; el en ménsula trabaja a flexión y requiere armadura." }
        ],
        glo: [
          ["Muro de contención", "Elemento estructural que sirve de contención a un terreno, trabajando a flexión como voladizo empotrado.", "Regulado por el CTE DB-SE-C."]
        ],
        detalle: { tipo: "generico", titulo: "Muros de Contención", descripcion: "Empujes de tierras y tipologías de muros." }
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
              "Estructura: Conjunto de elementos portantes capaces de soportar cargas y transmitirlas, junto a su peso propio, hasta los cimientos.",
              "Elementos verticales: Pilares y muros; reciben cargas de plantas superiores y trabajan fundamentalmente a compresión."
            ],
            c: "Los zunchos y brochales son elementos horizontales que transmiten cargas a vigas o pilares, o sirven de atado y formación de huecos."
          }
        ],
        casos: [
          {
            k: "Clasificación de Acciones",
            q: "Según el CTE DB-SE, ¿cómo se clasifican las acciones debidas al sismo, el incendio o una explosión por su probabilidad de ocurrencia y efectos?",
            o: ["Acciones permanentes (G)", "Acciones variables (Q)", "Acciones accidentales (A)"],
            a: 2,
            e: "Las acciones accidentales (A) son aquellas cuya probabilidad de ocurrencia es pequeña pero de gran importancia, como el sismo o el incendio."
          }
        ],
        cards: [
          { ty: "Acciones", q: "¿Qué diferencia existe entre una acción permanente (G) y una variable (Q)?", a: "La permanente actúa en todo instante con valor constante o de variación monótona; la variable puede actuar o no (uso, clima)." }
        ],
        glo: [
          ["Acción permanente", "Acción cuya variación en magnitud con el tiempo es despreciable o monótona.", "Ej: peso propio."]
        ],
        detalle: { tipo: "generico", titulo: "Seguridad Estructural y Acciones", descripcion: "Acciones en la edificación y estados límite." }
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
              "Forjados unidireccionales: Constituidos por elementos prefabricados y hormigón vertido in situ.",
              "Vigueta: Elemento longitudinal resistente prefabricado (armado o pretensado)."
            ],
            c: "Las piezas colaborantes participan en la sección resistente y su resistencia a compresión no será menor que la del hormigón vertido."
          }
        ],
        casos: [
          {
            k: "Espesor de Losa Superior",
            q: "En un forjado unidireccional con viguetas y bovedillas cerámicas situado en una zona sin riesgo sísmico especial, ¿cuál es el espesor mínimo reglamentario ($h_0$) de la losa superior de hormigón?",
            o: ["20 mm", "30 mm", "40 mm"],
            a: 2,
            e: "El espesor mínimo de la losa superior es de 40 mm sobre viguetas y piezas de entrevigado cerámicas o de hormigón."
          }
        ],
        cards: [
          { ty: "Elementos", q: "¿Qué diferencia principal existe entre una pieza de entrevigado aligerante y una colaborante?", a: "La aligerante solo actúa como relleno o peso muerto; la colaborante participa como parte de la sección resistente del forjado." }
        ],
        glo: [
          ["Vigueta", "Elemento longitudinal resistente prefabricado (armado o pretensado) para forjados.", "Instalado junto a piezas de entrevigado."]
        ],
        detalle: { tipo: "generico", titulo: "Forjados", descripcion: "Forjados unidireccionales y losas." }
      },
      {
        id: "tema-9-estructuras-hormigon",
        ruta: "Tema 9 › Estructuras de Hormigón (Instrucción EHE-08)",
        titulo: "Estructuras de Hormigón: Materiales, Durabilidad y Ejecución (EHE-08)",
        fuente: "TEMA 9 ESTRUCTURAS DE HORMIGON.pdf",
        proc: [
          {
            t: "1 · Objeto, Ámbito y Vida Útil (EHE-08)",
            s: [
              "Objeto: Establecer las exigencias para que las estructuras de hormigón satisfagan la seguridad estructural, contra incendios y protección medioambiental.",
              "Ámbito de aplicación: Estructuras de hormigón en masa, armado o pretensado."
            ],
            c: "La Propiedad debe fijar la vida útil nominal antes del inicio del proyecto."
          }
        ],
        casos: [
          {
            k: "Resistencia Mínima EHE-08",
            q: "Según la Instrucción EHE-08, ¿cuál es el valor mínimo reglamentario de la resistencia característica a compresión ($f_{ck}$) exigido para elementos de hormigón armado?",
            o: ["15 N/mm²", "20 N/mm²", "25 N/mm²"],
            a: 2,
            e: "La resistencia de proyecto $f_{ck}$ no será inferior a $20\text{ N/mm}^2$ en hormigones en masa, ni a $25\text{ N/mm}^2$ en hormigones armados o pretensados."
          }
        ],
        cards: [
          { ty: "Vida Útil", q: "¿Cuál es la vida útil nominal estándar establecida por la EHE-08 para edificios de viviendas u oficinas?", a: "50 años." }
        ],
        glo: [
          ["EHE-08", "Instrucción de Hormigón Estructural en España.", "Regula seguridad, durabilidad y ejecución de estructuras de hormigón."]
        ],
        detalle: { tipo: "generico", titulo: "Estructuras de Hormigón", descripcion: "Durabilidad, materiales y control EHE." }
      },
      {
        id: "tema-10-escaleras",
        ruta: "Tema 10 › Escaleras, Rampas y Escalas (DB-SU 1)",
        titulo: "Escaleras, Rampas y Elementos de Circulación Vertical",
        fuente: "TEMA 10  ESCALERAS. (Rev. abril 2020).pdf",
        proc: [
          {
            t: "1 · Definición y Elementos de las Escaleras",
            s: [
              "Definición: Elementos estructurales inclinados para salvar desniveles mediante peldaños, construidos sobre correas o zancas.",
              "Partes del peldaño: Huella o pisa (parte horizontal) y contrahuella o tabica (parte vertical)."
            ],
            c: "Cada tramo tendrá un mínimo de 3 peldaños y no podrá salvar una altura mayor de 3,20 m en uso general."
          }
        ],
        casos: [
          {
            k: "Relación de Peldaños",
            q: "En una escalera de un edificio de viviendas de uso general, se diseña un peldaño con una contrahuella de 17 cm y una huella de 30 cm. ¿Cumple la relación establecida por el DB-SU 1?",
            o: ["No, porque la huella es demasiado grande", "Sí, ya que $2(17) + 30 = 64\text{ cm}$, cumpliendo el intervalo de $54\text{ cm} \le 2C + H \le 70\text{ cm}$", "No, la contrahuella excede el máximo permitido"],
            a: 1,
            e: "La relación de peldaños $540\text{ mm} \le 2C + H \le 700\text{ mm}$ se cumple perfectamente ($640\text{ mm}$), y la huella de 30 cm es mayor al mínimo exigido de 280 mm."
          }
        ],
        cards: [
          { ty: "Peldaños", q: "¿Cuál es el valor mínimo de la huella ($H$) exigido en tramos rectos para escaleras de uso general según el DB-SU 1?", a: "280 mm (28 cm)." }
        ],
        glo: [
          ["Huella (Pisa)", "Superficie horizontal de un peldaño sobre la que se apoya el pie.", "Mínimo 280 mm en uso general."]
        ],
        detalle: { tipo: "generico", titulo: "Escaleras y Accesibilidad", descripcion: "Normativa DB-SU 1 sobre peldaños y barandillas." }
      },
      {
        id: "tema-11-estructuras-metalicas",
        ruta: "Tema 11 › Estructuras Metálicas (CTE DB-SE-A)",
        titulo: "Estructuras Metálicas: Aceros, Uniones y Ejecución (DB-SE-A)",
        fuente: "TEMA 11  ESTRUCTURAS METALICAS.pdf",
        proc: [
          {
            t: "1 · Ámbito de Aplicación y Materiales (UNE EN 10025)",
            s: [
              "Ámbito: Verificación de seguridad estructural de elementos metálicos de acero en edificación.",
              "Tipos de acero estructural: S235, S275, S355 y S450."
            ],
            c: "Los espesores mayores de chapa reducen ligeramente el límite elástico mínimo garantizado."
          }
        ],
        casos: [
          {
            k: "Soldadura en Ángulo",
            q: "En una unión soldada en ángulo entre dos chapas de acero estructural, ¿entre qué valores debe estar comprendido el ángulo $\alpha$ que forman las caras de fusión para que la soldadura sea válida según el DB-SE-A?",
            o: ["Entre 30° y 90°", "Entre 60° y 120°", "Entre 45° y 135°"],
            a: 1,
            e: "La soldadura en ángulo se utiliza cuando las caras de fusión forman un ángulo $\alpha$ comprendido entre $60^\circ$ y $120^\circ$."
          }
        ],
        cards: [
          { ty: "Acero Estructural", q: "¿Cuál es el módulo de elasticidad ($E$) y la densidad ($\rho$) comunes a todos los aceros estructurales según el DB-SE-A?", a: "$E = 210.000\text{ N/mm}^2$ y $\rho = 7.850\text{ kg/m}^3$." }
        ],
        glo: [
          ["Límite elástico ($f_y$)", "Tensión máxima que un acero soporta sin sufrir deformaciones permanentes.", "Ej: $275\text{ N/mm}^2$ en acero S275."]
        ],
        detalle: { tipo: "generico", titulo: "Estructuras Metálicas", descripcion: "Aceros y uniones soldadas o atornilladas." }
      },
      {
        id: "tema-12-estructuras-madera",
        ruta: "Tema 12 › Estructuras de Madera (CTE DB-SE-M)",
        titulo: "Estructuras de Madera: Materiales, Uniones y Ejecución (DB-SE-M)",
        fuente: "TEMA 12  ESTRUCTURAS DE MADERA.pdf",
        proc: [
          {
            t: "1 · Ámbito de Aplicación y Materiales (DB-SE-M)",
            s: [
              "Ámbito: Verificación de la seguridad estructural de elementos de madera maciza, laminada y tableros.",
              "Clases resistentes: Para coníferas y chopo: C14 a C50."
            ],
            c: "El contenido de humedad de la madera aserrada a su recepción en obra debe ser $\le 20\%$ salvo especificación en contra."
          }
        ],
        casos: [
          {
            k: "Clases Resistentes de Madera",
            q: "En una estructura de madera aserrada de coníferas se especifica una clase resistente C24. ¿Qué significa exactamente el número 24?",
            o: ["El módulo de elasticidad medio en kN/mm²", "El valor de la resistencia característica a flexión ($f_{m,k}$) expresada en N/mm²", "La densidad característica en g/cm³"],
            a: 1,
            e: "En las clases resistentes de madera aserrada (como C24), los números indican el valor de la resistencia característica a flexión ($f_{m,k}$) expresada en $\text{N/mm}^2$."
          }
        ],
        cards: [
          { ty: "Humedad en Obra", q: "¿Cuál es el contenido máximo de humedad exigido por defecto para la madera aserrada a su recepción en obra?", a: "Menor o igual al 20% ($\le 20\%$)." }
        ],
        glo: [
          ["Clase resistente", "Designación normalizada que agrupa a la madera según sus propiedades mecánicas.", "Ej: C24 para aserrada."]
        ],
        detalle: { tipo: "generico", titulo: "Estructuras de Madera", descripcion: "Clases resistentes y durabilidad." }
      },
      {
        id: "tema-13-estructuras-fabrica",
        ruta: "Tema 13 › Estructuras de Fábrica (CTE DB-SE-F)",
        titulo: "Estructuras de Fábrica: Materiales, Juntas, Ejecución y Control (DB-SE-F)",
        fuente: "TEMA 13  ESTRUCTURAS DE FABRICA.pdf",
        proc: [
          {
            t: "1 · Ámbito de Aplicación y Juntas de Movimiento (DB-SE-F)",
            s: [
              "Ámbito: Verificación de seguridad estructural de muros resistentes realizados con piezas pequeñas unidas con mortero.",
              "Juntas de movimiento: Se disponen para absorber dilataciones térmicas, humedad, fluencia y retracción."
            ],
            c: "En plantas con forma asimétrica (L, U) con alas mayores que la mitad de la distancia límite, se dispondrán juntas cerca de los puntos de encuentro."
          }
        ],
        casos: [
          {
            k: "Solape de Piezas en Fábrica",
            q: "Durante la ejecución de un muro de fábrica de ladrillo, ¿cuál es el solape mínimo exigido entre piezas en hiladas consecutivas según el CTE DB-SE-F?",
            o: ["Al menos 10 mm", "Al menos 0,4 veces el grueso de la pieza y no menor de 40 mm", "Exactamente la mitad de la soga en todos los casos"],
            a: 1,
            e: "En hiladas consecutivas, las piezas se solaparán al menos 0,4 veces el grueso de la pieza ($U_m$) y no menos de 40 mm."
          }
        ],
        cards: [
          { ty: "Juntas de Movimiento", q: "¿Cuál es la distancia máxima orientativa entre juntas de movimiento para fábricas sustentadas de hormigón ordinario?", a: "20 metros." }
        ],
        glo: [
          ["DB-SE-F", "Documento Básico de Seguridad Estructural: Fábrica del Código Técnico de la Edificación.", "Regula el cálculo, materiales y ejecución de estructuras de fábrica."]
        ],
        detalle: { tipo: "generico", titulo: "Estructuras de Fábrica", descripcion: "Muros de carga y fábricas resistentes." }
      },
      {
        id: "tema-14-fachadas-fabrica-ladrillo",
        ruta: "Tema 14 › Fachadas de Fábrica de Ladrillo (CTE DB-HS-1)",
        titulo: "Fachadas de Fábrica de Ladrillo: Salubridad, Materiales y Puntos Singulares",
        fuente: "TEMA 14  FACHADAS DE FABRICA DE LADRILLO.pdf",
        proc: [
          {
            t: "1 · Impermeabilidad y Soluciones de Fachada (CTE DB-HS-1)",
            s: [
              "Grado de impermeabilidad: Exigido a las fachadas frente a precipitaciones en función de la zona pluviométrica y exposición.",
              "Condiciones constructivas: Combinación de requisitos con o sin revestimiento exterior."
            ],
            c: "Las exigencias de estanqueidad aumentan progresivamente desde el grado 1 hasta el grado 5."
          }
        ],
        casos: [
          {
            k: "Arranque de Fachada",
            q: "Según el DB-HS-1, ¿a qué altura mínima sobre el nivel del suelo exterior debe disponerse la barrera impermeable horizontal en el arranque de la fachada para evitar el ascenso por capilaridad?",
            o: ["A más de 5 cm", "A más de 15 cm", "Exactamente a 50 cm"],
            a: 1,
            e: "Debe disponerse una barrera impermeable que cubra todo el espesor de la fachada a más de 15 cm por encima del nivel del suelo exterior."
          }
        ],
        cards: [
          { ty: "Zócalo de Protección", q: "¿Qué altura mínima y qué coeficiente máximo de succión debe tener el zócalo de protección frente a salpicaduras en cimentación?", a: "Más de 30 cm de altura y coeficiente de succión inferior al 3%." }
        ],
        glo: [
          ["DB-HS-1", "Documento Básico de Salubridad: Protección frente a la humedad del Código Técnico de la Edificación.", "Establece las reglas de estanqueidad y diseño de fachadas."]
        ],
        detalle: { tipo: "generico", titulo: "Fachadas de Ladrillo", descripcion: "Salubridad e impermeabilidad DB-HS-1." }
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
              "Tipos de cubiertas: A un agua, a dos aguas, a tres aguas, a cuatro aguas de pabellón y de tipo mansarda.",
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
        detalle: { tipo: "cubierta" }
      }
    ]
  }
];
