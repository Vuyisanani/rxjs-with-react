 import React, { useState, useEffect} from 'react';
 import { from } from 'rxjs';
 import { map, filter, delay, mergeMap } from 'rxjs/operators';

let numbersObservables = from([31,23,5,6,83,9]);
let squaredNumbers = numbersObservables.pipe(
  filter(val => val > 19),
  mergeMap(val => from([val]).pipe(delay(1000 * val))),
  map(val => val * val)
); 

 export default function Hooks() {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        let subscription = squaredNumbers.subscribe(result => {
            setCurrentNumber(result);
        });
        return ()=> subscription.unsubscribe();
        }, []);

     return (
         <div className="hooks-container">
             <h1 className='hooks-header'>RxJs with React Hooks!</h1>
             <p>The hooks current number: {currentNumber}</p>
         </div>
     );
    }