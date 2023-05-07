import React from 'react'
import { Flex,Img } from '@chakra-ui/react'
import Heading from './Heading'
import Workcontainer from './Workcontainer'

const work=[
  {
    img:'Iwork1.png',
    desc:'Contact Us! You will get best medical advice & cost estimation'
  },
  {
    img:'Iwork2.png',
    desc:'You choose the best hospital and best treatment for your health'
  },
  {
    img:'Iwork3.png',
    desc:'We arrange your medical visa, appointments, accomodation, etc'
  },
  {
    img:'Iwork4.png',
    desc:'We organize your entire treatment & other logistics as you arrive in India'
  },
  {
    img:'Iwork5.png',
    desc:'You recover and undergo a post-treatment check-up'
  }
]

const Work=(props) =>{
  return (
    <Flex id={'work'} flexDir={'column'} padding={props.val?'50px 15px':'60px 80px'} justifyContent={'center'} alignItems={'center'}>
      <Heading  value={props.val} heading1={'HOW WE'} heading2={' WORK'} />
      <Flex justifyContent={'center'} width={'100%'} alignItems={'center'} padding={props.val?'50px 0px 0px 0px':'80px 0px 0px 0px'} className='timeline_container'>
        <Flex justifyContent={'center'} backgroundColor={'white'} position={'relative'}>
          <div className={props.val?'vertical':'horizontal'}></div>
          <Flex flexDir={props.val?'column':'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} zIndex={'100'}>
            {
              work.map((object,index)=><Workcontainer key={index} value={props.val} data={object} />)
            }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Work