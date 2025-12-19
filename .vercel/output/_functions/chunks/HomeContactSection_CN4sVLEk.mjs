import { f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from './astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "diseno-fabricacion",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        window.location.href = "/gracias";
      } else {
        throw new Error("Hubo un error al enviar el formulario.");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión. Por favor intente nuevamente o contáctenos por teléfono.");
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-6 md:p-8 rounded-lg shadow-lg border-t-4 border-accent", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-primary-dark mb-6", children: "Contáctenos" }),
    error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 text-red-700 p-4 rounded mb-4 text-sm border border-red-200", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-secondary mb-1", children: "Nombre Completo *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            id: "name",
            required: true,
            value: formData.name,
            onChange: handleChange,
            className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-secondary mb-1", children: "Empresa" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "company",
            id: "company",
            value: formData.company,
            onChange: handleChange,
            className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-secondary mb-1", children: "Email Profesional *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-secondary mb-1", children: "Teléfono" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              name: "phone",
              id: "phone",
              value: formData.phone,
              onChange: handleChange,
              className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-secondary mb-1", children: "Servicio de Interés *" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "service",
            id: "service",
            value: formData.service,
            onChange: handleChange,
            className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-white",
            children: [
              /* @__PURE__ */ jsx("option", { value: "diseno-fabricacion", children: "Diseño y Fabricación" }),
              /* @__PURE__ */ jsx("option", { value: "tableros-electricos", children: "Tableros Eléctricos" }),
              /* @__PURE__ */ jsx("option", { value: "otro", children: "Otro / Consulta General" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-secondary mb-1", children: "Mensaje / Requerimiento *" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            id: "message",
            rows: 4,
            required: true,
            value: formData.message,
            onChange: handleChange,
            className: "w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: `w-full bg-accent hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition duration-300 shadow-md ${loading ? "opacity-70 cursor-not-allowed" : ""}`,
          children: loading ? "Enviando..." : "Enviar Solicitud"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-4 text-center", children: "Sus datos están seguros. Responderemos en menos de 24 horas." })
  ] });
}

const $$HomeContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 relative overflow-hidden bg-slate-900" id="contacto-home">  <div class="absolute inset-0 overflow-hidden pointer-events-none"> <div class="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px]"></div> <div class="absolute bottom-[0%] -left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"></div> </div> <div class="container-custom relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">  <div class="animate-on-scroll"> <span class="inline-block py-1 px-4 rounded-full bg-accent text-white font-bold text-xs tracking-widest uppercase mb-6 shadow-lg shadow-accent/25">
Prioridad Comercial
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
¿Planta detenida? <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400">Actuamos Rápido.</span> </h2> <p class="text-xl text-slate-300 mb-10 leading-relaxed font-light">
Evite pérdidas millonarias por inactividad. Nuestro equipo
                    de ingeniería está listo para desplegarse y resolver su
                    urgencia ahora mismo.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8"> <div class="flex items-start gap-4"> <div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-accent shadow-inner"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div> <h4 class="font-bold text-white text-lg">
Cotización Express
</h4> <p class="text-sm text-slate-400 mt-1">
Propuesta técnica y comercial en menos de 24
                                horas.
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-accent shadow-inner"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-bold text-white text-lg">
Garantía Certificada
</h4> <p class="text-sm text-slate-400 mt-1">
Todos nuestros trabajos cumplen norma y garantía
                                legal.
</p> </div> </div> </div> </div>  <div class="animate-on-scroll delay-200"> <div class="bg-white rounded-3xl p-2 shadow-2xl shadow-black/50 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/ContactForm.jsx", "client:component-export": "default" })} </div> </div> </div> </div> </section>`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/HomeContactSection.astro", void 0);

export { $$HomeContactSection as $ };
