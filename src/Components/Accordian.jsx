import React from 'react'
import { useState } from 'react';
import {Flex} from '@chakra-ui/react';
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import '../App.css';
import '../faq.css'

const Accordian = (props)=> {

    const [isOpen, setIsOpen] = useState(false);
    return (<Flex
    marginTop={'15px'}
    flexDir={'column'}
    padding={'5px'} 
    borderBottom={'1px'}
    borderColor={'#505050'}
    width={'100%'}
    >
        <Flex 
            padding={'10px 1px'}
            fontSize={'20px'}   
            cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}  alignItems={'center'} justifyContent={'space-between'}>
            <Flex width={'5%'}>
                {isOpen?<HiChevronDoubleUp color={'white'} size={'25px'}/>:<HiChevronDoubleDown color={'white'} size={'25px'}/>}
            </Flex>
            <Flex width={'95%'} color={'white'} flexWrap={'wrap'}><p className={props.value?'question question_mobile':'question'}>{props.question}</p></Flex>
        </Flex>
        <Flex fontSize={'20px'} fontWeight={'700'} height={isOpen?'inherit':0} paddingX={'5%'} overflow={isOpen?'auto':'hidden'} color={'#FAFAFA'} borderColor={isOpen?'white':'None'}>
            <p className={props.value?'answer answer_mobile':'answer'}>{props.answer}</p>
        </Flex>
    </Flex>);
}

export default Accordian