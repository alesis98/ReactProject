/* eslint-disable no-prototype-builtins */
import {Form, Input, Button, CheckBox} from '@ui5/webcomponents-react';
import {FormGroup, FormItem} from '@ui5/webcomponents-react';
import { useState, useEffect } from 'react';
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js"


export function MyFormComponent(){

    const [formData1, setFormData1] = useState({
        Nr: '',
        Descrizione: '',
        Famiglia: '',
        Dimensione: '',
        Trattamento: '',
        'Unità di Misura Base': '',
        'Data Ultima Modifica': '',
        'Peso Netto': '',
        Nomenclatura: '',
        "Codice Paese d'origine": '',
        'Quantità Conf. Scatole': '',
        'Tipologia Scatola': '',
      
    });


    const [formData2, setFormData2] = useState({
         Magazzino: '',
        'Impiego su Modello': '',
        'Coefficiente di Impiego': '',
        "Qtà nell'Ordine Acquisto": '',
        "Qtà nell'Ordine Lavoro": '',
        "Qtà in ordine di Vendita": '',
        'Qtà previsionale': '',
        'Qtà Venduta': '',
        'Qtà Acquistata': '',
        'Qtà Venduta Prec': '',
        'Qtà Acquistata Prec': '',
        
    })
    
    useEffect(() => {
        fetch("/form.json") 
            .then((response) => response.json())
            .then((data) => {
                // Confronta i campi dell'oggetto formData1 con quelli nel file JSON
                const updatedFormData = { ...formData1 }; // Copia dell'oggetto formData1
                Object.keys(updatedFormData).forEach(key => {
                    // Se il campo è presente nel file JSON, aggiorna il valore
                    if (data.hasOwnProperty(key)) {
                        updatedFormData[key] = data[key];
                    }
                });
                setFormData1(updatedFormData);
                
            })
            .catch(error => {
                console.error('Error during data:', error);
            });
    }, []);
    



    useEffect(() => {
        fetch("/form.json") 
            .then((response) => response.json())
            .then((data) => {
                // Confronta i campi dell'oggetto formData1 con quelli nel file JSON
                const updatedFormData2 = { ...formData2 }; // Copia dell'oggetto formData1
                Object.keys(updatedFormData2).forEach(key => {
                    // Se il campo è presente nel file JSON, aggiorna il valore
                    if (data.hasOwnProperty(key)) {
                        updatedFormData2[key] = data[key];
                    }
                });
                setFormData2(updatedFormData2);
             
            })
            .catch(error => {
                console.error('Error during data:', error);
            });
    }, []);



    return(
        
        <>
        <div style={{marginTop: "50px"}}>

            <Form
            columnsL={2}
            columnsM={2}
            columnsS={1}
            columnsXL={2}
            labelSpanL={4}
            labelSpanM={4}
            labelSpanS={12}
            labelSpanXL={4}
            style={{
            
            }}
            >

            <FormGroup>
                {Object.entries(formData1).map(([key, value]) => (
                    <FormItem label={key} key={key}>
                        <Input type='Text' value={value}/>
                    </FormItem>
                ))}
            </FormGroup>


            <FormGroup>
                {Object.entries(formData2).map(([key, value]) => (
                    <FormItem label={key} key={key}>
                        <Input type='Text' value={value}/>
                    </FormItem>
                ))}
                <FormItem label="Articolo Amministrativo">
                    <CheckBox
                        accessibleName=""
                        onChange={function _a(){}}
                        text="Non viene stampato su documenti cartacei"
                        valueState="None"
                    />
                </FormItem>
            </FormGroup>


            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10vh' }}>
                <Button
                accessibleRole="Button"
                className=""
                design="Default"
                onClick={function _a() { }}
                style={{}}
                type="Submit"
                >
                    Aggiorna
                </Button>
            </div>
        </div>
        </>
    )
}