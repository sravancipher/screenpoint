import React from 'react';
import List from './List';
import Header from './Header';
import img7 from './1.jpg'
function Telugu(){
    let component;
  switch(window.location.pathname){
    case "/telugu":
      component=<List id="movies" img4={img7} />
      break;
  }
    <>
    
    <Header/>
    {component}
    </>
}
export default Telugu;