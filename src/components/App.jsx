import React from "react";
import Header from './Header';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';

function App(){
  const mainStyles = {
    marginTop: "82px"
  }
  return (
    <div>
      <Header/>
      <div style={mainStyles}>
      <Switch>
        <Route exact path='/' component={Welcome}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
