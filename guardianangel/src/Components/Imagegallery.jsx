import React from 'react'
import { Flex,Img } from '@chakra-ui/react'
import '../treatment.css'

const Imagegallery=(props)=> {
  return (
    <Flex flexDir={'column'} width={props.value?'100%':'30%'} margin={'0px 20px'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
        <div className={props.value?'Timage_container Timage_container_mobile':'Timage_container'}>
            <Img className='Timage' src={process.env.PUBLIC_URL+'/images/'+props.data.img }/> 
            <div className='Timage_background'></div>
        </div>
        <div className={props.value?'treatment_text treatment_text_mobile':'treatment_text'}>{props.data.title}</div>
    </Flex>
  )
}

export default Imagegallery