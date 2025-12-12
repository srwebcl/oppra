import { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuickQuoteForm({ serviceName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: serviceName || 'General',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
        <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-accent">
            <h3 className="text-xl font-bold text-primary-dark mb-4">Cotización Rápida</h3>
            <p className="text-sm text-secondary mb-4">Reciba un presupuesto preliminar en menos de 24 horas.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Completo"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Corporativo"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono / WhatsApp"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm transition"
                        onChange={handleChange}
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded transition-colors shadow-md flex justify-center items-center"
                >
                    {status === 'loading' ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : 'Solicitar Presupuesto'}
                </motion.button>
            </form>
        </div>
    );
}
