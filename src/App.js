import React from 'react';
import Nav from './components/nav/Nav';
import HeroComponent from './components/hero/HeroComponent';
import Card from './components/Card/Card';
import appData from './components/appData/appData';
import './App.css';

function App() {
  const appElements=appData.map(items =>{
    return(
      <Card 
        key={items.id}
        item={items}
      />
    )
  })
  return (
    <div className='container'>
      <Nav />
      <HeroComponent />
      {appElements}
    </div>
  )  
}
 
export default App;
