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
          },
          {
            k: "Clasificación de Suelos",
            q: "¿Cómo se comportan fundamentalmente las arcillas frente a las cargas comparadas con las gravas?",
            o: ["Las arcillas son coherentes y su consistencia depende de la humedad; las gravas resisten por rozamiento interno", "Tienen el mismo comportamiento", "Las gravas no son compresibles jamás"],
            a: 0,
            e: "Las arcillas dependen de la cohesión y humedad (límites de Atterberg), mientras que las gravas y arenas lo hacen por rozamiento interno[cite: 28, 29]."
          }
        ],
        cards: [
          { ty: "Geotecnia", q: "¿Cuál es el número mínimo de puntos de reconocimiento a realizar en un solar con carácter general?", a: "Un mínimo de tres puntos." },
          { ty: "DB-SE-AE", q: "¿Cuál es el valor característico de la sobrecarga de uso en viviendas (categoría A1)?", a: "2 kN/m²[cite: 35]." },
          { ty: "Normativa", q: "¿Qué distancia máxima sin juntas de dilatación se permite habitualmente en estructuras de hormigón o acero?", a: "40 metros[cite: 41]." }
        ],
        glo: [
          ["Estudio Geotécnico", "Conjunto de datos y ensayos sobre las características físicas y mecánicas del terreno para diseñar cimientos[cite: 19, 20].", "Documento obligatorio de proyecto."],
          ["Calicata", "Excavación a cielo abierto (<4m) que permite inspección directa y toma de muestras[cite: 25].", "No válida con nivel freático alto."],
          ["Sondeo mecánico", "Perforación profunda para extraer testigos y realizar ensayos in situ[cite: 25, 26].", "Imprescindible bajo nivel freático."],
          ["Límites de Atterberg", "Límite líquido y plástico que definen la plasticidad y consistencia de las arcillas[cite: 29].", "Parámetros geotécnicos clave."],
          ["DB-SE-AE", "Documento Básico del CTE relativo a las Acciones en la Edificación[cite: 33].", "Normativa de cálculo de cargas."]
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
          },
          {
            k: "Esponjamiento",
            q: "¿Cómo se denomina el aumento de volumen que sufre el terreno al ser excavado?",
            o: ["Asentamiento", "Esponjamiento", "Consolidación"],
            a: 1,
            e: "El esponjamiento ($C_e$) mide el incremento de volumen frente al hueco excavado[cite: 55, 56]."
          }
        ],
        cards: [
          { ty: "Seguridad", q: "¿Qué distancia libre de cargas se debe mantener junto al borde de una zanja?", a: "Una zona de unos 2 metros[cite: 57]." },
          { ty: "Ejecución", q: "¿De qué espesor máximo deben ser las tongadas en un terraplenado?", a: "De 25 a 30 cm[cite: 54]." }
        ],
        glo: [
          ["Replanteo", "Operación de trasladar los planos al terreno marcando ejes[cite: 45].", "Uso de camillas y taquímetros[cite: 45, 49, 50, 51]."],
          ["Desmonte", "Excavación o rebaje del terreno[cite: 52].", "Requiere carga y transporte a vertedero[cite: 52]."],
          ["Esponjamiento", "Aumento de volumen del terreno al excavarlo[cite: 55, 56].", "Afecta al cálculo de camiones[cite: 55, 56]."],
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
              "Tipos principales (Tabla 4.1): Zapata aislada (pilares aislados), combinada (dos o más pilares), corrida (alineaciones de pilares o muros), pozo de cimentación, emparrillado y losa[cite: 65, 66]."
            ],
            c: "Se emplearán cimentaciones directas siempre que las condiciones del terreno y la capacidad portante lo permitan[cite: 64]."
          },
          {
            t: "2 · Zapatas Aisladas, Combinadas y Corridas",
            s: [
              "Zapatas aisladas: Planta cuadrada (interiores) o rectangular (medianeras y esquinas)[cite: 66].",
              "Rigidez estructural: Rígidas si el vuelo $v \le 2h$; flexibles si $v > 2h$[cite: 66].",
              "Vigas de atado y centradoras: Las vigas de atado evitan desplazamientos laterales (clave en sismo); las centradoras equilibran zapatas excéntricas (medianeras/esquinas)[cite: 67]."
            ],
            c: "No se aconseja el apoyo directo de las vigas de unión sobre terrenos expansivos o colapsables[cite: 67]."
          },
          {
            t: "3 · Pozos, Emparrillados y Losas de Cimentación",
            s: [
              "Pozos de cimentación: Relleno de hormigón pobre bajo la zapata o bajada de cota con plinto para alcanzar terreno firme[cite: 69, 70].",
              "Emparrillados: Zapatas corridas entrecruzadas en malla ortogonal para terrenos de baja capacidad o alta deformabilidad[cite: 70, 71].",
              "Losas de cimentación: Cubren toda el área (continua, aligerada, nervada, cajón); ideales en terrenos heterogéneos o bajo el nivel freático (evitan subpresiones)[cite: 71, 72].",
              "Cimentación compensada: Situación donde el peso de las tierras excavadas iguala al peso del edificio, anulando asientos netos[cite: 72]."
            ],
            c: "Las losas integran las heterogeneidades del terreno a cambio de una distribución irregular de presiones[cite: 72]."
          },
          {
            t: "4 · Estados Límite y Criterios Básicos (DB-SE-C)",
            s: [
              "Estados Límite Últimos (ELU): Hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural[cite: 74, 75, 76].",
              "Estados Límite de Servicio (ELS): Comprobación de asientos admisibles y movimientos inducidos en edificios colindantes[cite: 76, 77].",
              "Comprobaciones adicionales: Cambios de humedad en arcillas expansivas, colapso de rellenos, agresividad del agua o erosión interna[cite: 77, 78]."
            ],
            c: "El hundimiento se alcanza cuando la presión total bruta supera la resistencia característica del terreno[cite: 75, 76]."
          },
          {
            t: "5 · Condiciones Constructivas, Ejecución y Control",
            s: [
              "Solera de asiento / Hormigón de limpieza: Espesor mínimo de 10 cm para crear una superficie plana y evitar pérdidas de lechada[cite: 78].",
              "Excavación: Realizar justo antes de hormigonar; dejar 10-15 cm extra en arcillas si hay retraso para refinar el fondo[cite: 79].",
              "Control en obra: Comprobación del estudio geotécnico, replanteo, recubrimientos EHE y control de agua (agotamiento y drenajes)[cite: 80, 84, 85].",
              "Nivelación obligatoria: En edificios C-3 y C-4 es obligatorio un sistema de nivelación (precisión 0,1 mm, mín. 4 referencias y 10% de pilares)[cite: 86]."
            ],
            c: "Prohibido circular sobre hormigón fresco o realizar perforaciones y excavaciones posteriores que comprometan la cimentación[cite: 81, 83]."
          }
        ],
        casos: [
          {
            k: "Rigidez de Zapatas",
            q: "Una zapata aislada tiene un vuelo de 80 cm en su dirección principal y un canto de 50 cm. Según el DB-SE-C, ¿cómo se clasifica estructuralmente?",
            o: ["Zapata flexible, ya que el vuelo es mayor que el canto", "Zapata rígida, ya que el vuelo ($80\text{ cm}$) es menor o igual que $2 \times \text{canto}$ ($2 \times 50 = 100\text{ cm}$)", "Zapata combinada"],
            a: 1,
            e: "Se consideran estructuralmente rígidas las zapatas cuyo vuelo es menor o igual que dos veces el canto ($v \le 2h$)[cite: 66]."
          },
          {
            k: "Cimentación Compensada",
            q: "¿Cómo se denomina la situación constructiva en un edificio con sótanos donde el peso de las tierras excavadas es aproximadamente igual al peso total del edificio transmitido al terreno?",
            o: ["Cimentación profunda por fricción", "Cimentación compensada", "Emparrillado rígido"],
            a: 1,
            e: "En la cimentación compensada la presión neta transmitida al terreno es casi nula, reduciendo drásticamente los asientos[cite: 72]."
          },
          {
            k: "Control en Edificios Singulares",
            q: "Para edificios catalogados como C-3 o C-4, ¿qué requisito de control de asientos es de obligado cumplimiento durante la ejecución?",
            o: ["No se requiere ningún control especial", "Establecer un sistema de nivelación con al menos 4 referencias y precisión de 0,1 mm", "Realizar una prueba de carga al 200% en todos los pilares"],
            a: 1,
            e: "En edificios C-3 y C-4 es obligatorio el establecimiento de un sistema de nivelación con precisión de 0,1 mm y al menos 4 referencias[cite: 86]."
          }
        ],
        cards: [
          { ty: "Hormigón de limpieza", q: "¿Cuál es el espesor mínimo reglamentario de la solera de asiento u hormigón de limpieza bajo zapatas o losas?", a: "Un espesor mínimo de 10 cm[cite: 78, 82]." },
          { ty: "Rigidez", q: "¿Cuál es la condición matemática para considerar que una zapata es estructuralmente rígida?", a: "Que el vuelo $v$ sea menor o igual que dos veces el canto $h$ ($v \le 2h$)[cite: 66]." },
          { ty: "Tipologías", q: "¿Cuándo se recomienda el uso de un emparrillado de cimentación?", a: "Cuando el terreno presente baja capacidad de carga, elevada deformabilidad o importantes heterogeneidades[cite: 70, 71]." },
          { ty: "Impermeabilización", q: "¿Cómo se debe proteger un sótano situado por debajo del nivel freático frente a filtraciones?", a: "Conforme a lo indicado en el CTE DB-HS Sección 1[cite: 82]." }
        ],
        glo: [
          ["Cimiento", "Conjunto de elementos estructurales enterrados que transmiten cargas al terreno[cite: 64].", "Regulado por el CTE DB-SE-C[cite: 64]."],
          ["Zapata rígida", "Aquella cuyo vuelo es menor o igual que dos veces su canto ($v \le 2h$)[cite: 66].", "Prescripciones EHE[cite: 66]."],
          ["Viga centradora", "Elemento estructural que une zapatas para resistir momentos o redistribuir presiones[cite: 67].", "Habitual en medianeras y esquinas[cite: 67]."],
          ["Pozo de cimentación", "Relleno de hormigón pobre o descenso de cota con plinto para alcanzar terreno competente[cite: 69, 70].", "Cimentación semiprofunda."],
          ["Losa de cimentación", "Cimentación continua que cubre toda o gran parte de la superficie en planta[cite: 71, 72].", "Reduce asientos diferenciales en terrenos heterogéneos[cite: 72]."],
          ["Solera de asiento", "Capa de hormigón de limpieza (mín. 10 cm) que regulariza el fondo de excavación[cite: 78].", "Evita la pérdida de lechada[cite: 78]."]
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
