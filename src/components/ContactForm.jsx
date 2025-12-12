import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'diseno-fabricacion',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/send-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = '/gracias';
            } else {
                throw new Error('Hubo un error al enviar el formulario.');
            }
        } catch (err) {
            console.error(err);
            setError('Error de conexión. Por favor intente nuevamente o contáctenos por teléfono.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-t-4 border-accent">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">Contáctenos</h3>

            {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded mb-4 text-sm border border-red-200">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Nombre Completo *</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary mb-1">Empresa</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email Profesional *</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary mb-1">Servicio de Interés *</label>
                    <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-white"
                    >
                        <option value="diseno-fabricacion">Diseño y Fabricación</option>
                        <option value="tableros-electricos">Tableros Eléctricos</option>
                        <option value="otro">Otro / Consulta General</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Mensaje / Requerimiento *</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-accent hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition duration-300 shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">
                Sus datos están seguros. Responderemos en menos de 24 horas.
            </p>
        </form>
    );
}
