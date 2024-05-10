import React, { useEffect, useState } from 'react';
import { FormGroup, FormItem, Input, Label, Table } from '@ui5/webcomponents-react';
import { TableRow, TableCell, TableColumn } from '@ui5/webcomponents-react';
import { Form } from '@ui5/webcomponents-react';

import "./TableFornitore.css"

export function TableFornitore() {

    const [tableFornitore, setTableFornitore] = useState({
        'Nr. Fornitore': '',
        'Nome': '',
        'Costo Unitario': '',
        '% SC. 1': '',
        '% SC. 2': '',
        'Costo Unitario 1': '',
        'Quantità Minima': '',
        'Data Inizio': '',
        'Listino 1': '',
        'Listino 2': '',
        'Listino 3': '',
        'Listino 4': ''
    })



    useEffect(() => {
        fetch("/tableFornitore.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            setTableFornitore(data); 
               
        })
        .catch(error => {
            console.error('Error during data:', error);
        });
    }, []);


    {/* ---- CALCOLO MAGGIORAZIONE LISTINO 1 ---- */}
    const [percentualeMaggiorazione1, setPercentualeMaggiorazione1] = useState(0);
    const [prezzoListino1, setPrezzoListino1] = useState(0);

    const handleChangePercentualeMaggiorazione1 = (event) => {
        const valore = event.target.value;
        setPercentualeMaggiorazione1(valore);
        calcolaPrezzoListino1(valore, tableFornitore['Costo Unitario']);
    }
    

    const calcolaPrezzoListino1 = (percentuale, costoUnitario) => {
        console.log(percentuale);
        console.log(costoUnitario);
        const prezzoListino = (parseFloat(costoUnitario) + (parseFloat(costoUnitario) * (percentuale) / 100)).toFixed(5);
        setPrezzoListino1(prezzoListino);
    }



    {/* ---- CALCOLO MAGGIORAZIONE LISTINO 2 ---- */}
    const [percentualeMaggiorazione2, setPercentualeMaggiorazione2] = useState(0);
    const [prezzoListino2, setPrezzoListino2] = useState(0);

    const handleChangePercentualeMaggiorazione2 = (event) => {
        const valore = event.target.value;
        setPercentualeMaggiorazione2(valore);
        calcolaPrezzoListino2(valore, tableFornitore['Costo Unitario']);
    }
    

    const calcolaPrezzoListino2 = (percentuale, costoUnitario) => {
        console.log(percentuale);
        console.log(costoUnitario);
        const prezzoListino = (parseFloat(costoUnitario) + (parseFloat(costoUnitario) * (percentuale) / 100)).toFixed(5);
        setPrezzoListino2(prezzoListino);
    }


    
    {/* ---- CALCOLO MAGGIORAZIONE LISTINO 3 ---- */}
    const [percentualeMaggiorazione3, setPercentualeMaggiorazione3] = useState(0);
    const [prezzoListino3, setPrezzoListino3] = useState(0);

    const handleChangePercentualeMaggiorazione3 = (event) => {
        const valore = event.target.value;
        setPercentualeMaggiorazione3(valore);
        calcolaPrezzoListino3(valore, tableFornitore['Costo Unitario']);
    }
    

    const calcolaPrezzoListino3 = (percentuale, costoUnitario) => {
        console.log(percentuale);
        console.log(costoUnitario);
        const prezzoListino = (parseFloat(costoUnitario) + (parseFloat(costoUnitario) * (percentuale) / 100)).toFixed(5);
        setPrezzoListino3(prezzoListino);
    }

    
    {/* ---- CALCOLO MAGGIORAZIONE LISTINO 4 ---- */}
    const [percentualeMaggiorazione4, setPercentualeMaggiorazione4] = useState(0);
    const [prezzoListino4, setPrezzoListino4] = useState(0);

    const handleChangePercentualeMaggiorazione4 = (event) => {
        const valore = event.target.value;
        setPercentualeMaggiorazione4(valore);
        calcolaPrezzoListino4(valore, tableFornitore['Costo Unitario']);
    }
    

    const calcolaPrezzoListino4 = (percentuale, costoUnitario) => {
        console.log(percentuale);
        console.log(costoUnitario);
        const prezzoListino = (parseFloat(costoUnitario) + (parseFloat(costoUnitario) * (percentuale) / 100)).toFixed(5);
        setPrezzoListino4(prezzoListino);
    }


    return (
        <>
            <div style={{marginTop:'50px'}}>
                <Form
                    backgroundDesign="Transparent"
                    columnsL={4}
                    columnsM={4}
                    columnsS={1}
                    columnsXL={4}
                    labelSpanL={8}
                    labelSpanM={7}
                    labelSpanS={1}
                    labelSpanXL={4}
                    titleText=""
                >
                    <FormGroup titleText=''>
                        <FormItem label="% magg. Listino 1">
                            <Input type="Text" value={percentualeMaggiorazione1} onInput={handleChangePercentualeMaggiorazione1} />
                        </FormItem>
                    </FormGroup>

                    <FormGroup titleText=''>
                        <FormItem label="% magg. Listino 2">
                            <Input type="Text" value={percentualeMaggiorazione2} onInput={handleChangePercentualeMaggiorazione2} />
                        </FormItem>
                    </FormGroup>

                    
                    <FormGroup titleText=''>
                        <FormItem label="% magg. Listino 3">
                            <Input type="Text" value={percentualeMaggiorazione3} onInput={handleChangePercentualeMaggiorazione3} />
                        </FormItem>
                    </FormGroup>

                    <FormGroup titleText=''>
                        <FormItem label="% magg. Listino 4">
                            <Input type="Text" value={percentualeMaggiorazione4} onInput={handleChangePercentualeMaggiorazione4} />
                        </FormItem>
                    </FormGroup> 
                </Form>

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
                        <Label>▶️</Label>
                    </TableCell>
                    {Object.entries(tableFornitore).map(([key, value]) => (
                        <TableCell key={key}>
                            {key === 'Listino 1' ? (
                                <Label>{prezzoListino1}</Label>
                            ) 
                            : key === 'Listino 2' ? (
                                <Label>{prezzoListino2}</Label>
                            )
                            : key === 'Listino 3' ? (
                                <Label>{prezzoListino3}</Label>
                            )
                            : key === 'Listino 4' ? (
                                <Label>{prezzoListino4}</Label>
                            )
                            
                            : (
                                <Label>{value}</Label>
                            )}                
                        </TableCell>
                        
                    ))}
                </TableRow>

                </Table>
            </div>
        </>
    )
}
