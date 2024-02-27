import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { Inertia } from '@inertiajs/inertia';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { InertiaProgress } from '@inertiajs/progress'

// InertiaProgress.init()
// createInertiaApp({
//     resolve: name => require(`./Pages/${name}`),
//     setup({ el, App, props, plugin }) {
//         createApp({ render: () => h(App, props) })
//         .use(plugin)
//         .mount(el)
//     }
// })

createInertiaApp({
    title: (title) => `${title} - Mulaikarir`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        
        app.use(plugin);
        app.mount(el);
    }
});
Inertia.on('success', () => {
    // Assuming jQuery is globally available
});