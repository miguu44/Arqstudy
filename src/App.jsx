import React, { useState, useMemo, useEffect } from "react";
import { ASIGNATURAS } from "./data/temas";

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

// Componente Detalle para Cubiertas Inclinadas (Edificación II - Tema 1)
function DetalleCubierta() {
  const [sel, setSel] = useState(1);
  
  const capas = [
    { n: 1, s: "Estructura portante / Forjado", fn: "Soporta las cargas de la cubierta y da inclinación o sirve de techo de última planta.", mat: "Forjado de hormigón o losa inclinada.", ctl: "Pendiente adecuada y nivelación." },
    { n: 2, s: "Aislamiento térmico y Barrera de vapor", fn: "Cumple exigencias de ahorro energético (DB-HE) y evita condensaciones.", mat: "Poliestireno extruido o lana de roca.", ctl: "Continuidad del aislamiento sin puentes térmicos." },
    { n: 3, s: "Cámara de aire ventilada", fn: "Regula el comportamiento higrométrico (clave en cubierta fría).", mat: "Espacio de 3 a 10 cm con aberturas de ventilación.", ctl: "Superficie de aberturas reglamentaria ($3 < S_s/A_c < 30$)." },
    { n: 4, s: "Tablero de formación de pendientes", fn: "Soporte continuo sobre tabiques palomeros o tableros ligeros.", mat: "Tablero cerámico machihembrado con capa de mortero.", ctl: "Planes estables y pendientes mínimas reglamentarias." },
    { n: 5, s: "Material de cobertura (Teja)", fn: "Protección frente a la precipitación y evacuación del agua de lluvia.", mat: "Teja cerámica curva, mixta o plana; pizarra.", ctl: "Solapes correctos y fijación mecánica en zonas de fuerte viento." }
  ];

  const cAct = capas.find(c => c.n === sel);

  return (
    <div className="space-y-3">
      <div className="text-xs text-sky-400">Detalle Constructivo: Cubierta Inclinada Ventilada (Cubierta Fría)</div>
      <svg viewBox="0 0 440 260" className="w-full rounded-xl border border-slate-800" style={{ background: "#0b0e14" }}>
        {/* Estructura portante */}
        <g onClick={() => setSel(1)} style={{ cursor: "pointer" }}>
          <rect x="60" y="190" width="320" height="30" fill="#334155" stroke={sel === 1 ? "#22d3ee" : "#475569"} strokeWidth={sel === 1 ? 2 : 1} />
          <text x="220" y="210" fontSize="10" fill="#e2e8f0" textAnchor="middle">1. Estructura portante</text>
        </g>
        {/* Aislamiento */}
        <g onClick={() => setSel(2)} style={{ cursor: "pointer" }}>
          <rect x="60" y="170" width="320" height="15" fill="#f97316" stroke={sel === 2 ? "#22d3ee" : "#c2410c"} strokeWidth={sel === 2 ? 2 : 1} opacity="0.8" />
          <text x="220" y="181" fontSize="9" fill="#fff" textAnchor="middle">2. Aislamiento térmico</text>
        </g>
        {/* Cámara de aire */}
        <g onClick={() => setSel(3)} style={{ cursor: "pointer" }}>
          <polygon points="60,130 380,85 380,115 60,160" fill="#1e293b" stroke={sel === 3 ? "#22d3ee" : "#334155"} strokeWidth={sel === 3 ? 2 : 1} strokeDasharray="4 2" />
          <text x="220" y="130" fontSize="9" fill="#38bdf8" textAnchor="middle">3. Cámara de aire ventilada</text>
        </g>
        {/* Tablero de pendientes */}
        <g onClick={() => setSel(4)} style={{ cursor: "pointer" }}>
          <polygon points="50,115 390,65 390,82 50,132" fill="#64748b" stroke={sel === 4 ? "#22d3ee" : "#475569"} strokeWidth={sel === 4 ? 2 : 1} />
          <text x="220" y="103" fontSize="9" fill="#f1f5f9" textAnchor="middle">4. Tablero soporte de pendientes</text>
        </g>
        {/* Material de cobertura (Tejas) */}
        <g onClick={() => setSel(5)} style={{ cursor: "pointer" }}>
          <path d="M45 105 Q 60 90, 75 105 T 105 105 T 135 105 T 165 105 T 195 105 T 225 105 T 255 105 T 285 105 T 315 105 T 345 105 T 375 105" fill="none" stroke={sel === 5 ? "#22d3ee" : "#ef4444"} strokeWidth="6" />
          <text x="220" y="75" fontSize="10" fill="#fca5a5" textAnchor="middle">5. Cobertura de tejas cerámicas</text>
        </g>
      </svg>
      <div className="flex flex-wrap gap-1">
        {capas.map(c => (
          <button key={c.n} onClick={() => setSel(c.n)} className={"text-xs rounded-full px-3 py-1 border " + (sel === c.n ? "border-sky-400 text-sky-300 bg-sky-500/10" : "border-slate-700 text-slate-300")}>
            {c.n}. {c.s}
          </button>
        ))}
      </div>
      {cAct && (
        <div className="rounded-xl border border-sky-500/40 bg-slate-900 p-3 text-sm space-y-1">
          <b className="text-sky-300">{cAct.n}. {cAct.s}</b>
          <p><span className="text-slate-400">Función: </span>{cAct.fn}</p>
          <p><span className="text-slate-400">Material / Solución: </span>{cAct.mat}</p>
          <p className="text-amber-200">⚠ Control en obra: {cAct.ctl}</p>
        </div>
      )}
    </div>
  );
}

// Componente Detalle de Zapata (Edificación I - Tema 4)
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
        <defs>
          <pattern id="pT" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 12L12 0M-3 3L3 -3M9 15L15 9" stroke="#8a6d46" strokeWidth="1" /><circle cx="3" cy="9" r="0.8" fill="#8a6d46" /></pattern>
          <pattern id="pM" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.9" fill="#94a3b8" /><circle cx="6" cy="6" r="0.9" fill="#94a3b8" /></pattern>
          <pattern id="pA" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 10L10 0" stroke="#94a3b8" strokeWidth="0.8" /><circle cx="7" cy="7" r="0.8" fill="#94a3b8" /></pattern>
          <pattern id="pG" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="3" fill="none" stroke="#cbd5e1" strokeWidth="0.8" /><circle cx="11" cy="9" r="2.5" fill="none" stroke="#cbd5e1" strokeWidth="0.8" /><circle cx="4" cy="12" r="1.5" fill="none" stroke="#cbd5e1" strokeWidth="0.8" /></pattern>
        </defs>
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

function Detalle({ tema }) {
  if (tema.detalle?.tipo === "cubierta") {
    return <DetalleCubierta />;
  }
  if (tema.detalle?.tipo === "zapata") {
    return <DetalleZapata />;
  }
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center space-y-2">
      <h3 className="font-semibold text-sky-400">{tema.detalle?.titulo || "Esquema Constructivo"}</h3>
      <p className="text-sm text-slate-300">{tema.detalle?.descripcion || "Consulta los apartados de procedimientos, casos prácticos y flashcards para este tema."}</p>
    </div>
  );
}

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
  const c = casos[i];

  if (!casos || casos.length === 0) {
    return <div className="text-center py-6 text-slate-400 text-sm">No hay casos prácticos disponibles para este tema todavía.</div>;
  }

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
  const [q, setQ] = useState(cards.map((_, i) => i));
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
