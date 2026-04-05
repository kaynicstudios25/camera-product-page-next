"use client";
import React from 'react'
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const footerEl = [
        {
            id: 1,
            sect: "Navigate",
            links: [
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Newsletter", path: "/newsletter" },
                { name: "Contact Us", path: "/contact" }
            ]
        },
        {
            id: 2,
            sect: "Support",
            links: [
                { name: "FAQ", path: "/faq" },
                { name: "Shipping", path: "/shipping" },
                { name: "Returns", path: "/returns" },
                { name: "Track Orders", path: "/track" },
                { name: "Accessibility", path: "/accessibility" }
            ]
        }
    ]

    return (
        <footer className="p-8">
            <div className={"grid grid-cols-3 gap-8 justify-between items-center mx-auto"}>
                {footerEl.map((section) => (
                    <div key={section.id} className="flex flex-col gap-2">
                        <h5 className={"text-amber-600 font-semibold mb-2"}>
                            {section.sect}
                        </h5>
                        {/* Map through the inner links array */}
                        {section.links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-sm hover:underline text-gray-100"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                ))}
                <div className="flex flex-col gap-4">
                    <h5 className="text-amber-600 font-semibold mb-2">Contact Us</h5>
                    <Image src={"/icon.png"} alt={"logo"} width={60} height={80} />
                    {/* Phone Link */}
                    <a
                        href="tel:+1234567890"
                        className="flex items-center gap-2 text-sm text-white hover:text-amber-600 transition-colors"
                    >
                        <Phone size={16} />
                        <span>+1 (234) 567-890</span>
                    </a>

                    {/* Email Link */}
                    <a
                        href="mailto:hello@techking.com"
                        className="flex items-center gap-2 text-sm text-white hover:text-amber-600 transition-colors"
                    >
                        <Mail size={16} />
                        <span>hello@techking.com</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer