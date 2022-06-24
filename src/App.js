import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [state, setState] = useState(0);
  const TabContext = React.createContext(null);
  TabContext.displayName = 'TabContext';
  //console.log(TabContext, 'TabContext');

  React.useCallback(() => {
    console.log('dfvdf'); 
  }, []);

  let click = () => {
    setState((oldState) => {
      console.log(oldState + 1);
      return oldState + 1;
    });
  };
  return (
    <div onClick={click}>
      <h1>Hello StackBlitz! {state}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
