import React from 'react'

function SearchInput({setQuery, error}) {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>

      <input type='text'
      className='input-search'
      onChange={(e)=>setQuery(e.target.value)}
      />

    
     <h5 className='error'> {error.show && error.msg}</h5>

      </form>
     
    </div>
  )
}

export default SearchInput
