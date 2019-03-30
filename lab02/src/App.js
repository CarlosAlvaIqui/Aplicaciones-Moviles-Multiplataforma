import React, { Component } from 'react';
import Contador from './componentes/Contador/Contador';

class App extends Component {
  render() {
    return (<div>
      <Contador valor={6}/>
      <hr />
      <Contador valor={6}/>
     </div> );
  }
}

export default App;
