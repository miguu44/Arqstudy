import { useState } from "react";

/* ============================================================
   BASE COMPARTIDA (patrones, polígono seleccionable, llamadas,
   píldoras y ficha). Pégala una vez en App.jsx junto a los 5
   componentes. Todos los detalles usan esta misma UX.
   ============================================================ */

function Defs() {
  return (
    <defs>
      <pattern id="arq-soil" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 8L8 0" stroke="#475569" strokeWidth="0.8" />
      </pattern>
      <pattern id="arq-conc" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="3" r="0.7" fill="#64748b" />
        <circle cx="7" cy="7" r="0.7" fill="#64748b" />
        <circle cx="8" cy="2" r="0.5" fill="#475569" />
      </pattern>
      <pattern id="arq-brick" width="16" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 4H16M0 8H16M8 0V4M0 4V8" stroke="#9a5b45" strokeWidth="0.7" fill="none" />
      </pattern>
      <pattern id="arq-gravel" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2.5" cy="2.5" r="1.6" fill="none" stroke="#94a3b8" strokeWidth="0.7" />
        <circle cx="7" cy="6.5" r="1.4" fill="none" stroke="#94a3b8" strokeWidth="0.7" />
      </pattern>
      <pattern id="arq-insul" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M0 3Q1.5 0 3 3T6 3" fill="none" stroke="#f59e0b" strokeWidth="0.8" />
      </pattern>
      <pattern id="arq-wood" width="24" height="6" patternUnits="userSpaceOnUse">
        <path d="M0 3Q12 0 24 3" fill="none" stroke="#a16207" strokeWidth="0.8" />
      </pattern>
    </defs>
  );
}

/* Polígono seleccionable (función pura, sin hooks) */
function Poly({ points, n, sel, pick, pat, base = "#111827", edge = "#64748b", dash }) {
  const on = sel === n;
  return (
    <g onClick={() => pick(n)} style={{ cursor: "pointer" }}>
      <polygon
        points={points}
        fill={on ? "rgba(34,211,238,0.22)" : base}
        stroke={on ? "#22d3ee" : edge}
        strokeWidth={on ? 1.8 : 1.1}
        strokeLinejoin="round"
        strokeDasharray={dash}
      />
      {pat && <polygon points={points} fill={`url(#${pat})`} pointerEvents="none" />}
    </g>
  );
}

/* Línea de llamada lateral + círculo numerado clicable */
function Callout({ el, active, pick }) {
  const left = el.side === "L";
  const w = el.s.length * 5.1;
  const x0 = left ? 10 : 430;
  const x1 = left ? 10 + w + 4 : 430 - w - 4;
  const col = active ? "#22d3ee" : "#475569";
  return (
    <g onClick={() => pick(el.n)} style={{ cursor: "pointer" }}>
      <text
        x={x0}
        y={el.ly}
        textAnchor={left ? "start" : "end"}
        fontSize="9"
        fill={active ? "#22d3ee" : "#94a3b8"}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {el.s}
      </text>
      <line x1={x1} y1={el.ly - 3} x2={el.ax} y2={el.ay} stroke={col} strokeWidth="0.9" />
      <circle cx={el.ax} cy={el.ay} r="7" fill="#0b0e14" stroke={col} strokeWidth="1.4" />
      <text
        x={el.ax}
        y={el.ay + 3}
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill={col}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {el.n}
      </text>
    </g>
  );
}

function DetalleBase({ titulo, elems, children }) {
  const [sel, setSel] = useState(1);
  const e = elems.find((x) => x.n === sel) || elems[0];
  const P = (p) => Poly({ sel, pick: setSel, ...p });
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-slate-800" style={{ background: "#0b0e14" }}>
        <svg viewBox="0 0 440 260" className="h-auto w-full" role="img" aria-label={titulo}>
          <Defs />
          {children({ sel, pick: setSel, P })}
          {elems.map((el) => (
            <Callout key={el.n} el={el} active={sel === el.n} pick={setSel} />
          ))}
        </svg>
      </div>

      <div className="flex flex-wrap gap-2">
        {elems.map((el) => (
          <button
            key={el.n}
            onClick={() => setSel(el.n)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              sel === el.n
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                : "border-slate-700 text-slate-400 hover:border-slate-500"
            }`}
          >
            {el.n}. {el.s}
          </button>
        ))}
      </div>

      <div className="space-y-2 rounded-xl border border-slate-800 p-4 text-sm" style={{ background: "#0b0e14" }}>
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400 text-xs font-bold text-cyan-400">
            {e.n}
          </span>
          <h4 className="font-semibold text-slate-100">{e.s}</h4>
        </div>
        <p>
          <span className="font-semibold text-cyan-400">Función: </span>
          <span className="text-slate-300">{e.fn}</span>
        </p>
        <p>
          <span className="font-semibold text-cyan-400">Material / Solución: </span>
          <span className="text-slate-300">{e.mat}</span>
        </p>
        <p>
          <span className="font-semibold text-amber-400">⚠ Control en obra: </span>
          <span className="text-slate-300">{e.ctl}</span>
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   1. MURO DE CONTENCIÓN EN MÉNSULA  (tipo: "muro")
   ============================================================ */

const ELEM_MURO = [
  {
    n: 1,
    s: "Alzado (pantalla)",
    side: "L",
    ly: 60,
    ax: 209,
    ay: 90,
    fn: "Pantalla vertical de hormigón armado que trabaja como ménsula empotrada en la zapata y resiste el empuje horizontal del terreno (flexión y cortante).",
    mat: "Hormigón armado (p. ej. HA-25) con la armadura principal en la cara del trasdós (la traccionada) y armadura de retracción y temperatura en la cara vista. Espesor en coronación suficiente para hormigonar bien (≥ 20-25 cm).",
    ctl: "Armaduras de espera bien ancladas en la zapata, recubrimientos respetados con separadores, juntas de hormigonado limpias y rugosas y juntas de dilatación/contracción a distancias regulares.",
  },
  {
    n: 2,
    s: "Puntera",
    side: "L",
    ly: 130,
    ax: 160,
    ay: 218,
    fn: "Vuelo delantero de la zapata, hacia el lado libre (intradós), opuesto a las tierras. Recibe la mayor presión del terreno y trabaja como ménsula hacia arriba: aporta estabilidad frente al vuelco.",
    mat: "Zapata de hormigón armado sobre hormigón de limpieza; armadura principal en la cara inferior (la reacción del terreno la flecta hacia arriba).",
    ctl: "Presión máxima bajo la puntera ≤ tensión admisible del terreno; fondo de excavación sin alterar ni encharcado; recubrimiento correcto sobre el hormigón de limpieza.",
  },
  {
    n: 3,
    s: "Talón",
    side: "R",
    ly: 245,
    ax: 270,
    ay: 218,
    fn: "Vuelo trasero de la zapata, bajo las tierras del trasdós. El peso del relleno que gravita sobre él es la principal acción estabilizadora frente al vuelco.",
    mat: "Hormigón armado con la armadura principal en la cara superior (el peso de las tierras supera a la reacción del terreno). Su longitud se ajusta con las comprobaciones de vuelco y deslizamiento.",
    ctl: "Rellenar y compactar por tongadas, sin cargar el trasdós antes de que el hormigón alcance la resistencia prevista, y no sobrecargar el coronamiento con maquinaria pesada cerca del muro.",
  },
  {
    n: 4,
    s: "Tacón antideslizante",
    side: "L",
    ly: 245,
    ax: 209,
    ay: 241,
    fn: "Resalte inferior bajo la base que penetra en el terreno y moviliza el empuje pasivo para evitar que la zapata deslice por la acción del empuje horizontal.",
    mat: "Hormigón armado solidario con la zapata, hormigonado contra el terreno o en una zanja previa; se suele situar bajo el alzado.",
    ctl: "Excavar el hueco con caras limpias y sin descalzar; no contar con el empuje pasivo del terreno superficial, que puede perderse por erosión o excavaciones posteriores.",
  },
  {
    n: 5,
    s: "Dren en trasdós",
    side: "R",
    ly: 150,
    ax: 244,
    ay: 183,
    fn: "Recoge el agua del trasdós y la evacúa, evitando que el empuje hidrostático se sume al empuje del terreno, que puede duplicar los esfuerzos sobre el muro.",
    mat: "Tubo dren perforado (PVC o PEAD) al pie del trasdós, envuelto en grava y geotextil filtrante; trasdós con lámina drenante/impermeabilización y salida a punto de desagüe.",
    ctl: "Pendiente continua hacia el desagüe, solapes del geotextil que impidan el paso de finos, registros accesibles y relleno que no colmate el dren.",
  },
];

function DetalleMuro() {
  return (
    <DetalleBase titulo="Muro de contención en ménsula" elems={ELEM_MURO}>
      {({ sel, pick, P }) => (
        <g>
          {/* Terreno */}
          <polygon points="120,230 320,230 320,252 120,252" fill="url(#arq-soil)" />
          <polygon points="223,70 320,70 320,230 223,230" fill="url(#arq-soil)" />
          <polygon points="120,190 195,190 195,230 120,230" fill="url(#arq-soil)" />
          <polyline points="120,190 195,190" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
          <polyline points="223,70 320,70" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
          <text x="160" y="52" textAnchor="middle" fontSize="8" fill="#475569" letterSpacing="1">
            INTRADÓS
          </text>
          <text x="272" y="56" textAnchor="middle" fontSize="8" fill="#475569" letterSpacing="1">
            TRASDÓS
          </text>

          {/* Dren: grava + geotextil + tubo */}
          {P({ points: "223,172 252,172 252,205 223,205", n: 5, pat: "arq-gravel", base: "transparent", dash: "3 2" })}
          <circle cx="233" cy="198" r="5" fill="#0b0e14" stroke={sel === 5 ? "#22d3ee" : "#e2e8f0"} strokeWidth="1.2" />
          <circle cx="231" cy="198" r="0.8" fill="#94a3b8" />
          <circle cx="235" cy="198" r="0.8" fill="#94a3b8" />
          <circle cx="233" cy="200" r="0.8" fill="#94a3b8" />

          {/* Zapata y alzado */}
          {P({ points: "130,205 195,205 195,230 130,230", n: 2, pat: "arq-conc" })}
          {P({ points: "223,205 310,205 310,230 223,230", n: 3, pat: "arq-conc" })}
          {P({ points: "200,230 218,230 218,250 200,250", n: 4, pat: "arq-conc" })}
          {P({ points: "195,40 223,40 223,230 195,230", n: 1, pat: "arq-conc" })}
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   2. FORJADO UNIDIRECCIONAL  (tipo: "forjado")
   ============================================================ */

const ELEM_FORJADO = [
  {
    n: 1,
    s: "Vigueta resistente",
    side: "L",
    ly: 235,
    ax: 228,
    ay: 147,
    fn: "Elemento longitudinal prefabricado que recoge las cargas del forjado y las lleva a los apoyos trabajando a flexión en una sola dirección (la de las viguetas).",
    mat: "Vigueta de hormigón armado o pretensado, con sección en T invertida; el intereje y el canto vienen dados por la ficha de autorización de uso del fabricante.",
    ctl: "Comprobar marcado CE y ficha de autorización de uso, flechas y contraflecha de las viguetas, y apuntalar durante el hormigonado según el fabricante (sopandas niveladas).",
  },
  {
    n: 2,
    s: "Bovedilla",
    side: "L",
    ly: 190,
    ax: 162,
    ay: 128,
    fn: "Pieza de entrevigado que aligera el forjado, sirve de encofrado perdido de la capa de compresión y regulariza la cara inferior entre viguetas.",
    mat: "Cerámica o de hormigón aligerado, apoyada sobre las alas de las viguetas; el canto y el intereje definen el canto total del forjado.",
    ctl: "Piezas sin roturas, bien asentadas en las alas de las viguetas y sin huecos entre ellas; humedecer las cerámicas antes de hormigonar y no sobrecargar el forjado con acopios durante la obra.",
  },
  {
    n: 3,
    s: "Capa de compresión",
    side: "L",
    ly: 60,
    ax: 150,
    ay: 101,
    fn: "Losa superior de hormigón vertido en obra que solidariza viguetas y bovedillas, reparte las cargas y trabaja a compresión en la zona de momentos positivos.",
    mat: "Hormigón vertido in situ, con espesor mínimo h0 ≥ 40 mm sobre las piezas de entrevigado y resistencia igual o superior a la del proyecto.",
    ctl: "Control del espesor con reglas o testigos antes de hormigonar, vibrado y curado (mínimo varios días con riego), y no pisar la armadura de reparto: usar pasarelas.",
  },
  {
    n: 4,
    s: "Mallazo de reparto",
    side: "R",
    ly: 70,
    ax: 292,
    ay: 106,
    fn: "Red electrosoldada superior contra la retracción y los cambios de temperatura; reparte cargas concentradas y controla la fisuración de la capa de compresión.",
    mat: "Mallazo electrosoldado de acero B500T, situado en el tercio superior de la capa de compresión, con solapes entre paños según el proyecto.",
    ctl: "Mallazo calzado con separadores (no apoyado sobre las bovedillas), recubrimiento correcto y solapes de al menos dos cuadrículas de malla.",
  },
  {
    n: 5,
    s: "Zuncho perimetral",
    side: "R",
    ly: 140,
    ax: 294,
    ay: 131,
    fn: "Viga de borde de hormigón armado que ata el forjado a los muros y pilares, cierra el perímetro y recoge los esfuerzos de arriostramiento y los empujes horizontales.",
    mat: "Hormigón armado de canto igual al del forjado, con armadura longitudinal y cercos; las viguetas se apoyan en él al menos 65 mm (el apoyo mínimo del forjado).",
    ctl: "Armaduras continuas con solapes y esperas en esquinas, apoyo de las viguetas ≥ 65 mm, encofrado estanco y atado correcto de los zunchos con el resto de la estructura.",
  },
];

function DetalleForjado() {
  const VIGUETAS = [140, 184, 228];
  const BOVEDILLAS = [
    [126, 136],
    [144, 180],
    [188, 224],
    [232, 268],
  ];
  return (
    <DetalleBase titulo="Forjado unidireccional" elems={ELEM_FORJADO}>
      {({ sel, pick, P }) => (
        <g>
          {/* Muro de apoyo */}
          <polygon points="268,150 320,150 320,250 268,250" fill="#111827" stroke="#475569" strokeWidth="1.1" />
          <polygon points="268,150 320,150 320,250 268,250" fill="url(#arq-brick)" />

          {/* Bovedillas */}
          {BOVEDILLAS.map(([a, b]) => (
            <g key={a}>
              {P({ points: `${a},112 ${b},112 ${b},143 ${a},143`, n: 2, base: "#1f2937" })}
              {b - a > 20 &&
                [a + 4, a + 20].map((cx) => (
                  <rect
                    key={cx}
                    x={cx}
                    y="117"
                    width="12"
                    height="21"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="0.8"
                    pointerEvents="none"
                  />
                ))}
            </g>
          ))}

          {/* Viguetas (T invertida) */}
          {VIGUETAS.map((c) => (
            <g key={c}>
              {P({
                points: `${c - 4},112 ${c + 4},112 ${c + 4},143 ${c + 10},143 ${c + 10},150 ${c - 10},150 ${c - 10},143 ${c - 4},143`,
                n: 1,
                pat: "arq-conc",
              })}
            </g>
          ))}

          {/* Capa de compresión */}
          {P({ points: "126,100 320,100 320,112 126,112", n: 3, pat: "arq-conc" })}

          {/* Zuncho perimetral */}
          {P({ points: "268,112 320,112 320,150 268,150", n: 5, pat: "arq-conc" })}
          <polygon
            points="274,118 314,118 314,145 274,145"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.9"
            strokeDasharray="3 2"
            pointerEvents="none"
          />
          {[
            [278, 122],
            [310, 122],
            [278, 141],
            [310, 141],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#f59e0b" pointerEvents="none" />
          ))}

          {/* Mallazo de reparto */}
          <g onClick={() => pick(4)} style={{ cursor: "pointer" }}>
            <line x1="128" y1="106" x2="318" y2="106" stroke={sel === 4 ? "#22d3ee" : "#f59e0b"} strokeWidth="1.6" />
            {Array.from({ length: 14 }).map((_, i) => (
              <circle key={i} cx={134 + i * 14} cy="106" r="1.7" fill={sel === 4 ? "#22d3ee" : "#f59e0b"} />
            ))}
          </g>

          {/* Corte lateral izquierdo */}
          <polyline
            points="126,100 122,112 130,124 122,136 130,148 126,150"
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
          />
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   3. ESCALERA DB-SU 1  (tipo: "escalera")
   ============================================================ */

const ELEM_ESCALERA = [
  {
    n: 1,
    s: "Huella (pisa)",
    side: "L",
    ly: 100,
    ax: 200,
    ay: 157,
    fn: "Plano horizontal del peldaño donde se apoya el pie. DB-SU 1: huella H ≥ 280 mm en escaleras de uso general (≥ 220 mm en uso restringido).",
    mat: "Peldaño de hormigón con solado antideslizante (piedra, cerámica, madera...), con la clase de resbaladicidad que fije el DB-SU 1 (Tabla 1.2) según el emplazamiento; nariz sin resalte excesivo.",
    ctl: "Huella constante en todo el tramo; comprobar 54 cm ≤ 2C + H ≤ 70 cm al replantear y antes de solar, y que la huella medida en el eje del peldaño no baje del mínimo.",
  },
  {
    n: 2,
    s: "Contrahuella",
    side: "L",
    ly: 185,
    ax: 158,
    ay: 197,
    fn: "Plano vertical del peldaño que cierra el hueco entre huellas. DB-SU 1 (uso general): 130 mm ≤ C ≤ 175 mm, con 54 cm ≤ 2C + H ≤ 70 cm.",
    mat: "Tabica de hormigón, cerámica, piedra o madera, con el mismo tratamiento de borde que la huella; en uso público no se admiten huecos entre peldaños por los que pase una esfera de 10 cm.",
    ctl: "Contrahuella constante en todo el tramo y entre tramos consecutivos; revisar que los peldaños de arranque y llegada tengan la misma altura que el resto tras colocar los solados.",
  },
  {
    n: 3,
    s: "Zanca / losa",
    side: "R",
    ly: 215,
    ax: 222,
    ay: 168,
    fn: "Elemento estructural inclinado que recoge el peso de los peldaños y de las sobrecargas y lo lleva a los apoyos (forjados, mesetas o muros). Trabaja a flexión como losa inclinada.",
    mat: "Losa maciza de hormigón armado (o zancas metálicas o de madera), con armadura principal en el sentido de la pendiente y armadura de reparto transversal.",
    ctl: "Anclaje de la armadura en los apoyos (esperas en forjado y meseta), encofrado con pendiente correcta y hormigonado continuo, y cálculo para la sobrecarga de uso de escaleras del DB-SE-AE.",
  },
  {
    n: 4,
    s: "Meseta de descanso",
    side: "R",
    ly: 160,
    ax: 300,
    ay: 127,
    fn: "Plano horizontal intermedio entre tramos que permite descansar y cambiar de dirección. DB-SU 1: cada tramo salva como máximo 3,20 m (uso general) y la meseta tiene al menos la anchura de la escalera y 1 m de longitud en su eje.",
    mat: "Losa de hormigón armado solidaria con el forjado o con los muros de caja de escalera, con el mismo solado antideslizante que la huella.",
    ctl: "Nivel y pendiente de la meseta correctos, sin escalones aislados, y mismas dimensiones de peldaño en el primer y último escalón de cada tramo que en el resto.",
  },
  {
    n: 5,
    s: "Barandilla y pasamanos",
    side: "R",
    ly: 20,
    ax: 290,
    ay: 30,
    fn: "Protege del riesgo de caída por los bordes libres y guía al usuario. Altura ≥ 900 mm (≥ 1100 mm si la diferencia de cota supera 6 m); pasamanos entre 900 y 1100 mm.",
    mat: "Barandilla metálica, de madera o de vidrio con barrotes verticales no escalables (hueco libre < 100 mm), anclada al canto de la losa y calculada para el empuje horizontal del DB-SE-AE según el uso.",
    ctl: "Medir la altura desde la línea de inclinación de la escalera, comprobar los anclajes (taladros limpios, resinas o morteros) y que no haya huecos o apoyos intermedios que permitan trepar.",
  },
];

function DetalleEscalera() {
  const SLAB =
    "130,230 130,208 158,208 158,186 186,186 186,164 214,164 214,142 242,142 242,120 320,120 320,134 272,134 150,230";
  const HUELLAS = [
    [130, 158, 208],
    [158, 186, 186],
    [186, 214, 164],
    [214, 242, 142],
  ];
  const CONTRAS = [
    [130, 230, 208],
    [158, 208, 186],
    [186, 186, 164],
    [214, 164, 142],
    [242, 142, 120],
  ];
  const POSTS = [
    [144, 208],
    [200, 164],
    [256, 120],
    [310, 120],
  ];
  const BALAUSTRES = [
    [172, 186, 96],
    [228, 142, 52],
    [283, 120, 30],
  ];
  return (
    <DetalleBase titulo="Escalera (DB-SU 1)" elems={ELEM_ESCALERA}>
      {({ sel, pick, P }) => (
        <g>
          <line x1="120" y1="230" x2="150" y2="230" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Losa inclinada + meseta */}
          {P({ points: SLAB, n: 3, pat: "arq-conc" })}
          {P({ points: "242,120 320,120 320,134 242,134", n: 4, pat: "arq-conc" })}

          {/* Huellas */}
          {HUELLAS.map(([x1, x2, y]) => (
            <g key={`h${x1}`} onClick={() => pick(1)} style={{ cursor: "pointer" }}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={sel === 1 ? "#22d3ee" : "#e2e8f0"} strokeWidth="2.6" strokeLinecap="round" />
            </g>
          ))}

          {/* Contrahuellas */}
          {CONTRAS.map(([x, y1, y2]) => (
            <g key={`c${x}`} onClick={() => pick(2)} style={{ cursor: "pointer" }}>
              <line x1={x} y1={y1} x2={x} y2={y2} stroke={sel === 2 ? "#22d3ee" : "#94a3b8"} strokeWidth="2.6" strokeLinecap="round" />
            </g>
          ))}

          {/* Barandilla y pasamanos */}
          <g onClick={() => pick(5)} style={{ cursor: "pointer" }}>
            {POSTS.map(([x, y]) => (
              <line key={`p${x}`} x1={x} y1={y} x2={x} y2={y - 90} stroke={sel === 5 ? "#22d3ee" : "#cbd5e1"} strokeWidth="1.6" />
            ))}
            {BALAUSTRES.map(([x, yb, yt]) => (
              <line key={`b${x}`} x1={x} y1={yb} x2={x} y2={yt} stroke={sel === 5 ? "#22d3ee" : "#64748b"} strokeWidth="0.8" />
            ))}
            <polyline
              points="144,118 256,30 310,30"
              fill="none"
              stroke={sel === 5 ? "#22d3ee" : "#cbd5e1"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   4. ESTRUCTURAS DE MADERA DB-SE-M  (tipo: "madera")
   ============================================================ */

const ELEM_MADERA = [
  {
    n: 1,
    s: "Viga de madera",
    side: "R",
    ly: 150,
    ax: 305,
    ay: 188,
    fn: "Elemento estructural principal que trabaja a flexión y transmite las cargas del forjado o de la cubierta al muro de apoyo.",
    mat: "Madera aserrada C24 o laminada encolada GL24h, con humedad ≤ 20 % en el momento de la recepción y con la clase de uso y el tratamiento protector que exija el proyecto.",
    ctl: "Verificar marcado CE y clasificación, medir la humedad con xilohigrómetro en la recepción, descartar piezas con fendas, nudos o alabeos fuera de tolerancia y almacenar bajo cubierto y separada del suelo.",
  },
  {
    n: 2,
    s: "Herraje metálico",
    side: "R",
    ly: 105,
    ax: 264,
    ay: 170,
    fn: "Conexión de acero (placas y pernos) que sujeta la viga y transmite cortante y tracción a la fábrica, permitiendo el movimiento higrotérmico de la madera.",
    mat: "Placas y escuadras de acero galvanizado o inoxidable, pernos con agujeros rasgados en el sentido en que la madera se hincha o contrae y arandelas; distancias a bordes y entre pernos según DB-SE-M.",
    ctl: "Respetar separaciones mínimas a bordes y entre pernos, no apretar en exceso (para no coartar el movimiento de la madera), protección contra la corrosión del acero y revisión de los apriete tras el secado.",
  },
  {
    n: 3,
    s: "Cámara ventilación",
    side: "L",
    ly: 200,
    ax: 154,
    ay: 189,
    fn: "Holgura perimetral en la entrega de la viga al muro que permite que circule el aire y que se seque la cabeza de la viga, evitando su pudrición.",
    mat: "Nicho en el muro con holgura ≥ 15 mm en cabeza y laterales; no se rellena con mortero y, si es posible, se comunica con aire interior o exterior.",
    ctl: "Mantenerla libre de restos de mortero durante la ejecución, no dejar contacto directo madera-fábrica y comprobar que el nicho da el apoyo necesario sin llegar a coaccionar la viga.",
  },
  {
    n: 4,
    s: "Barrera antihumedad",
    side: "L",
    ly: 230,
    ax: 190,
    ay: 205,
    fn: "Lámina impermeable bajo el apoyo que corta el ascenso de humedad por capilaridad desde la fábrica y el terreno. La madera además debe quedar separada ≥ 20 cm del terreno.",
    mat: "Lámina bituminosa o polimérica (o fieltro asfáltico) bajo la superficie de apoyo, continua con el sistema de impermeabilización del muro.",
    ctl: "Continuidad y solapes de la lámina bajo todo el apoyo, comprobar que el borde inferior de la madera queda ≥ 20 cm sobre el terreno y sellar las perforaciones de los pernos o fijaciones.",
  },
];

function DetalleMadera() {
  return (
    <DetalleBase titulo="Entrega de viga de madera en muro" elems={ELEM_MADERA}>
      {({ sel, P }) => (
        <g>
          {/* Terreno */}
          <polygon points="120,235 320,235 320,255 120,255" fill="url(#arq-soil)" />
          <line x1="120" y1="235" x2="320" y2="235" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Muro de fábrica */}
          <polygon points="130,110 230,110 230,255 130,255" fill="#111827" stroke="#475569" strokeWidth="1.1" />
          <polygon points="130,110 230,110 230,255 130,255" fill="url(#arq-brick)" />

          {/* Nicho / cámara de ventilación */}
          <polygon points="150,166 230,166 230,206 150,206" fill="#0b0e14" />
          {P({ points: "150,166 230,166 230,206 150,206", n: 3, base: "transparent", dash: "3 2" })}

          {/* Barrera antihumedad */}
          {P({ points: "150,203 230,203 230,206 150,206", n: 4, base: "#a78bfa", edge: "#a78bfa" })}

          {/* Viga de madera */}
          {P({ points: "158,172 320,172 320,203 158,203", n: 1, pat: "arq-wood", base: "#1f1a10" })}

          {/* Herraje: placa con pernos */}
          {P({ points: "244,178 284,178 284,199 244,199", n: 2, base: "#334155", edge: "#cbd5e1" })}
          {[
            [250, 183],
            [278, 183],
            [250, 194],
            [278, 194],
          ].map(([x, y]) => (
            <ellipse
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              rx="2.6"
              ry="1.8"
              fill="#0b0e14"
              stroke={sel === 2 ? "#22d3ee" : "#cbd5e1"}
              strokeWidth="0.9"
              pointerEvents="none"
            />
          ))}

          {/* Cota: separación respecto al terreno */}
          <line x1="300" y1="203" x2="300" y2="235" stroke="#94a3b8" strokeWidth="0.9" />
          <line x1="296" y1="203" x2="304" y2="203" stroke="#94a3b8" strokeWidth="0.9" />
          <line x1="296" y1="235" x2="304" y2="235" stroke="#94a3b8" strokeWidth="0.9" />
          <text x="296" y="222" textAnchor="end" fontSize="8" fill="#94a3b8">
            ≥ 20 cm
          </text>
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   5. FACHADA DE LADRILLO DB-HS-1  (tipo: "fachada")
   ============================================================ */

const ELEM_FACHADA = [
  {
    n: 1,
    s: "Barrera de arranque",
    side: "R",
    ly: 190,
    ax: 228,
    ay: 182,
    fn: "Lámina horizontal continua que corta el ascenso de agua por capilaridad desde la cimentación y el terreno hacia la fábrica; se coloca más de 15 cm sobre el nivel del suelo exterior.",
    mat: "Lámina impermeable (bituminosa o polimérica) sobre mortero de regularización, abarcando todo el espesor del muro y enlazada con la impermeabilización del arranque.",
    ctl: "Continuidad en todo el espesor del muro, con solapes y sin interrupciones en esquinas o huecos; comprobar la cota respecto al suelo exterior y protegerla del tránsito y de cortes durante el replanteo.",
  },
  {
    n: 2,
    s: "Zócalo",
    side: "L",
    ly: 195,
    ax: 165,
    ay: 197,
    fn: "Banda inferior de la fachada, de más de 30 cm de altura, que soporta salpicaduras de lluvia, humedad del suelo y golpes, y protege de ellas a la fábrica.",
    mat: "Material de baja absorción (piedra natural, hormigón o ladrillo hidrofugado) con coeficiente de succión < 3 %, con su cara superior resuelta para evacuar el agua.",
    ctl: "Pedir y revisar el ensayo de succión del material, que las juntas queden selladas y que el zócalo sea continuo con la barrera horizontal; evitar pavimentos que dejen acumular salpicaduras al pie.",
  },
  {
    n: 3,
    s: "Cámara ventilada",
    side: "L",
    ly: 150,
    ax: 190,
    ay: 149,
    fn: "Cámara de aire entre la hoja exterior y el aislamiento que, al ventilarse, evacúa el agua que traspasa la hoja exterior y seca el cerramiento.",
    mat: "Espesor de 3 a 10 cm con aberturas de ventilación en la parte baja y alta de la hoja exterior (llagas abiertas o rejillas), con área efectiva ≥ 120 cm² por cada 10 m² de fachada.",
    ctl: "Mantener la cámara libre de restos de mortero y puentes de humedad, disponer aberturas por encima de la barrera horizontal, protegerlas con rejilla contra insectos y recoger el agua en las interrupciones de la cámara.",
  },
  {
    n: 4,
    s: "Aislamiento térmico",
    side: "R",
    ly: 105,
    ax: 204,
    ay: 122,
    fn: "Panel continuo adosado a la hoja interior; mejora la envolvente térmica y se mantiene seco gracias a la cámara ventilada.",
    mat: "Lana mineral hidrofugada, poliestireno extruido o espuma de poliuretano, con el espesor que exija el DB-HE para la zona climática; juntas a tope y fijación mecánica.",
    ctl: "Sin huecos ni juntas abiertas ni cámara entre aislamiento y hoja interior; proteger de la lluvia hasta cerrar la fachada y tratar los puentes térmicos en frentes de forjado y pilares.",
  },
  {
    n: 5,
    s: "Vierteaguas y goterón",
    side: "L",
    ly: 80,
    ax: 167,
    ay: 103,
    fn: "Pieza que recoge el agua de lluvia del hueco y la vierte al exterior: pendiente ≥ 10° hacia fuera, goterón separado ≥ 2 cm del paramento y entrega lateral en las jambas.",
    mat: "Piedra natural, hormigón polímero, cerámica o aluminio lacado, con goterón en su cara inferior y junta perimetral sellada con la carpintería.",
    ctl: "Medir la pendiente y el vuelo, comprobar que el goterón sigue siendo libre y que las juntas con la carpintería y las jambas están selladas y que el mortero de agarre no deja huecos.",
  },
];

function DetalleFachadaLadrillo() {
  return (
    <DetalleBase titulo="Fachada de ladrillo con cámara ventilada" elems={ELEM_FACHADA}>
      {({ sel, P }) => (
        <g>
          {/* Terreno exterior y cimentación */}
          <polygon points="120,210 144,210 144,250 120,250" fill="url(#arq-soil)" />
          <polyline points="120,210 150,210" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
          <polygon points="144,210 250,210 250,250 144,250" fill="#111827" stroke="#475569" strokeWidth="1.1" />
          <polygon points="144,210 250,210 250,250 144,250" fill="url(#arq-conc)" />

          {/* Hoja interior */}
          <polygon points="208,112 238,112 238,210 208,210" fill="#111827" stroke="#475569" strokeWidth="1.1" />
          <polygon points="208,112 238,112 238,210 208,210" fill="url(#arq-brick)" />

          {/* Hoja exterior (sobre el zócalo) */}
          <polygon points="150,112 180,112 180,165 150,165" fill="#111827" stroke="#475569" strokeWidth="1.1" />
          <polygon points="150,112 180,112 180,165 150,165" fill="url(#arq-brick)" />

          {/* Zócalo */}
          {P({ points: "150,165 180,165 180,210 150,210", n: 2, pat: "arq-conc", base: "#1f2937" })}

          {/* Cámara ventilada + aberturas */}
          {P({ points: "180,112 200,112 200,210 180,210", n: 3, base: "transparent", dash: "2 2" })}
          {P({ points: "150,146 180,146 180,152 150,152", n: 3, base: "#0b0e14" })}
          {P({ points: "150,116 180,116 180,122 150,122", n: 3, base: "#0b0e14" })}
          <text x="190" y="136" textAnchor="middle" fontSize="9" fill="#475569" pointerEvents="none">
            ↑
          </text>
          <text x="190" y="178" textAnchor="middle" fontSize="9" fill="#475569" pointerEvents="none">
            ↑
          </text>

          {/* Aislamiento */}
          {P({ points: "200,112 208,112 208,210 200,210", n: 4, pat: "arq-insul" })}

          {/* Barrera de arranque */}
          {P({ points: "150,180.5 238,180.5 238,183.5 150,183.5", n: 1, base: "#a78bfa", edge: "#a78bfa" })}

          {/* Carpintería */}
          <polygon
            points="204,40 220,40 220,93 204,93"
            fill="none"
            stroke="#475569"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <line x1="212" y1="40" x2="212" y2="93" stroke="#475569" strokeWidth="0.8" />

          {/* Vierteaguas con goterón */}
          {P({
            points: "138,105 204,93 204,112 146,112 145,108 141,108 140,112 138,112",
            n: 5,
            pat: "arq-conc",
            base: "#1f2937",
          })}

          <text x="150" y="38" textAnchor="middle" fontSize="8" fill="#475569" letterSpacing="1">
            EXT.
          </text>
          <text x="262" y="38" textAnchor="middle" fontSize="8" fill="#475569" letterSpacing="1">
            INT.
          </text>
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   Detalle({ tema }) — selector por tema.detalle.tipo
   ============================================================ */

export function Detalle({ tema }) {
  switch (tema?.detalle?.tipo) {
    case "muro":
      return <DetalleMuro />;
    case "forjado":
      return <DetalleForjado />;
    case "escalera":
      return <DetalleEscalera />;
    case "madera":
      return <DetalleMadera />;
    case "fachada":
      return <DetalleFachadaLadrillo />;
    default:
      return null;
  }
}
