"use client";

import { useEffect, useRef, useState } from "react";
import { Network, CircuitBoard, Binary, Grid3x3 } from "lucide-react";

const VARIANTS = [
  { id: "network", label: "Network", icon: Network },
  { id: "circuit", label: "Circuit", icon: CircuitBoard },
  { id: "matrix", label: "Matrix", icon: Binary },
  { id: "grid", label: "Dot Grid", icon: Grid3x3 },
];

export default function CyberBackground() {
  const [variant, setVariant] = useState("network");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cyberBgVariant");
      if (saved && VARIANTS.some((v) => v.id === saved)) setVariant(saved);
    } catch {}
    setMounted(true);
  }, []);

  const selectVariant = (id) => {
    setVariant(id);
    try {
      localStorage.setItem("cyberBgVariant", id);
    } catch {}
  };

  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
        {variant === "network" && <NetworkCanvas />}
        {variant === "circuit" && <CircuitCanvas />}
        {variant === "matrix" && <MatrixCanvas />}
        {variant === "grid" && <DotGrid />}
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex gap-1 rounded-full border border-slate-800 bg-slate-900/90 backdrop-blur p-1 shadow-lg">
        {VARIANTS.map((v) => {
          const Icon = v.icon;
          const active = variant === v.id;
          return (
            <button
              key={v.id}
              onClick={() => selectVariant(v.id)}
              title={v.label}
              aria-label={v.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </>
  );
}

function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, particles, animationId;

    const NUM_PARTICLES = 70;
    const MAX_DIST = 140;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function init() {
      particles = Array.from({ length: NUM_PARTICLES }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.18 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.6)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    }

    resize();
    init();
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, animationId, nodes, pulses;

    const GRID = 90;

    function build() {
      nodes = [];
      for (let x = 0; x <= width; x += GRID) {
        for (let y = 0; y <= height; y += GRID) {
          if (Math.random() > 0.55) nodes.push({ x, y });
        }
      }
      pulses = Array.from({ length: 14 }, () => {
        const horizontal = Math.random() > 0.5;
        const row = Math.round((Math.random() * height) / GRID) * GRID;
        const col = Math.round((Math.random() * width) / GRID) * GRID;
        return {
          horizontal,
          fixedCoord: horizontal ? row : col,
          pos: Math.random() * (horizontal ? width : height),
          speed: 0.6 + Math.random() * 1.2,
        };
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      build();
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += GRID) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += GRID) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(96, 165, 250, 0.35)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of pulses) {
        p.pos += p.speed;
        const max = p.horizontal ? width : height;
        if (p.pos > max) p.pos = 0;

        const x = p.horizontal ? p.pos : p.fixedCoord;
        const y = p.horizontal ? p.fixedCoord : p.pos;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, "rgba(147, 197, 253, 0.9)");
        gradient.addColorStop(1, "rgba(147, 197, 253, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, columns, drops, animationId, lastTime = 0;

    const FONT_SIZE = 16;
    const CHARS = "01アイウエオカキクケコサシスセソ".split("");

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    }

    function tick(time) {
      if (time - lastTime > 50) {
        lastTime = time;
        ctx.fillStyle = "rgba(2, 6, 23, 0.15)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${FONT_SIZE}px monospace`;

        for (let i = 0; i < columns; i++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * FONT_SIZE;
          const y = drops[i] * FONT_SIZE;

          ctx.fillStyle = "rgba(96, 165, 250, 0.5)";
          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      animationId = requestAnimationFrame(tick);
    }

    resize();
    animationId = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

function DotGrid() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(37,99,235,0.18), transparent 55%)",
        }}
      />
    </div>
  );
}
