import React from 'react'
import Table from "@/app/components/table/Table";

const ShippingSect = () => {
    const theadData = ["Shipping Method", "Cost"]

    const tbodyData = [
        {
            id: "1",
            items: ["Standard Shipping (5 - 7 Days)", "$5.99"] // Changed 'item' to 'items'
        },
        {
            id: "2",
            items: ["Express Shipping (2 - 3 Days)", "$12.99"] // Changed 'item' to 'items'
        },
        {
            id: "3",
            items: ["Overnight Shipping (1 Day)", "$24.99"] // Changed 'item' to 'items'
        },
    ]

    const returnData = [
        {
            id: "1",
            items: ["Window", "30 Days"] // Changed 'item' to 'items'
        },
        {
            id: "2",
            items: ["Condition", "Unused + Pkg"] // Changed 'item' to 'items'
        },
        {
            id: "3",
            items: ["Refund", "Original Pay"] // Changed 'item' to 'items'
        },
        {
            id: "4",
            items: ["Processing", "5 - 7 Days"] // Changed 'item' to 'items'
        },
    ]

    const warrantData = [
        {
            id: "1",
            items: ["Coverage", "2 Years (parts & labour)"] // Changed 'item' to 'items'
        },
        {
            id: "2",
            items: ["Defects", "Manufacturing faults only"] // Changed 'item' to 'items'
        },
        {
            id: "3",
            items: ["Extended", "3-yr plan available at checkout"] // Changed 'item' to 'items'
        },
        {
            id: "4",
            items: ["Support", "support@techking.camera"] // Changed 'item' to 'items'
        },
    ]

    return (
        <div>
            <h1 className={"text-white font-bold text-4xl text-center py-3.5"}>Shipping</h1>
            <Table theadData={theadData} tbodyData={tbodyData}/>
            <h1 className={"text-white font-bold text-4xl text-center py-3.5"}>Returns</h1>
            <Table theadData={["Returns", "Info"]} tbodyData={returnData}/>
            <h1 className={"text-white font-bold text-4xl text-center py-3.5"}>Warranty</h1>
            <Table theadData={["Warranty", "Info"]} tbodyData={warrantData}/>
        </div>
    )
}
export default ShippingSect
