import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Toast() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');

    useEffect(() => {
        if (flash.success) {
            setMessage(flash.success);
            setType('success');
            setVisible(true);
        } else if (flash.error) {
            setMessage(flash.error);
            setType('error');
            setVisible(true);
        }

        if (flash.success || flash.error) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className="fixed top-4 right-4 z-[100] flex items-center shadow-lg rounded-lg overflow-hidden border max-w-sm w-full bg-white border-black/5"
                >
                    <div className={`flex-shrink-0 w-12 flex items-center justify-center self-stretch ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {type === 'success' ? (
                            <CheckCircle className="text-white" size={24} />
                        ) : (
                            <XCircle className="text-white" size={24} />
                        )}
                    </div>
                    <div className="px-4 py-3 flex-1 flex items-center justify-between">
                        <div>
                            <p className={`text-sm font-bold font-sans ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                                {type === 'success' ? 'Success' : 'Error'}
                            </p>
                            <p className="text-sm text-charcoal/70 font-sans mt-0.5">{message}</p>
                        </div>
                        <button 
                            onClick={() => setVisible(false)}
                            className="text-charcoal/40 hover:text-charcoal transition-colors p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
