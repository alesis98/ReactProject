import {Label, Table} from '@ui5/webcomponents-react';
import {
    TableRow,
    TableCell,
    TableColumn,
    } from '@ui5/webcomponents-react';


export function TableCliente(){
    return(
        <Table
            columns={
                <>
                <TableColumn>
                    <Label></Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nr. Cliente</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nome</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Prezzo Unitario</Label>
                </TableColumn>
                <TableColumn>
                    <Label>% SC. 1</Label>
                </TableColumn>
                <TableColumn>
                    <Label>% SC. 2</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Prezzo Unitario</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Quantità Minima</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Data Inizio</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Prezzo...</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nr. Offerta</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nr. Contatto</Label>
                </TableColumn>
                <TableColumn>
                    <Label>Nome Contatto</Label>
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
                    00123
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    OPAC SRL
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    0,041
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
                    0.041
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    1,00
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    22/12/16
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
                    
                </Label>
                </TableCell>
                <TableCell>
                <Label>
                    
                </Label>
                </TableCell>
            </TableRow>

        </Table>
    )
}