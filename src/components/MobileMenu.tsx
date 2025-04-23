import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars, FaChevronRight } from 'react-icons/fa';

type MenuItem = {
    name: string;
    href: string;
    icon?: React.JSX.Element;
};

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuItems: MenuItem[] = [

        { name: 'Home', href: '/', icon: <FaChevronRight className="text-blue-400" /> },
        { name: 'My Appointments', href: '/appointments', icon: <FaChevronRight className="text-blue-400" /> },
        { name: 'Contact Us', href: '/contact', icon: <FaChevronRight className="text-blue-400" /> },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Navigation Menu"
                className="p-2 text-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            >
                {isOpen ? (
                    <FaTimes className="h-6 w-6" />
                ) : (
                    <FaBars className="h-6 w-6" />
                )}
            </button>

            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <nav className="p-4 mt-16">
                    <ul className="space-y-3">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg transition-all group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {item.icon}
                                    </span>
                                    <span className="flex-1">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default MobileMenu;