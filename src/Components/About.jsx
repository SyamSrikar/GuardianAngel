import { Flex, Img } from '@chakra-ui/react'
import React from 'react'
import Heading from './Heading'
import '../home.css'
import '../about.css'

const About=(props)=> {
  return (
    <Flex id={'about'} flexDir={'column'} padding={props.val?'50px 15px 30px 15px':'50px 80px '}  backgroundColor={ '#E8E8E8'}>
        <Heading value={props.val} heading1={'ABOUT GUARDIAN'} heading2={' ANGELS'}/>
        <Flex  justifyContent={props.val && 'center'} paddingTop={props.val?'30px':'80px'}>   
            <Flex width={props.val?'100%':'60%'} className={props.val && 'about_container_mobile'}> 
                <Flex flexDir={'column'} width={props.val?'90%':'100%'} justifyContent={'space-evenly'}>
                    <div className={props.val?'bold_font_mobile':'bold_font'}>MEDICAL JOURNEY GUIDED {!props.val && <br/>} BY EXPERTS</div>
                    <div className={props.val?'about_content content_mobile':'about_content'}>Guardian Angels is your trusted partner who facilitates all your end-to-end needs in medical travel.
                            India has also emerged as the destination for superlative treatment standards coupled with extreme
                            affordability.</div>
                    <div className={props.val?'about_content content_mobile':'about_content'}>The assistance extended by us spans right from travel logistics, visa, transportation for medical
                            treatment, surgery, hospitalisation, stay and travel within India. We collaborate with the best hospitals
                            and doctors in India to provide you the finest treatment at the most attractive rates. The hospitals are
                            well equipped with state-of-art facilities and the best doctors and nursing staff in the country who have
                            undergone professional training abroad. The hospitals have been selected keeping in mind the
                            international standards of hygiene. Moreover the land of yoga and meditation is also the best place on
                            earth suited for rehabitation.</div>
                    <div style={{padding:'30px 0px'}}><button className={props.val?'button button_mobile':'button'}>Learn More</button></div>
                </Flex>
            </Flex>

            {!props.val && <Flex justifyContent={'center'} height={props.val &&'90%'} width={'45%'} padding={props.val && '40px 0px'} position={props.val && 'absolute'}>
                <div className='wrapper'>
                    <div className='image_container'>
                        <Img className={props.val?'about_image about_image_mobile':'about_image'} src={process.env.PUBLIC_URL+'/images/doctor2.png'}/>
                    </div>
                    <div className={props.val?'bg bg_mobile':'bg'} opacity={props.val?'0.3':'1'} / >
                    <div className={props.val?'open open_mobile':'open'}>Open <br/>24/7</div>
                </div>
            </Flex>}
            
        </Flex>
    </Flex>
  )
}

export default About