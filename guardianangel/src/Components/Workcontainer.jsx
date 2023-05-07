import React from 'react'
import { Flex,Img } from '@chakra-ui/react'
import '../treatment.css'
import '../work.css'

const Workcontainer=(props) =>{
  return (
    <Flex flexDir={props.value?'row':'column'} width={!props.value && '15%'} margin={props.value?'20px 20px':'0px 20px'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
        <Flex justifyContent={'center'} width={'100%'}>
            <div className={props.value?'work_image work_image_mobile':'work_image'}><Img width={'100%'} height={'100%'} src={process.env.PUBLIC_URL+'/images/'+props.data.img } objectFit={'fill'} /></div>
        </Flex>
        <Flex minHeight={props.value?'90px':'130px'} minWidth={props.value && '200px'} marginTop={'30px'}>
            <div className={props.value?'work_text treatment_text treatment_text_mobile':'work_text treatment_text'}>{props.data.desc}</div>
        </Flex>
    </Flex>
  )
}

export default Workcontainer