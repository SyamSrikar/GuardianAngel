import React from 'react'
import '../specialist.css'
import { BiRightArrowAlt } from "react-icons/bi";
import { Flex,Img } from '@chakra-ui/react';

const Specialitymap=(props)=> {
  return (
    <Flex alignItems={'center'} padding={props.value && '10px 0px 0px 0px'} >
        <div width={'10px'} height={'10px'}><BiRightArrowAlt className='arrow'/></div>
        <p className={props.value?'specialist_text text_mobile':'specialist_text'}>{props.text}</p>
    </Flex>
  )
}

export default Specialitymap