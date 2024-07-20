import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './porsche-thumbwhite.webp';
import { CardFooter } from 'react-bootstrap';

function Compra() {
  const handleButtonClick = () => {
    window.location.href = 'https://buy.stripe.com/test_cN26q22pK21laBObIJ';
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

export default Compra;
