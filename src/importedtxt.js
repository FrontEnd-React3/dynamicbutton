import React from 'react'
import './App.css';

function importedtxt({btntxt, btnclass}) {
  return (
    <>
      <h1 className={btnclass} >mailsender</h1>
      <button>
        {btntxt}
      </button>
      
    </>)

}


export default importedtxt