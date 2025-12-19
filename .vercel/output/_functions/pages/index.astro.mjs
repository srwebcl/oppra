import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTvgC4dz.mjs';
import { $ as $$Hero } from '../chunks/Hero_Bz5BzFmZ.mjs';
import 'clsx';
import { $ as $$HomeContactSection } from '../chunks/HomeContactSection_CN4sVLEk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.oppra.cl");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, slug, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/servicios/${slug}`, "href")} class="group relative block h-full">  <div class="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-100 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.15)] flex flex-col z-10">  <div class="h-64 relative overflow-hidden"> <div class="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/0 transition-colors duration-500 z-10"></div> <img${addAttribute(image || `https://placehold.co/600x400/e2e8f0/1e3a8a?text=${title.split(" ")[0]}`, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out">  <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-20 opacity-60 group-hover:opacity-80 transition-opacity"></div> </div>  <div class="p-8 flex flex-col flex-grow relative bg-white group-hover:bg-slate-50/50 transition-colors duration-500"> <div class="absolute -top-6 right-6 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-30"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary-dark transition-colors duration-300"> ${title} </h3> <p class="text-slate-500 mb-6 flex-grow leading-relaxed font-light group-hover:text-slate-600"> ${description} </p> <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-sm font-bold tracking-wide group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
Ver Detalles Técnicos
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </span> </div> </div>  <div class="absolute inset-0 bg-accent/5 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10 translate-y-4"></div> </a>`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/ServiceCard.astro", void 0);

const $$StatsSection = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: "+15", label: "A\xF1os de Experiencia" },
    { value: "+500", label: "Proyectos Ejecutados" },
    { value: "100%", label: "Cumplimiento Normativo" },
    { value: "24/7", label: "Soporte T\xE9cnico" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-dark py-12 relative overflow-hidden">  <div class="absolute inset-0 opacity-10 bg-[url('/images/pattern-grid.svg')]"></div> <div class="container-custom relative z-10"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"> ${stats.map((stat) => renderTemplate`<div class="animate-on-scroll"> <p class="text-4xl md:text-5xl font-bold text-accent mb-2"> ${stat.value} </p> <p class="text-sm md:text-base text-slate-300 uppercase tracking-wider font-medium"> ${stat.label} </p> </div>`)} </div> </div> </section>`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/StatsSection.astro", void 0);

const $$WhyChoose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">  <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"> <div class="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div> <div class="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-3xl"></div> </div> <div class="container-custom relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">  <div class="animate-on-scroll"> <span class="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 tracking-wide uppercase">
Excelencia Operacional
</span> <h2 class="text-4xl lg:text-5xl font-extrabold text-primary-dark mb-6 leading-tight">
Por qué elegir a <br> <span class="text-accent">OPPRA Industrial</span> </h2> <p class="text-lg text-secondary mb-8 leading-relaxed font-light">
Somos el socio estratégico que su planta necesita en la <strong>Zona Central</strong>. Combinamos ingeniería de precisión con la urgencia que
                    demandan sus procesos productivos.
</p> <div class="space-y-8">  <div class="flex group"> <div class="flex-shrink-0 mr-6"> <div class="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-slate-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> <div> <h4 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
Cumplimiento Técnico y Normativo
</h4> <p class="text-slate-500 leading-relaxed">
Ejecutamos bajo estricta normativa SEC y
                                estándares mineros. Entregamos carpetas técnicas
                                y planos as-built en cada proyecto.
</p> </div> </div>  <div class="flex group"> <div class="flex-shrink-0 mr-6"> <div class="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border border-slate-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> </div> <div> <h4 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
Respuesta Inmediata en Terreno
</h4> <p class="text-slate-500 leading-relaxed">
Entendemos el costo de la detención. Nuestro
                                equipo se despliega rápidamente a sus
                                instalaciones en Santiago, Viña y Rancagua.
</p> </div> </div>  <div class="flex group"> <div class="flex-shrink-0 mr-6"> <div class="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-slate-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> </div> <div> <h4 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
Cobertura Local Estratégica
</h4> <p class="text-slate-500 leading-relaxed">
Base operativa centralizada. Optimizamos tiempos
                                de respuesta para Santiago, Viña del Mar y
                                Rancagua.
</p> </div> </div> </div> <div class="mt-12"> <a href="#contacto-home" class="btn-primary py-4 px-8 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40">
Solicitar Visita en Planta
</a> </div> </div>  <div class="relative animate-on-scroll delay-200 hidden lg:block"> <div class="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 ease-out border-8 border-white"> <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div> <img src="/images/team_industrial_chile.png" alt="Ingenieros OPPRA en terreno" class="w-full h-full object-cover min-h-[600px] scale-105 hover:scale-100 transition-transform duration-1000">  <div class="absolute bottom-10 left-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/50"> <div class="flex items-center gap-4 mb-2"> <div class="text-accent"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> </div> <span class="font-bold text-slate-800 text-lg">Soporte Multirregional</span> </div> <p class="text-sm text-slate-600 font-medium">
"Atención técnica insitu en Región Metropolitana y
                            Zona Central."
</p> </div> </div>  <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-2xl -z-10"></div> </div> </div> </div> </section>`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/components/WhyChoose.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "OPPRA Industrial | Maestranza y Servicios Industriales", "description": "Expertos en mantenimiento industrial en RM, Vi\xF1a del Mar, Rancagua y Los Andes. Dise\xF1o mec\xE1nico, fabricaci\xF3n de piezas y tableros el\xE9ctricos." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Ingenier\xEDa y Mantenimiento Industrial de Precisi\xF3n", "subtitle": "Maximizamos la disponibilidad de sus equipos cr\xEDticos. Servicios especializados para plantas en Regi\xF3n Metropolitana, Valpara\xEDso y O'Higgins.", "ctaText": "Cotizar Proyecto", "useSlider": true })} ${renderComponent($$result2, "StatsSection", $$StatsSection, {})} ${maybeRenderHead()}<section class="py-24 bg-slate-50 relative overflow-hidden">  <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#1e3a8a 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="container-custom relative z-10"> <div class="text-center max-w-3xl mx-auto mb-20 animate-on-scroll"> <span class="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-4 tracking-wide uppercase">
Servicios Especializados
</span> <h2 class="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900">
Nuestras <span class="text-accent">Soluciones</span> </h2> <p class="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
Estrategias de mantenimiento correctivo y preventivo
					diseñadas para <span class="font-bold text-primary">evitar paradas no programadas</span> en su línea de producción.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto"> <div class="h-full animate-on-scroll delay-100"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Dise\xF1o y Fabricaci\xF3n Mec\xE1nica", "description": "Recuperaci\xF3n de piezas cr\xEDticas, ejes, bujes y componentes de transmisi\xF3n. Soldadura certificada y mecanizado de precisi\xF3n en tiempo r\xE9cord.", "slug": "diseno-fabricacion", "image": "/images/service_mechanical.png" })} </div> <div class="h-full animate-on-scroll delay-200"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Tableros El\xE9ctricos y Control", "description": "Armado y certificaci\xF3n de tableros de fuerza. Diagn\xF3stico de fallas en sistemas de automatizaci\xF3n y normalizaci\xF3n el\xE9ctrica seg\xFAn pliego t\xE9cnico RIC.", "slug": "tableros-electricos", "image": "/images/service_electrical.png" })} </div> </div> </div> </section> ${renderComponent($$result2, "WhyChoose", $$WhyChoose, {})} ${renderComponent($$result2, "HomeContactSection", $$HomeContactSection, {})} ` })}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/index.astro", void 0);

const $$file = "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
