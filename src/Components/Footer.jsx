import React from 'react'
import '../footer.css'

const Footer=(props) =>{
  return (
    <div className={props.val?'footer footer_mobile':'footer'}>&copy;Copyright 2022 All Right Reserved by Guardian Angels</div>
  )
}

export default Footer