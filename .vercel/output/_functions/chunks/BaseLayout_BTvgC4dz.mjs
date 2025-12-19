import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript, e as createAstro, k as renderComponent, n as renderSlot, o as renderHead } from './astro/server_Bo5-vfBk.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$GTMHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Google Tag Manager --><script>\n    const GTM_ID = import.meta.env.PUBLIC_GTM_ID;\n    if (GTM_ID) {\n        (function (w, d, s, l, i) {\n            w[l] = w[l] || [];\n            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n            var f = d.getElementsByTagName(s)[0],\n                j = d.createElement(s),\n                dl = l != "dataLayer" ? "&l=" + l : "";\n            j.async = true;\n            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n            f.parentNode.insertBefore(j, f);\n        })(window, document, "script", "dataLayer", GTM_ID);\n    } else {\n        console.warn("GTM ID not found in environment variables.");\n    }\n</script> <!-- End Google Tag Manager -->'])));
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/GTMHead.astro", void 0);

const $$GTMBody = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead()}<noscript><iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${undefined                             }`, "src")} height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/GTMBody.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios/diseno-fabricacion", label: "Dise\xF1o y Fabricaci\xF3n" },
    { href: "/servicios/tableros-electricos", label: "Tableros El\xE9ctricos" },
    { href: "/contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-md sticky top-0 z-50"> <div class="container-custom flex justify-between items-center h-20"> <a href="/" class="text-2xl font-extrabold tracking-tighter text-primary-dark"> <img src="/images/logo-oppra.webp" alt="OPPRA Logo" class="h-12 w-auto"> </a> <!-- Desktop Menu --> <div class="hidden md:flex items-center space-x-8"> <a href="/" class="text-secondary hover:text-primary font-medium transition-colors">Inicio</a> <a href="/servicios/diseno-fabricacion" class="text-secondary hover:text-primary font-medium transition-colors">Mecánica</a> <a href="/servicios/tableros-electricos" class="text-secondary hover:text-primary font-medium transition-colors">Electricidad</a> <div class="flex items-center gap-4 border-l pl-6 border-slate-200"> <a href="tel:+56957891186" class="flex items-center gap-2 text-primary-dark font-bold text-sm hover:text-accent transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
+56 9 5789 1186
</a> <a href="/contacto" class="btn-primary py-2.5 px-6 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
Cotizar Ahora
</a> </div> </div> <!-- Mobile Menu Button (Simple implementation) --> <button id="mobile-menu-btn" class="md:hidden text-primary-DEFAULT focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <!-- Mobile Menu (Hidden by default) --> <div id="mobile-menu" class="hidden md:hidden bg-slate-50 border-t"> <div class="flex flex-col p-4 space-y-4"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-secondary font-medium"> ${link.label} </a>`)} <a href="/contacto" class="btn-primary text-center">Cotizar</a> </div> </div> </header> ${renderScript($$result, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-dark text-white py-12 mt-auto"> <div class="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"> <div> <img src="/images/logo-oppra.webp" alt="OPPRA Industrial" class="h-10 w-auto mb-4"> <p class="text-slate-300 text-sm">
Ingeniería aplicada para el sector industrial en Chile.
                Especialistas en estructuras metálicas y automatización.
</p> </div> <div> <h4 class="text-lg font-semibold mb-4 text-accent">Contacto</h4> <ul class="space-y-2 text-slate-300"> <li>Email: contacto@oppra.cl</li> <li>Teléfono: +56 9 5789 1186</li> <li>Horario: Lun - Vie, 08:00 - 18:00</li> </ul> </div> <div> <h4 class="text-lg font-semibold mb-4 text-accent">Cobertura</h4> <div class="flex flex-wrap justify-center md:justify-start gap-2"> <span class="bg-primary-light px-3 py-1 rounded text-xs">Región Metropolitana</span> <span class="bg-primary-light px-3 py-1 rounded text-xs">Viña del Mar</span> <span class="bg-primary-light px-3 py-1 rounded text-xs">Rancagua</span> <span class="bg-primary-light px-3 py-1 rounded text-xs">Los Andes</span> </div> </div> </div> <div class="container-custom mt-8 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} OPPRA Industrial. Todos los derechos
            reservados.
</p> </div> </footer>`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/Footer.astro", void 0);

function WhatsAppButton() {
  const [message, setMessage] = useState("");
  const [fullMessage, setFullMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const PHONE_NUMBER = "56957891186";
  const agentName = "Soporte OPPRA";
  const avatarUrl = "/images/team.png";
  useEffect(() => {
    const path = window.location.pathname;
    let targetMsg = "¿Consulta técnica? Estamos en línea para asesorarle.";
    if (path.includes("diseno-fabricacion")) {
      targetMsg = "¿Necesita estructuras o mecanizado urgente? Hable con ingeniería.";
    } else if (path.includes("tableros-electricos")) {
      targetMsg = "¿Cotizando tableros certificados SEC? Envíenos sus requerimientos.";
    } else if (path.includes("contacto")) {
      targetMsg = "¿Dudas técnicas? Hable directamente con nuestros ingenieros.";
    } else if (path === "/" || path === "") {
      targetMsg = "Expertos en Ingeniería Mecánica y Eléctrica. ¿Hablamos?";
    }
    setFullMessage(targetMsg);
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessage(targetMsg);
      }, 1e3);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("whatsapp_closed", "true");
  };
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-50 flex items-end flex-col gap-4", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "relative bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-3 pr-8 max-w-[260px] origin-bottom-right mb-2 border border-slate-100",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-2 right-2 text-slate-300 hover:text-slate-500 transition-colors",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex-shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full overflow-hidden border border-slate-200", children: /* @__PURE__ */ jsx("img", { src: avatarUrl, alt: "Agente", className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5", children: agentName }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-700 font-medium leading-snug", children: isTyping ? /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 h-4 items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
              ] }) : /* @__PURE__ */ jsx(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: fullMessage.includes("cotización") ? "Cotizamos tu proyecto hoy." : fullMessage }) })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:hidden" }),
      /* @__PURE__ */ jsxs(
        motion.a,
        {
          href: whatsappUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] flex items-center justify-center transition-all duration-300 z-10",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-[34px] h-[34px] fill-current", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) }),
            isVisible && /* @__PURE__ */ jsxs("span", { className: "absolute -top-1 -right-1 flex h-4 w-4", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white justify-center items-center font-bold", children: "1" })
            ] })
          ]
        }
      )
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.oppra.cl");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Soluciones Industriales: Dise\xF1o, Fabricaci\xF3n y Tableros El\xE9ctricos en Chile.",
    image = "/images/og-image.jpg"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Google Fonts: Outfit --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><title>", '</title><link rel="canonical"', ">", "", '</head> <body class="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-accent selection:text-white"> ', " ", ' <main class="flex-grow"> ', " </main> ", ' <div id="whatsapp-widget"> ', " </div> <!-- Scroll Animation Script --> ", ` <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "OPPRA Industrial",
                "image": "https://oppra.cl/images/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Santiago",
                    "addressRegion": "Regi\xF3n Metropolitana",
                    "addressCountry": "CL"
                },
                "url": "https://oppra.cl",
                "telephone": "+56912345678",
                "priceRange": "$$$",
                "areaServed": [
                    "Regi\xF3n Metropolitana",
                    "Valpara\xEDso",
                    "O'Higgins"
                ]
            }
        <\/script> </body> </html>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), title, addAttribute(new URL(Astro2.url.pathname, Astro2.site), "href"), renderComponent($$result, "GTMHead", $$GTMHead, {}), renderHead(), renderComponent($$result, "GTMBody", $$GTMBody, {}), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppButton", WhatsAppButton, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/WhatsAppButton.jsx", "client:component-export": "default" }), renderScript($$result, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
