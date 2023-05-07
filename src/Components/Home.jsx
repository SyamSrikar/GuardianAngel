import { Flex,Img} from '@chakra-ui/react'
import React from 'react'
import '../home.css'
import { CiLinkedin,CiTwitter,CiFacebook } from "react-icons/ci";

const Home=(props)=> {
  return (
        <Flex flexDir={props.val?'column':'row'} padding={props.val && '20px 0px 0px 0px'} id='home' position={'relative'}>
            <Flex width={props.val?'100%':'50%'}  justifyContent={'flex-start'} padding={props.val?'30px 0px':'30px 0px'}  >
                <Flex flexDir={'column'}  justifyContent={'space-evenly'} padding={props.val?'0px 50px 0px':'20px 80px'}> 
                    <Flex justifyContent={props.val && 'center'} padding={'30px 0px'}><Img src={process.env.PUBLIC_URL+'/images/logo.png'}></Img></Flex>
                    <Flex className='home_container' flexDir={'column'}>
                        <p className={props.val?'container_div1 italic_font font_mobile':'container_div1 italic_font'}>Expert Guidance</p>
                        <p className={props.val?'container_div2 bold_font bold_font_mobile':'container_div2 bold_font'}>CONSULT THE BEST <br/>DOCTOR IN INDIA</p>
                    </Flex>
                    <button className={props.val?'button button_mobile':'button'}>Know More</button>
                </Flex>
            </Flex>
            <Flex  width={props.val?'100%':'50%'} backgroundColor={'#6B3273'} justifyContent={'flex-end'} padding={'20px 0px'} >
                <Flex justifyContent={'space-evenly'} flexDir={'column'} padding={props.val?'20px 20px 0px 0px':'20px 80px'}>
                    <Flex justifyContent={'flex-end'} >
                            <Flex className='social_icons'><CiFacebook /></Flex>
                            <Flex className='social_icons'><CiTwitter   /></Flex>
                            <Flex className='social_icons'><CiLinkedin /></Flex>                    
                    </Flex>
                    <Flex flexDir={'column'} className={props.val?'home_left font_mobile':'home_left'} >
                        <Flex className={'left_position'}>
                            <div className='home_left_div'>
                                TREATMENTS AT <br/>AFFORDABLE PRICE
                            </div>
                            <div >
                                <Img src={process.env.PUBLIC_URL+'/images/img1.png'}></Img>
                            </div>
                        </Flex>
                        <Flex className={'left_position'}> 
                            <div className='home_left_div'>
                                    MANAGE <br/>ONLINE
                            </div>
                            <div>
                                <Img src={process.env.PUBLIC_URL+'/images/img2.png'}></Img>
                            </div>
                        </Flex>
                        <Flex className={'left_position'}>
                            <div className='home_left_div'>
                                CLINIC <br/>CONSULTATION
                            </div>
                            <div>
                                <Img src={process.env.PUBLIC_URL+'/images/img3.png'}></Img>
                            </div>
                        </Flex>
                    </Flex>
                    <Flex flexDir={'column'} padding={'20px 0px'}>
                        <Flex  className={'left_position'} marginBottom={'15px'}>
                            <i className="fa fa-envelope home_icon" ></i> 
                            <p className={props.val?'home_left_div about_mail_mobile':'home_left_div about_mail'}>info@globalangles.com</p>    
                        </Flex>
                        <Flex  className={'left_position'} >
                            <Flex className={'contact_home'}>
                            <i className="fa fa-phone home_icon" ></i> 
                            <p className={props.val?'home_left_div about_phone_mobile':'home_left_div about_phone'}>Hotline Number: +234 916 956 2959</p>
                            </Flex>    
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {!props.val && <Img className={props.val?'doctor_mobile':'doctor'} src={process.env.PUBLIC_URL+'/images/doctor.png'}></Img>}
        </Flex>
  )
}

export default Home