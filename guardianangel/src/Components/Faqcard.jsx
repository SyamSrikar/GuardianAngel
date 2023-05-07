import React from 'react'
import {Flex, Img } from '@chakra-ui/react'
import '../faq.css'
import Carousel from 'react-bootstrap/Carousel';

function Faqcard() {
    const hospitals=[
        'hospital1.png','hospital2.png','hospital3.png'
    ]
    
    const prevIcon=()=>{
      <span className='glyphicon glyphicon-chevron-left'></span>
    }

    const nextIcon=()=>{
      <span className='glyphicon glyphicon-chevron-right'></span>
    }

  return (


    <Carousel >
        {
            hospitals.map((img,index)=><Carousel.Item key={index}>
                      <Img className="d-block w-100" width={'100%'} src={process.env.PUBLIC_URL+'/images/'+img}/>
                      </Carousel.Item>
      )
        }
    </Carousel>
  )
}

export default Faqcard