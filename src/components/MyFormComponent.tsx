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
           {/*  <FormGroup>

            
                <FormItem label="Nr">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Descrizione">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Famiglia">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Dimensione">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Trattamento">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Unità di Misura Base">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Data Ultima Modifica">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Peso Netto">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Nomenclatura">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Codice Paese d'origine">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Quantità Conf. Scatole">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Tipologia Scatola">
                    <Input type='Text'></Input>
                </FormItem>
                
            
            </FormGroup>

            <FormGroup>
                <FormItem label="Magazzino">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Impiego su Modello">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Coefficiente di Impiego">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà nell'Ordine Acquisto">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà nell'Ordine Lavoro">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà in ordine di Vendita">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà previsionale">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà Venduta">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà Acquistata">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà Venduta Prec">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Qtà Acquistata Prec">
                    <Input type='Text'></Input>
                </FormItem>
                <FormItem label="Articolo Amministrativo">
                    <CheckBox
                        accessibleName=""
                        onChange={function _a(){}}
                        text="Non viene stampato su documenti cartacei"
                        valueState="None"
                    />
                </FormItem>
             
            </FormGroup> */}

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