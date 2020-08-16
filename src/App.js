import React from 'react';
import { from } from 'rxjs';
// import { map, filter, delay, mergeMap } from 'rxjs/operators';
import Hooks from './Hooks';
import ReactComponent from './ReactComponent';

class App extends React.Component {
  
  render() {
      return (
        <>
        <ReactComponent />
        <Hooks />
        </>
      );
    }
}
export default App;
