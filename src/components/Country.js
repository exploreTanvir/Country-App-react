import React from 'react'
import style from ".//Country.module.css"

const Country = (props) => {
    const {name,flags,capital,area,population,region}=props.country
  return (
    <section  className={style.country}>
        <div>
       <img src={flags.png} alt='nothing'/>
       <h3>Name : {name.common}</h3>
       <h3>Population : {population}</h3>
       <h3>Capital : {capital} </h3>
       <h3>Area : {area} </h3>
       <h3>Region : {region} </h3>
    </div>
    </section>
  )
}

export default Country