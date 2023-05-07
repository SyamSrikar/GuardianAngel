import {React, useState } from 'react'
import { Flex,Img,Button } from '@chakra-ui/react'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import '../nav.css'

const Nav=(props)=> {
    const[menu,setMenu]=useState(false)
  return (
  <>
    <Flex backgroundColor={'#E8E8E8'} flexDir={'row'} justifyContent={props.val?menu?'flex-end':'space-between':'space-between'} padding={props.val?menu?'20px 15px 20px':'12px 20px 12px 20px':'30px 50px'} alignItems={'center'} position={props.value && 'fixed'} top={props.value && '0'} zIndex={'100'} >
        {!menu && <Flex alignItems={'center'}>
        <i className="fa fa-map-marker"></i>
        <p className={props.val?'nav_location nav_location_mobile':'nav_location'}>No 2 adwumi estate oregun ikeja</p>
        </Flex>}
        {
            !props.val && <div className={'header_links'}>
            <a href="#Home">Home</a>
            <a href="#about">About Us</a>
            <a href="#treatment">Treatments</a>
            <a href="#work">How we work</a>
            <a href="#faqs">FAQ's</a> 
            <a href="#speciality">Speciality</a>
            <a href="#contact">Contact Us</a>

        </div> 
        }
        {props.val && <Flex>{menu?<CloseIcon width={'20px'} height={'20px'} onClick={()=>setMenu(!menu)}/>:<HamburgerIcon width={'25px'} height={'25px'} onClick={()=>setMenu(!menu)}/>}</Flex> }      
    </Flex>
    {props.val && <div className={menu?'links_mobile_open':'links_mobile_close'}>
  
            <a href="#home" onClick={()=>setMenu(!menu)}>Home</a>
            <a href="#about" onClick={()=>setMenu(!menu)}>About Us</a>
            <a href="#treatment" onClick={()=>setMenu(!menu)}>Treatments</a>
            <a href="#work" onClick={()=>setMenu(!menu)}>How we work</a>
            <a href="#faqs" onClick={()=>setMenu(!menu)}>FAQ's</a>
            <a href="#speciality" onClick={()=>setMenu(!menu)}>Speciality</a>
            <a href="#contact" onClick={()=>setMenu(!menu)}>Contact Us</a>
            </div>
        }
    </>
  )
}

export default Nav