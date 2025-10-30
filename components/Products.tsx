'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    emoji: '🧀',
    name: 'Tequeños Clásicos',
    description: 'Crujientes por fuera, suaves y cremosos por dentro. Rellenos de queso de primera calidad.',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    emoji: '🥟',
    name: 'Empanadas',
    description: 'Combinaciones únicas: queso con guayaba, chocolate, o carne mechada. Innovación en cada bocado.',
    color: 'from-orange-400 to-red-500',
  },
  {
    emoji: '🥧',
    name: 'Pastelitos Criollos',
    description: 'Rellenos de carne, pollo, queso o jamón. Receta tradicional con el sabor de casa.',
    color: 'from-red-400 to-pink-500',
  },
  {
    emoji: '🍮',
    name: 'Postres Artesanales',
    description: 'Quesillo, tres leches, suspiro limeño y más. Dulzura que enamora.',
    color: 'from-yellow-300 to-amber-400',
  },
  {
    emoji: '🧁',
    name: 'Mini Dulces',
    description: 'Bocaditos perfectos para eventos: marquesas, brownies y mini cheesecakes.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    emoji: '🎂',
    name: 'Tortas Personalizadas',
    description: 'Celebra con estilo. Tortas diseñadas especialmente para tu ocasión especial.',
    color: 'from-purple-400 to-pink-500',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative p-8 flex flex-col items-center text-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-7xl mb-6"
        >
          {product.emoji}
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

        <a
          href="https://wa.me/51945152916"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <ShoppingBag className="w-5 h-5" />
          Pedir ahora
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Cada producto es elaborado con amor, dedicación y los mejores ingredientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
