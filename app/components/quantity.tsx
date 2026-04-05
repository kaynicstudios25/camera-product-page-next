"use client";


import React, {useState} from 'react'

const Quantity = () => {

    const [count, setCount] = useState(0);
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }
    return (
        <div className={"flex flex-row justify-start items-center gap-3"}>
            <button
                onClick={decrement}
                className={"bg-orange-200 text-orange-500 text-4xl w-12.5 h-12.5 flex items-center justify-center hover:bg-orange-300 active:bg-orange-400 active:text-gray-200 transition-colors rounded-md"}
            >
                -
            </button>
            <p className={"text-gray-200 font-bold"}>
                {count}
            </p>
            <button
                onClick={increment}
                className={"bg-orange-200 text-orange-500 text-4xl w-12.5 h-12.5 flex items-center justify-center hover:bg-orange-300 active:bg-orange-400 active:text-gray-200 transition-colors rounded-md"}
            >
                +
            </button>
        </div>
    )
}
export default Quantity
