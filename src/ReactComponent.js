import React from 'react';
import './App.css';
import { from } from 'rxjs';
import { map, filter, delay, mergeMap } from 'rxjs/operators';;

let numbersObservables = from([1,3,5,6,8,9]);
let squaredNumbers = numbersObservables.pipe(
  filter(val => val > 1),
  mergeMap(val => from([val]).pipe(delay(1000 * val))),
  map(val => val * val)
); 

class ReactComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      currentNumber: 2
    };
  }

  componentDidMount() {
    this.subscription = squaredNumbers.subscribe( results => {
      this.setState({ currentNumber: results});
    });
  }

  conmponentWillUnmount() {
    this.subscription.unsubscribe();
  }
  
  render() {
      return (
        <div className='container'>
          <h1 className='header'>RxJs with React !</h1>
          <p>The current number is:  {this.state.currentNumber}</p>
        </div>
      );
    }
}
export default ReactComponent;
