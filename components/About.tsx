import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Industry-Focused',
      description: 'Curriculum designed with industry leaders to meet real-world demands'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from professionals with years of hands-on experience'
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Earn recognized certifications that boost your career prospects'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: '95% of our graduates land jobs within 6 months of completion'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6"
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Inlighn Tech is a premier technology education institute dedicated to bridging 
              the gap between academic learning and industry requirements. We specialize in 
              delivering comprehensive, hands-on training programs that prepare students for 
              successful careers in the rapidly evolving tech landscape.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Our mission is to empower individuals with cutting-edge skills and knowledge, 
              enabling them to thrive in competitive tech environments. Through our innovative 
              curriculum and expert guidance, we've helped thousands of students transform 
              their careers and achieve their professional goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-secondary-200 rounded-full opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-primary-200 rounded-full opacity-40"
              />

              {/* Central Content */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Award className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Excellence in Education</h3>
                  <p className="text-gray-600 text-sm">Transforming careers through innovative technology training</p>
                </div>

                {/* Floating Elements */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2 + index,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`absolute w-3 h-3 bg-secondary-400 rounded-full ${
                      index === 0 ? 'top-4 right-4' :
                      index === 1 ? 'bottom-4 left-4' :
                      'top-1/2 left-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;