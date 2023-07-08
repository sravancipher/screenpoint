import React,{useState} from 'react'
import searching from './Searchlist'
function Searchbar() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <>
      <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
      {searching.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return <div>{val.first_name} </div>
      })}
      </>
  );
}
export default Searchbar;