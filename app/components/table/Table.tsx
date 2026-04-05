import React from 'react'
import TableRow from "@/app/components/table/tableRow";
import TableHeadItem from "@/app/components/table/tableHeadItem";

interface TableProps {
    theadData: any[];
    tbodyData: any[];
}

const Table = ({ theadData, tbodyData }: TableProps) => {
    return (
        <table className={"w-full table-fixed text-gray-200"}>
            <thead>
            <tr>
                {theadData.map((h) => {
                    return <TableHeadItem key={h} item={h} />;
                })}
            </tr>
            </thead>
            <tbody>
            {tbodyData.map((row) => (
                <TableRow key={row.id} data={row.items} /> // Ensure 'row.items' isn't undefined!
            ))}
            </tbody>
        </table>
    );
};
export default Table
