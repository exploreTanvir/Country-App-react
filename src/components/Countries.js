import React from 'react'
import { v4 as uuidv4 } from "uuid"
import style from "./Countries.module.css"
import Country from './Country'

const Countries = (props) => {
  return (
    <section className={style.countries}>
        {props.countries.map((country)=>{
            const newCountries={country,id:uuidv4()}
            return (<Country {...newCountries} key={newCountries.id}/>)
        })}
    </section>
  )
}

export default Countries