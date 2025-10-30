'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    emoji: '🧀',
    title: 'Tequeños crujientes',
    description: 'Llenos de sabor y con el queso perfecto',
  },
  {
    emoji: '🥧',
    title: 'Pastelitos caseros',
    description: 'Rellenos al estilo tradicional de casa',
  },
  {
    emoji: '🍮',
    title: 'Postres irresistibles',
    description: 'Que conquistan todos los paladares',
  },
  {
    emoji: '🇵🇪🇻🇪',
    title: 'Fusión Perú-Venezuela',
    description: 'Lo mejor de dos culturas gastronómicas',
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-700">
            Calidad, sabor y tradición en cada producto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-red-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative text-6xl mb-6"
              >
                {benefit.emoji}
              </motion.div>

              <h3 className="relative text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="relative text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
