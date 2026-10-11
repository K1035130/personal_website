"use client";

import { useEffect, useRef } from "react";

interface Blot {
  x: number;
  y: number;
  maxR: number;
  life: number; // 毫秒
  age: number;
  alpha: number;
  /** 组成一滴墨的若干偏移小圆，让边缘不那么规整 */
  lobes: { dx: number; dy: number; r: number }[];
}

const MAX_BLOTS = 40;
const TRAIL_STEP = 46;
/** 墨迹从出现到完全消散的时长（毫秒） */
const TRAIL_LIFE = 1200;
const CLICK_LIFE = 2400;

function readInkRgb(): [number, number, number] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--ink-rgb").trim();
  const parts = raw.split(/\s+/).map(Number);
  return parts.length === 3 && parts.every((n) => !Number.isNaN(n))
    ? (parts as [number, number, number])
    : [22, 22, 22];
}

function makeBlot(x: number, y: number, maxR: number, life: number, alpha: number): Blot {
  const count = 3 + Math.floor(Math.random() * 4);
  const lobes = Array.from({ length: count }, () => {
    const a = Math.random() * Math.PI * 2;
    const d = Math.random() * 0.35;
    return { dx: Math.cos(a) * d, dy: Math.sin(a) * d, r: 0.55 + Math.random() * 0.45 };
  });
  return { x, y, maxR, life, age: 0, alpha, lobes };
}

/**
 * 鼠标墨迹：移动时留下细小墨点，点击滴下一滴较大的墨，随后很快洇开、消散。
 * 只在有墨迹时运行动画循环。
 */
export default function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [r, g, b] = readInkRgb();

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const blots: Blot[] = [];
    let raf = 0;
    let prev = 0;

    const draw = (blot: Blot) => {
      const t = blot.age / blot.life;
      // 先快速洇开，再缓慢收敛
      const grow = 1 - Math.pow(1 - Math.min(t * 1.6, 1), 3);
      const fade = t < 0.08 ? t / 0.08 : 1 - (t - 0.08) / 0.92;
      const a = blot.alpha * fade;
      const radius = blot.maxR * (0.25 + 0.75 * grow);
      for (const lobe of blot.lobes) {
        const cx = blot.x + lobe.dx * radius;
        const cy = blot.y + lobe.dy * radius;
        const lr = radius * lobe.r;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, lr);
        // 边缘略深，模拟水墨晕染时的"水线"
        grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.55})`);
        grad.addColorStop(0.72, `rgba(${r},${g},${b},${a * 0.8})`);
        grad.addColorStop(0.9, `rgba(${r},${g},${b},${a * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, lr, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(now - prev, 64);
      prev = now;
      for (const blot of blots) blot.age += dt;
      for (let i = blots.length - 1; i >= 0; i--) {
        if (blots[i].age >= blots[i].life) blots.splice(i, 1);
      }
      ctx.clearRect(0, 0, width, height);
      for (const blot of blots) draw(blot);
      // 墨迹全部消散后停止循环，等下一次鼠标动作再启动
      raf = blots.length > 0 ? requestAnimationFrame(tick) : 0;
    };

    const add = (blot: Blot) => {
      blots.push(blot);
      if (blots.length > MAX_BLOTS) blots.shift();
      if (!raf) {
        prev = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    let last = { x: -1, y: -1 };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (last.x >= 0 && Math.hypot(e.clientX - last.x, e.clientY - last.y) < TRAIL_STEP) return;
      last = { x: e.clientX, y: e.clientY };
      add(makeBlot(e.clientX, e.clientY, 8 + Math.random() * 18, TRAIL_LIFE, 0.1 + Math.random() * 0.06));
    };
    const onDown = (e: PointerEvent) => {
      add(makeBlot(e.clientX, e.clientY, 60 + Math.random() * 60, CLICK_LIFE, 0.2));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
