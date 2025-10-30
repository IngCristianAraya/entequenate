'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Heart,
      title: 'Con amor',
      description: 'Cada producto es elaborado con dedicación y cariño',
    },
    {
      icon: Users,
      title: 'Para todos',
      description: 'Perfectos para reuniones, eventos o antojos del día',
    },
    {
      icon: Award,
      title: 'Calidad premium',
      description: 'Solo usamos ingredientes de primera calidad',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En <span className="font-bold text-amber-600">Entequeñate</span>, llevamos la pasión
              por la gastronomía en cada preparación. Somos un emprendimiento familiar que nació del
              amor por la cocina y el deseo de compartir los sabores auténticos de la fusión
              peruano-venezolana.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nuestros tequeños, pastelitos y postres son preparados artesanalmente, siguiendo
              recetas tradicionales pero con un toque especial que nos hace únicos. Cada bocado
              cuenta una historia de tradición, sabor y calidad.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-9xl mb-4">🥟</div>
                  <p className="text-2xl font-bold text-red-800 mb-2">Sabor Artesanal</p>
                  <p className="text-lg text-gray-700">Tradición en cada bocado</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-400 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
