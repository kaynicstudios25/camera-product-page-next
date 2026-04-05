"use client";

import { useState } from "react";
import Link from "next/link";
import {navLinks} from "@/app/components/constants/links";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold"><Image src={"/icon.png"} alt={"logo"} width={60} height={80} /></div>

                {/* Desktop Navigation (Mapped) */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-50 font-semibold hover:underline underline-offset-2 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button (Mobile Only) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-4xl text-gray-100"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Modal / Overlay Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 md:hidden">
                    {/* Close Button inside Modal */}
                    <button onClick={toggleMenu} className="self-end text-3xl mb-8">
                        ✕
                    </button>

                    {/* Mapped Links for Mobile */}
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)} // Close menu when link is clicked
                                className="text-2xl font-semibold text-gray-800"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}