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
              "Estructura: Conjunto de elementos portantes capaces de soportar cargas y transmitirlas, junto a su peso propio, hasta los cimientos.",
              "Elementos verticales: Pilares y muros; reciben cargas de plantas superiores y trabajan fundamentalmente a compresión."
            ],
            c: "Los zunchos y brochales son elementos horizontales que transmiten cargas a vigas o pilares, o sirven de atado y formación de huecos."
          },
          {
            t: "3 · Clasificación de las Acciones",
            s: [
              "Acciones permanentes (G): Actúan en todo instante con magnitud constante o variación monótona (peso propio, terreno).",
              "Acciones variables (Q): Actúan o no según el uso o condiciones climáticas.",
              "Acciones accidentales (A): Pequeña probabilidad de ocurrencia pero gran importancia (sismo, incendio, impacto)."
            ],
            c: "Las acciones se clasifican también por su variación en el tiempo, naturaleza (directas/indirectas) y respuesta estructural (estáticas/dinámicas)."
          },
          {
            t: "4 · Aptitud al Servicio: Flechas y Desplazamientos",
            s: [
              "Flecha relativa con tabiques frágiles: menor que $1/500$.",
              "Flecha relativa con tabiques ordinarios: menor que $1/400$; resto de casos: menor que $1/300$.",
              "Desplazamiento horizontal (desplome total): menor que $1/500$ de la altura total del edificio; desplome local: menor que $1/250$ de la altura de planta."
            ],
            c: "Las limitaciones de deformación evitan fisuraciones y daños en elementos constructivos no estructurales."
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
              "Forjados unidireccionales: Constituidos por elementos prefabricados y hormigón vertido in situ.",
              "Vigueta: Elemento longitudinal resistente prefabricado (armado o pretensado).",
              "Losa alveolar pretensada: Elemento superficial plano aligerado mediante alvéolos longitudinales, con juntas laterales preparadas para transmitir cortantes.",
              "Pieza de entrevigado: Elemento aligerante o colaborante (cerámica, hormigón, poliestireno expandido).",
              "Losa superior de hormigón: Vertida en obra con armadura para repartir cargas y dotar de acción diafragma y arriostramiento."
            ],
            c: "Las piezas colaborantes participan en la sección resistente y su resistencia a compresión no será menor que la del hormigón vertido."
          },
          {
            t: "3 · Hormigón en Obra y Condiciones Geométricas",
            s: [
              "Tipificación del hormigón: $T-R/C/TM/A$ (ej. HA-25/B/20/...) con resistencia característica mínima de $25\text{ N/mm}^2$.",
              "Espesor mínimo de la losa superior ($h_0$): 40 mm sobre viguetas, piezas cerámicas/hormigón y losas alveolares; 50 mm sobre otros materiales o zonas sísmicas ($a_c > 0,16g$)."
            ],
            c: "El tamaño máximo del árido ($TM$) será menor que $0,4$ veces el espesor mínimo de la losa superior y no superará los 20 mm."
          },
          {
            t: "4 · Ejecución, Acopio y Desapuntalado",
            s: [
              "Acopio: Apilados limpios sobre durmientes alineados en vertical, con vuelos máximos de $0,50\text{ m}$ y altura de pilas $\le 1,50\text{ m}$.",
              "Apuntalado: Puntales arriostrados en dos direcciones; estudio detallado si el peso propio es $>3\text{ kN/m}^2$ o altura $>4\text{ m}$.",
              "Desapuntalado: Según artículo 75 de la EHE; retirada desde el centro del vano hacia los extremos y sin golpes bruscos."
            ],
            c: "Si alguna vigueta o losa alveolar resulta dañada afectando a su capacidad portante, deberá ser desechada antes de su colocación."
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
        ]
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
              "Ámbito de aplicación: Estructuras de hormigón en masa, armado o pretensado.",
              "Vida útil nominal: Edificios de viviendas u oficinas: 50 años; edificios monumentales o puentes importantes: 100 años; estructuras temporales: entre 3 y 10 años."
            ],
            c: "La Propiedad debe fijar la vida útil nominal antes del inicio del proyecto."
          },
          {
            t: "3 · Materiales: Hormigón, Aceros y Aditivos",
            s: [
              "Resistencia mínima: La resistencia característica de proyecto ($f_{ck}$) no será inferior a $20\text{ N/mm}^2$ en hormigón en masa, ni a $25\text{ N/mm}^2$ en armado o pretensado.",
              "Consistencia: Se valora mediante el cono de Abrams (seca, plástica, blanda $6-9\text{ cm}$, fluida $10-15\text{ cm}$, líquida).",
              "Aceros pasivos: Se emplean aceros corrugados soldables (B 400 S, B 500 S) y con características especiales de ductilidad (B 400 SD, B 500 SD)."
            ],
            c: "Tipificación del hormigón estructural: $T-R/C/TM/A$ (ej. HA-25/B/20/IIa)."
          },
          {
            t: "4 · Ejecución: Cimbras, Encofrados y Puesta en Obra",
            s: [
              "Cimbras y apuntalamientos: El constructor dispondrá de proyecto de cimbra y certificado de cumplimiento; arriostramiento en dos direcciones resistiendo al menos el 2% de las cargas verticales.",
              "Productos desencofrantes: Se prohíbe expresamente el empleo de gasóleo, grasa corriente o análogos.",
              "Transporte y suministro: El tiempo máximo desde el amasado hasta la colocación es de 1h 30 min.",
              "Curado: Obligatorio mantener la humedad mediante riego u otros tratamientos durante el fraguado y primer endurecimiento."
            ],
            c: "No podrá procederse a la puesta en obra del hormigón sin disponer de los resultados de conformidad."
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
        ]
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
              "Definición: Elementos estructurales inclinados para salvar desniveles mediante peldaños, construidos sobre correas (hormigón/cerámica) o zancas (vigas metálicas).",
              "Partes del peldaño: Huella o pisa (parte horizontal) y contrahuella o tabica (parte vertical).",
              "Tipos de escaleras: Rectas de un solo tramo, de dos tramos con meseta, de cuarto de vuelta, imperiales, en abanico, de caracol, etc."
            ],
            c: "Cada tramo tendrá un mínimo de 3 peldaños y no podrá salvar una altura mayor de 3,20 m en uso general (2,50 m en sanitario y 2,10 m en escuelas infantiles o residencias de ancianos)."
          },
          {
            t: "2 · Diseño y Relación de Peldaños (DB-SU 1)",
            s: [
              "Relación de Blondel: Se cumplirá siempre a lo largo de toda la escalera $54\text{ cm} \le 2C + H \le 70\text{ cm}$ (o $540\text{ mm} \le 2C + H \le 700\text{ mm}$).",
              "Escaleras de uso general: Huella $H \ge 280\text{ mm}$, contrahuella $130\text{ mm} \le C \le 185\text{ mm}$ (máx. 170 mm en escuelas y centros de ancianos).",
              "Escaleras de uso restringido: Anchura mínima 800 mm, contrahuella máx. 200 mm y huella mín. 220 mm."
            ],
            c: "Las tabicas serán verticales o inclinadas formando un ángulo máximo de $15^\circ$ con la vertical; no se admiten escalones sin tabica ni bocel en evacuación ascendente o uso infantil/ancianos."
          },
          {
            t: "3 · Pasamanos y Barreras de Protección",
            s: [
              "Pasamanos: Obligatorios al menos en un lado, y en ambos si la anchura libre es $\ge 1,20\text{ m}$ (intermedios si la anchura supera los $2,40\text{ m}$).",
              "Altura de barandillas: Mínimo 900 mm (si el desnivel $\le 6\text{ m}$) o 1100 mm (si el desnivel $> 6\text{ m}$).",
              "Seguridad infantil: Sin puntos de apoyo escalables entre 200 mm y 700 mm de altura, y aberturas que no permitan el paso de una esfera de 100 mm."
            ],
            c: "El espacio libre inferior entre la barrera y la línea de inclinación de la escalera no excederá de 50 mm."
          },
          {
            t: "4 · Rampas y Escalas Fijas",
            s: [
              "Rampas: Pendiente máxima del 12% (10% para sillas de ruedas si longitud $<3\text{ m}$, 8% si $<6\text{ m}$, 6% en el resto).",
              "Escalas fijas: Anchura entre 400 y 800 mm, distancia entre peldaños máx. 300 mm.",
              "Protección en escalas: Protección circundante obligatoria a partir de 4 m de altura, y plataformas de descanso cada 9 m si superan dicha altura."
            ],
            c: "Las rampas con un desnivel superior a 550 mm dispondrán de pasamanos continuo al menos en un lado."
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
        ]
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
              "Ámbito: Verificación de seguridad estructural de elementos metálicos de acero en edificación (excluye puentes, silos, antenas o resistencia al fuego).",
              "Tipos de acero estructural: S235 ($f_y = 235\text{ N/mm}^2$), S275 ($f_y = 275\text{ N/mm}^2$), S355 ($f_y = 355\text{ N/mm}^2$) y S450 ($f_y = 450\text{ N/mm}^2$) para espesores $t \le 16\text{ mm}$.",
              "Grados de resiliencia (ensayo Charpy): JR ($20^\circ\text{C}$), J0 ($0^\circ\text{C}$), J2 ($-20^\circ\text{C}$) y K2 ($-20^\circ\text{C}$ con energía mínima de 40 J).",
              "Constantes físicas comunes: Módulo de elasticidad $E = 210.000\text{ N/mm}^2$, coeficiente de Poisson $\nu = 0,3$, densidad $\rho = 7.850\text{ kg/m}^3$."
            ],
            c: "Los espesores mayores de chapa reducen ligeramente el límite elástico mínimo garantizado."
          },
          {
            t: "2 · Uniones Soldadas y Estructurales",
            s: [
              "Soldadura en ángulo: Aplicable en elementos de al menos 4 mm cuyas caras forman un ángulo $\alpha$ entre $60^\circ$ y $120^\circ$.",
              "Longitud efectiva mínima: No se considerarán cordones cuya longitud sea inferior a 40 mm o a 6 veces el ancho de garganta ($a$).",
              "Soldadura a tope: De penetración total o parcial; el sobreespesor no superará $t/10$."
            ],
            c: "No se utilizará nunca un solo cordón de soldadura en ángulo para transmitir esfuerzos de tracción perpendiculares a su eje longitudinal."
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
        ]
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
              "Ámbito: Verificación de la seguridad estructural de elementos de madera maciza (aserrada y rollizo), madera laminada encolada, microlaminada y tableros estructurales.",
              "Clases resistentes (madera maciza): Para coníferas y chopo: C14 a C50; para frondosas: D30 a D70 (el número indica $f_{m,k}$ en $\text{N/mm}^2$).",
              "Clases resistentes (madera laminada encolada): Homogénea (GL24h a GL36h) y combinada (GL24c a GL36c)."
            ],
            c: "El contenido de humedad de la madera aserrada a su recepción en obra debe ser $\le 20\%$ salvo especificación en contra."
          },
          {
            t: "2 · Ejecución y Detalles Constructivos",
            s: [
              "Protección y durabilidad: Evitar contacto directo con el terreno (distancia mínima de 20 cm con barrera antihumedad) y ventilar los encuentros en muros manteniendo $\ge 15\text{ mm}$ de separación.",
              "Restricción de movimientos: En piezas de canto superior a 80 cm no deben utilizarse empalmes ni nudos rígidos con placas de acero y pernos que coarten el movimiento higrotérmico."
            ],
            c: "Las testas expuestas al agua de lluvia deben ocultarse o protegerse con piezas de remate que permitan la aireación."
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
          { ty: "Humedad en Obra", q: "¿Cuál es el contenido máximo de humedad exigido por defecto para la madera aserrada a su recepción en obra?", a: "Menor o igual al 20% ($\le 20\%$). Muestreo según normas UNE 56529 / UNE 56530." }
        ],
        glo: [
          ["Clase resistente", "Designación normalizada que agrupa a la madera según sus propiedades mecánicas (resistencia, rigidez y densidad).", "Ej: C24 para aserrada."]
        ]
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
              "Ámbito: Verificación de seguridad estructural de muros resistentes realizados con piezas pequeñas unidas con mortero (ladrillo, bloques de hormigón/cerámica aligerada, piedra) con o sin armaduras[cite: 240].",
              "Exclusiones: Fábricas en seco, piedra irregular (mampuestos), rellenos amorfos entre hojas o muros sin elementos de continuidad (encadenados) con forjados[cite: 240].",
              "Juntas de movimiento: Se disponen para absorber dilataciones térmicas, humedad, fluencia y retracción[cite: 241]. Distancias máximas orientativas en fábricas sustentadas: piedra natural (30 m), hormigón celular (22 m), hormigón ordinario/piedra artificial (20 m), ladrillo cerámico (entre 8 y 30 m según expansión por humedad y retracción del mortero)[cite: 241]."
            ],
            c: "En plantas con forma asimétrica (L, U) con alas mayores que la mitad de la distancia límite, se dispondrán juntas cerca de los puntos de encuentro[cite: 241]."
          },
          {
            t: "2 · Materiales: Piezas, Morteros y Propiedades Resistentes",
            s: [
              "Clasificación de piezas: Según volumen de huecos y espesor combinado en macizas, perforadas, aligeradas y huecas[cite: 245]. Resistencia normalizada mínima $f_b \ge 5\text{ N/mm}^2$ (admisible hasta 4 en sustentantes y 3 en sustentadas con limitaciones)[cite: 245].",
              "Morteros: Ordinarios (M1 mínimo para convencionales, M4 mínimo para armadas/pretensadas/junta delgada/ligeros)[cite: 245]. La resistencia a compresión del mortero no superará el 0,75 de la resistencia de las piezas[cite: 245].",
              "Resistencia característica a compresión ($f_k$): Depende de $f_b$ y $f_m$ (Tabla 13.9)[cite: 249]. Módulos y deformabilidad: fluencia, expansión por humedad y coeficiente de dilatación térmica[cite: 251]."
            ],
            c: "El espesor de tendeles y llagas en mortero ordinario o ligero será de 8 a 15 mm; en junta delgada, de 1 a 3 mm[cite: 255]."
          },
          {
            t: "3 · Ejecución, Detalles Constructivos y Armaduras",
            s: [
              "Humedecimiento y colocación: Las piezas cerámicas se humedecen antes de su empleo; la colocación se realiza a restregón asegurando el rebose de mortero[cite: 254].",
              "Traba y solape: Las hiladas deben solaparse al menos $0,4$ veces el grueso de la pieza y no menos de 40 mm ($0,4 U_m \ge 40\text{ mm}$)[cite: 254].",
              "Apoyos y enlaces: La longitud de apoyo de los forjados sobre muros será $\ge 65\text{ mm}$[cite: 256]. En muros capuchinos o doblados se disponen llaves o conectores (mínimo 2 por $\text{m}^2$)[cite: 256, 257]."
            ],
            c: "En muros de espesor menor que 200 mm, las juntas no se rehundirán más de 5 mm sin autorización[cite: 254]."
          },
          {
            t: "4 · Control de Calidad, Categorías y Tolerancias",
            s: [
              "Categorías de ejecución: A (control riguroso con ensayos previos de probetas), B (control estándar con especificaciones de piezas y mortero) y C (resto de casos o mezcla manual de mortero)[cite: 263].",
              "Tolerancias en muros verticales: Desplome en altura de piso $\le 20\text{ mm}$ (total $\le 50\text{ mm}$), axialidad $\le 20\text{ mm}$, planeidad en 1 m $\le 5\text{ mm}$[cite: 264].",
              "Protección durante la ejecución: Cubrir coronaciones para evitar lavado de juntas, proteger frente a heladas y acodalar provisionalmente muros sin arriostrar[cite: 265]."
            ],
            c: "Si alguna prueba de recepción de piezas falla o no se alcanza la categoría prevista, es obligatorio un recálculo estructural[cite: 262]."
          }
        ],
        casos: [
          {
            k: "Solape de Piezas en Fábrica",
            q: "Durante la ejecución de un muro de fábrica de ladrillo, ¿cuál es el solape mínimo exigido entre piezas en hiladas consecutivas según el CTE DB-SE-F?",
            o: ["Al menos 10 mm", "Al menos 0,4 veces el grueso de la pieza y no menor de 40 mm", "Exactamente la mitad de la soga en todos los casos"],
            a: 1,
            e: "En hiladas consecutivas, las piezas se solaparán al menos 0,4 veces el grueso de la pieza ($U_m$) y no menos de 40 mm[cite: 254]."
          },
          {
            k: "Categorías de Ejecución",
            q: "Para especificar una fábrica armada o pretensada, ¿qué categorías de ejecución se permiten obligatoriamente según el DB-SE-F?",
            o: ["Únicamente clases A o B para armada, y clase A para pretensada", "Cualquier categoría, incluida la C", "Exclusivamente la categoría C"],
            a: 0,
            e: "En elementos de fábrica armada se especificará sólo clases A o B, y en elementos de fábrica pretensada se especificará obligatoriamente clase A[cite: 261]."
          }
        ],
        cards: [
          { ty: "Juntas de Movimiento", q: "¿Cuál es la distancia máxima orientativa entre juntas de movimiento para fábricas sustentadas de hormigón ordinario?", a: "20 metros[cite: 241]." },
          { ty: "Apoyo de Forjados", q: "¿Cuál es la longitud mínima de apoyo de un forjado sobre un muro de fábrica según el DB-SE-F?", a: "Nunca menor de 65 mm[cite: 256]." },
          { ty: "Espesor de Tendeles", q: "¿Qué espesor reglamentario deben tener los tendeles y llagas con mortero ordinario o ligero?", a: "Entre 8 mm y 15 mm[cite: 255]." },
          { ty: "Tolerancia de Desplome", q: "¿Cuál es la tolerancia máxima de desplome permitida en la altura de un piso para muros verticales?", a: "20 mm[cite: 264]." }
        ],
        glo: [
          ["DB-SE-F", "Documento Básico de Seguridad Estructural: Fábrica del Código Técnico de la Edificación.", "Regula el cálculo, materiales y ejecución de estructuras de fábrica."],
          ["Restregón", "Técnica de colocación de piezas de fábrica presionando el material sobre lecho de mortero hasta rebosar las juntas.", "Garantiza el correcto macizado[cite: 254]."],
          ["Llaves o conectores", "Elementos metálicos o piezas cerámicas destinados a enlazar las hojas de un muro capuchino o doblado.", "Mínimo 2 unidades por metro cuadrado[cite: 256, 257]."]
        ]
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
              "Grado de impermeabilidad: Exigido a las fachadas frente a precipitaciones en función de la zona pluviométrica de promedios (I a V) y el grado de exposición al viento (V1 a V3)[cite: 247].",
              "Clases de entorno: E0 (terrenos I, II y III, abiertos y sin obstáculos) y E1 (demás casos, zonas urbanas o protegidas)[cite: 247].",
              "Condiciones constructivas: Combinación de requisitos en función de la existencia o no de revestimiento exterior y el grado de impermeabilidad (bloques R, B, C, H, J, N)[cite: 249]."
            ],
            c: "Las exigencias de estanqueidad aumentan progresivamente desde el grado 1 hasta el grado 5[cite: 249]."
          },
          {
            t: "2 · Materiales: Ladrillos Cara Vista y Morteros",
            s: [
              "Ladrillos cara vista: Clasificados en macizos (volumen de huecos $<25\%$) y perforados (volumen de huecos $<45\%$)[cite: 265]. Tipos especiales: baja succión ($\le 4,5\text{ kg/m}^2\cdot\text{min}$), hidrofugados, klinker/gresificados y resistentes a heladicidad (F1 y F2)[cite: 266].",
              "Morteros de albañilería (UNE 83-800-94): Clasificados por su resistencia característica (M-2.5, M-5, M-7.5, M-15)[cite: 261].",
              "Propiedades del mortero: Buena plasticidad (aportada por la cal o plastificantes), retención de agua y adecuada adherencia ladrillo-mortero[cite: 261, 262]. En ladrillos de baja succión se recomienda limitar la relación agua/cemento a $\le 0,50$[cite: 263]."
            ],
            c: "La resistencia a compresión del mortero para fachadas de cara vista no resistentes no debe superar los $75\text{ daN/cm}^2$[cite: 262]."
          },
          {
            t: "3 · Puntos Singulares y Detalles Constructivos",
            s: [
              "Arranque desde la cimentación: Barrera impermeable continua a más de 15 cm sobre el suelo exterior y zócalo protector impermeable de más de 30 cm de altura con coeficiente de succión $<3\%$[cite: 254].",
              "Encuentros con forjados y pilares: Junta de desolidarización de 2 cm bajo los forjados con perfil goterón, o refuerzo del revestimiento con mallas solapadas 15 cm[cite: 254, 255].",
              "Cámara de aire ventilada: Espesor entre 3 y 10 cm, con aberturas de ventilación mínimas de $120\text{ cm}^2$ por cada $10\text{ m}^2$ de paño y sistema de recogida/evacuación de agua en la base (separación máx. 1,5 m)[cite: 251, 257].",
              "Carpinterías, vierteaguas y albardillas: Vierteaguas con pendiente $\ge 10^\circ$, goterón separado $\ge 2\text{ cm}$ de la fachada y entrega lateral de 2 cm[cite: 258]. Albardillas inclinadas $\ge 10^\circ$ con goterones y juntas selladas[cite: 259]."
            ],
            c: "Las juntas de dilatación en la hoja principal deben coincidir con las juntas estructurales del edificio[cite: 253]."
          }
        ],
        casos: [
          {
            k: "Arranque de Fachada",
            q: "Según el DB-HS-1, ¿a qué altura mínima sobre el nivel del suelo exterior debe disponerse la barrera impermeable horizontal en el arranque de la fachada para evitar el ascenso por capilaridad?",
            o: ["A más de 5 cm", "A más de 15 cm", "Exactamente a 50 cm"],
            a: 1,
            e: "Debe disponerse una barrera impermeable que cubra todo el espesor de la fachada a más de 15 cm por encima del nivel del suelo exterior[cite: 254]."
          },
          {
            k: "Ventilación de Cámaras",
            q: "En una cámara de aire ventilada, ¿cuál es el área efectiva total mínima de aberturas de ventilación exigida por el DB-HS-1?",
            o: ["50 cm² por cada 10 m² de paño", "120 cm² por cada 10 m² de paño repartidas al 50% arriba y abajo", "1 m² por cada planta de edificio"],
            a: 1,
            e: "Deben disponerse aberturas de ventilación cuya área efectiva total sea como mínimo igual a $120\text{ cm}^2$ por cada $10\text{ m}^2$ de paño de fachada entre forjados, repartidas al 50% entre la parte superior e inferior[cite: 251]."
          }
        ],
        cards: [
          { ty: "Zócalo de Protección", q: "¿Qué altura mínima y qué coeficiente máximo de succión debe tener el zócalo de protección frente a salpicaduras en cimentación?", a: "Más de 30 cm de altura y coeficiente de succión inferior al 3%[cite: 254]." },
          { ty: "Pendiente de Vierteaguas", q: "¿Cuál es la inclinación mínima exigida para los vierteaguas y albardillas para evacuar el agua de lluvia?", a: "Una pendiente de $10^\circ$ como mínimo[cite: 258, 259]." },
          { ty: "Espesor de Cámara", q: "¿Entre qué valores debe estar comprendido el espesor de la cámara de aire ventilada según el DB-HS-1?", a: "Entre 3 cm y 10 cm[cite: 251]." },
          { ty: "Relación Agua/Cemento", q: "¿Cuál es el valor máximo recomendado para la relación agua/cemento al amasar morteros para ladrillos de baja succión?", a: "No superior a 0,50[cite: 263]." }
        ],
        glo: [
          ["DB-HS-1", "Documento Básico de Salubridad: Protección frente a la humedad del Código Técnico de la Edificación.", "Establece las reglas de estanqueidad y diseño de fachadas."],
          ["Ladrillo hidrofugado", "Ladrillo sometido a un proceso con productos hidrofugantes que repele el agua líquida manteniendo la permeabilidad al vapor.", "No debe humedecerse antes de su colocación[cite: 266]."],
          ["Gotero o goterón", "Pequeña acanaladura en la cara inferior de elementos salientes para evitar que el agua escurra hacia el paramento vertical de la fachada.", "Debe estar separado al menos 2 cm del muro[cite: 258, 259]."]
        ]
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
              "Definición y elementos geométricos: Faldón (plano inclinado), línea de máxima pendiente, alero (voladizo inferior), limahoya (encuentrocóncavo), limatesa (encuentro convexo), cumbrera (horizontal superior) y hastial (muro testero)[cite: 265, 266].",
              "Tipos de cubiertas: A un agua, a dos aguas (simétrica o con cumbrera desplazada), a tres aguas, a cuatro aguas de pabellón y de tipo mansarda[cite: 263].",
              "Soporte y base estructural: Tableros continuos (rasillones cerámicos con capa de mortero, fibrocemento, paneles) o soportes discontinuos con rastreles y correas[cite: 265, 266]."
            ],
            c: "El alero debe sobresalir como mínimo 5 cm y como máximo media pieza del soporte para evitar filtraciones y proteger el paramento[cite: 267]."
          },
          {
            t: "2 · Comportamiento Higrotérmico y Ventilación (DB-HS-1 / DB-HE)",
            s: [
              "Cubiertas calientes (no ventiladas): El aislamiento térmico forma parte de la hoja principal sin cámara intermedia; se emplea microventilación bajo teja para evitar condensaciones[cite: 272].",
              "Cubiertas frías (ventiladas): La estructura portante está separada del sistema de formación de pendientes, quedando una cámara de aire ventilada intermedia que regula el comportamiento higrométrico[cite: 273].",
              "Condición de ventilación: El cociente entre el área efectiva total de aberturas ($S_s$ en $\text{cm}^2$) y la superficie de cubierta ($A_c$ en $\text{m}^2$) debe cumplir $3 < S_s / A_c < 30$[cite: 278]."
            ],
            c: "Las cubiertas frías son habituales cuando no existe aprovechamiento bajo cubierta y ofrecen un excelente control frente a condensaciones[cite: 273]."
          },
          {
            t: "3 · Puntos Singulares y Exigencias Normativas",
            s: [
              "Encuentros con paramentos verticales: Elementos de protección que cubren una banda de $\ge 25\text{ cm}$ por encima del tejado y se prolongan $\ge 10\text{ cm}$ sobre las piezas[cite: 267].",
              "Limahoyas y cumbreras: Las piezas del tejado deben sobresalir $\ge 5\text{ cm}$ sobre la limahoya, manteniendo una separación mínima entre faldones de 20 cm[cite: 268]. Las cumbreras solapan $\ge 5\text{ cm}$[cite: 268].",
              "Canalones: Pendiente hacia el desagüe $\ge 1\%$, con las tejas vertiendo $\ge 5\text{ cm}$ sobre ellos[cite: 270]."
            ],
            c: "Los elementos pasantes (chimeneas, conductos) nunca deben disponerse en las limahoyas para evitar retenciones de agua[cite: 269]."
          },
          {
            t: "4 · Pendientes Mínimas y Sistemas de Fijación",
            s: [
              "Pendientes mínimas según cobertura (Tabla 1.16): Teja curva ($32\%$), teja mixta y plana monocanal ($30\%$), teja plana marsellesa ($40\%$), pizarra ($60\%$), paneles y chapas metálicas desde $5\%$[cite: 275].",
              "Fijación de tejas: Teja curva recibida con mortero en tejas canal y 1 de cada 5 cobijas (o ganchos en fuerte pendiente)[cite: 278, 279]. Tejas mixtas y planas apoyadas en rastreles (fijadas mecánicamente con tornillos o ganchos en alta pendiente)[cite: 279, 280].",
              "Pizarra y chapas metálicas: Colocación mediante ganchos clavados al soporte o tornillos autorroscantes con arandelas estancas sobre correas[cite: 280, 281]."
            ],
            c: "La capa de impermeabilización bajo las tejas solo es obligatoria por normativa cuando la pendiente del faldón es inferior a los mínimos establecidos en el DB-HS-1[cite: 278]."
          }
        ],
        casos: [
          {
            k: "Pendiente Mínima en Teja Curva",
            q: "Según el CTE recogido en los apuntes, ¿cuál es la pendiente mínima exigida por defecto para cubiertas inclinadas con teja curva?",
            o: ["10%", "20%", "32%"],
            a: 2,
            e: "La pendiente mínima exigida para la teja curva es del 32% (pudiendo variar según zona climática y longitud de faldón)[cite: 275]."
          },
          {
            k: "Ventilación de Cubiertas",
            q: "En una cubierta inclinada ventilada, ¿qué condición debe cumplir el cociente entre el área efectiva de aberturas de ventilación ($S_s$) y la superficie de la cubierta ($A_c$)?",
            o: ["$3 < S_s / A_c < 30$", "Menor de 1", "Exactamente 50"],
            a: 0,
            e: "El cociente de ventilación debe cumplir estrictamente la condición $3 < S_s / A_c < 30$[cite: 278]."
          }
        ],
        cards: [
          { ty: "Pendiente Mínima Pizarra", q: "¿Cuál es la pendiente mínima exigida para cubiertas de pizarra según la tabla del DB-HS-1?", a: "60%[cite: 275]." },
          { ty: "Separación en Limahoyas", q: "¿Cuál es la separación mínima exigida entre las piezas del tejado de dos faldones concurrentes en una limahoya?", a: "20 cm como mínimo[cite: 268]." },
          { ty: "Altura de Protección Vertical", q: "¿Qué altura mínima debe cubrir el elemento de protección en el encuentro de la cubierta con un paramento vertical?", a: "25 cm por encima del tejado[cite: 267]." },
          { ty: "Pendiente de Canalones", q: "¿Qué pendiente mínima deben tener los canalones hacia los puntos de desagüe?", a: "1% como mínimo[cite: 270]." }
        ],
        glo: [
          ["Cubierta fría", "Sistema de cubierta ventilada donde la estructura portante y el aislamiento están separados del plano de formación de pendientes por una cámara de aire[cite: 273].", "Excelente control higrométrico."],
          ["Limahoya", "Línea de encuentro cóncava entre dos faldones de cubierta hacia donde concurre y es evacuada el agua de lluvia[cite: 265, 268].", "No se permiten elementos pasantes en ella[cite: 269]."],
          ["Teja cobija", "En teja árabe, la teja superior colocada con la parte convexa hacia arriba que cubre la junta entre las tejas canal[cite: 268, 278]."]
        ]
      }
    ]
  }
];
