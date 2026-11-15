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
          }
        ],
        cards: [
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía para daños estructurales según la LOE?", a: "10 años (Art. 17.1.a)[cite: 15, 17]" },
          { ty: "Pregunta LOE", q: "¿Cuál es el plazo de garantía por defectos de habitabilidad?", a: "3 años (Art. 17.1.b)[cite: 15, 17]" },
          { ty: "Pregunta LOE", q: "¿Qué documento obligatorio se entrega a los usuarios finales al finalizar la obra?", a: "El Libro del Edificio[cite: 9]" }
        ],
        glo: [
          ["LOE", "Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación.", "Marco legal principal del sector en España."],
          ["Promotor", "Persona física o jurídica que decide, impulsa, programa y financia las obras.", "Responsable solidario ante los compradores[cite: 15]."],
          ["Director de Ejecución", "Técnico que dirige la ejecución material y controla la calidad de lo edificado.", "Controla los ensayos y materiales en obra[cite: 13]."]
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
              "Sondeos mecánicos: perforaciones para extraer testigos y ensayos SPT[cite: 25, 26].",
              "Pruebas continuas de penetración y técnicas geofísicas complementarias[cite: 26, 27]."
            ],
            c: "En calicatas de más de 1,5 m de profundidad es obligatorio entibar o retaluzar[cite: 25]."
          },
          {
            t: "3 · Clasificación Granulométrica y Límites de Atterberg",
            s: [
              "Bolos, gravas, arenas, limos y arcillas[cite: 28].",
              "Gravas y arenas: rozamiento interno, compresibles y sin cohesión[cite: 28].",
              "Arcillas: terrenos coherentes y elásticos; límites de Atterberg ($L_l$, $L_p$, $I_p$, $I_c$)[cite: 29]."
            ],
            c: "El comportamiento mecánico depende de la granulometría y del estado hídrico[cite: 28, 29]."
          },
          {
            t: "4 · Presiones de Hundimiento y Admisibles (DB-SE-C)",
            s: [
              "Presión total bruta ($q_b$) y neta ($q_{neta}$)[cite: 30].",
              "Área equivalente de un cimiento ($B^*$, $L^*$) para excentricidades[cite: 31].",
              "Comprobación del Estado Límite Último de hundimiento mediante tablas analíticas o ensayos in situ[cite: 30, 31]."
            ],
            c: "Excentricidades superiores a 1/20 del lado exigen el uso de la sección equivalente[cite: 31]."
          },
          {
            t: "5 · Resumen de Acciones en la Edificación (DB-SE-AE)",
            s: [
              "Acciones permanentes: peso propio, tabiquería (aprox. 1,0 kN/m² en viviendas)[cite: 34].",
              "Sobrecargas de uso según categoría (residencial 2 kN/m², comerciales 5 kN/m²)[cite: 35].",
              "Viento, nieve y acciones térmicas (juntas de dilatación cada 40 m)[cite: 37, 40, 41]."
            ],
            c: "Los edificios ordinarios no son sensibles a efectos dinámicos del viento salvo esbeltez superior a 6[cite: 37]."
          }
        ],
        casos: [
          {
            k: "Estudio Geotécnico",
            q: "Se proyecta un edificio de 5 plantas en un terreno desfavorable con arcillas expansivas (Grupo T-3). ¿Qué tipo de reconocimiento se requiere?",
            o: ["Ninguno", "Sondeos mecánicos y profundidades adaptadas al grupo T-3 y tipo C-2", "Una calicata manual de 50 cm"],
            a: 1,
            e: "Los terrenos desfavorables (T-3) exigen campañas rigurosas con sondeos mecánicos según el DB-SE-C."
          }
        ],
        cards: [
          { ty: "Geotecnia", q: "¿Cuál es el número mínimo de puntos de reconocimiento a realizar en un solar?", a: "Un mínimo de tres puntos." },
          { ty: "DB-SE-AE", q: "¿Cuál es el valor característico de la sobrecarga de uso en viviendas (categoría A1)?", a: "2 kN/m²[cite: 35]." }
        ],
        glo: [
          ["Estudio Geotécnico", "Conjunto de datos y ensayos sobre las características físicas y mecánicas del terreno para diseñar cimientos[cite: 19, 20].", "Documento obligatorio de proyecto."],
          ["Calicata", "Excavación a cielo abierto (<4m) que permite inspección directa y toma de muestras[cite: 25].", "No válida con nivel freático alto."]
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
              "Replanteo: trasladar y dibujar sobre el terreno ejes y perímetros[cite: 45].",
              "Instrumentos: cinta métrica, niveles, escuadras, plomadas y taquímetros[cite: 45, 49, 50].",
              "Elementos de marcaje: estacas, camillas de madera, jalones y cordel[cite: 49, 50, 51]."
            ],
            c: "Es imprescindible verificar las mediciones dos o tres veces y contrastarlas con referencias exteriores fijas[cite: 49]."
          },
          {
            t: "2 · Movimiento de Tierras: Desmontes y Excavaciones",
            s: [
              "Desmontes y vaciados: excavación o rebaje del terreno para sótanos o zanjas[cite: 52].",
              "Transporte a vertedero autorizado[cite: 52].",
              "Recomendación en arcillas: dejar un recubrimiento de 30 cm sin excavar hasta el día de la cimentación[cite: 53]."
            ],
            c: "Evitar alterar la estructura del suelo de apoyo durante la excavación[cite: 52]."
          },
          {
            t: "3 · Terraplenados y Compactación",
            s: [
              "Terraplenado: aporte de tierras para regularizar o alcanzar cotas[cite: 53, 54].",
              "Compactación mediante rodillos vibrantes y mesas vibrantes[cite: 53, 54].",
              "Tongadas: capas sucesivas de 25 a 30 cm compactadas capa por capa[cite: 54]."
            ],
            c: "Un terraplén mal compactado provoca asientos posteriores bajo soleras y pavimentos."
          },
          {
            t: "4 · Taludes, Esponjamiento y Asentamiento",
            s: [
              "Talud: inclinación del corte o terraplén según la cohesión del terreno[cite: 54, 55].",
              "Esponjamiento ($C_e$): aumento de volumen del terreno al excavarlo (clave para transporte)[cite: 55, 56].",
              "Asentamiento ($C_a$): pérdida de volumen del material de relleno al compactarlo[cite: 56]."
            ],
            c: "Los suelos cohesivos admiten ángulos de talud mayores que los granulares[cite: 54, 55]."
          },
          {
            t: "5 · Seguridad y Salud en Zanjas",
            s: [
              "Entibación obligatoria/conveniente en zanjas de h ≥ 1,5 m[cite: 57].",
              "Zona libre de cargas: mantener al menos 2 m libres de acopios y vehículos junto al borde[cite: 57, 58].",
              "Protección perimetral con barandilla en zanjas de h ≥ 2 m[cite: 57]."
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
          { ty: "Seguridad", q: "¿Qué distancia libre de cargas se debe mantener junto al borde de una zanja?", a: "Una zona de unos 2 metros[cite: 57]." },
          { ty: "Ejecución", q: "¿De qué espesor máximo deben ser las tongadas en un terraplenado?", a: "De 25 a 30 cm[cite: 54]." }
        ],
        glo: [
          ["Replanteo", "Operación de trasladar los planos al terreno marcando ejes[cite: 45].", "Uso de camillas y taquímetros[cite: 45, 49, 50, 51]."],
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
              "Cimentaciones directas (superficiales): Reparten cargas en un plano de apoyo horizontal (pilares, muros, sótanos)[cite: 64].",
              "Tipos principales (Tabla 4.1): Zapata aislada, combinada, corrida, pozo de cimentación, emparrillado y losa[cite: 65, 66]."
            ],
            c: "Se emplearán cimentaciones directas siempre que las condiciones del terreno y la capacidad portante lo permitan[cite: 64]."
          },
          {
            t: "2 · Zapatas Aisladas, Combinadas y Corridas",
            s: [
              "Zapatas aisladas: Planta cuadrada (interiores) o rectangular (medianeras y esquinas)[cite: 66].",
              "Rigidez estructural: Rígidas si el vuelo $v \le 2h$; flexibles si $v > 2h$[cite: 66].",
              "Vigas de atado y centradoras: Las de atado evitan desplazamientos laterales; las centradoras equilibran zapatas excéntricas[cite: 67]."
            ],
            c: "No se aconseja el apoyo directo de las vigas de unión sobre terrenos expansivos o colapsables[cite: 67]."
          },
          {
            t: "3 · Pozos, Emparrillados y Losas de Cimentación",
            s: [
              "Pozos de cimentación: Relleno de hormigón pobre bajo zapata o bajada de cota con plinto[cite: 69, 70].",
              "Emparrillados y Losas: Ideales en terrenos heterogéneos o bajo nivel freático (evitan subpresiones)[cite: 70, 71, 72].",
              "Cimentación compensada: El peso de las tierras excavadas iguala al peso del edificio, anulando asientos netos[cite: 72]."
            ],
            c: "Las losas integran las heterogeneidades del terreno a cambio de una distribución irregular de presiones[cite: 72]."
          },
          {
            t: "4 · Estados Límite y Criterios Básicos (DB-SE-C)",
            s: [
              "Estados Límite Últimos (ELU): Hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural[cite: 74, 75, 76].",
              "Estados Límite de Servicio (ELS): Asientos admisibles y movimientos inducidos[cite: 76, 77]."
            ],
            c: "El hundimiento se alcanza cuando la presión total bruta supera la resistencia característica del terreno[cite: 75, 76]."
          },
          {
            t: "5 · Condiciones Constructivas y Control",
            s: [
              "Solera de asiento / Hormigón de limpieza: Espesor mínimo de 10 cm[cite: 78].",
              "Nivelación obligatoria: En edificios C-3 y C-4 es obligatorio un sistema de nivelación (precisión 0,1 mm, mín. 4 referencias)[cite: 86]."
            ],
            c: "Prohibido circular sobre hormigón fresco o realizar excavaciones posteriores que comprometan la cimentación[cite: 81, 83]."
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
          ["Zapata rígida", "Aquella cuyo vuelo es menor o igual que dos veces su canto ($v \le 2h$)[cite: 66].", "Prescripciones EHE[cite: 66]."],
          ["Solera de asiento", "Capa de hormigón de limpieza (mín. 10 cm) que regulariza el fondo de excavación[cite: 78].", "Evita la pérdida de lechada[cite: 78]."]
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
              "Tipos principales: Pilote aislado, grupo de pilotes, zonas pilotadas (para reducir asientos) y micropilotes[cite: 88].",
              "Forma de trabajo: Pilotes por fuste ('flotantes', rozamiento en terrenos sin estrato firme) y pilotes por punta ('columna', apoyados en estrato resistente)[cite: 88]."
            ],
            c: "Se recurre a cimentaciones profundas cuando las superficiales no son técnicamente viables[cite: 88]."
          },
          {
            t: "2 · Tipologías de Pilotes según Material y Ejecución",
            s: [
              "Materiales: Hormigón in situ, hormigón prefabricado (armado/pretensado), acero (tubular o perfiles H/U con azuche), madera o mixtos[cite: 89].",
              "Procedimiento constructivo: Prefabricados hincados (por percusión o vibración) y pilotes hormigonados in situ[cite: 90].",
              "Clasificación comercial in situ (NTE-CPI): CPI-2 (desplazamiento con azuche), CPI-3 (tapón de gravas), CPI-4 (extracción con entubación recuperable), CPI-5 (camisa perdida), CPI-6 (lodos tixotrópicos), CPI-7 (barrenados sin entubación), CPI-8 (barrenados hormigonados por tubo central) y pilotes de desplazamiento por rotación (Sistema Omega)[cite: 91, 92, 94, 96, 97]."
            ],
            c: "Los pilotes hincados no son recomendables al atravesar bolos grandes, cimientos o gravas gruesas sin cementar[cite: 90]."
          },
          {
            t: "3 · Micropilotes y Aplicaciones Especiales",
            s: [
              "Micropilote: Elemento de cimentación profunda de pequeño diámetro (~150 mm) con armadura tubular/barras y mortero u lechada inyectada a presión[cite: 98].",
              "Ejecución: Introducción por rotación o rotopercusión de tubo de acero, inyección y posterior descabece para solidarizar con el encepado[cite: 98, 99].",
              "Aplicaciones: Cimentación en nuevos edificios con accesos difíciles, recalce de cimentaciones existentes con problemas de hundimiento y anclajes al terreno para muros pantalla[cite: 98, 99, 100]."
            ],
            c: "Los micropilotes son idóneos para recalces de cimentaciones y obras con limitaciones espaciales[cite: 99]."
          },
          {
            t: "4 · Condiciones Constructivas y Dosificaciones del Hormigón",
            s: [
              "Hormigonado in situ: Uso de tubo Tremie elevándolo unos 20 cm al comenzar; resguardo mínimo de 3 m de hormigón fresco en camisas recuperables[cite: 101, 105].",
              "Dosificación mínima: Contenido de cemento $\ge 325\text{ kg/m}^3$ en seco y $\ge 375\text{ kg/m}^3$ sumergido; relación agua/cemento $< 0.6$[cite: 103].",
              "Consistencia (Cono de Abrams): $130 \le H \le 180\text{ mm}$ en seco; $H \ge 160\text{ mm}$ bombeado/sumergido; $H \ge 180\text{ mm}$ bajo fluido estabilizador[cite: 104].",
              "Áridos: Tamaño máximo $32\text{ mm}$ (o $1/4$ de la separación entre redondos); preferiblemente $25\text{ mm}$ (rodado) o $20\text{ mm}$ (machaqueo)[cite: 103]."
            ],
            c: "La consistencia del hormigón debe mantenerse con un cono de Abrams no inferior a 100 mm durante todo el proceso de hormigonado[cite: 104]."
          },
          {
            t: "5 · Control de Ejecución y Ensayos",
            s: [
              "Control en ejecución: Confección de parte de incidencias, control de replanteo, excavación, lodos, armaduras y hormigón (norma UNE-EN 1536)[cite: 105].",
              "Ensayos de integridad: Verifican la continuidad del fuste y resistencia mecánica (transparencia sónica, impedancia mecánica, sondeos mecánicos)[cite: 106].",
              "Frecuencia de ensayos: Mínimo 1 por cada 20 pilotes; en pilotes aislados de diámetro $45-100\text{ cm}$ no menor de 2 por cada 20; y si el diámetro es $>100\text{ cm}$, no menor de 5 por cada 20[cite: 106]."
            ],
            c: "En suelos arcillosos y edificios C-3 y C-4, el rechazo de pilotes hincados debe comprobarse transcurrido un mínimo de 24 horas[cite: 107]."
          }
        ],
        casos: [
          {
            k: "Definición de Cimentación Profunda",
            q: "¿A partir de qué profundidad relativa se considera formalmente que una cimentación es profunda según los criterios del CTE y los apuntes?",
            o: ["Cuando su profundidad es superior a 2 veces su diámetro", "Cuando su extremo inferior está a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)", "Exclusivamente a partir de 15 metros de profundidad bajo rasante"],
            a: 1,
            e: "Se considera cimentación profunda si su extremo inferior en el terreno se encuentra a una profundidad superior a 8 veces su diámetro o ancho ($>8D$)[cite: 88]."
          },
          {
            k: "Tipología de Pilotes In Situ",
            q: "¿Qué designación comercial y característica técnica corresponde a los pilotes ejecutados mediante barrena continua con hormigonado simultáneo a través del tubo central de la barrena?",
            o: ["CPI-2 (desplazamiento con azuche)", "CPI-6 (lodos tixotrópicos)", "CPI-8 (barrenados hormigonados por el tubo central de la barrena)"],
            a: 2,
            e: "El pilote CPI-8 corresponde a los barrenados hormigonados por el tubo central de la barrena de forma simultánea a la extracción de esta[cite: 91, 96]."
          },
          {
            k: "Control de Integridad",
            q: "En un grupo de pilotes aislados de gran diámetro (superior a 100 cm), ¿cuál es el número mínimo orientativo de ensayos de integridad exigido por cada 20 pilotes?",
            o: ["Al menos 1 ensayo por cada 20 pilotes", "No es obligatorio realizar ensayos de integridad", "No debe ser inferior a 5 ensayos por cada 20 pilotes"],
            a: 2,
            e: "En pilotes aislados de diámetro superior a 100 cm el número de ensayos de integridad no debe ser inferior a 5 por cada 20 pilotes[cite: 106]."
          }
        ],
        cards: [
          { ty: "Definición", q: "¿Cuál es el límite geométrico que define una cimentación profunda frente a una superficial?", a: "Profundidad superior a 8 veces su diámetro o ancho ($>8D$)[cite: 88]." },
          { ty: "Trabajo del Pilote", q: "¿Qué diferencia existe entre un pilote 'por fuste' y un pilote 'por punta'?", a: "El de fuste transmite la carga por rozamiento lateral (suelos sin estrato firme); el de punta transmite la carga a un estrato resistente profundo[cite: 88]." },
          { ty: "Micropilotes", q: "¿Qué aplicaciones principales tienen los micropilotes en edificación además de cimentación nueva?", a: "El recalce de cimentaciones existentes y los anclajes de muros pantalla[cite: 99, 100]." },
          { ty: "Hormigonado", q: "¿Qué cono de Abrams mínimo se requiere para hormigón sumergido con tubo Tremie bajo fluido estabilizador?", a: "Un asiento $H \ge 180\text{ mm}$[cite: 104]." }
        ],
        glo: [
          ["Pilote", "Elemento prismático de cimentación profunda cuya longitud es mucho mayor que su sección transversal[cite: 88, 89].", "Puede ser prefabricado o in situ[cite: 89, 90]."],
          ["Micropilote", "Elemento de cimentación profunda de pequeño diámetro (~150 mm) inyectado a presión con mortero[cite: 98].", "Ideal para recalces y espacios reducidos[cite: 98, 99]."],
          ["Tubo Tremie", "Tubo especial utilizado para el vertido de hormigón sumergido bajo agua o lodos[cite: 94, 95, 104].", "Evita la segregación del hormigón."],
          ["Lodos tixotrópicos", "Fluidos estabilizadores utilizados para contener las paredes de perforación en pilotes in situ[cite: 94, 95, 101].", "Sustituyen a la entubación provisional."],
          ["Prueba de rechazo", "Criterio de control en hinca de pilotes midiendo el número de golpes por penetración[cite: 106, 107].", "Garantiza el alcance de la resistencia proyectada."]
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
