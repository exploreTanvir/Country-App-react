import { useEffect, useState } from 'react'
import Countries from './Countries'
import SearchCountry from './SearchCountry'

const url="https://restcountries.com/v3.1/all"
const AllCountries = () => {
  const [isLoading,setLoading]=useState(true)
  const [error,setError]=useState(true)
  const [isCountry,setCountry]=useState([])
  const [filteredCountry,setFilteredCountry]=useState(isCountry)
  
  const fetchData=async (url)=>{
    setLoading(true)

    try {
      const response=await fetch(url)
      const data=await response.json()
      setCountry(data)
      setFilteredCountry(data)
      setLoading(false)
      setError(null)

    } 
    catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])
  
  
  const handleSearch=(searchValue)=>{
    const value=searchValue.toLowerCase()
    const newCountries=isCountry.filter((country)=>{
      const countryName=country.name.common.toLowerCase()
      return countryName.startsWith(value)
    })
    setFilteredCountry(newCountries)
  }
return(
 <div>
   <h1>Country App</h1>
  {isLoading && <h1>Loading...</h1>}

  <SearchCountry onSearch={handleSearch}/>

  {error && <h1>{error.message}</h1>}
  {isCountry && <Countries countries={filteredCountry} isCountry={isCountry}/>}
 </div>
)
}



export default AllCountries