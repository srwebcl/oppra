import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RobustContactForm({ serviceName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: serviceName || 'General',
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            window.location.href = '/gracias';
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-t-4 border-accent">
            <h3 className="text-2xl font-bold text-primary-dark mb-2">Cotización</h3>
            <p className="text-sm text-secondary mb-6">Complete sus datos para recibir una propuesta técnica formal.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Empresa</label>
                        <input
                            type="text"
                            name="company"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Corporativo</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Detalle del Requerimiento</label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Describa brevemente su proyecto o necesidad..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition resize-none"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded shadow-lg shadow-accent/20 flex justify-center items-center uppercase tracking-wider text-sm mt-4"
                >
                    {status === 'loading' ? 'Enviando...' : 'Solicitar Evaluación Técnica'}
                </motion.button>
            </form>
        </div>
    );
}
