import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import '../specialist.css'
import '../contact.css'

const Contact=(props)=> {
    
    const options = ['One', 'Two', 'Three', 'Four', 'Five'];
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[select,setSelect]=useState('');
    const[comment,setComment]=useState('')

    function Output(){
        console.log("Form Submitted Successfully")
    }


  return (
    <Flex id={'contact'} padding={props.val?'0px 15px 0px':'0px 80px'} backgroundColor={'#8b437f'} flexDir={props.val && 'column'} >
        <Flex width={'100%'} justifyContent={'flex-start'} height={props.val && '100%'} alignItems={'center'} margin={props.val && '20px 0px'}>
            <Flex flexDir={'column'} height={'90%'} width={'100%'} justifyContent={'space-evenly'} >
                <p height={'30%'} className={props.val?'contact_heading contact_mobile':'contact_heading'}>FEEL FREE TO CONTACT US FOR ANY CONSULT REASON </p>
                <Flex flexDir={'column'} justifyContent={'space-between'} height={'50%'} >
                    <Flex alignItems={'center'} padding={props.val && '10px 0px'}>
                        <Flex className={props.val?'icon_contact_div div_mobile':'icon_contact_div'}><i className={props.val?"fa fa-map-marker fa_mobile marker_mobile":"fa fa-map-marker"}></i></Flex>
                        <p className={props.val?'contact_text text_mobile':'contact_text'}>Location: <br/>No 2 adwumi estate oregun ikeja</p>
                    </Flex>
                    <Flex alignItems={'center'} padding={props.val && '10px 0px'}>
                        <Flex className={props.val?'icon_contact_div div_mobile':'icon_contact_div'}><i className={props.val?"fa fa-phone fa_mobile fa-phone_mobile":"fa fa-phone"}></i></Flex>
                        <p className={props.val?'contact_text text_mobile':'contact_text'}>Call Us:<br/>+234 916 956 2959</p>
                    </Flex>
                    <Flex alignItems={'center'} padding={props.val && '10px 0px'}>
                        <Flex className={props.val?'icon_contact_div div_mobile':'icon_contact_div'}><i className={props.val?"fa fa_envelop fa-envelope fa-envelope_mobile":"fa fa-envelope"}></i></Flex>
                        <p className={props.val?'contact_text text_mobile':'contact_text'}>info@globalangles.com</p>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex width={'100%'} justifyContent={props.val?'flex-start':'flex-end'}>
            <Flex backgroundColor={'black'} width={'100%'} height={'100%'} justifyContent={'center'}>
                <Flex flexDir={'column'} width={props.val?'100%':'80%'} height={'fit-content'} padding={'20px 20px 10px 20px'}>
                    <Flex className={props.val?'input_container_mobile':'input_container' }>
                        <input type='text' className={props.val?'input_mobile':''} placeholder='First Name' onChange={(e)=>setFname(e.target.value)} required={true}></input>
                        <input type='text' className={props.val?'input_mobile':''} placeholder='Last Name' onChange={(e)=>setLname(e.target.value)} required={true}></input>
                    </Flex>
                    <Flex className={props.val?'input_container_mobile':'input_container' }>
                        <input type='number' className={props.val?'input_mobile':''} placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} required={true}></input>
                        <input type='email' className={props.val?'input_mobile':''} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}  required={true}></input>
                    </Flex>
                    <Flex className={props.val?'input_container_mobile':'input_container' } width={'100%'}>
                        <select className={props.val?'select_mobile':''} onChange={(e)=>setSelect(e.target.value)}>
                        <option className={props.val?'option_mobile':''}>Select a Subject</option>
                        {options.map((option, index) => 
                        {
                            return <option className={props.val?'option_mobile':''} key={index} >{option} </option>
                        })}
                        </select>
                    </Flex>
                    <Flex className={props.val?'input_container_mobile':'input_container' } width={'100%'} >
                        <textarea className={props.val?'textarea_mobile':''} placeholder='Comment' rows="6" onChange={(e)=>setComment(e.target.value)} ></textarea>
                    </Flex>
                    <Flex padding={'20px 0px'}>
                        <button type="submit" onSubmit={()=>Output()} className={props.val?'button submit_button button_mobile':'button submit_button'}>Submit</button>
                    </Flex>
                </Flex>
            </Flex>         
        </Flex>
    </Flex>
  )
}

export default Contact