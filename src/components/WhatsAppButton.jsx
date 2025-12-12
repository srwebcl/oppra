import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
    const [message, setMessage] = useState("");
    const [fullMessage, setFullMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const PHONE_NUMBER = "56957891186";

    // Agent Persona
    const agentName = "Soporte OPPRA";
    const avatarUrl = "/images/team.png"; // Using existing team image

    useEffect(() => {
        // DEBUG: Commented out to ensure user sees the bubble even if closed previously
        // if (sessionStorage.getItem('whatsapp_closed')) return;

        // Dynamic message logic
        const path = window.location.pathname;
        let targetMsg = "¿Consulta técnica? Estamos en línea para asesorarle.";

        if (path.includes('diseno-fabricacion')) {
            targetMsg = "¿Necesita estructuras o mecanizado urgente? Hable con ingeniería.";
        } else if (path.includes('tableros-electricos')) {
            targetMsg = "¿Cotizando tableros certificados SEC? Envíenos sus requerimientos.";
        } else if (path.includes('contacto')) {
            targetMsg = "¿Dudas técnicas? Hable directamente con nuestros ingenieros.";
        } else if (path === '/' || path === '') {
            targetMsg = "Expertos en Ingeniería Mecánica y Eléctrica. ¿Hablamos?";
        }

        setFullMessage(targetMsg);

        // DELAY: Wait 1s (fast) -> Typing -> Show Message
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsTyping(true);

            // Typing effect simulation
            setTimeout(() => {
                setIsTyping(false);
                setMessage(targetMsg);
            }, 1000); // 1s typing

        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        sessionStorage.setItem('whatsapp_closed', 'true');
    };

    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-4">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-3 pr-8 max-w-[260px] origin-bottom-right mb-2 border border-slate-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-slate-300 hover:text-slate-500 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="flex items-start gap-3">
                            <div className="relative flex-shrink-0">
                                <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
                                    <img src={avatarUrl} alt="Agente" className="w-full h-full object-cover" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>

                            <div className="mt-1">
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">{agentName}</p>
                                <div className="text-xs text-slate-700 font-medium leading-snug">
                                    {isTyping ? (
                                        <div className="flex space-x-1 h-4 items-center">
                                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    ) : (
                                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                            {fullMessage.includes("cotización") ? "Cotizamos tu proyecto hoy." : fullMessage}
                                        </motion.span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button with Pulse */}
            <div className="relative group">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:hidden"></span>
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] flex items-center justify-center transition-all duration-300 z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Official Simple WhatsApp Icon */}
                    <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>

                    {/* Notification Badge */}
                    {isVisible && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white justify-center items-center font-bold">1</span>
                        </span>
                    )}
                </motion.a>
            </div>
        </div>
    );
}
