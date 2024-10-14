import { useState } from 'react';
import './searchBar.scss';

function SearchBar() {

  const [query, setQuery] = useState({
    type: "buy",
    location: '',
    minPrice: 0,
    maxPrice: 0
  });

  const types = ["buy", "rent"];

  const switchType = (val) => {
    setQuery( (prev) => ({ ...prev, type:val }) )
  } 

  return (    
    <div className='searchBar'>
        <div className="type">
          {types.map( (type) => (
            <button 
              onClick={()=>switchType(type)} 
              key={type}
              className={ query.type === type ? "active" : ""}  
            >
              {type}
            </button>
            ) )}            
        </div>
        <form action="">
          <input 
            type="text" 
            name="location" 
            placeholder='City location' 
          />
          <input 
            type="number" 
            name="minPrice"
            min={0} 
            max={10000000} 
            placeholder='min price'
          />
          <input 
            type="number" 
            name="maxPrice" 
            min={0} 
            max={10000000} 
            placeholder='max price' 
          />
          <button>
            <img src="./search.png" alt="" />
          </button>   
        </form>
    </div>
  )
}

export default SearchBar