import React from 'react'
import { Flex } from '@chakra-ui/react'
import '../faq.css'
import Accordian from './Accordian'
import Faqcard from './Faqcard'

const faq=[
    {
        q:'Why India is Best for Medical Tourism',
        a:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        q:'Why India is Best for Medical Tourism',
        a:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        q:'Why India is Best for Medical Tourism',
        a:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        q:'Why India is Best for Medical Tourism',
        a:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
]
const Faq=(props)=> {
  return (
    <Flex id={'faqs'} padding={props.val?'0px 15px 0px':'0px 80px'} backgroundColor={'#8b437f'}>
        <Flex width={props.val?'100%':'60%'} margin={'50px 0px'}>
            <Flex flexDir={'column'} width={'100%'} >
                <Flex justifyContent={'flex-start'} height={props.val?'10%':'20%'} alignItems={'center'}>
                    <p className={props.val?'faq_heading faq_mobile':'faq_heading'}><span className={props.val?'faq_left_heading faq_left_heading_mobile':'faq_left_heading'}>FAQS ABOUT</span>MEDICAL</p>
                </Flex>

                <Flex flexDir={'column'} padding={'30px 0px 0px 0px'}>
                {
                    faq.map((object,index)=><Accordian value={props.val} key={index} question={object.q} answer={object.a}/>)
                }
                    
                </Flex>
            </Flex>
        </Flex>

        {!props.val && <Flex width={'40%'} >
                <Faqcard/>
        </Flex>}

    </Flex>
  )
}

export default Faq