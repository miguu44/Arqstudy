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
          },
          {
            k: "Agentes de la Edificación",
            q: "¿Quién asume la función técnica de dirigir la ejecución material de la obra y controlar la calidad de lo edificado según la LOE?",
            o: ["El Promotor", "El Director de Obra (Arquitecto)", "El Director de la Ejecución de la Obra (Arquitecto Técnico)"],
            a: 2,
            e: "El Director de la Ejecución de la Obra (usualmente Arquitecto Técnico) asume el control cuantitativo y cualitativo de la construcción material[cite: 13]."
          },
          {
            k: "Recepción de la Obra",
            q: "Terminada la obra y emitido el certificado final, transcurren 35 días sin que el promotor firme el acta ni exprese reservas por escrito. ¿Qué ocurre?",
            o: ["Se entiende la recepción tácitamente producida y empiezan a contar los plazos de garantía", "La obra queda paralizada administrativamente", "Se anula el certificado final de obra"],
            a: 0,
            e: "Transcurridos 30 días desde la terminación sin manifestación del promotor, la recepción se entiende tácitamente producida (Art. 6.4 LOE)[cite: 9]."
          }
        ],
        cards: [
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía para daños estructurales según la LOE?", a: "10 años (Art. 17.1.a)[cite: 15, 17]" },
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía por defectos de habitabilidad (aislamiento, ruido, humedad)?", a: "3 años (Art. 17.1.b)[cite: 15, 17]" },
          { ty: "Pregunta LOE", q: "¿Qué documento obligatorio se entrega a los usuarios finales al finalizar la obra?", a: "El Libro del Edificio[cite: 9]" },
          { ty: "Pregunta LOE", q: "En edificación residencial, ¿qué titulación es obligatoria para el Director de Obra (DO)?", a: "Arquitecto[cite: 12]" },
          { ty: "Pregunta LOE", q: "En edificación residencial, ¿qué titulación es obligatoria para el Director de la Ejecución de la Obra (DEO)?", a: "Arquitecto Técnico[cite: 13]" }
        ],
        glo: [
          ["LOE", "Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación.", "Marco legal principal del sector en España."],
          ["Promotor", "Persona física o jurídica que decide, impulsa, programa y financia las obras.", "Responsable solidario ante los compradores[cite: 15]."],
          ["Director de Obra", "Técnico que dirige el desarrollo técnico, estético y urbanístico del proyecto.", "Forma parte de la dirección facultativa[cite: 12]."],
          ["Director de Ejecución", "Técnico que dirige la ejecución material y controla la calidad de lo edificado.", "Controla los ensayos y materiales en obra[cite: 13]."],
          ["Libro del Edificio", "Conjunto de documentos con la información de la obra ejecutada, agentes y mantenimiento.", "Se entrega obligatoriamente a los usuarios finales[cite: 9]."],
          ["Recepción de obra", "Acto de entrega de la obra del constructor al promotor.", "Hito que inicia el cómputo de los plazos de garantía[cite: 9]."]
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
              "Características físicas externas (dimensiones, niveles, vecinas, pendientes) e internas (servicios, restos, cimentaciones previas)[cite: 19].",
              "El Estudio Geotécnico determina características físicas, mecánicas, composición y nivel freático para diseñar la cimentación[cite: 19, 20].",
              "Clasificación de la construcción (C-0 a C-4 según plantas y superficie) y grupos de terreno (T-1 favorables, T-2 intermedios, T-3 desfavorables)[cite: 21].",
              "Profundidad y densidad de reconocimientos: mínimo 3 puntos, controlando que el incremento neto de tensión sea inferior al 10% de la efectiva vertical[cite: 22, 23]."
            ],
            c: "El estudio geotécnico debe acometerse en la fase inicial de proyecto y antes de dimensionar totalmente la estructura[cite: 20]."
          },
          {
            t: "2 · Técnicas de Prospección del Terreno",
            s: [
              "Calicatas: Excavaciones para observación directa (profundidad < 4m, terrenos cohesivos, sin nivel freático)[cite: 25].",
              "Sondeos mecánicos: Perforaciones rotativas o a percusión para extraer testigos, medir nivel freático y ensayo SPT[cite: 25, 26].",
              "Pruebas continuas de penetración: Medida indirecta estática o dinámica de la resistencia[cite: 26].",
              "Técnicas geofísicas: Sísmica de refracción, resistividad eléctrica o georradar como complemento a grandes superficies (no exclusivas)[cite: 27]."
            ],
            c: "En calicatas de más de 1,5 m de profundidad es obligatorio entibar o retaluzar para acceder[cite: 25]."
          },
          {
            t: "3 · Clasificación Granulométrica y Límites de Atterberg",
            s: [
              "Bolos (>60mm), Grava (2-60mm), Arena (0,06-2mm), Limo (0,002-0,06mm) y Arcillas (<0,002mm)[cite: 28].",
              "Gravas y arenas: Terrenos compresibles, inelásticos y sin cohesión apreciable (rozamiento interno)[cite: 28].",
              "Arcillas: Terrenos coherentes y elásticos cuyo comportamiento depende de la humedad[cite: 29].",
              "Límites de Atterberg: Límite líquido ($L_l$) y límite plástico ($L_p$) para calcular el índice de plasticidad ($I_p$) y consistencia ($I_c$)[cite: 29]."
            ],
            c: "El comportamiento mecánico depende de la granulometría y del estado hídrico del terreno[cite: 28, 29]."
          },
          {
            t: "4 · Presiones de Hundimiento y Admisibles (DB-SE-C)",
            s: [
              "Presión total bruta ($q_b$) y presión total neta ($q_{neta}$), que descuenta la sobrecarga existente al nivel de la base[cite: 30].",
              "Área equivalente de un cimiento ($B^*$, $L^*$) para corregir excentricidades de carga mediante la formulación $B - 2e_B$[cite: 31].",
              "Comprobación del Estado Límite Último de hundimiento mediante tablas analíticas o ensayos in situ (SPT, cross-hole)[cite: 30, 31]."
            ],
            c: "Las excentricidades superiores a 1/20 del lado exigen el uso de la sección equivalente[cite: 31]."
          },
          {
            t: "5 · Resumen de Acciones en la Edificación (DB-SE-AE)",
            s: [
              "Acciones permanentes: Peso propio de estructura, cerramientos, tabiquería (aprox. 1,0 kN/m² en viviendas) y equipos fijos[cite: 34].",
              "Sobrecargas de uso: Valores uniformes según categoría (residencial A: 2 kN/m², oficinas B: 2 kN/m², comerciales D: 5 kN/m²)[cite: 35].",
              "Viento ($q_e$): Función de presión dinámica, coeficiente de exposición y coeficiente eólico/presión[cite: 37].",
              "Nieve y Acciones térmicas: Carga en función de altitud y zona, y juntas de dilatación cada 40 m en estructuras de hormigón/acero[cite: 40, 41]."
            ],
            c: "Los edificios ordinarios no son sensibles a efectos dinámicos del viento salvo esbeltez superior a 6[cite: 37]."
          }
        ],
        casos: [
          {
            k: "Estudio Geotécnico",
            q: "Se proyecta un edificio residencial de 5 plantas (Tipo C-2) en un terreno con rellenos antrópicos y arcillas expansivas (Grupo T-3). ¿Qué condiciona el estudio geotécnico?",
            o: ["No requiere sondeos si el solar es pequeño", "Se deben programar sondeos mecánicos y profundidades adaptadas al grupo T-3 y tipo C-2", "Basta con una calicata manual de 1 metro"],
            a: 1,
            e: "Los terrenos desfavorables (T-3) y edificios C-2 exigen una campaña rigurosa con sondeos mecánicos y profundidades orientativas mayores según las tablas del DB-SE-C."
          },
          {
            k: "Clasificación de Suelos",
            q: "Un suelo está compuesto mayoritariamente por partículas inferiores a 0,002 mm, es coherente y su consistencia varía notablemente con la humedad y los límites de Atterberg. ¿De qué suelo se trata?",
            o: ["Arena limpia", "Arcilla", "Bolos y gravas detríticas"],
            a: 1,
            e: "Las partículas menores de 0,002 mm corresponden a arcillas, caracterizadas por su cohesión y dependencia de los límites de Atterberg y contenido hídrico."
          },
          {
            k: "Acciones en la Edificación",
            q: "Para el cálculo de la estructura de un edificio de viviendas convencional, ¿qué valor de carga equivalente por peso propio de tabiquería ordinaria se puede adoptar habitualmente?",
            o: ["1,0 kN por cada m² de superficie construida", "5,0 kN/m² obligatorios", "No se tiene en cuenta la tabiquería"],
            a: 0,
            e: "Según el DB-SE-AE, en viviendas bastará considerar como peso propio de la tabiquería una carga de 1,0 kN por cada m² de superficie construida."
          }
        ],
        cards: [
          { ty: "Concepto Geotecnia", q: "¿Qué diferencia hay fundamentalmente entre gravas/arenas y limos/arcillas ante las cargas?", a: "Las gravas y arenas resisten por rozamiento interno y son compresibles sin cohesión; las arcillas son coherentes y su comportamiento depende de la humedad." },
          { ty: "DB-SE-C", q: "¿Cuál es el número mínimo de puntos a reconocer en un solar con carácter general?", a: "Un mínimo de tres puntos de reconocimiento." },
          { ty: "DB-SE-AE", q: "¿Cuál es el valor característico de la sobrecarga de uso en viviendas (categoría A1)?", a: "2 kN/m²." },
          { ty: "Normativa", q: "¿Qué distancia máxima sin juntas de dilatación se permite habitualmente en estructuras de hormigón o acero?", a: "40 metros." },
          { ty: "Geotecnia", q: "¿Qué mide el ensayo del cono de Abrams y en qué tipo de material se aplica?", a: "Mide la docilidad o consistencia del hormigón fresco." }
        ],
        glo: [
          ["Estudio Geotécnico", "Conjunto de datos y ensayos sobre las características físicas y mecánicas del terreno para diseñar cimientos[cite: 19, 20].", "Documento obligatorio de proyecto."],
          ["Calicata", "Excavación a cielo abierto (<4m) que permite inspección directa y toma de muestras[cite: 25].", "No válida con nivel freático alto."],
          ["Sondeo mecánico", "Perforación profunda para extraer testigos y realizar ensayos in situ como SPT[cite: 25, 26].", "Imprescindible bajo nivel freático."],
          ["Límites de Atterberg", "Límite líquido y plástico que definen la plasticidad y consistencia de las arcillas[cite: 29].", "Parámetros geotécnicos clave."],
          ["Presión admisible", "Valor de cálculo de la resistencia del terreno frente al hundimiento y asientos[cite: 30].", "Límite para dimensionar cimientos."],
          ["DB-SE-AE", "Documento Básico del CTE relativo a las Acciones en la Edificación (peso propio, viento, nieve, uso)[cite: 33, 34, 35, 37, 40].", "Normativa de cálculo de cargas."]
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
              "Desbroce y limpieza mecánica: retirada de capa superficial, vegetación espontánea y posibles restos de escombros[cite: 45].",
              "Replanteo: operación de trasladar y dibujar sobre el terreno los ejes de la estructura, cimentación y perímetros (sótanos)[cite: 45].",
              "Instrumentos de medición: cinta métrica, nivel de burbuja/agua, escuadra, plomada y aparatos topográficos (taquímetros)[cite: 45, 49, 50].",
              "Elementos de marcaje: estacas, camillas de madera, jalones, cordel, tiralíneas de azulete y varillas[cite: 49, 50, 51]."
            ],
            c: "Es imprescindible verificar las mediciones dos o tres veces y comprobar distancias a referencias exteriores fijas (aceras, solares colindantes)[cite: 49]."
          },
          {
            t: "2 · Movimiento de Tierras: Desmontes y Excavaciones",
            s: [
              "Desmontes: excavación o rebaje del terreno (zanjas, pozos para cimentación, vaciados para sótanos y desmontes a cielo abierto)[cite: 52].",
              "Toda extracción lleva implícita la carga sobre camión y el transporte a vertedero autorizado[cite: 52].",
              "Recomendación en arcillas: dejar sin excavar un recubrimiento de unos 30 cm hasta el mismo día de la cimentación para proteger el fondo[cite: 53].",
              "Uso de taludes perimetrales, bermas y técnica de bataches en excavaciones profundas junto a edificios medianeros[cite: 52]."
            ],
            c: "Se debe evitar alterar la estructura del suelo de apoyo de los cimientos durante la excavación[cite: 52]."
          },
          {
            t: "3 · Terraplenados y Compactación",
            s: [
              "Terraplenado: aporte de tierras (de la propia obra o de préstamo) para regularizar o alcanzar una cota determinada[cite: 53, 54].",
              "Compactación: realizada mediante rodillos vibrantes (remolcados o autopropulsados) y mesas vibrantes[cite: 53, 54].",
              "Tongadas: el material se vierte en capas sucesivas de 25 a 30 cm de espesor y se compacta capa por capa[cite: 54]."
            ],
            c: "Un terraplén mal compactado genera asientos posteriores indeseados bajo soleras o pavimentos."
          },
          {
            t: "4 · Taludes, Esponjamiento y Asentamiento",
            s: [
              "Talud: inclinación del corte o terraplén respecto a la horizontal, dependiendo de la cohesión del terreno y si está seco o inmerso (Tabla 3.1)[cite: 54, 55].",
              "Esponjamiento ($C_e$): aumento de volumen que experimenta el terreno al ser excavado y perder su compacidad natural (clave para transporte y acopio)[cite: 55, 56].",
              "Asentamiento ($C_a$): pérdida de volumen que sufre el material de relleno al ser compactado en terraplenes[cite: 56]."
            ],
            c: "Los suelos cohesivos admiten ángulos de talud mayores que los suelos granulares o arenas finas[cite: 54, 55]."
          },
          {
            t: "5 · Seguridad y Salud en Zanjas y Vaciados",
            s: [
              "Entibación obligatoria y conveniente en zanjas de profundidad igual o superior a 1,5 m (o respetar ángulos de talud)[cite: 57].",
              "Zona libre de cargas: mantener una franja de al menos 2 m libre de acopios y circulación de vehículos junto al borde[cite: 57, 58].",
              "Protección perimetral: barandilla reglamentaria en zanjas de profundidad igual o superior a 2 m[cite: 57].",
              "Medios de acceso: al menos una escalera portátil por equipo de trabajo que sobresalga 1 m del borde[cite: 57]."
            ],
            c: "Tras lluvias o encharcamientos, es imprescindible revisar minuciosamente los taludes y achicar el agua de forma inmediata[cite: 57]."
          }
        ],
        casos: [
          {
            k: "Seguridad en Zanjas",
            q: "¿A partir de qué profundidad en zanjas se establece la conveniencia de disponer entibación según los apuntes de seguridad?",
            o: ["A partir de 0,5 metros", "Igual o superior a 1,5 metros", "Exclusivamente a partir de 5 metros de profundidad"],
            a: 1,
            e: "Cuando la profundidad de una zanja sea igual o superior a 1,5 m es conveniente entibarla para evitar desprendimientos (o respetar los taludes de la tabla)[cite: 57]."
          },
          {
            k: "Fenómenos en Tierras",
            q: "¿Cómo se denomina el incremento de volumen que sufre un terreno al ser excavado debido a la pérdida de su compacidad y cohesión original?",
            o: ["Asentamiento", "Esponjamiento", "Consolidación diferida"],
            a: 1,
            e: "El esponjamiento ($C_e$) es el aumento de volumen del terreno suelto frente al hueco excavado, un factor clave para calcular camiones y vertedero[cite: 55, 56]."
          },
          {
            k: "Ejecución de Terraplenes",
            q: "Durante los trabajos de terraplenado, ¿de qué espesor máximo orientativo deben ser las capas sucesivas de aporte de tierra para garantizar una correcta compactación?",
            o: ["De 25 a 30 cm (tongadas)", "De 1,5 a 2 metros", "De 5 a 10 metros"],
            a: 0,
            e: "El relleno o terraplenado se ejecuta vertiendo la tierra por capas de 25 o 30 cm denominadas tongadas, compactándolas sucesivamente[cite: 54]."
          }
        ],
        cards: [
          { ty: "Seguridad", q: "¿Qué distancia libre de cargas y vehículos se debe mantener como norma general junto al borde de una zanja?", a: "Una zona de unos 2 metros libre de acopios y circulación[cite: 57]." },
          { ty: "Definición", q: "¿Qué diferencia hay entre desmonte y terraplenado?", a: "El desmonte es excavar o rebajar terreno; el terraplenado es aportar y compactar tierras[cite: 52, 53]." },
          { ty: "Seguridad", q: "¿Cuánto debe sobresalir como mínimo la escalera de mano en el interior de una zanja para garantizar un acceso seguro?", a: "Debe sobresalir al menos 1 metro por encima del borde de la zanja[cite: 57]." },
          { ty: "Replanteo", q: "¿Para qué sirven las camillas en el replanteo de cimentación?", a: "Son soportes de madera con cordeles que permiten materializar y conservar los ejes y alineaciones del edificio[cite: 49, 51]." }
        ],
        glo: [
          ["Replanteo", "Operación de trasladar los planos al terreno marcando ejes y perímetros[cite: 45].", "Uso de camillas, cintas y taquímetros[cite: 45, 49, 50, 51]."],
          ["Desmonte", "Excavación o rebaje masivo o en zanjas/pozos del terreno[cite: 52].", "Requiere carga y transporte a vertedero[cite: 52]."],
          ["Terraplenado", "Relleno y aporte de tierras para alcanzar una cota proyectada[cite: 53, 54].", "Se ejecuta en tongadas de 25-30 cm compactadas[cite: 54]."],
          ["Esponjamiento", "Aumento de volumen del terreno al excavarlo y perder compacidad[cite: 55, 56].", "Afecta al dimensionado de camiones y transporte[cite: 55, 56]."],
          ["Entibación", "Sistema de contención temporal de paredes en zanjas para evitar derrumbes[cite: 57, 58].", "Obligatoria/conveniente si h ≥ 1,5 m[cite: 57]."],
          ["Tongada", "Capa de suelo de 25-30 cm destinada a recibir compactación en terraplenes[cite: 54].", "Compactada capa a capa[cite: 54]."]
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
