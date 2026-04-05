import React from 'react'

const TableHeadItem = ({ item }) => {
    return (
        <>
            <td title={item} className={"p-2 bg-amber-700 font-semibold"}>{item}</td>

        </>
    )
}
export default TableHeadItem
