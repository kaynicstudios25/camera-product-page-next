import React from 'react'

interface HeadProps {
    item: string
}

const TableHeadItem = ({ item }: HeadProps) => {
    return (
        <>
            <td title={item} className={"p-2 bg-amber-700 font-semibold"}>{item}</td>

        </>
    )
}
export default TableHeadItem
