import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTvgC4dz.mjs';
export { renderers } from '../renderers.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gracias por contactarnos | OPPRA Industrial" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32 bg-slate-50 text-center"> <div class="container-custom max-w-2xl"> <div class="bg-white p-8 md:p-12 rounded-lg shadow-lg"> <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h1 class="text-4xl font-bold text-primary-dark mb-4">
¡Mensaje Enviado!
</h1> <p class="text-lg text-secondary mb-8">
Gracias por contactar a OPPRA Industrial. Hemos recibido su
                    solicitud correctamente. Nuestro equipo técnico revisará su
                    requerimiento y le contactará a la brevedad posible.
</p> <a href="/" class="btn-primary">Volver al Inicio</a> </div> </div> </section>   ` })}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/gracias.astro", void 0);

const $$file = "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/gracias.astro";
const $$url = "/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Gracias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
