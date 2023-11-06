import React, { useEffect, useState } from 'react'
import style from "./SrarchCountry.module.css"


const SearchCountry = (props) => {
    
    const [SearchText,setSearchText]=useState("")
    const handleChange=(e)=>{
        setSearchText(e.target.value)
    }
    useEffect(() => {
       props.onSearch(SearchText)
    }, [SearchText])
    
  return (
    <div style={{textAlign:'center'}}>
        <input className={style.search} type='text' placeholder='Search Country' value={SearchText} onChange={handleChange}/>
    </div>
  )
}

export default SearchCountry