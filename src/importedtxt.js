import React from 'react'
import './App.css';

function importedtxt({changeWord, btntxt, btnclass}) {
  return (
    <>
      <h1 className={btnclass} >mailsender</h1>
      <button onClick={()=> changeWord('Benedikt')}>
        {btntxt}
      </button>
      
    </>)

}


export default importedtxt