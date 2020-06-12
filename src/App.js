import React from "react";
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import { Navbar, Button, Card, CardImg } from "reactstrap";
import OrderForm from './OrderForm';

const App = () => {
  return (
    <>
      <Navbar color='info'>
        <h1>WeEat</h1>
        <Link to='/'>
          <Button color='info' style={{ color: 'white' }}>
            Home
      </Button>
        </Link>
      </Navbar>
      <Route exact path='/'>
        <Card>
          <Link to='/taco'>
            <Button color='info' style={{ color: 'white', position: 'absolute', left: '50%', top: '50%' }}>
              Tacos!
        </Button>
          </Link>
          <CardImg src={require('./assets/taco.jpeg')} />
        </Card>
      </Route>
      <Route path='/taco'>
        <OrderForm />
      </Route>

    </>

  )
};
export default App;
