import { useEffect, useRef, useState } from "react";

export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("in");
            observer.unobserve(target);
          }
        }),
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function Count({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          return;
        }

        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / 900, 1);
          setCount(Math.round(value * progress));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.6 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const NAV_SECTIONS = ["experience", "projects", "skills", "contact"];

export function useScrollFx() {
  useEffect(() => {
    const bar = document.getElementById("scrollbar");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) {
        bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      }
      let current = "";
      NAV_SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      });
      document
        .querySelectorAll(".nav-link")
        .forEach((link) => link.classList.toggle("active", link.dataset.target === current));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function useCursorEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !window.matchMedia("(hover: hover)").matches) return undefined;

    const ring = document.querySelector(".cursor-ring");
    const dot = document.querySelector(".cursor-dot");
    const cleanups = [];

    if (ring && dot) {
      document.body.style.cursor = "none";
      let rx = window.innerWidth / 2;
      let ry = window.innerHeight / 2;
      let dx = rx;
      let dy = ry;
      let frame;

      const onMove = (event) => {
        dx = event.clientX;
        dy = event.clientY;
        dot.style.left = `${dx}px`;
        dot.style.top = `${dy}px`;
      };
      const loop = () => {
        rx += (dx - rx) * 0.2;
        ry += (dy - ry) * 0.2;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        frame = requestAnimationFrame(loop);
      };

      window.addEventListener("mousemove", onMove);
      frame = requestAnimationFrame(loop);

      const grow = () => ring.classList.add("grow");
      const shrink = () => ring.classList.remove("grow");
      const hoverables = document.querySelectorAll("a, button, .tilt");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });

      cleanups.push(() => {
        document.body.style.cursor = "";
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(frame);
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", grow);
          el.removeEventListener("mouseleave", shrink);
        });
      });
    }

    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.style.display = "inline-block";
      btn.style.transition = "transform .25s cubic-bezier(0.22,1,0.36,1)";
      const onMove = (event) => {
        const rect = btn.getBoundingClientRect();
        const mx = event.clientX - (rect.left + rect.width / 2);
        const my = event.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate(${mx * 0.3}px, ${my * 0.45}px)`;
      };
      const onLeave = () => {
        btn.style.transform = "translate(0,0)";
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      });
    });

    document.querySelectorAll(".tilt").forEach((card) => {
      card.style.transition = "transform .15s ease, border-color .3s ease";
      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(820px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-6px)`;
      };
      const onLeave = () => {
        card.style.transform = "perspective(820px) rotateY(0) rotateX(0) translateY(0)";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
