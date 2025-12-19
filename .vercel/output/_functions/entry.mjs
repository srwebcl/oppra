import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CEa5Ng9E.mjs';
import { manifest } from './manifest_B3GffgAQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-lead.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/gracias.astro.mjs');
const _page5 = () => import('./pages/servicios/diseno-fabricacion.astro.mjs');
const _page6 = () => import('./pages/servicios/tableros-electricos.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-lead.ts", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/gracias.astro", _page4],
    ["src/pages/servicios/diseno-fabricacion.astro", _page5],
    ["src/pages/servicios/tableros-electricos.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4795bc6d-feb2-469d-b25d-76bc81bbd745",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
