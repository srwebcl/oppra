import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bo5-vfBk.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTvgC4dz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "P\xE1gina no encontrada | OPPRA Industrial" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32 bg-slate-50 text-center"> <div class="container-custom"> <h1 class="text-6xl font-bold text-primary-dark mb-4">404</h1> <p class="text-2xl text-secondary mb-8">
Lo sentimos, la página que buscas no existe o ha sido movida.
</p> <a href="/" class="btn-primary">Volver al Inicio</a> </div> </section> ` })}`;
}, "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/404.astro", void 0);

const $$file = "/Users/sebastianrodriguezmilla/proyectos-web/oppra/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
