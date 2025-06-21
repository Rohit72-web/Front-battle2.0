import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, XCircle, Loader } from 'lucide-react';

const VerifyPage: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setIsLoading(true);
    setVerificationResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock verification result (success for demo)
    setVerificationResult(certificateId.length > 5 ? 'success' : 'error');
    setIsLoading(false);
  };

  const resetForm = () => {
    setCertificateId('');
    setVerificationResult(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Verify Certificate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your certificate ID to verify its authenticity and view details.
          </p>
        </motion.div>

        {/* Verification Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                Certificate ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter your certificate ID (e.g., INLIGHN-2024-001234)"
                  className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all text-lg"
                  disabled={isLoading}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={!certificateId.trim() || isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Verify Certificate</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Verification Result */}
          <AnimatePresence>
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="mt-8"
              >
                {verificationResult === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-green-800">Certificate Verified!</h3>
                    </div>
                    <div className="space-y-2 text-green-700">
                      <p><strong>Student:</strong> John Doe</p>
                      <p><strong>Program:</strong> Full Stack Development</p>
                      <p><strong>Completion Date:</strong> March 15, 2024</p>
                      <p><strong>Grade:</strong> A+ (95%)</p>
                      <p><strong>Certificate ID:</strong> {certificateId}</p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="mt-4 text-green-600 hover:text-green-800 font-medium"
                    >
                      Verify Another Certificate
                    </button>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <XCircle className="w-8 h-8 text-red-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-red-800">Certificate Not Found</h3>
                    </div>
                    <p className="text-red-700 mb-4">
                      The certificate ID you entered could not be verified. Please check the ID and try again.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Where to find your Certificate ID?</h3>
              <p className="text-gray-600">
                Your certificate ID is located at the bottom of your digital certificate. 
                It follows the format: INLIGHN-YYYY-XXXXXX
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Still having issues?</h3>
              <p className="text-gray-600">
                Contact our support team at{' '}
                <a href="mailto:support@inlighntech.com" className="text-secondary-600 hover:underline">
                  support@inlighntech.com
                </a>{' '}
                for assistance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyPage;