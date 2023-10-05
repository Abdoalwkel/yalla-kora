import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../support/Support.scss';
import Logo from '../assets/Logo.png';

const Support = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vilkvji', 'template_a63wyfu', form.current, '5d58TGAffS4a1naP7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  

  return (
    <div className='support'>
<div className="support-sec">

<h1>مرحبا ف صفحة دعم يلا كورة</h1>
<p>اشرح المشكلة بالتفصيل لو سمحت ف المربع بالاسفل</p>
<img src={Logo} alt="" />
<form ref={form} onSubmit={sendEmail}>
    <input type="text" placeholder='اسمك' name="name" />
    <input type="email" placeholder='البريد الالكترونى' name='email' />
    <textarea name="message"  placeholder='المشكلة'  id="" cols="30" rows="10" ></textarea>
<button type="submit"> ارسال </button>
</form>

</div>
    </div>
  )
}

export default Support



// service_vilkvji