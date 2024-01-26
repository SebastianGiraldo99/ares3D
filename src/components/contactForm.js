import { Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import './contacForm.css';

function ContactAres(){
    return (
        <div>
            <div className="formContact">
                <h2 style={{textAlign:"center"}}>Formulario de contacto</h2>
                <Form>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <Input
                                id="personName"
                                name="completeName"
                                placeholder="Nombre completo"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                id="personEmail"
                                name="email"
                                placeholder="example@email.com"
                                type="email"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <h4>Encuentranos</h4>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label>Mensaje</Label>
                                <Input
                                id="Personmessage"
                                name="message"
                                placeholder="Escriba su mensaje aqui"
                                type="textarea"
                                >
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label for="file">
                                    Archivo
                                </Label>
                                <Input
                                id="personFile"
                                name="file"
                                type="file"
                                >
                                </Input>
                                <FormText color="white">Por favor solo subir archivos en formado pdf con las especificaciones y un ejemplo de los 
                                    diseños a cotizar. Máximo 2mb de tamaño.
                                </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default ContactAres;