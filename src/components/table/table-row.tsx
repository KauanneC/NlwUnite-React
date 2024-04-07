import { ComponentProps } from "react";

export interface TableRow extends ComponentProps<'tr'> {}

export function TableRow(props: TableRow) {
    return (
        <tr className='border-b border-white/10' {...props}/>
    )
}