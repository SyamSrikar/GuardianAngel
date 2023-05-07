import React from 'react'
import { Flex } from '@chakra-ui/react'
import Heading from './Heading'
import Imagegallery from './Imagegallery'

const Treatment=(props) =>{

    const treatments=[
        {
            img:'t1.png',
            title:'This is a form of alternative medicine that integrates'
        },
        {
            img:'t2.png',
            title:'India has become one of the most sought after'
        },
        {
            img:'t3.png',
            title:'This is a form of alternative medicine that integrates'
        },
        {
            img:'t4.png',
            title:"Ayurveda is the essence of the discoveries made by"
        },
        {
            img:'t5.png',
            title:"Today's medical technology facilitates surgical transplantation of hair follicles"
        },
        {
            img:'t6.png',
            title:'Guardian Angels is not only your relied medical tourism'
        }
    ]
  return (
    <Flex id={'treatment'} flexDir={'column'} padding={props.val?'50px 15px':'100px 80px'} justifyContent={'center'} alignItems={'center'} >
        <Heading  value={props.val} heading1={'TREATMENT'} heading2={' WE PROVIDE'}/>   
        <Flex className={props.val?'treatment_tagline tagline_mobile':'treatment_tagline'}><p className={props.val?'treatment_text treatment_text_mobile':'treatment_text'}>Enjoy the comforts of hassle free travel and experience the benefits of world class treatement at affordable rates through the Gaurdian Angels of your health and wellness</p></Flex>
        <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
            {
                treatments.map((object,index)=><Imagegallery key={index} value={props.val} data={object}/>)
            }
        </Flex>
    </Flex>
  )
}

export default Treatment