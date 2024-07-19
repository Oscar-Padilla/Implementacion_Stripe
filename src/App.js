import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './porsche-thumbwhite.webp';
import { CardFooter } from 'react-bootstrap';

function Compra() {
  const handleButtonClick = () => {
    window.location.href = 'https://buy.stripe.com/test_00gaHLfYwbXweXK288';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'gray' }}>
      <Card border="dark" style={{ width: '18rem', borderRadius: '15px' }}>
        <Card.Img variant="top" src={img} style={{borderRadius: '15px'}}/>
        <Card.Body>
          <Card.Title>911 GT3 RS</Card.Title>
          <Card.Text>
            Aún más deportivo. <br/>
            USD 270,588.64
          </Card.Text>
          <CardFooter style={{backgroundColor: 'white'}} >
            <div className="d-grid gap-2">
              <Button onClick={handleButtonClick} variant="dark">Comprar</Button>
            </div>
          </CardFooter>
        </Card.Body>
      </Card>
    </div>
  );
}

function CompraConfirmada() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'gray' }}>
      <Card border="dark" style={{ width: '18rem', borderRadius: '15px' }}>
        <Card.Body>
          <Card.Title>Compra Confirmada</Card.Title>
          <Card.Text>
            ¡Gracias por tu compra! Tu pedido está en proceso.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/compra-confirmada" element={<CompraConfirmada />} />
        <Route path="/" element={<Compra />} />
      </Routes>
    </Router>
  );
}

export default App;
