import {Form, Input, Button} from '@ui5/webcomponents-react';
import {FormGroup, FormItem} from '@ui5/webcomponents-react';
import { useState, useEffect } from 'react';

export function MyFormComponent(){

    const [formData, setFormData] = useState({
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
        'Articolo Amministrativo': ''
    });
    
    useEffect(() => {
        fetch("C:\\Users\\a.capraro\\Desktop\\Progetto UI5\\sap-form\\src\\test\\form.json")
            .then((response) => response.json())
            .then(data => {
                setFormData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Errore durante il caricamento dei dati:', error);
            });
    }, []);
    
    return(


        <>
        <div>

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
                alignItems: 'center',
            }}
            >

            <FormGroup>
                {Object.entries(formData).map(([key, value]) => (
                    <FormItem label={key} key={key}>
                        <Input type='Text' value={value}/>
                    </FormItem>
                ))}
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