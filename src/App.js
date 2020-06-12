import React from "react";
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import { Navbar, Button, Card, CardImg } from "reactstrap";

const App = () => {
  return (
    <>
      <Navbar color='info'>
        <h1>WeEat</h1>
        <Button color='info' style={{ color: 'white' }}>
          Home
      </Button>
      </Navbar>
      <Route exact path='/'><Card>
        <Button color='info' style={{ color: 'white', position: 'absolute', left: '50%', top: '50%' }}>
          Tacos!
        </Button>
        <CardImg src={require('./assets/taco.jpeg')} />
      </Card>
      </Route>
      <Route path='/taco'>

      </Route>

    </>

  )
};
export default App;
