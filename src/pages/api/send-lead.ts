import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // 1. Validación estricta de entrada
        if (!data.name || !data.email || !data.message) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Faltan campos requeridos.'
            }), { status: 400 });
        }

        // 2. Inicializar Resend con la variable de entorno
        const resend = new Resend(import.meta.env.RESEND_API_KEY);
        const contactEmail = import.meta.env.CONTACT_EMAIL || 'contacto@oppra.cl'; // Fallback por seguridad

        // 3. Enviar el correo
        const { error } = await resend.emails.send({
            from: 'Web Oppra <send@oppra.cl>', // Usa el subdominio que configuraste
            to: [contactEmail],
            subject: `Nuevo Lead Web: ${data.name} (${data.service || 'General'})`,
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2 style="color: #1e3a8a;">Nuevo Contacto desde la Web</h2>
                    <p><strong>Nombre:</strong> ${data.name}</p>
                    <p><strong>Empresa:</strong> ${data.company || 'No especificada'}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Teléfono:</strong> ${data.phone || 'No especificado'}</p>
                    <p><strong>Servicio de Interés:</strong> ${data.service}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <h3>Mensaje:</h3>
                    <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #f59e0b;">${data.message}</p>
                </div>
            `,
            replyTo: data.email, // Para que al dar "Responder" le escribas al cliente
        });

        if (error) {
            console.error('Error Resend:', error);
            return new Response(JSON.stringify({ success: false, message: 'Error al enviar correo.' }), { status: 500 });
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Mensaje enviado correctamente'
        }), { status: 200 });

    } catch (error) {
        console.error('Server Error:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Error interno del servidor'
        }), { status: 500 });
    }
}
