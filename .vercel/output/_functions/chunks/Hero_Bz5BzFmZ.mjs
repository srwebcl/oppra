import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/* empty css                            */

const images = [
  "/images/hero_industrial_top.png",
  // General
  "/images/hero_mechanic.png",
  // Auto/Mechanic
  "/images/hero_electrical.png"
  // Electrical
];
function HeroSlider({ title, subtitle, ctaText, ctaLink }) {
  const [index, setIndex] = useState(0);
  const words = ["Mecánica de Precisión", "Tableros Eléctricos", "Automatización Industrial", "Montaje Estructural"];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3e3);
    return () => clearInterval(wordTimer);
  }, []);
  return (
    // Reduced height to 75vh and added max-h constraint for compactness
    /* @__PURE__ */ jsxs("section", { className: "relative h-[75vh] min-h-[550px] max-h-[900px] flex items-center overflow-hidden bg-slate-900", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 1.1 },
          animate: { opacity: 1, scale: 1, x: 0 },
          exit: { opacity: 0 },
          transition: { duration: 1.5, ease: "easeInOut" },
          className: "absolute inset-0 z-0",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "w-full h-full bg-cover bg-center",
                style: { backgroundImage: `url(${images[index]})` },
                animate: { scale: [1, 1.1] },
                transition: { duration: 6, ease: "linear" }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" })
          ]
        },
        index
      ) }),
      /* @__PURE__ */ jsx("div", { className: "container-custom relative z-20 w-full pt-12 md:pt-0", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                className: "inline-block py-1 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent font-semibold text-xs md:text-sm mb-4 tracking-wider uppercase",
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                children: "Ingeniería & Servicios Industriales"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-slate-100 mb-1", children: "Soluciones en" }),
              /* @__PURE__ */ jsx("div", { className: "relative h-[2em] min-h-[60px] md:h-[1.5em] overflow-visible", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -40 },
                  transition: { duration: 0.6, ease: "circOut" },
                  className: "block bg-clip-text text-transparent bg-gradient-to-r from-accent via-orange-400 to-amber-200 absolute top-0 left-0 w-full md:w-max whitespace-normal md:whitespace-nowrap leading-tight pb-2 pr-8",
                  children: words[wordIndex]
                },
                words[wordIndex]
              ) }) })
            ] }),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                className: "text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light max-w-2xl",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                children: subtitle
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex flex-col sm:flex-row gap-4",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxs("a", { href: ctaLink, className: "group relative px-8 py-3.5 bg-accent text-white font-semibold rounded-full overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]", children: [
                    /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-2", children: [
                      ctaText,
                      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 transition-transform group-hover:translate-x-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" }) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                  ] }),
                  /* @__PURE__ */ jsx("a", { href: "#servicios", className: "group px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-sm md:text-base", children: "Explorar Soluciones" })
                ]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest font-medium", children: [
        /* @__PURE__ */ jsx("span", { className: "w-8 h-[1px] bg-white/30" }),
        /* @__PURE__ */ jsx("span", { children: "Santiago" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("span", { children: "Valparaíso" }),
        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("span", { children: "Rancagua" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3", children: images.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIndex(i),
          className: `h-1 rounded-full transition-all duration-500 ${i === index ? "bg-accent w-8 shadow-[0_0_10px_rgba(245,158,11,0.8)]" : "bg-white/20 w-4 hover:bg-white/50"}`,
          "aria-label": `Slide ${i + 1}`
        },
        i
      )) })
    ] })
  );
}

const $$Astro = createAstro("https://www.oppra.cl");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    imagePath = "/images/hero_main.png",
    ctaText = "Cotizar Ahora",
    ctaLink = "/contacto",
    useSlider = false
  } = Astro2.props;
  return renderTemplate`${useSlider ? renderTemplate`${renderComponent($$result, "HeroSlider", HeroSlider, { "client:load": true, "title": title, "subtitle": subtitle, "ctaText": ctaText, "ctaLink": ctaLink, "client:component-hydration": "load", "client:component-path": "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/HeroSlider.jsx", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })}` : (
    // Reduced height to 60vh for inner pages (distinct from Home 75vh)
    renderTemplate`${maybeRenderHead()}<section class="relative h-[80vh] md:h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900" data-astro-cid-bbe6dxrz><div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz><img${addAttribute(imagePath, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover animate-pan-slow opacity-60 md:opacity-80" data-astro-cid-bbe6dxrz><div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30 md:via-slate-900/70 md:to-transparent z-10" data-astro-cid-bbe6dxrz></div><div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" data-astro-cid-bbe6dxrz></div></div><div class="container-custom relative z-20 pt-10" data-astro-cid-bbe6dxrz><div class="max-w-4xl" data-astro-cid-bbe6dxrz><span class="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold text-xs md:text-sm mb-4 tracking-wider uppercase animate-fade-in-up" data-astro-cid-bbe6dxrz>
OPPRA Industrial
</span><h1 class="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 leading-tight animate-fade-in-up delay-100 drop-shadow-2xl" data-astro-cid-bbe6dxrz><span class="block bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400" data-astro-cid-bbe6dxrz>${title}</span></h1><p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-light max-w-2xl animate-fade-in-up delay-200" data-astro-cid-bbe6dxrz>${subtitle}</p><div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300" data-astro-cid-bbe6dxrz><a${addAttribute(ctaLink, "href")} class="group relative px-8 py-3.5 bg-accent text-white font-semibold rounded-full overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] inline-flex items-center justify-center" data-astro-cid-bbe6dxrz><span class="relative z-10 flex items-center gap-2" data-astro-cid-bbe6dxrz>${ctaText}<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-bbe6dxrz><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-bbe6dxrz></path></svg></span><div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-bbe6dxrz></div></a></div></div></div><div class="absolute bottom-6 right-8 z-20 text-white/40 text-xs uppercase tracking-widest font-medium hidden md:block" data-astro-cid-bbe6dxrz><span class="border-b border-white/20 pb-1" data-astro-cid-bbe6dxrz>Inicio</span>${" "}<span class="mx-2" data-astro-cid-bbe6dxrz>/</span>${" "}<span class="text-accent" data-astro-cid-bbe6dxrz>${title}</span></div></section>`
  )}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/Hero.astro", void 0);

export { $$Hero as $ };
