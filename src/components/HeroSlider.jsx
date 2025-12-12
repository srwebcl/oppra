import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/hero_industrial_top.png', // General
    '/images/hero_mechanic.png',       // Auto/Mechanic
    '/images/hero_electrical.png'      // Electrical
];

export default function HeroSlider({ title, subtitle, ctaText, ctaLink }) {
    const [index, setIndex] = useState(0);
    const words = ["Mecánica de Precisión", "Tableros Eléctricos", "Automatización Industrial", "Montaje Estructural"];
    const [wordIndex, setWordIndex] = useState(0);

    // Slide Interval (Background)
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Word Rotation Interval
    useEffect(() => {
        const wordTimer = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(wordTimer);
    }, []);

    return (
        // Reduced height to 75vh and added max-h constraint for compactness
        <section className="relative h-[75vh] min-h-[550px] max-h-[900px] flex items-center overflow-hidden bg-slate-900">
            {/* Animated Background Slider */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[index]})` }}
                        animate={{ scale: [1, 1.1] }}
                        transition={{ duration: 6, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                </motion.div>
            </AnimatePresence>

            <div className="container-custom relative z-20 w-full pt-12 md:pt-0">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    >
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent font-semibold text-xs md:text-sm mb-4 tracking-wider uppercase"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Ingeniería & Servicios Industriales
                        </motion.span>

                        <div className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
                            <span className="block text-slate-100 mb-1">Soluciones en</span>
                            {/* Smooth Slide Transition Container */}
                            <div className="relative h-[1.5em] overflow-visible">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={words[wordIndex]}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ duration: 0.6, ease: "circOut" }}
                                        className="block bg-clip-text text-transparent bg-gradient-to-r from-accent via-orange-400 to-amber-200 absolute top-0 left-0 w-full truncate pb-2"
                                    >
                                        {words[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        <motion.p
                            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <a href={ctaLink} className="group relative px-8 py-3.5 bg-accent text-white font-semibold rounded-full overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {ctaText}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            <a href="#servicios" className="group px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-sm md:text-base">
                                Explorar Soluciones
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Coverage Info Footer */}
            <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest font-medium">
                <span className="w-8 h-[1px] bg-white/30"></span>
                <span>Santiago</span>
                <span className="w-1 h-1 rounded-full bg-accent"></span>
                <span>Valparaíso</span>
                <span className="w-1 h-1 rounded-full bg-accent"></span>
                <span>Rancagua</span>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'bg-accent w-8 shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'bg-white/20 w-4 hover:bg-white/50'}`}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
