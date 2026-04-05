"use client";

import React, { useState } from 'react';
import Header from "@/app/components/header";
import Gallery from "@/app/components/gallery";
import ProductSect from "@/app/components/sections/productSect";
import ReviewSect from "@/app/components/sections/reviewSect";
import ShippingSect from "@/app/components/sections/shippingSect";
import Footer from "@/app/components/sections/Footer";


const Page = () => {
    // Keep only the ID in state
    const [activeSection, setActiveSection] = useState<SectionId>('ProductSect');
    const [input, setInput] = useState("")
    const [hasError, setHasError] = useState(false);


    type SectionId = 'ProductSect' | 'ReviewSect' | 'ShippingSect';
    const sectionComponents: Record<SectionId, React.ReactNode> = {
        ProductSect: <ProductSect />,
        ReviewSect: <ReviewSect />,
        ShippingSect: <ShippingSect />,
    };

    return (
        <>
            <p aria-label={"banner"} className={"font-semibold text-center text-white bg-amber-700 w-full py-3"}>Free Shipping Nationwide</p>
            <div className="w-10/12 mx-auto my-3">
                <Header />
                <Gallery />
                <h1 className="text-white font-bold text-6xl md:text-5xl">Helios Pro 4</h1>
                <h4 className="text-white font-medium text-[32px] leading-10 mb-5 md:text-[28px] leading-8">
                    Full Frame Mirrorless
                </h4>

                <div className="border-2 border-white p-6  rounded-2xl flex-auto justify-center items-center bg-gray-50/10">
                    <div role="tablist" className="flex flex-col pb-4 md:flex-row justify-between text-white gap-2">
                        {(Object.keys(sectionComponents) as SectionId[]).map((id) => (
                            <button
                                key={id}
                                role="tab"
                                onClick={() => setActiveSection(id)} // Now TypeScript knows 'id' is a SectionId
                                aria-selected={activeSection === id}
                                className="border-1 rounded-xl p-2 w-full transition-colors aria-selected:bg-amber-700 aria-selected:border-gray-50 aria-selected:font-bold"
                            >
                                {id === "ProductSect" && "Product Description"}
                                {id === "ReviewSect" && "Reviews"}
                                {id === "ShippingSect" && "Shipping and Warranty"}
                            </button>
                        ))}
                    </div>

                    {/* Dynamically render the component based on the active ID */}
                    <div>{sectionComponents[activeSection]}</div>
                </div>
                <div aria-label={"newsletter call-to-action"} className={"flex flex-col justify-center m-10 "}>
                    <h1 className={"text-6xl text-center text-gray-50 font-bold mb-4"}>Don't Miss Any Updates</h1>
                    <p className={"text-md text-gray-200 text-center"}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
                    <label className={"flex flex-row justify-center items-center text-gray-200 gap-2 w-3/4  m-auto py-3"}>
                        <input type={"email"} placeholder={"Email"} className={`border p-2 text-gray-700 rounded-lg bg-gray-50 w-full m-auto ${hasError ? 'border-red-500 ring-red-100' : 'border-gray-300'}`} />
                        {hasError && <p className={"text-red-500 text-sm mt-1"}> This is a required field</p>}
                        <input type={"submit"} className={"bg-amber-700 m-auto px-6 py-2 rounded-lg"}/>
                    </label>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Page;