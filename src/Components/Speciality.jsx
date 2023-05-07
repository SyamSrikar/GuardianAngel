import React from 'react'
import { Flex,Img } from '@chakra-ui/react'
import Heading from './Heading'
import Specialitymap from './Specialitymap'
import '../specialist.css'

const speciality=[
    'Guidance on Choosing Doctors in the relevant specialty.',
    'Expert Evaluation of Medical Tourism.',
    'Multiple Treatment Options, Plans, and Privacy from the best hospital in India.',
    'Video Consultation with Doctors Before and After Medical Treatments.',
    'Facilitation of second opinion',
    'Travel Guidance',
    'Airport Pickup',
    'Consult with the best doctors in India from Nigeria',
]

const Speciality=(props)=> {

  return ( 
    <Flex id={'speciality'} flexDir={'column'} padding={props.val?'30px 15px 30px 15px':'20px 80px'} margin={!props.val && '50px 0px 0px'}>
        <Heading value={props.val} heading1={'OUR MAJOR'} heading2={' SPECIALITY'}/>
        <Flex className={'content_container'} marginTop={'30px'} >
            <Flex width={!props.val && '40%'} zIndex={props.val && '-1'} position={ props.val && 'absolute'}>
                <Img className={props.val?'nurse_img nurse_mobile':'nurse_img'} src={process.env.PUBLIC_URL+'/images/nurse.png'}/>
            </Flex>
            <Flex justifyContent={'center'} width={props.val && '90%'}  paddingLeft={!props.val && '100px'}>
                <Flex flexDir={'column'} justifyContent={'space-evenly'}>
                {
                    speciality.map((item,index)=><Specialitymap key={index} value={props.val} text={item}/>)
                }
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Speciality