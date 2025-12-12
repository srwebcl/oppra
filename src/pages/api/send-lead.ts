import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // Validar datos básicos
        if (!data.name || !data.email || !data.message) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Faltan campos requeridos'
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // TODO: Implementar integración real con Brevo/Mailchimp
        // const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
        // await fetch('https://api.brevo.com/v3/contacts', { ... });

        console.log('Lead recibido:', data);

        // Simular retraso de red
        await new Promise(resolve => setTimeout(resolve, 500));

        return new Response(JSON.stringify({
            success: true,
            message: 'Lead procesado correctamente'
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Error interno del servidor'
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
