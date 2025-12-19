import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../../chunks/astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTvgC4dz.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Bz5BzFmZ.mjs';
import { $ as $$InfiniteMarquee } from '../../chunks/InfiniteMarquee_oJP4-qiK.mjs';
import { $ as $$HomeContactSection } from '../../chunks/HomeContactSection_CN4sVLEk.mjs';
export { renderers } from '../../renderers.mjs';

const $$TablerosElectricos = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Tableros de Fuerza",
      image: "/images/service_electrical.png",
      desc: "Tableros de distribuci\xF3n de fuerza y alumbrado (TDF) certificados bajo norma SEC."
    },
    {
      title: "Automatizaci\xF3n PLC",
      image: "/images/hero_control.png",
      desc: "Integraci\xF3n de sistemas de control, HMI y variadores de frecuencia para procesos."
    },
    {
      title: "Montaje El\xE9ctrico",
      image: "/images/hero_industrial_top.png",
      desc: "Canalizaci\xF3n, cableado estructurado y montaje de componentes en terreno."
    },
    {
      title: "Certificaci\xF3n TE1",
      image: "/images/quality_control_context.png",
      desc: "Inscripci\xF3n, aumento de capacidad y regularizaci\xF3n ante la Superintendencia."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tableros El\xE9ctricos y Control | OPPRA Industrial", "description": "Dise\xF1o, armado y montaje de tableros el\xE9ctricos. Integraci\xF3n de sistemas de automatizaci\xF3n y control industrial." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Tableros El\xE9ctricos y Automatizaci\xF3n", "subtitle": "Ingenier\xEDa el\xE9ctrica aplicada. Armado de tableros certificados, programaci\xF3n de PLC y montaje industrial.", "imagePath": "/images/hero_electrical.png", "ctaText": "Cotizar Tablero", "useSlider": false })}  ${renderComponent($$result2, "InfiniteMarquee", $$InfiniteMarquee, {})}  ${maybeRenderHead()}<section class="py-24 bg-white relative overflow-hidden"> <div class="container-custom relative z-10"> <div class="text-center max-w-3xl mx-auto mb-12 animate-on-scroll"> <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary font-bold text-xs mb-4 tracking-wide uppercase border border-blue-100">
Soluciones Eléctricas
</span> <h2 class="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900">
Control & <span class="text-accent">Potencia</span> </h2> <p class="text-lg text-slate-600 leading-relaxed">
Garantizamos la continuidad operacional y la seguridad de
                    sus instalaciones eléctricas.
</p> </div> <!-- CSS SCROLL SNAP CAROUSEL --> <div class="relative group"> <!-- Navigation Buttons --> <button id="prev-btn" class="absolute left-2 md:left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl text-primary hover:bg-accent hover:text-white transition-all border border-slate-200 hidden md:flex items-center justify-center group-hover:scale-110" aria-label="Anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> </button> <button id="next-btn" class="absolute right-2 md:right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl text-primary hover:bg-accent hover:text-white transition-all border border-slate-200 hidden md:flex items-center justify-center group-hover:scale-110" aria-label="Siguiente"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </button> <div id="services-carousel" class="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide scroll-smooth"> ${services.map((service, index) => renderTemplate`<div class="snap-center shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 bg-white"> <div class="h-64 overflow-hidden relative"> <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>  <img${addAttribute(service.image, "src")} onerror="this.src='https://placehold.co/600x400/1e293b/FFF?text=OPPRA+Electrical'"${addAttribute(service.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"> </div> <div class="p-8 relative"> <div class="absolute -top-8 right-8 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:-translate-y-2 transition-transform duration-300 z-20">
0${index + 1} </div> <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors"> ${service.title} </h3> <p class="text-slate-500 leading-relaxed text-sm mb-6"> ${service.desc} </p> <a href="/contacto" class="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors">
Solicitar Cotización${" "} <span class="ml-2">&rarr;</span> </a> </div> </div>`)} </div> </div> ${renderScript($$result2, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/servicios/tableros-electricos.astro?astro&type=script&index=0&lang.ts")} </div> </section>  <section class="py-24 bg-slate-50 relative overflow-hidden"> <div class="container-custom relative z-10"> <div class="text-center mb-20 animate-on-scroll"> <span class="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Proceso Certificado</span> <h2 class="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900">
Flujo de Ejecución
</h2> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div> </div> <div class="relative max-w-5xl mx-auto"> <!-- Connecting Line (Desktop) --> <div class="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-200 -z-10"></div> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"> <!-- Step 1 --> <div class="relative group text-center md:text-left"> <div class="w-32 h-32 md:w-32 md:h-32 mx-auto md:mx-0 bg-white rounded-full border-8 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300 relative z-10"> <!-- Number in background --> <span class="absolute -top-4 -left-4 text-6xl font-black text-slate-100 group-hover:text-accent/20 transition-colors z-0">01</span> <div class="absolute inset-0 flex items-center justify-center z-10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> </div> </div> <h4 class="text-xl font-bold mb-3 text-slate-900 relative z-10">
Diagnóstico
</h4> <p class="text-slate-500 text-sm leading-relaxed relative z-10">
Evaluación de carga y requerimientos técnicos en
                            terreno.
</p> </div> <!-- Step 2 --> <div class="relative group text-center md:text-left"> <div class="w-32 h-32 md:w-32 md:h-32 mx-auto md:mx-0 bg-white rounded-full border-8 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300 relative z-10"> <!-- Number in background --> <span class="absolute -top-4 -left-4 text-6xl font-black text-slate-100 group-hover:text-accent/20 transition-colors z-0">02</span> <div class="absolute inset-0 flex items-center justify-center z-10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> </div> </div> <h4 class="text-xl font-bold mb-3 text-slate-900 relative z-10">
Ingeniería
</h4> <p class="text-slate-500 text-sm leading-relaxed relative z-10">
Diseño de diagramas unilineales y planos de
                            disposición.
</p> </div> <!-- Step 3 --> <div class="relative group text-center md:text-left"> <div class="w-32 h-32 md:w-32 md:h-32 mx-auto md:mx-0 bg-white rounded-full border-8 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300 relative z-10"> <!-- Number in background --> <span class="absolute -top-4 -left-4 text-6xl font-black text-slate-100 group-hover:text-accent/20 transition-colors z-0">03</span> <div class="absolute inset-0 flex items-center justify-center z-10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> </div> </div> <h4 class="text-xl font-bold mb-3 text-slate-900 relative z-10">
Armado & Montaje
</h4> <p class="text-slate-500 text-sm leading-relaxed relative z-10">
Integración de componentes y cableado bajo norma
                            IEC.
</p> </div> <!-- Step 4 --> <div class="relative group text-center md:text-left"> <div class="w-32 h-32 md:w-32 md:h-32 mx-auto md:mx-0 bg-white rounded-full border-8 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300 relative z-10"> <!-- Number in background --> <span class="absolute -top-4 -left-4 text-6xl font-black text-slate-100 group-hover:text-accent/20 transition-colors z-0">04</span> <div class="absolute inset-0 flex items-center justify-center z-10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div> <h4 class="text-xl font-bold mb-3 text-slate-900 relative z-10">
Pruebas FAT
</h4> <p class="text-slate-500 text-sm leading-relaxed relative z-10">
Pruebas de aislamiento, continuidad y funcionalidad
                            antes de entrega.
</p> </div> </div> </div> </div> </section>  <section class="py-24 bg-white overflow-hidden"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="order-2 lg:order-1 relative"> <div class="relative rounded-3xl overflow-hidden shadow-2xl skew-y-3 transform lg:-ml-12 border-8 border-slate-50 group"> <img src="/images/service_electrical.png" onerror="this.src='https://placehold.co/600x800/1e293b/FFF?text=Certified+Panel'" alt="Certificación SEC" class="w-full h-full object-cover min-h-[500px] scale-105 group-hover:scale-100 transition-transform duration-1000"> <div class="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 max-w-xs"> <div class="text-3xl font-bold text-slate-900 mb-1">
Norma SEC
</div> <div class="text-sm text-slate-500 font-medium uppercase tracking-wide">
Cumplimiento RIC
</div> </div> </div> </div> <div class="order-1 lg:order-2"> <span class="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 tracking-wide uppercase">
Seguridad Eléctrica
</span> <h2 class="text-4xl font-extrabold text-primary-dark mb-6 leading-tight">
Por qué elegir nuestros <br><span class="text-slate-900">Tableros Certificados</span> </h2> <p class="text-lg text-secondary mb-8 leading-relaxed font-light">
Un tablero mal diseñado es un riesgo de incendio y
                        parada de planta. Nosotros priorizamos la seguridad y la
                        mantenibilidad a largo plazo.
</p> <div class="space-y-6"> <div class="flex gap-4"> <div class="w-12 h-12 bg-slate-50 shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-green-500 flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">
Componentes de Primera
</h4> <p class="text-slate-500 text-sm">
Solo utilizamos marcas reconocidas
                                    (Schneider, ABB, Legrand) para garantizar
                                    disponibilidad de repuestos.
</p> </div> </div> <div class="flex gap-4"> <div class="w-12 h-12 bg-slate-50 shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">
Planos As-Built
</h4> <p class="text-slate-500 text-sm">
Entregamos la carpeta técnica completa con
                                    diagramas actualizados al final del
                                    proyecto.
</p> </div> </div> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "HomeContactSection", $$HomeContactSection, {})} ` })}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/servicios/tableros-electricos.astro", void 0);

const $$file = "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/servicios/tableros-electricos.astro";
const $$url = "/servicios/tableros-electricos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TablerosElectricos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
