import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { languageTag } from "../paraglide/runtime";

export const LanguagePicker = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languageTag);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (option: any) => {
        setSelected(option);
        setIsOpen(false);
        const lang = option.startsWith('en') ? 'en' : 'de';
        window.location.href = `/${lang}`;
    };

    return (
        <div className="w-24">
            <motion.div className="relative" ref={dropdownRef}>
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="uppercase w-full p-2 my-2 bg-gray-900 hover:bg-gray-800 text-gray-100 rounded-xl shadow-lg border border-gray-700 flex items-center justify-between"
                >
                    {selected}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="text-primary" />
                    </motion.div>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : -20,
                        display: isOpen ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-xl z-10 
                             border border-gray-700"
                >
                    {['de', 'en'].map((option) => (
                        <motion.button
                            key={option}
                            whileHover={{ backgroundColor: '#374151' }}
                            onClick={() => handleLanguageChange(option)}
                            className="uppercase w-full p-3 text-gray-100 hover:text-primary text-left"
                        >
                            {option}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}