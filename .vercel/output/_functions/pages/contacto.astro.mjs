import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTvgC4dz.mjs';
import { $ as $$Hero } from '../chunks/Hero_Bz5BzFmZ.mjs';
import { $ as $$InfiniteMarquee } from '../chunks/InfiniteMarquee_oJP4-qiK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

function RobustContactForm({ serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: serviceName || "General"
  });
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      window.location.href = "/gracias";
    }, 1500);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 rounded-lg shadow-xl border-t-4 border-accent", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-primary-dark mb-2", children: "Cotización" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary mb-6", children: "Complete sus datos para recibir una propuesta técnica formal." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase mb-1", children: "Nombre" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "name",
              required: true,
              className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition",
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase mb-1", children: "Empresa" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "company",
              className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition",
              onChange: handleChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase mb-1", children: "Email Corporativo" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              required: true,
              className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition",
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase mb-1", children: "Teléfono" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              name: "phone",
              required: true,
              className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition",
              onChange: handleChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase mb-1", children: "Detalle del Requerimiento" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            rows: "4",
            placeholder: "Describa brevemente su proyecto o necesidad...",
            className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition resize-none",
            onChange: handleChange
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.button,
        {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          type: "submit",
          disabled: status === "loading",
          className: "w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded shadow-lg shadow-accent/20 flex justify-center items-center uppercase tracking-wider text-sm mt-4",
          children: status === "loading" ? "Enviando..." : "Solicitar Evaluación Técnica"
        }
      )
    ] })
  ] });
}

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contacto y Cotizaciones | OPPRA Industrial", "description": "Cont\xE1ctenos para proyectos de ingenier\xEDa mec\xE1nica, el\xE9ctrica y mantenimiento industrial. Atenci\xF3n en Zona Central." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hablemos de su Proyecto", "subtitle": "Estamos listos para resolver sus desaf\xEDos de ingenier\xEDa y mantenimiento. Respuesta comercial en menos de 24 horas.", "imagePath": "/images/team_industrial_chile.png", "ctaText": "Llamar Ahora", "ctaLink": "tel:+56957891186", "useSlider": false })}  ${renderComponent($$result2, "InfiniteMarquee", $$InfiniteMarquee, {})}  ${maybeRenderHead()}<section class="py-24 bg-slate-50 relative overflow-hidden"> <div class="container-custom relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16"> <!-- Contact Info Column --> <div class="text-slate-900"> <span class="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 tracking-wide uppercase">
Canales de Atención
</span> <h2 class="text-4xl font-extrabold text-primary-dark mb-6 leading-tight">
Estamos donde su <br>planta nos necesita
</h2> <p class="text-lg text-secondary mb-12 leading-relaxed font-light">
Nuestra base operativa en Santiago nos permite un
                        despliegue rápido a V y VI Región. Contáctenos por el
                        medio que más le acomode.
</p> <div class="space-y-6"> <!-- Phone Card --> <a href="tel:+56957891186" class="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-accent/20 transition-all group"> <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">
Llámenos
</h4> <p class="text-slate-500">+56 9 5789 1186</p> <span class="text-xs text-green-600 font-bold mt-1 block">Disponible Ahora</span> </div> </a> <!-- Email Card --> <a href="mailto:contacto@oppra.cl" class="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-accent/20 transition-all group"> <div class="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">
Escríbanos
</h4> <p class="text-slate-500">contacto@oppra.cl</p> <span class="text-xs text-slate-400 font-bold mt-1 block">Respuesta Rápida ⚡️
</span> </div> </a> <!-- Location Card --> <div class="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100"> <div class="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">
Oficina Central
</h4> <p class="text-slate-500">
Región Metropolitana, Chile
</p> </div> </div> </div> </div> <!-- Form Column --> <div class="relative"> <div class="rounded-3xl shadow-xl border border-slate-100 p-1 overflow-hidden sticky top-24 bg-white"> ${renderComponent($$result2, "RobustContactForm", RobustContactForm, { "client:visible": true, "serviceName": "General Contact", "client:component-hydration": "visible", "client:component-path": "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/RobustContactForm.jsx", "client:component-export": "default" })} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/contacto.astro", void 0);

const $$file = "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
