import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  features: string[];
}

interface ProgramCardProps {
  program: Program;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary-900/80 flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white text-primary-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors">
          {program.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {program.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BarChart className="w-4 h-4" />
            <span>{program.level}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-primary-900 text-sm">Key Features:</h4>
          <div className="grid grid-cols-2 gap-1">
            {program.features.map((feature, idx) => (
              <div key={idx} className="text-xs text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;