import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { name, email, phone, message } = data;

        // Validar datos básicos
        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Faltan campos requeridos: Nombre, Email y Mensaje son obligatorios.'
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Validación de email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Formato de email inválido.'
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
        const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL || 'contacto@oppra.cl'; // Fallback or env var

        if (!RESEND_API_KEY) {
            console.error("Falta RESEND_API_KEY");
            return new Response(JSON.stringify({
                success: false,
                message: 'Error de configuración del servidor (API Key missing).'
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        const resend = new Resend(RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: 'OPPRA Web Form <onboarding@resend.dev>', // Update this if you have a verified domain
            to: [CONTACT_EMAIL],
            subject: `Nuevo Lead: ${name}`,
            html: `
                <h1>Nuevo Contacto desde la Web</h1>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `
        });

        if (error) {
            console.error('Error enviando email:', error);
            return new Response(JSON.stringify({
                success: false,
                message: 'Error al enviar el correo.'
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Mensaje enviado correctamente'
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error('Error en API:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Error interno del servidor'
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
