"use client";

import React from 'react'
import Quantity from "@/app/components/quantity";
import Image from "next/image";

const ProductSect = () => {
    const highlights = [
        {id: 1, text: "Free Returns"},
        {id: 2, text: "Secure Payment"},
        {id: 3, text: "Earn 2,999 points"},
        {id: 4, text: "Free expedited shipping"},
    ]

    return (
        <div className={"text-white"}>
            <div>
                <Image src={"/RatingLG.png"} alt={"Rating of 4.5 stars"} width={150} height={500}/>
                <p>4.5 / 127 Reviews</p>
            </div>
            <div className={"flex justify-between items-center md:flex-wrap py-4 gap-2"}>
                <h1 className={"text-4xl font-semibold"}>$2,500<span className={"text-xl"}>00</span></h1>
                <Quantity />
            </div>
            <p className={"py-4 leading-8"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis voluptatibus facere, doloremque earum quam maiores aliquid, non ipsa provident ab reiciendis et laborum maxime exercitationem nisi quos explicabo tenetur praesentium! Fugiat earum expedita unde ullam ut natus eveniet ab consequuntur laboriosam voluptate officiis atque dolorem corporis quam excepturi, saepe architecto vel, sit quibusdam. Autem vero quos temporibus debitis saepe.
            </p>
            <div className={"grid grid-cols-2 gap-4"}>
                {highlights.map((item) => (
                    <div key={item.id} className={"flex items-center justify-center p-4 border rounded-lg"}>
                        <h4 className="text-center font-medium">{item.text}</h4>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default ProductSect
