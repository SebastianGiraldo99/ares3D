import { Card, CardBody, CardGroup, CardTitle, Col, Row } from "reactstrap";
import docLogo from './assets/docLogo.png';
import smile from './assets/smileLogo.png';
import logoAzul from './assets/logoAzul.png';
import './service.css';

function AboutAres(){

    return (
        <div className="about-container">
            <Row style={{marginBottom : '20px'}}>
                <Col>
                    <h3>
                        ¿Quíen es Ares3D?
                    </h3>
                    <p>
                        Ares3D es una empresa 100% casanareña, nacida en Yopal en 2022, enfocada en todo lo relacionado con servicios que van desde impresion 3D hasta donde lo imagenes. En pocas palabras somos una empresa de soluciones digitales.   
                    </p>
                </Col>
                <Col>
                <img src={logoAzul} style={{width : 200, height: 200, borderRadius : 100 }} />
                </Col>
            </Row>
            <Row style={{marginBottom : '20px'}}>
                <Col>
                    <h3>
                        Misión 
                    </h3>
                    <p>
                    Ares3D es una empresa 100% casanareña, nacida en Yopal en 2022, enfocada en todo lo relacionado con servicios que van desde impresion 3D hasta donde lo imagenes. En pocas palabras somos una empresa de soluciones digitales.
                    </p>
                </Col>
                <Col>
                <img src={docLogo} style={{width : 200, height: 200, borderRadius : 100 }} />
                </Col>
            </Row>
            <Row style={{marginBottom : '20px'}}>
                <Col>
                    <h3>
                    Visión
                    </h3>
                    <p>
                    La visión de Ares 3D es convertirnos en el líder indiscutible en servicios de impresión 3D en Yopal, Casanare y en toda Colombia, ofreciendo soluciones tecnológicas vanguardistas y de alta calidad, utilizando filamentos en PLA no tóxicos y de origen natural, como la caña de azúcar y la yuca, que reducen el impacto ambiental.
                    </p>
                </Col>
                <Col>
                <img src={smile} style={{width : 200, height: 200, borderRadius : 100 }} />
                </Col>
            </Row>
        </div>
    );


}

export default AboutAres;