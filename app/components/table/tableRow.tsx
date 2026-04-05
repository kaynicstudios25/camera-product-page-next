import React from "react";

const TableRow = ({ data }: { data: string[] }) => {
    return (
        <tr className="border-b border-white/10 last:border-0">
            {data?.map((item, index) => (
                <td key={index} className="py-3 pr-4 text-sm md:text-lg">
                    {item}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;