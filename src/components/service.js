import React from "react";
import { Card, CardBody, CardGroup, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import tvsAzules from './assets/printer3dLogo.png';
import brand1 from './assets/boquilla3d.png';
import pocillo from './assets/meterials3d.png';
import './service.css';
import AboutAres from "./about";

const ListServices = [
    {
        Id : 1,
        Url_img : brand1,
        Title : 'Servicios de impresoras 3D',
        Services : [
            'Impresion 3D profesional',
            'Venta de impresoras 3D',
            'Suministros para impresion 3D',
            'Soporte tecnico de impresoras',
        ]
    },
    {
        Id : 2,
        Url_img : tvsAzules,
        Title : 'Servicios en 3D',
        Services : [
            'Modelado 3D',
            'Fabricacion de prototipos 3D',
            'Soluciones personalizadas en 3D']
    },
    {
        Id : 3,
        Url_img : pocillo,
        Title : 'Productos 3D',
        Services :  [
            'Organizadores masculinos y femeninos',
            'Funkos',
            'Nomenclaturas',
            'Floreros', 
            'Jarrones',
            'Lamparas',
            'Llaveros'
        ]
    }
]

function ServicesAres(){
    return (
            <div >
                <div className="services">
                <CardGroup>
                    {
                    ListServices.map(element => (
                        <Card key={element.Id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                            <img alt={element.Title} src={element.Url_img} style={{width : 200, height: 180, borderRadius : 20,margin: '40px' }} />
                            <CardBody>
                                <CardTitle tag="h3">{element.Title}</CardTitle>
                                <ListGroup>
                                    {(element.Services ?? []).map((services, index) =>(
                                        <ListGroupItem key={index}>
                                            {services}
                                        </ListGroupItem>
                                    ))}
                                    
                                </ListGroup>
                            </CardBody>
                        </Card>
                    ))
                    }
                </CardGroup>
                </div>
                <AboutAres/>
            </div>      
    );
}

export default ServicesAres;