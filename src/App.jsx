import { useState } from "react";

// TODO: Integrar Firebase Auth para login/registro real
// TODO: Integrar Amplitude para analytics de eventos
// TODO: Integrar contenido real de lecciones desde backend
// TODO: Implementar i18n real con textos en múltiples idiomas
// TODO: Integrar Lottie para animaciones de personajes

const COLORS = {
  primary: "#FF6B35",
  primaryDark: "#E85D2A",
  secondary: "#4A90D9",
  background: "#FFF8F0",
  cardBg: "#FFFFFF",
  textPrimary: "#1A1A2E",
  textSecondary: "#6B7280",
  textLight: "#9CA3AF",
  success: "#22C55E",
  warning: "#F59E0B",
  accent: "#A855F7",
  border: "#E5E7EB",
  navBg: "#FFFFFF",
};

const LESSONS = [
  {
    id: 1,
    title: "Sentado básico",
    description: "Enseña a tu perro el comando sentado en 5 minutos",
    icon: "🐶",
    duration: "5 min",
    level: "Principiante",
    completed: true,
    category: "Básicos",
  },
  {
    id: 2,
    title: "Quieto",
    description: "Desarrolla la paciencia y el autocontrol de tu perro",
    icon: "🐾",
    duration: "8 min",
    level: "Principiante",
    completed: true,
    category: "Básicos",
  },
  {
    id: 3,
    title: "Ven aquí",
    description: "El comando más importante para la seguridad de tu perro",
    icon: "🏃",
    duration: "10 min",
    level: "Intermedio",
    completed: false,
    category: "Básicos",
  },
  {
    id: 4,
    title: "Tumbado",
    description: "Posición de relajación y sumisión",
    icon: "😴",
    duration: "7 min",
    level: "Intermedio",
    completed: false,
    category: "Básicos",
  },
  {
    id: 5,
    title: "Caminar con correa",
    description: "Paseos sin jalones ni estrés",
    icon: "🦮",
    duration: "15 min",
    level: "Avanzado",
    completed: false,
    category: "Paseos",
  },
  {
    id: 6,
    title: "No ladrar",
    description: "Control del ladrido excesivo",
    icon: "🔇",
    duration: "12 min",
    level: "Avanzado",
    completed: false,
    category: "Comportamiento",
  },
];

const TIPS = [
  {
    id: 1,
    title: "Refuerzo positivo",
    text: "Recompensa siempre el buen comportamiento con premios o caricias inmediatamente después.",
    emoji: "🍖",
  },
  {
    id: 2,
    title: "Sesiones cortas",
    text: "Entrena en sesiones de 5-10 minutos máximo. Los perros aprenden mejor con descansos frecuentes.",
    emoji: "⏱️",
  },
  {
    id: 3,
    title: "Consistencia",
    text: "Usa siempre las mismas palabras y señales para cada comando. Toda la familia debe hacerlo igual.",
    emoji: "🔄",
  },
];

const ACHIEVEMENTS = [
  { id: 1, title: "Primera lección", icon: "🎯", unlocked: true },
  { id: 2, title: "3 días seguidos", icon: "🔥", unlocked: true },
  { id: 3, title: "Maestro básico", icon: "⭐", unlocked: false },
  { id: 4, title: "Semana completa", icon: "🏆", unlocked: false },
];

// ─── COMPONENTES ────────────────────────────────────────────────────────────

function OnboardingScreen({ onComplete }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      emoji: "🐕",
      title: "Bienvenido a Woofz",
      subtitle: "Entrena a tu perro con ciencia y amor",
      description:
        "Más de 1 millón de dueños ya entrenan con nosotros usando técnicas respaldadas por expertos.",
      bg: "#FFF8F0",
    },
    {
      emoji: "🎓",
      title: "Lecciones paso a paso",
      subtitle: "Fáciles de seguir",
      description:
        "Cada lección está diseñada para avanzar gradualmente. Desde comandos básicos hasta trucos avanzados.",
      bg: "#F0F8FF",
    },
    {
      emoji: "🏅",
      title: "Gana logros",
      subtitle: "Mantén tu racha diaria",
      description:
        "Desbloquea logros y mantén tu racha de entrenamiento diario. ¡Tu perro te lo agradecerá!",
      bg: "#FFF0F8",
    },
  ];

  const current = steps[step];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: current.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 24px 40px",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20 }}>
        <div
          style={{
            fontSize: 100,
            animation: "bounce 2s infinite",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
          }}
        >
          {current.emoji}
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: COLORS.textPrimary, margin: 0 }}>
          {current.title}
        </h1>
        <p style={{ fontSize: 18, fontWeight: 600, color: COLORS.primary, margin: 0 }}>
          {current.subtitle}
        </p>
        <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.6, maxWidth: 300, margin: 0 }}>
          {current.description}
        </p>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === step ? COLORS.primary : COLORS.border,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (step < steps.length - 1) setStep(step + 1);
            else onComplete();
          }}
          style={{
            width: "100%",
            maxWidth: 340,
            padding: "16px 24px",
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: 16,
            fontSize: 17,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(255,107,53,0.4)",
          }}
        >
          {step < steps.length - 1 ? "Continuar →" : "¡Empezar ahora!"}
        </button>
        {step < steps.length - 1 && (
          <button
            onClick={onComplete}
            style={{
              background: "transparent",
              border: "none",
              color: COLORS.textLight,
              fontSize: 14,
              cursor: "pointer",
              padding: 8,
            }}
          >
            Saltar introducción
          </button>
        )}
      </div>
    </div>
  );
}

function HomeTab({ onStartLesson }) {
  const [streakDays] = useState(3);
  const completedCount = LESSONS.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / LESSONS.length) * 100);

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ margin: 0, fontSize: 14, color: COLORS.textSecondary }}>Hola, dueño 👋</p>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: COLORS.textPrimary }}>
            ¿Listos para entrenar?
          </h2>
        </div>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            background: COLORS.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          🐾
        </div>
      </div>

      {/* Racha */}
      <div
        style={{
          background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
          borderRadius: 20,
          padding: "20px 24px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 8px 24px rgba(255,107,53,0.35)",
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.85 }}>Racha actual</p>
          <p style={{ margin: "4px 0 0", fontSize: 32, fontWeight: 900 }}>
            🔥 {streakDays} días
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.85 }}>Progreso total</p>
          <p style={{ margin: "4px 0 0", fontSize: 24, fontWeight: 800 }}>{progress}%</p>
        </div>
      </div>

      {/* Barra de progreso */}
      <div
        style={{
          background: COLORS.cardBg,
          borderRadius: 16,
          padding: 16,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.textPrimary }}>
            Lecciones completadas
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.primary }}>
            {completedCount}/{LESSONS.length}
          </span>
        </div>
        <div
          style={{
            background: COLORS.border,
            borderRadius: 8,
            height: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${COLORS.primary}, #FF8C42)`,
              borderRadius: 8,
              transition: "width 0.6s ease",
            }}
          />
        </div>
      </div>

      {/* Próxima lección */}
      <div>
        <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: COLORS.textPrimary }}>
          Próxima lección
        </h3>
        {(() => {
          const next = LESSONS.find((l) => !l.completed);
          if (!next) return <p style={{ color: COLORS.success, fontWeight: 600 }}>¡Has completado todo! 🎉</p>;
          return (
            <div
              onClick={() => onStartLesson(next)}
              style={{
                background: COLORS.cardBg,
                borderRadius: 16,
                padding: 16,
                display: "flex",
                alignItems: "center",
                gap: 14,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                cursor: "pointer",
                border: `2px solid ${COLORS.primary}20`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${COLORS.primary}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
              >
                {next.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 700, color: COLORS.textPrimary, fontSize: 15 }}>
                  {next.title}
                </p>
                <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.textSecondary }}>
                  {next.duration} · {next.level}
                </p>
              </div>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  background: COLORS.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                ▶
              </div>
            </div>
          );
        })()}
      </div>

      {/* Tip del día */}
      <div>
        <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: COLORS.textPrimary }}>
          Consejo del día
        </h3>
        <div
          style={{
            background: "linear-gradient(135deg, #4A90D915, #A855F715)",
            border: `1px solid ${COLORS.secondary}30`,
            borderRadius: 16,
            padding: 16,
          }}
        >
          <span style={{ fontSize: 28 }}>{TIPS[0].emoji}</span>
          <p style={{ margin: "8px 0 4px", fontWeight: 700, color: COLORS.textPrimary, fontSize: 15 }}>
            {TIPS[0].title}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.5 }}>
            {TIPS[0].text}
          </p>
        </div>
      </div>
    </div>
  );
}

function TrainTab({ onStartLesson }) {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Básicos", "Paseos", "Comportamiento"];

  const filtered =
    filter === "Todos" ? LESSONS : LESSONS.filter((l) => l.category === filter);

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: COLORS.textPrimary }}>
        Lecciones 📚
      </h2>

      {/* Filtros */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "none",
              background: filter === cat ? COLORS.primary : COLORS.border,
              color: filter === cat ? "#fff" : COLORS.textSecondary,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de lecciones */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => onStartLesson(lesson)}
            style={{
              background: COLORS.cardBg,
              borderRadius: 16,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              cursor: "pointer",
              opacity: lesson.completed ? 0.85 : 1,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {lesson.completed && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `${COLORS.success}08`,
                  pointerEvents: "none",
                }}
              />
            )}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: lesson.completed ? `${COLORS.success}15` : `${COLORS.primary}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                flexShrink: 0,
              }}
            >
              {lesson.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <p style={{ margin: 0, fontWeight: 700, color: COLORS.textPrimary, fontSize: 15 }}>
                  {lesson.title}
                </p>
                {lesson.completed && (
                  <span style={{ fontSize: 14, color: COLORS.success }}>✓</span>
                )}
              </div>
              <p
                style={{
                  margin: "2px 0 6px",
                  fontSize: 12,
                  color: COLORS.textSecondary,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {lesson.description}
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: COLORS.textSecondary,
                    background: COLORS.background,
                    padding: "2px 8px",
                    borderRadius: 8,
                  }}
                >
                  ⏱ {lesson.duration}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color:
                      lesson.level === "Principiante"
                        ? COLORS.success
                        : lesson.level === "Intermedio"
                        ? COLORS.warning
                        : COLORS.accent,
                    background:
                      lesson.level === "Principiante"
                        ? `${COLORS.success}15`
                        : lesson.level === "Intermedio"
                        ? `${COLORS.warning}15`
                        : `${COLORS.accent}15`,
                    padding: "2px 8px",
                    borderRadius: 8,
                  }}
                >
                  {lesson.level}
                </span>
              </div>
            </div>
            <span style={{ color: COLORS.textLight, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TipsTab() {
  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: COLORS.textPrimary }}>
        Consejos 💡
      </h2>

      {TIPS.map((tip) => (
        <div
          key={tip.id}
          style={{
            background: COLORS.cardBg,
            borderRadius: 16,
            padding: 20,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 10 }}>{tip.emoji}</div>
          <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: COLORS.textPrimary }}>
            {tip.title}
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.6 }}>
            {tip.text}
          </p>
        </div>
      ))}

      {/* Sección FAQ */}
      <h3 style={{ margin: "8px 0 0", fontSize: 17, fontWeight: 700, color: COLORS.textPrimary }}>
        Preguntas frecuentes
      </h3>
      {[
        { q: "¿A qué edad empezar a entrenar?", a: "Lo ideal es comenzar a partir de las 8 semanas. Cuanto antes, mejor." },
        { q: "¿Cuánto tiempo por sesión?", a: "5-10 minutos para cachorros, 15-20 para adultos. Varias sesiones al día." },
        { q: "¿Qué premios usar?", a: "Trozos pequeños de pollo, queso o premios comerciales de alta calidad." },
      ].map((faq, i) => (
        <FaqItem key={i} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: COLORS.cardBg,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "14px 16px",
          background: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.textPrimary }}>
          {question}
        </span>
        <span style={{ color: COLORS.primary, fontWeight: 700, fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(90deg)" : "rotate(0)" }}>
          ›
        </span>
      </button>
      {open && (
        <p
          style={{
            margin: 0,
            padding: "0 16px 14px",
            fontSize: 13,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

function ProfileTab() {
  const completedCount = LESSONS.filter((l) => l.completed).length;

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Avatar */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            boxShadow: "0 8px 24px rgba(255,107,53,0.3)",
          }}
        >
          🐕
        </div>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: COLORS.textPrimary }}>
          Mi Perro
        </h2>
        {/* TODO: Mostrar nombre real del perro desde perfil de usuario */}
        <p style={{ margin: 0, fontSize: 14, color: COLORS.textSecondary }}>
          Entrenador activo 🏅
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { label: "Lecciones", value: completedCount, icon: "📚" },
          { label: "Racha", value: "3🔥", icon: "📅" },
          { label: "Logros", value: ACHIEVEMENTS.filter((a) => a.unlocked).length, icon: "🏆" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: COLORS.cardBg,
              borderRadius: 14,
              padding: "14px 8px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: 22 }}>{stat.icon}</div>
            <p style={{ margin: "4px 0 2px", fontSize: 20, fontWeight: 800, color: COLORS.textPrimary }}>
              {stat.value}
            </p>
            <p style={{ margin: 0, fontSize: 11, color: COLORS.textSecondary }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Logros */}
      <div>
        <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: COLORS.textPrimary }}>
          Mis logros
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              style={{
                background: ach.unlocked ? COLORS.cardBg : "#F9FAFB",
                borderRadius: 14,
                padding: 16,
                textAlign: "center",
                boxShadow: ach.unlocked ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
                border: `2px solid ${ach.unlocked ? COLORS.warning + "40" : COLORS.border}`,
                opacity: ach.unlocked ? 1 : 0.5,
              }}
            >
              <div style={{ fontSize: 32, filter: ach.unlocked ? "none" : "grayscale(1)" }}>
                {ach.icon}
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 12, fontWeight: 600, color: COLORS.textPrimary }}>
                {ach.title}
              </p>
              {!ach.unlocked && (
                <p style={{ margin: "2px 0 0", fontSize: 10, color: COLORS.textLight }}>Bloqueado</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Opciones */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { icon: "🐶", label: "Perfil de mi perro" },
          { icon: "🔔", label: "Recordatorios" },
          { icon: "⭐", label: "Valorar la app" },
          { icon: "💬", label: "Contactar soporte" },
        ].map((item) => (
          <button
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              background: COLORS.cardBg,
              border: "none",
              borderRadius: 14,
              cursor: "pointer",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: COLORS.textPrimary }}>
              {item.label}
            </span>
            <span style={{ color: COLORS.textLight, fontSize: 18 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function LessonScreen({ lesson, onBack }) {
  const [lessonStep, setLessonStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const steps = [
    {
      title: "Prepárate",
      content: `Busca un lugar tranquilo y sin distracciones. Ten a mano los premios favoritos de tu perro. Asegúrate de que tu perro esté relajado y con energía (no justo después de comer).`,
      icon: "🎯",
    },
    {
      title: "Técnica principal",
      content: `Para enseñar "${lesson.title}", comienza con sesiones muy cortas. Muestra el premio cerca de la nariz de tu perro y guía su cuerpo hacia la posición correcta. Cuando lo logre, ¡premia inmediatamente!`,
      icon: "🐾",
    },
    {
      title: "Práctica",
      content: `Repite el ejercicio 5-7 veces seguidas. Si tu perro no lo logra, no lo castigues. Simplemente ignora el intento y vuelve a intentarlo. El refuerzo positivo es clave.`,
      icon: "🔄",
    },
    {
      title: "¡Bien hecho!",
      content: `Termina siempre con éxito. Si tu perro está cansado o frustrado, vuelve a algo que ya sabe y termina con un premio. Así siempre querrá entrenar más.`,
      icon: "🏆",
    },
  ];

  const currentStep = steps[lessonStep];
  const progress = ((lessonStep + 1) / steps.length) * 100;

  if (completed) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: COLORS.background,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          textAlign: "center",
          gap: 20,
        }}
      >
        <div style={{ fontSize: 80 }}>🎉</div>
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: COLORS.textPrimary }}>
          ¡Lección completada!
        </h2>
        <p style={{ margin: 0, fontSize: 16, color: COLORS.textSecondary }}>
          Has completado "{lesson.title}". ¡Tu perro está aprendiendo genial!
        </p>
        <div
          style={{
            background: COLORS.cardBg,
            borderRadius: 20,
            padding: 20,
            width: "100%",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ margin: "0 0 8px", fontSize: 14, color: COLORS.textSecondary }}>
            Recuerda practicar
          </p>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: COLORS.textPrimary }}>
            Practica este comando 2-3 veces al día durante 1 semana para que sea permanente.
          </p>
        </div>
        <button
          onClick={onBack}
          style={{
            width: "100%",
            padding: "16px 24px",
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(255,107,53,0.35)",
          }}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.background,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: COLORS.cardBg,
          padding: "16px 16px 12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <button
            onClick={onBack}
            style={{
              background: "transparent",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: COLORS.textPrimary,
              padding: 4,
            }}
          >
            ←
          </button>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: 12, color: COLORS.textSecondary }}>
              Lección
            </p>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: COLORS.textPrimary }}>
              {lesson.title}
            </h3>
          </div>
          <span style={{ fontSize: 26 }}>{lesson.icon}</span>
        </div>
        <div style={{ background: COLORS.border, borderRadius: 8, height: 6, overflow: "hidden" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: COLORS.primary,
              borderRadius: 8,
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 11, color: COLORS.textSecondary, textAlign: "right" }}>
          Paso {lessonStep + 1} de {steps.length}
        </p>
      </div>

      {/* Contenido */}
      <div
        style={{
          flex: 1,
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ textAlign: "center", fontSize: 64 }}>{currentStep.icon}</div>
        <h2
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 800,
            color: COLORS.textPrimary,
            textAlign: "center",
          }}
        >
          {currentStep.title}
        </h2>
        <div
          style={{
            background: COLORS.cardBg,
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: COLORS.textSecondary,
              lineHeight: 1.7,
            }}
          >
            {currentStep.content}
          </p>
        </div>

        {/* Tip contextual */}
        <div
          style={{
            background: `${COLORS.warning}15`,
            border: `1px solid ${COLORS.warning}30`,
            borderRadius: 14,
            padding: 14,
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: COLORS.textPrimary }}>
            <strong>💡 Tip:</strong> La paciencia es clave. Si tu perro no responde, tómate un descanso de 5 minutos.
          </p>
        </div>
      </div>

      {/* Botón de acción */}
      <div style={{ padding: "0 16px 32px" }}>
        <button
          onClick={() => {
            if (lessonStep < steps.length - 1) setLessonStep(lessonStep + 1);
            else setCompleted(true);
          }}
          style={{
            width: "100%",
            padding: "16px 24px",
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(255,107,53,0.4)",
          }}
        >
          {lessonStep < steps.length - 1 ? "Siguiente paso →" : "¡Completar lección! 🎉"}
        </button>
      </div>
    </div>
  );
}

// ─── NAVEGACIÓN PRINCIPAL ───────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "home", label: "Inicio", icon: "🏠" },
  { id: "train", label: "Entrenar", icon: "🎓" },
  { id: "tips", label: "Consejos", icon: "💡" },
  { id: "profile", label: "Perfil", icon: "🐾" },
];

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [activeLesson, setActiveLesson] = useState(null);

  if (showOnboarding) {
    return <OnboardingScreen onComplete={() => setShowOnboarding(false)} />;
  }

  if (activeLesson) {
    return (
      <LessonScreen
        lesson={activeLesson}
        onBack={() => {
          setActiveLesson(null);
          setActiveTab("home");
        }}
      />
    );
  }

  return (
    <div
      style={{
        maxWidth: 430,
        margin: "0 auto",
        minHeight: "100vh",
        background: COLORS.background,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Contenido scrollable */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingBottom: 80,
        }}
      >
        {activeTab === "home" && <HomeTab onStartLesson={setActiveLesson} />}
        {activeTab === "train" && <TrainTab onStartLesson={setActiveLesson} />}
        {activeTab === "tips" && <TipsTab />}
        {activeTab === "profile" && <ProfileTab />}
      </div>

      {/* Barra de navegación inferior */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 430,
          background: COLORS.navBg,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          justifyContent: "space-around",
          padding: "8px 0 12px",
          zIndex: 100,
          boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "6px 16px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
          >
            <span
              style={{
                fontSize: 22,
                filter: activeTab === item.id ? "none" : "grayscale(1)",
                opacity: activeTab === item.id ? 1 : 0.5,
                transition: "all 0.2s ease",
                transform: activeTab === item.id ? "scale(1.15)" : "scale(1)",
                display: "block",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: activeTab === item.id ? 700 : 500,
                color: activeTab === item.id ? COLORS.primary : COLORS.textLight,
                transition: "color 0.2s ease",
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #f3f4f6; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}