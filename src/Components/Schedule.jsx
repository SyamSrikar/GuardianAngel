import React from 'react'
import { Flex,Spacer } from '@chakra-ui/react'
import '../home.css'

const Schedule =(props) =>{
  return (
    <Flex flexDir={props.val?'column':'row'} backgroundColor={'#6B3273'}  alignItems={'center'} justifyContent={props.val?'space-evenly':'flex-start'}>
        <Flex width={'90%'} padding={props.val?'10px 15px 10px':'30px 80px'} alignItems={'center'} flexDir={props.val && 'column'} height={props.val && '100%'} justifyContent={props.val && 'space-evenly'}>
          <Flex className='home_container' flexDir={'column'} padding={props.val && '30px 0px'} >
              <p className={props.val?'container_div1 bold_font bold_font_mobile schedule':'container_div1 bold_font schedule'}>Request a Schedule For</p>
              <p className={props.val?'container_div2 bold_font bold_font_mobile schedule':'container_div2 bold_font schedule'}>Free Consultation</p>
          </Flex>
          <Flex marginLeft={!props.val && '30%'} padding={props.val && '0px 0px 30px 0px'}>
              <button className={props.val?'button_schedule schedule_mobile':'button_schedule'}>Request a Schedule</button>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default Schedule