import React, { useState, useMemo, useEffect } from "react";
import { ASIGNATURAS } from "./data/temas";

/* ============================================================
   BASES Y PATRONES TÉCNICOS SVG
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
      <pattern id="pT" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M0 12L12 0M-3 3L3 -3M9 15L15 9" stroke="#8a6d46" strokeWidth="1" />
        <circle cx="3" cy="9" r="0.8" fill="#8a6d46" />
      </pattern>
      <pattern id="pM" width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.9" fill="#94a3b8" />
        <circle cx="6" cy="6" r="0.9" fill="#94a3b8" />
      </pattern>
      <pattern id="pA" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M0 10L10 0" stroke="#94a3b8" strokeWidth="0.8" />
        <circle cx="7" cy="7" r="0.8" fill="#94a3b8" />
      </pattern>
      <pattern id="pG" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="3" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
        <circle cx="11" cy="9" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
        <circle cx="4" cy="12" r="1.5" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
      </pattern>
    </defs>
  );
}

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

function Callout({ el, active, pick }) {
  const left = el.side === "L";
  const w = el.s.length * 5.1;
  const x0 = left ? 10 : 430;
  const x1 = left ? 10 + w + 4 : 430 - w - 4;
  const col = active ? "#22d3ee" : "#475569";
  return (
    <g onClick={() => pick(el.n)} style={{ cursor: "pointer" }}>
      <text x={x0} y={el.ly} textAnchor={left ? "start" : "end"} fontSize="9" fill={active ? "#22d3ee" : "#94a3b8"} fontFamily="ui-sans-serif, system-ui, sans-serif">
        {el.s}
      </text>
      <line x1={x1} y1={el.ly - 3} x2={el.ax} y2={el.ay} stroke={col} strokeWidth="0.9" />
      <circle cx={el.ax} cy={el.ay} r="7" fill="#0b0e14" stroke={col} strokeWidth="1.4" />
      <text x={el.ax} y={el.ay + 3} textAnchor="middle" fontSize="9" fontWeight="700" fill={col} fontFamily="ui-sans-serif, system-ui, sans-serif">
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
              sel === el.n ? "border-cyan-400 bg-cyan-400/10 text-cyan-300" : "border-slate-700 text-slate-400 hover:border-slate-500"
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
        <p><span className="font-semibold text-cyan-400">Función: </span><span className="text-slate-300">{e.fn}</span></p>
        <p><span className="font-semibold text-cyan-400">Material / Solución: </span><span className="text-slate-300">{e.mat}</span></p>
        <p><span className="font-semibold text-amber-400">⚠ Control en obra: </span><span className="text-slate-300">{e.ctl}</span></p>
      </div>
    </div>
  );
}

/* ============================================================
   DETALLES CONSTRUCTIVOS ESPECÍFICOS (7 TIPOS)
   ============================================================ */

// 1. ZAPATA (Edificación I - Tema 4)
const PH_ZAPATA = [
  ["Replanteo", "Marcar ejes y perímetro de la zapata con camillas y cordel; fijar la cota de referencia ±0,00.", "Error de ejes: la zapata queda excéntrica respecto al pilar."],
  ["Excavación", "Excavar hasta la cota de cimentación (−1,20 m en el ejemplo) sin sobreexcavar; refinar el fondo a mano y validar el terreno con la dirección facultativa.", "Terreno distinto al del geotécnico o fondo alterado por agua: avisar a la DF antes de seguir."],
  ["H. limpieza", "Verter y nivelar HL-150 de 10 cm sobre el fondo limpio.", "No hormigonar sobre barro o agua; superficie plana para apoyar los separadores."],
  ["Ferrallado", "Colocar la parrilla inferior sobre separadores, atar las esperas del pilar y los estribos.", "Recubrimiento y posición de esperas: deben coincidir con el replanteo y quedar aplomadas."],
  ["Hormigonado", "Hormigonar la zapata por tongadas con vibrado y continuar con el arranque del pilar.", "Vibrar sin tocar armaduras; evitar segregación y vertidos desde gran altura."],
  ["Curado y acabado", "Mantener húmedo al menos 7 días; después ejecutar encachado de grava y solera con junta perimetral junto al pilar.", "Curado insuficiente: fisuración por retracción. Compactar el encachado por tongadas."]
];
const ELEM_ZAPATA = [
  { n: 1, s: "Terreno natural", ph: 0, side: "L", ly: 240, ax: 70, ay: 262, fn: "Soporta las cargas que le transmite la cimentación.", mat: "Según estudio geotécnico.", ctl: "Validar el fondo con la DF." },
  { n: 2, s: "Hormigón limpieza", ph: 2, side: "L", ly: 285, ax: 160, ay: 295, fn: "Regulariza el fondo y apoya las armaduras.", mat: "HL-150, 10 cm.", ctl: "Espesor mínimo y superficie nivelada." },
  { n: 3, s: "Parrilla inferior", ph: 3, side: "R", ly: 276, ax: 290, ay: 266, fn: "Resiste las tracciones por flexión.", mat: "Acero B500S.", ctl: "Diámetros, separaciones y recubrimiento." },
  { n: 4, s: "Esperas pilar", ph: 3, side: "L", ly: 120, ax: 203, ay: 165, fn: "Arranque del pilar.", mat: "Acero B500S con estribos.", ctl: "Aplomado y atado firme." },
  { n: 5, s: "Zapata HA", ph: 4, side: "R", ly: 248, ax: 280, ay: 255, fn: "Reparte la carga puntual.", mat: "HA-25, canto 50 cm.", ctl: "Dimensiones y vibrado." },
  { n: 6, s: "Pilar HA", ph: 4, side: "R", ly: 110, ax: 220, ay: 120, fn: "Transmite cargas en vertical.", mat: "Hormigón armado.", ctl: "Aplomado y encofrado." },
  { n: 7, s: "Encachado grava", ph: 5, side: "R", ly: 215, ax: 290, ay: 217, fn: "Capa drenante antihumedad.", mat: "Grava 40/80.", ctl: "Compactación." },
  { n: 8, s: "Solera", ph: 5, side: "R", ly: 165, ax: 290, ay: 187, fn: "Base del pavimento.", mat: "HA-25 con mallazo.", ctl: "Junta perimetral." },
  { n: 9, s: "Separadores", ph: 3, side: "R", ly: 303, ax: 290, ay: 287, fn: "Garantizan recubrimiento.", mat: "Plástico o mortero.", ctl: "Distribución correcta." }
];
function DetalleZapata() {
  const [ph, setPh] = useState(0);
  const [sel, setSel] = useState(null);
  const go = (p) => { setPh(p); if (sel && ELEM_ZAPATA[sel - 1].ph > p) setSel(null); };
  const k = (n, d) => (sel === n ? "#22d3ee" : d);
  const G = (n, c) => (<g onClick={() => setSel(n)} style={{ cursor: "pointer" }}>{c}</g>);
  const vis = ELEM_ZAPATA.filter((e) => e.ph <= ph);
  const se = sel ? ELEM_ZAPATA[sel - 1] : null;
  const tx = { paintOrder: "stroke", stroke: "#0b0e14", strokeWidth: 3 };
  const bars = [150, 170, 190, 210, 230, 250, 270, 290];
  const top = ph >= 4 ? 90 : 150;

  return (
    <div className="space-y-3">
      <div className="text-xs text-slate-400">Fase de obra de Cimentación</div>
      <div className="grid grid-cols-3 gap-1">
        {PH_ZAPATA.map((p, i) => (
          <button key={i} onClick={() => go(i)} className={"rounded-lg py-2 text-xs " + (ph === i ? "bg-sky-600" : i < ph ? "bg-slate-700" : "bg-slate-900 text-slate-400")}>
            {i + 1} · {p[0]}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 440 340" className="w-full rounded-xl border border-slate-800" style={{ background: "#0b0e14" }}>
        {G(1, <rect x="0" y="180" width="440" height="160" fill="url(#pT)" stroke={k(1, "#8a6d46")} strokeWidth={sel === 1 ? 2 : 1} />)}
        {ph >= 1 && <rect x="130" y="180" width="180" height="120" fill="#0b0e14" stroke="#8a6d46" style={{ pointerEvents: "none" }} />}
        {ph >= 2 && G(2, <rect x="130" y="290" width="180" height="10" fill="url(#pM)" stroke={k(2, "#94a3b8")} strokeWidth={sel === 2 ? 2 : 1} />)}
        {ph >= 4 && G(5, <rect x="130" y="240" width="180" height="50" fill="url(#pA)" stroke={k(5, "#94a3b8")} strokeWidth={sel === 5 ? 2 : 1} />)}
        {ph >= 4 && G(6, <rect x="195" y="80" width="50" height="160" fill="url(#pA)" stroke={k(6, "#94a3b8")} strokeWidth={sel === 6 ? 2 : 1} />)}
        {ph >= 5 && G(7, <g fill="url(#pG)" stroke={k(7, "#cbd5e1")} strokeWidth={sel === 7 ? 2 : 1}><rect x="130" y="195" width="62" height="45" /><rect x="248" y="195" width="62" height="45" /></g>)}
        {ph >= 5 && G(8, <g><g fill="url(#pM)" stroke={k(8, "#94a3b8")} strokeWidth={sel === 8 ? 2 : 1}><rect x="130" y="180" width="62" height="15" /><rect x="248" y="180" width="62" height="15" /></g><path d="M132 188H190M250 188H308" stroke="#f59e0b" strokeWidth="0.8" /></g>)}
        {ph >= 3 && G(3, <g stroke={k(3, "#f59e0b")} fill={k(3, "#f59e0b")}><path d="M140 282H300M140 282V262M300 282V262" strokeWidth="3" fill="none" />{bars.map((x) => (<circle key={x} cx={x} cy="277" r="2.2" stroke="none" />))}</g>)}
        {ph >= 3 && G(4, <g stroke={k(4, "#f59e0b")} fill="none"><path d={"M203 277V" + top + "M237 277V" + top} strokeWidth="2.5" />{[230, 200, 170, 140, 110].filter((y) => y > top).map((y) => (<path key={y} d={"M201 " + y + "H239"} strokeWidth="1" />))}</g>)}
        {ph >= 3 && G(9, <g fill={k(9, "#fb923c")}>{[150, 220, 290].map((x) => (<rect key={x} x={x - 3} y="284" width="6" height="6" />))}</g>)}
        <text x="4" y="175" fontSize="9" fill="#22d3ee">±0,00</text>
        {ph >= 1 && <text x="4" y="310" fontSize="9" fill="#22d3ee" style={tx}>−1,20</text>}
        {vis.map((e) => {
          const L = e.side === "L";
          return (
            <g key={e.n} onClick={() => setSel(e.n)} style={{ cursor: "pointer" }}>
              <line x1={L ? 100 : 340} y1={e.ly - 3} x2={e.ax} y2={e.ay} stroke="#64748b" strokeWidth="0.7" />
              <text x={L ? 6 : 434} y={e.ly} textAnchor={L ? "start" : "end"} fontSize="10" fill={sel === e.n ? "#22d3ee" : "#cbd5e1"} style={tx}>{e.n}. {e.s}</text>
              <circle cx={e.ax} cy={e.ay} r="7" fill="#0b0e14" stroke={k(e.n, "#94a3b8")} />
              <text x={e.ax} y={e.ay + 3} textAnchor="middle" fontSize="9" fill="#e2e8f0">{e.n}</text>
            </g>
          );
        })}
      </svg>
      {se ? (
        <div className="rounded-xl border border-sky-500/40 bg-slate-900 p-3 text-sm space-y-1">
          <b className="text-sky-300">{se.n}. {se.s}</b>
          <p><span className="text-slate-400">Función: </span>{se.fn}</p>
          <p><span className="text-slate-400">Material: </span>{se.mat}</p>
          <p className="text-amber-200">⚠ Control en obra: {se.ctl}</p>
        </div>
      ) : (
        <div className="rounded-xl bg-slate-900 p-3 text-sm text-slate-400">Toca un elemento del gráfico para ver su ficha técnica.</div>
      )}
    </div>
  );
}

// 2. CUBIERTA INCLINADA (Edificación II - Tema 1)
function DetalleCubierta() {
  const [sel, setSel] = useState(1);
  const ELEM_CUBIERTA = [
    { n: 1, s: "Estructura portante", side: "L", ly: 90, ax: 160, ay: 200, fn: "Soporta las cargas de la cubierta y sirve de techo de la última planta.", mat: "Forjado de hormigón armado o losa inclinada.", ctl: "Pendiente adecuada y nivelación." },
    { n: 2, s: "Aislamiento térmico", side: "L", ly: 130, ax: 200, ay: 175, fn: "Cumple exigencias de ahorro energético (DB-HE) y confort.", mat: "Poliestireno extruido (XPS) o lana mineral.", ctl: "Continuidad del aislamiento sin puentes térmicos." },
    { n: 3, s: "Cámara de aire ventilada", side: "R", ly: 90, ax: 240, ay: 150, fn: "Regula el comportamiento higrométrico y evita condensaciones (cubierta fría).", mat: "Espacio de 3 a 10 cm con aberturas reglamentarias.", ctl: "Superficie de aberturas efectiva ($3 < S_s/A_c < 30$)." },
    { n: 4, s: "Tablero de pendientes", side: "R", ly: 130, ax: 280, ay: 125, fn: "Superficie de apoyo continua para la cobertura.", mat: "Tablero cerámico machihembrado con mortero.", ctl: "Planeidad y estabilidad del soporte." },
    { n: 5, s: "Cobertura de tejas", side: "R", ly: 170, ax: 320, ay: 100, fn: "Protección frente a la precipitación y evacuación del agua.", mat: "Teja cerámica curva o mixta sobre rastreles.", ctl: "Solapes correctos y fijación mecánica frente a viento." }
  ];
  const k = (n, d) => (sel === n ? "#22d3ee" : d);
  const se = ELEM_CUBIERTA.find(e => e.n === sel);
  const tx = { paintOrder: "stroke", stroke: "#0b0e14", strokeWidth: 3 };

  return (
    <div className="space-y-3">
      <div className="text-xs text-sky-400">Detalle Constructivo: Cubierta Inclinada Ventilada (Cubierta Fría)</div>
      <svg viewBox="0 0 440 260" className="w-full rounded-xl border border-slate-800" style={{ background: "#0b0e14" }}>
        <g onClick={() => setSel(1)} style={{ cursor: "pointer" }}><polygon points="100,210 340,170 340,195 100,235" fill="#334155" stroke={k(1, "#475569")} strokeWidth={sel === 1 ? 2 : 1} /></g>
        <g onClick={() => setSel(2)} style={{ cursor: "pointer" }}><polygon points="100,190 340,150 340,170 100,210" fill="#f97316" stroke={k(2, "#c2410c")} strokeWidth={sel === 2 ? 2 : 1} opacity="0.85" /></g>
        <g onClick={() => setSel(3)} style={{ cursor: "pointer" }}><polygon points="100,165 340,125 340,150 100,190" fill="#1e293b" stroke={k(3, "#334155")} strokeWidth={sel === 3 ? 2 : 1} strokeDasharray="4 2" /></g>
        <g onClick={() => setSel(4)} style={{ cursor: "pointer" }}><polygon points="100,145 340,105 340,125 100,165" fill="#64748b" stroke={k(4, "#475569")} strokeWidth={sel === 4 ? 2 : 1} /></g>
        <g onClick={() => setSel(5)} style={{ cursor: "pointer" }}><path d="M95 138 L345 98" stroke={k(5, "#ef4444")} strokeWidth="8" strokeLinecap="round" /></g>
        {ELEM_CUBIERTA.map((e) => {
          const L = e.side === "L";
          return (
            <g key={e.n} onClick={() => setSel(e.n)} style={{ cursor: "pointer" }}>
              <line x1={L ? 100 : 340} y1={e.ly - 3} x2={e.ax} y2={e.ay} stroke="#64748b" strokeWidth="0.7" />
              <text x={L ? 10 : 430} y={e.ly} textAnchor={L ? "start" : "end"} fontSize="10" fill={sel === e.n ? "#22d3ee" : "#cbd5e1"} style={tx}>{e.n}. {e.s}</text>
              <circle cx={e.ax} cy={e.ay} r="7" fill="#0b0e14" stroke={k(e.n, "#94a3b8")} />
              <text x={e.ax} y={e.ay + 3} textAnchor="middle" fontSize="9" fill="#e2e8f0">{e.n}</text>
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-1">
        {ELEM_CUBIERTA.map(c => (
          <button key={c.n} onClick={() => setSel(c.n)} className={"text-xs rounded-full px-3 py-1 border " + (sel === c.n ? "border-sky-400 text-sky-300 bg-sky-500/10" : "border-slate-700 text-slate-300")}>{c.n}. {c.s}</button>
        ))}
      </div>
      {se && (
        <div className="rounded-xl border border-sky-500/40 bg-slate-900 p-3 text-sm space-y-1">
          <b className="text-sky-300">{se.n}. {se.s}</b>
          <p><span className="text-slate-400">Función: </span>{se.fn}</p>
          <p><span className="text-slate-400">Material / Solución: </span>{se.mat}</p>
          <p className="text-amber-200">⚠ Control en obra: {se.ctl}</p>
        </div>
      )}
    </div>
  );
}

// 3. MURO DE CONTENCIÓN
const ELEM_MURO = [
  { n: 1, s: "Alzado (pantalla)", side: "L", ly: 60, ax: 209, ay: 90, fn: "Pantalla vertical de hormigón armado que resiste el empuje horizontal del terreno.", mat: "Hormigón armado HA-25.", ctl: "Armaduras de espera y recubrimientos correctos." },
  { n: 2, s: "Puntera", side: "L", ly: 130, ax: 160, ay: 218, fn: "Vuelo delantero de la zapata que aporta estabilidad frente al vuelco.", mat: "Zapata de hormigón armado.", ctl: "Presión máxima bajo la puntera menor que la admisible." },
  { n: 3, s: "Talón", side: "R", ly: 245, ax: 270, ay: 218, fn: "Vuelo trasero bajo las tierras cuyo peso estabiliza el muro.", mat: "Hormigón armado.", ctl: "Compactar por tongadas sin sobrecargar." },
  { n: 4, s: "Tacón antideslizante", side: "L", ly: 245, ax: 209, ay: 241, fn: "Resalte inferior que evita el deslizamiento por corte.", mat: "Hormigón armado.", ctl: "Excavar sin descalzar el terreno." },
  { n: 5, s: "Dren en trasdós", side: "R", ly: 150, ax: 244, ay: 183, fn: "Evita acumulación de agua y presiones hidrostáticas.", mat: "Tubo dren, grava y geotextil.", ctl: "Pendiente continua y solapes de geotextil." }
];
function DetalleMuro() {
  return (
    <DetalleBase titulo="Muro de contención en ménsula" elems={ELEM_MURO}>
      {({ sel, P }) => (
        <g>
          <polygon points="120,230 320,230 320,252 120,252" fill="url(#arq-soil)" />
          <polygon points="223,70 320,70 320,230 223,230" fill="url(#arq-soil)" />
          <polygon points="120,190 195,190 195,230 120,230" fill="url(#arq-soil)" />
          {P({ points: "223,172 252,172 252,205 223,205", n: 5, pat: "arq-gravel", base: "transparent", dash: "3 2" })}
          {P({ points: "130,205 195,205 195,230 130,230", n: 2, pat: "arq-conc" })}
          {P({ points: "223,205 310,205 310,230 223,230", n: 3, pat: "arq-conc" })}
          {P({ points: "200,230 218,230 218,250 200,250", n: 4, pat: "arq-conc" })}
          {P({ points: "195,40 223,40 223,230 195,230", n: 1, pat: "arq-conc" })}
        </g>
      )}
    </DetalleBase>
  );
}

// 4. FORJADO UNIDIRECCIONAL
const ELEM_FORJADO = [
  { n: 1, s: "Vigueta resistente", side: "L", ly: 235, ax: 228, ay: 147, fn: "Elemento prefabricado que absorbe flexiones.", mat: "Vigueta de hormigón pretensado.", ctl: "Comprobar marcado CE y apuntalamiento." },
  { n: 2, s: "Bovedilla", side: "L", ly: 190, ax: 162, ay: 128, fn: "Pieza aligerante y encofrado perdido.", mat: "Bovedilla cerámica u hormigón.", ctl: "Sin roturas y bien asentada." },
  { n: 3, s: "Capa de compresión", side: "L", ly: 60, ax: 150, ay: 101, fn: "Solidariza el forjado (esp. mín. 40 mm).", mat: "Hormigón vertido in situ.", ctl: "Control de espesor y curado." },
  { n: 4, s: "Mallazo de reparto", side: "R", ly: 70, ax: 292, ay: 106, fn: "Evita fisuración por retracción.", mat: "Red electrosoldada B500T.", ctl: "Calzado con separadores." },
  { n: 5, s: "Zuncho perimetral", side: "R", ly: 140, ax: 294, ay: 131, fn: "Viga de borde de atado del forjado.", mat: "Hormigón armado.", ctl: "Apoyo de viguetas ≥ 65 mm." }
];
function DetalleForjado() {
  const VIGUETAS = [140, 184, 228];
  const BOVEDILLAS = [[126, 136], [144, 180], [188, 224], [232, 268]];
  return (
    <DetalleBase titulo="Forjado unidireccional" elems={ELEM_FORJADO}>
      {({ sel, P }) => (
        <g>
          <polygon points="268,150 320,150 320,250 268,250" fill="url(#arq-brick)" />
          {BOVEDILLAS.map(([a, b]) => (
            <g key={a}>{P({ points: `${a},112 ${b},112 ${b},143 ${a},143`, n: 2, base: "#1f2937" })}</g>
          ))}
          {VIGUETAS.map((c) => (
            <g key={c}>{P({ points: `${c-4},112 ${c+4},112 ${c+4},143 ${c+10},143 ${c+10},150 ${c-10},150 ${c-10},143 ${c-4},143`, n: 1, pat: "arq-conc" })}</g>
          ))}
          {P({ points: "126,100 320,100 320,112 126,112", n: 3, pat: "arq-conc" })}
          {P({ points: "268,112 320,112 320,150 268,150", n: 5, pat: "arq-conc" })}
          <line x1="128" y1="106" x2="318" y2="106" stroke={sel === 4 ? "#22d3ee" : "#f59e0b"} strokeWidth="1.6" />
        </g>
      )}
    </DetalleBase>
  );
}

// 5. ESCALERA
const ELEM_ESCALERA = [
  { n: 1, s: "Huella (pisa)", side: "L", ly: 100, ax: 200, ay: 157, fn: "Plano horizontal de apoyo (H ≥ 280 mm).", mat: "Solado antideslizante.", ctl: "Comprobar relación de peldaños." },
  { n: 2, s: "Contrahuella", side: "L", ly: 185, ax: 158, ay: 197, fn: "Plano vertical del peldaño.", mat: "Tabica de acabado.", ctl: "Altura constante en todo el tramo." },
  { n: 3, s: "Zanca / losa", side: "R", ly: 215, ax: 222, ay: 168, fn: "Elemento estructural inclinado portante.", mat: "Hormigón armado.", ctl: "Anclaje de armadura en apoyos." },
  { n: 4, s: "Meseta", side: "R", ly: 160, ax: 300, ay: 127, fn: "Plano horizontal intermedio de descanso.", mat: "Losa de hormigón armado.", ctl: "Nivel y anchura correcta." },
  { n: 5, s: "Barandilla", side: "R", ly: 20, ax: 290, ay: 30, fn: "Protección frente a caídas (altura ≥ 90 cm).", mat: "Metal, madera o vidrio.", ctl: "Resistencia a empujes horizontales." }
];
function DetalleEscalera() {
  const SLAB = "130,230 130,208 158,208 158,186 186,186 186,164 214,164 214,142 242,142 242,120 320,120 320,134 272,134 150,230";
  return (
    <DetalleBase titulo="Escalera (DB-SU 1)" elems={ELEM_ESCALERA}>
      {({ P }) => (
        <g>
          {P({ points: SLAB, n: 3, pat: "arq-conc" })}
          {P({ points: "242,120 320,120 320,134 242,134", n: 4, pat: "arq-conc" })}
          <line x1="130" y1="208" x2="158" y2="208" stroke="#e2e8f0" strokeWidth="2.6" />
          <line x1="158" y1="186" x2="186" y2="186" stroke="#e2e8f0" strokeWidth="2.6" />
          <line x1="186" y1="164" x2="214" y2="164" stroke="#e2e8f0" strokeWidth="2.6" />
          <line x1="214" y1="142" x2="242" y2="142" stroke="#e2e8f0" strokeWidth="2.6" />
        </g>
      )}
    </DetalleBase>
  );
}

// 6. ESTRUCTURAS DE MADERA
const ELEM_MADERA = [
  { n: 1, s: "Viga de madera", side: "R", ly: 150, ax: 305, ay: 188, fn: "Elemento principal que trabaja a flexión.", mat: "Madera aserrada C24 o laminada.", ctl: "Humedad de recepción ≤ 20%." },
  { n: 2, s: "Herraje metálico", side: "R", ly: 105, ax: 264, ay: 170, fn: "Conexión que permite movimiento higrotérmico.", mat: "Acero galvanizado.", ctl: "Distancias a bordes reglamentarias." },
  { n: 3, s: "Cámara ventilación", side: "L", ly: 200, ax: 154, ay: 189, fn: "Holgura perimetral para evitar pudrición.", mat: "Espacio de aire ≥ 15 mm.", ctl: "Mantener libre de mortero." },
  { n: 4, s: "Barrera antihumedad", side: "L", ly: 230, ax: 190, ay: 205, fn: "Corta el ascenso de humedad por capilaridad.", mat: "Lámina impermeable EPDM.", ctl: "Continuidad bajo toda la testa." }
];
function DetalleMadera() {
  return (
    <DetalleBase titulo="Entrega de viga de madera en muro" elems={ELEM_MADERA}>
      {({ sel, P }) => (
        <g>
          <polygon points="120,235 320,235 320,255 120,255" fill="url(#arq-soil)" />
          <polygon points="130,110 230,110 230,255 130,255" fill="url(#arq-brick)" />
          <polygon points="150,166 230,166 230,206 150,206" fill="#0b0e14" />
          {P({ points: "150,203 230,203 230,206 150,206", n: 4, base: "#a78bfa", edge: "#a78bfa" })}
          {P({ points: "158,172 320,172 320,203 158,203", n: 1, pat: "arq-wood", base: "#1f1a10" })}
          {P({ points: "244,178 284,178 284,199 244,199", n: 2, base: "#334155", edge: "#cbd5e1" })}
        </g>
      )}
    </DetalleBase>
  );
}

// 7. FACHADA DE LADRILLO
const ELEM_FACHADA = [
  { n: 1, s: "Barrera de arranque", side: "R", ly: 190, ax: 228, ay: 182, fn: "Corta la capilaridad a > 15 cm del suelo.", mat: "Lámina impermeabilizante.", ctl: "Continuidad en todo el espesor." },
  { n: 2, s: "Zócalo", side: "L", ly: 195, ax: 165, ay: 197, fn: "Protección frente a salpicaduras (> 30 cm).", mat: "Ladrillo de baja succión < 3%.", ctl: "Revisar ensayo de succión." },
  { n: 3, s: "Cámara ventilada", side: "L", ly: 150, ax: 190, ay: 149, fn: "Evacua la humedad del cerramiento (3 a 10 cm).", mat: "Cámara de aire con llagas abiertas.", ctl: "Libre de restos de mortero." },
  { n: 4, s: "Aislamiento", side: "R", ly: 105, ax: 204, ay: 122, fn: "Mejora la envolvente térmica.", mat: "Panel de lana mineral o XPS.", ctl: "Sin huecos ni juntas abiertas." },
  { n: 5, s: "Vierteaguas", side: "L", ly: 80, ax: 167, ay: 103, fn: "Evacúa el agua de lluvia con pendiente ≥ 10°.", mat: "Cerámica o piedra con goterón.", ctl: "Goterón separado ≥ 2 cm." }
];
function DetalleFachadaLadrillo() {
  return (
    <DetalleBase titulo="Fachada de ladrillo con cámara ventilada" elems={ELEM_FACHADA}>
      {({ P }) => (
        <g>
          <polygon points="120,210 144,210 144,250 120,250" fill="url(#arq-soil)" />
          <polygon points="144,210 250,210 250,250 144,250" fill="url(#arq-conc)" />
          <polygon points="208,112 238,112 238,210 208,210" fill="url(#arq-brick)" />
          <polygon points="150,112 180,112 180,165 150,165" fill="url(#arq-brick)" />
          {P({ points: "150,165 180,165 180,210 150,210", n: 2, pat: "arq-conc", base: "#1f2937" })}
          {P({ points: "200,112 208,112 208,210 200,210", n: 4, pat: "arq-insul" })}
          {P({ points: "150,180.5 238,180.5 238,183.5 150,183.5", n: 1, base: "#a78bfa", edge: "#a78bfa" })}
        </g>
      )}
    </DetalleBase>
  );
}

/* ============================================================
   ROUTER DE DETALLES
   ============================================================ */

function Detalle({ tema }) {
  switch (tema?.detalle?.tipo) {
    case "zapata": return <DetalleZapata />;
    case "cubierta": return <DetalleCubierta />;
    case "muro": return <DetalleMuro />;
    case "forjado": return <DetalleForjado />;
    case "escalera": return <DetalleEscalera />;
    case "madera": return <DetalleMadera />;
    case "fachada": return <DetalleFachadaLadrillo />;
    default:
      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center space-y-2">
          <h3 className="font-semibold text-sky-400">{tema?.detalle?.titulo || "Esquema Constructivo"}</h3>
          <p className="text-sm text-slate-300">{tema?.detalle?.descripcion || "Consulta los apartados teóricos de este tema."}</p>
        </div>
      );
  }
}

/* ============================================================
   COMPONENTES INTERACTIVOS DE LAS PESTAÑAS (Proc, Casos, Flash, Glo)
   ============================================================ */

function Proc({ proc, temaId }) {
  const [open, setOpen] = useState(0);
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`arqstudy_proc_${temaId}`)) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(`arqstudy_proc_${temaId}`, JSON.stringify(done));
  }, [done, temaId]);

  if (!proc || proc.length === 0) {
    return <div className="text-center py-6 text-slate-400 text-sm">No hay procesos constructivos disponibles para este tema.</div>;
  }

  const total = proc.reduce((n, p) => n + p.s.length, 0);
  const n = Object.keys(done).filter((k) => done[k]).length;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-slate-400">
        <span>Progreso guardado: {n}/{total} pasos</span>
        {n > 0 && (
          <button onClick={() => setDone({})} className="text-xs text-rose-400 hover:underline">Reiniciar</button>
        )}
      </div>
      <div className="h-2 rounded bg-slate-800">
        <div className="h-2 rounded bg-emerald-500 transition-all" style={{ width: (n / total) * 100 + "%" }} />
      </div>
      {proc.map((p, i) => (
        <div key={i} className="rounded-xl border border-slate-800 bg-slate-900">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-3 font-medium">{p.t}</button>
          {open === i && (
            <div className="px-3 pb-3 space-y-2">
              {p.s.map((s, j) => (
                <label key={j} className="flex gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!done[i + "-" + j]}
                    onChange={(e) => setDone({ ...done, [i + "-" + j]: e.target.checked })}
                  />
                  <span className={done[i + "-" + j] ? "line-through text-slate-500" : ""}>{s}</span>
                </label>
              ))}
              {p.c && (
                <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-2 text-sm text-amber-200">
                  ⚠ Punto crítico: {p.c}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Casos({ casos }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);

  if (!casos || casos.length === 0) {
    return <div className="text-center py-6 text-slate-400 text-sm">No hay casos prácticos disponibles para este tema todavía.</div>;
  }

  const c = casos[i];

  return (
    <div className="space-y-3">
      <div className="text-xs uppercase tracking-wide text-sky-400">{c.k} · {i + 1}/{casos.length}</div>
      <p className="font-medium">{c.q}</p>
      {c.o.map((o, j) => {
        const ok = sel !== null && j === c.a;
        const bad = sel === j && j !== c.a;
        return (
          <button
            key={j}
            disabled={sel !== null}
            onClick={() => setSel(j)}
            className={"w-full text-left p-3 rounded-xl border text-sm " + (ok ? "border-emerald-500 bg-emerald-500/10" : bad ? "border-rose-500 bg-rose-500/10" : "border-slate-800 bg-slate-900")}
          >
            {o}
          </button>
        );
      })}
      {sel !== null && (
        <div className="rounded-xl bg-slate-800 p-3 text-sm">
          {sel === c.a ? "✅ Correcto. " : "❌ No es correcto. "}{c.e}
        </div>
      )}
      {sel !== null && (
        <button onClick={() => { setI((i + 1) % casos.length); setSel(null); }} className="px-4 py-2 rounded-lg bg-sky-600 text-sm">
          Siguiente caso
        </button>
      )}
    </div>
  );
}

function Flash({ cards }) {
  const [q, setQ] = useState(cards ? cards.map((_, i) => i) : []);
  const [show, setShow] = useState(false);
  const [st, setSt] = useState({});

  if (!cards || cards.length === 0) {
    return <div className="text-center py-6 text-slate-400 text-sm">No hay flashcards disponibles para este tema todavía.</div>;
  }

  if (!q.length)
    return (
      <div className="text-center py-10">
        <p className="text-lg">🎉 Sesión completada</p>
        <button className="mt-3 px-4 py-2 rounded-lg bg-sky-600 text-sm" onClick={() => { setQ(cards.map((_, i) => i)); setSt({}); }}>
          Repetir
        </button>
      </div>
    );

  const c = cards[q[0]];
  const rate = (r) => {
    const rest = q.slice(1);
    const cur = q[0];
    setShow(false);
    setSt({ ...st, [cur]: r });
    if (r === 0) rest.splice(Math.min(2, rest.length), 0, cur);
    else if (r === 1) rest.splice(Math.min(4, rest.length), 0, cur);
    setQ(rest);
  };

  const B = [
    ["Otra vez", "<1 min", "bg-rose-600"],
    ["Difícil", "6 min", "bg-amber-600"],
    ["Bien", "1 día", "bg-emerald-600"],
    ["Fácil", "4 días", "bg-sky-600"]
  ];

  return (
    <div className="space-y-3">
      <div className="text-sm text-slate-400">Pendientes: {q.length}</div>
      <div onClick={() => setShow(true)} className="min-h-[190px] rounded-2xl border border-slate-700 bg-slate-900 p-5 flex flex-col justify-center cursor-pointer">
        <div className="text-xs text-sky-400 mb-2">{c.ty}</div>
        <p className="font-medium">{c.q}</p>
        {show ? <p className="mt-4 pt-3 border-t border-slate-700 text-emerald-300 text-sm">{c.a}</p> : <p className="mt-4 text-xs text-slate-500">Toca para ver la respuesta</p>}
      </div>
      {show && (
        <div className="grid grid-cols-4 gap-2">
          {B.map((b, i) => (
            <button key={i} onClick={() => rate(i)} className={"rounded-lg py-2 text-xs " + b[2]}>
              {b[0]}
              <div className="opacity-70">{b[1]}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Glo({ glo, asignatura }) {
  const [f, setF] = useState("");
  const l = useMemo(() => (glo || []).filter((g) => (g[0] + g[1]).toLowerCase().includes(f.toLowerCase())), [f, glo]);

  if (!glo || glo.length === 0) {
    return <div className="text-center py-6 text-slate-400 text-sm">No hay glosario disponible para este tema todavía.</div>;
  }

  return (
    <div className="space-y-3">
      <input value={f} onChange={(e) => setF(e.target.value)} placeholder="Buscar término…" className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-sm" />
      {l.map((g, i) => (
        <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
          <div className="flex justify-between">
            <b>{g[0]}</b>
            <span className="text-xs rounded-full bg-sky-500/20 text-sky-300 px-2 py-0.5">{asignatura}</span>
          </div>
          <p className="text-sm mt-1">{g[1]}</p>
          <p className="text-xs text-slate-400 mt-1">En obra: {g[2]}</p>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   APLICACIÓN PRINCIPAL (App)
   ============================================================ */

export default function App() {
  const [asigIdx, setAsigIdx] = useState(0);
  const [temaIdx, setTemaIdx] = useState(0);
  const [t, setT] = useState(0);

  const asig = ASIGNATURAS[asigIdx];
  const tema = asig.temas[temaIdx];

  const T = [
    ["Procesos", () => <Proc proc={tema.proc} temaId={tema.id} />],
    ["Detalle", () => <Detalle tema={tema} />],
    ["Casos", () => <Casos casos={tema.casos} />],
    ["Flashcards", () => <Flash cards={tema.cards} />],
    ["Glosario", () => <Glo glo={tema.glo} asignatura={asig.nombre} />]
  ];
  const V = T[t][1];

  return (
    <div className="max-w-2xl mx-auto p-4 pb-12">
      <div className="flex gap-2 mb-3">
        <select
          value={asigIdx}
          onChange={(e) => { setAsigIdx(Number(e.target.value)); setTemaIdx(0); }}
          className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-200"
        >
          {ASIGNATURAS.map((a, i) => (<option key={a.id} value={i}>{a.nombre}</option>))}
        </select>
        <select
          value={temaIdx}
          onChange={(e) => setTemaIdx(Number(e.target.value))}
          className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-200"
        >
          {asig.temas.map((tm, i) => (<option key={tm.id} value={i}>{tm.titulo}</option>))}
        </select>
      </div>

      <div className="text-xs text-slate-500">{asig.nombre} › {tema.ruta}</div>
      <h1 className="text-xl font-semibold mt-1">{tema.titulo}</h1>
      <div className="text-xs text-slate-500 mb-3">📄 {tema.fuente}</div>

      <div className="flex gap-1 mb-4 p-1 rounded-xl bg-slate-900 overflow-x-auto">
        {T.map((x, i) => (
          <button key={i} onClick={() => setT(i)} className={"flex-1 px-3 py-2 rounded-lg text-sm whitespace-nowrap " + (t === i ? "bg-slate-700 text-white" : "text-slate-400")}>
            {x[0]}
          </button>
        ))}
      </div>
      <V />
    </div>
  );
}
