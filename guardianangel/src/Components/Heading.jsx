import React from 'react'
import { Flex } from '@chakra-ui/react'
import '../heading.css'

const Heading=(props) =>{
  return (
    <Flex justifyContent={'center'} height={props.value?'10%':'20%'} alignItems={'center'}>
        <p className={props.value?'about_heading about_mobile':'about_heading'}><span className={props.value?'left_heading left_heading_mobile':'left_heading'}>{props.heading1}</span>{props.heading2}</p>
    </Flex>
  )
}

export default Heading