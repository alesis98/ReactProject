import {Label, Table} from '@ui5/webcomponents-react';
import {
    TableRow,
    TableCell,
    TableColumn,
    } from '@ui5/webcomponents-react';


export function TableFornitore(){
    return(
        <Table
            columns={
                <>
                <TableColumn>
                    <Label></Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nr. Fornitore</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nome</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Costo Unitario</Label>
                </TableColumn>
                <TableColumn>
                    <Label>% SC. 1</Label>
                </TableColumn>
                <TableColumn>
                    <Label>% SC. 2</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Costo Unitario</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Quantità Minima</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Data Inizio</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Listino 1</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Listino 2</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Listino 3</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Listino 4</Label>
                </TableColumn>
                </>
            }
            className='mt-6'
        >
            <TableRow>
                <TableCell>
                <Label>
                    ▶️
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    02057
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    FIERA SRL
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,0183
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0.0183
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,00
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    17/03/17
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0.02471
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,02562
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,02745
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,02928
                </Label>
                </TableCell>
            </TableRow>

        </Table>
    )
}