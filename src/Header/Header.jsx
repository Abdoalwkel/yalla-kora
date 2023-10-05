import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Championships from "../Championships/Championships";
import './Header.scss'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col } from 'react-bootstrap';
// react roouter

import {BrowserRouter , Routes , Route , Router , Link , NavLink } from "react-router-dom"
// icons
import {ImOpera, ImWhatsapp} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa6'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {FaAngleRight } from 'react-icons/fa6'
import {AiFillCaretRight } from 'react-icons/ai'
// img
import gimine from '../assets/geminiLogo.png'
import Logo from '../assets/Logo.png'
import celopatra from '../assets/celopatra.jpg'
import zamalek from '../assets/zamalek.jpg'
import egyptolympic from '../assets/egyptolympic.jpg'
import rossya from '../assets/rossya.jpg'
import grypt1 from '../assets/grypt1.jpg'
import cameron from '../assets/cameron.jpg'
import Luxemborg from '../assets/Luxemborg.jpg'
import Portugal from '../assets/Portugal.jpg'
import Croatia from '../assets/Croatia.jpg'
import Armenia from '../assets/Armenia.jpg'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'
import news4 from '../assets/news4.jpg'
import news5 from '../assets/news5.jpg'
import news6 from '../assets/news6.jpg'
import person from '../assets/person.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import team8 from '../assets/team8.jpg'
import team9 from '../assets/team9.jpg'
const Header = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="home">
    <div className="header-link">

    <a href="" className="all-matches"> <FaAngleLeft /> جميع المباريات</a>


      <div className="right-link">
        <a href="">مباريات  الامس  </a>

        <a href="">مباريات اليوم</a>
        
        <a href=""> مباريات غدا</a>
      </div>

    </div>



    <div className="slickk">
        <Slider {...settings}>
          <div className="slide">
          <a href="">

<div className="name">
        <p>مباريات اندية-ودية</p> 
        </div>

      <div className="team"> 
    <div className="team1">
      <img src={celopatra} alt="" />
      <p>سيراميكا كليوباترا</p>
    </div>
    <div className="time">
      <p>لم تبدا بعد</p>
    </div>
    <div className="team2">
      <img src={zamalek} alt="" />
      <p>نادى الزمالك</p>
    </div>
      </div>

      <div className="hestory"> <p>17:00</p> </div>

</a>          </div>

<div className="slide">
<a href="">

<div className="name">
        <p>مباريات اندية-منتخبات</p> 
        </div>

      <div className="team"> 
    <div className="team1">
      <img src={rossya} alt="" />
      <p> روسيا اوليمبى</p>
    </div>
    <div className="time">
      <p>لم تبدا بعد</p>
    </div>
    <div className="team2">
      <img src={egyptolympic} alt="" />
      <p>مصر اوليمبى</p>
    </div>
      </div>

      <div className="hestory"> <p>19:00</p> </div>

</a>
</div>
<div className="slide">
<a href="">

<div className="name">
        <p> بطولة افريقيا للكرة الطائرى للرجال</p> 
        </div>

      <div className="team"> 
    <div className="team1">
      <img src={grypt1} alt="" />
      <p>مصر</p>
    </div>
    <div className="time">
      <p>لم تبدا بعد</p>
    </div>
    <div className="team2">
      <img src={cameron} alt="" />
      <p> الكاميرون</p>
    </div>
      </div>

      <div className="hestory"> <p>17:00</p> </div>

</a>
</div>
<div className="slide">
<a href="">

<div className="name">
        <p>تصفيات امم اوروبا</p> 
        </div>

      <div className="team"> 
    <div className="team1">
      <img src={Luxemborg} alt="" />
      <p> لوكسمبورج</p>
    </div>
    <div className="time">
      <p>لم تبدا بعد</p>
    </div>
    <div className="team2">
      <img src={Portugal} alt="" />
      <p> البرتغال</p>
    </div>
      </div>

      <div className="hestory"> <p>21:45</p> </div>

</a>
</div>
<div className="slide">
<a href="">

<div className="name">
        <p>تصفيات امم اوروبا</p> 
        </div>

      <div className="team"> 
    <div className="team1">
      <img src={Croatia} alt="" />
      <p> كرواتيا</p>
    </div>
    <div className="time">
      <p>لم تبدا بعد</p>
    </div>
    <div className="team2">
      <img src={Armenia} alt="" />
      <p>ارمينيا</p>
    </div>
      </div>

      <div className="hestory"> <p>19:00</p> </div>

</a>
</div>

        </Slider>
      </div>



    <section className='header-material'>

<div className="side-check">

<div className="check">
  <h3>استطلاع يلاكورة</h3>
  <p className="header-name">من يتوج بلقب السوبر الافريقى؟</p>
  <div className="check-box">
<span>
  <input type="radio" name="rate" />
  <p>الاهلى المصرى</p>
</span>

<span>
  <input type="radio" name="rate"  />
  <p> اتحاد العاصمة الجزائرى</p>
</span>

  </div>
  <button>تصويت</button>
</div>

</div>




<Container>
  <Row className="topp">

  <Col className="top-news2" lg={4} md={12} sm={12} >

    <div className="left-new">

        <Row className="continar">
          <Col md={12} sm={12} className="card1">

          <a href="" className="litel-card">
<div className="titel">
<p>الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>

          </Col>

          <Col md={12} sm={12} style={{ marginTop:'10px'}} className="card1">
          <a href="">
      <div className="titel">
<p>الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
          </Col>
        </Row>





    </div>



</Col>

    <Col className="top-news" lg={8} md={12} sm={12}>

<div className="right-new">


<a href="">
      <img src={news1} alt="" />
   <p>الدورى الانجليزى</p>
   <h5> بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    </a>

</div>
    </Col>

  </Row>

<Row className="bottom-new">
  <Col lg={4} md={12} className="card1">
    <div className="left-new">
    <a href="" className="litel-card">
      <div className="titel">
<p>الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>

<img src={news2} alt="" />

    </a>
    </div>
  </Col>

  <Col lg={4} md={12} className="card1" >
  <div className="left-new">
    <a href="" className="litel-card">
      <div className="titel">
<p>الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
    </div>
  </Col>

  <Col lg={4} md={12} className="card1">
  <div className="left-new">
    <a href="" className="litel-card">
      <div className="titel">
<p>الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
    </div>
  </Col>

</Row>

</Container>

    </section>










































<div className="news">

<div className="news-header">
<a href=""><FaArrowLeftLong /> المزيد</a>

  <a href="">الاخبار</a>
</div>

<Container>
  <Row className="news-container">
    <Col lg={3} md={12} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>

    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" ><div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>



</div>
</Col>


<Col lg={3} md={12} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>

    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" ><div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>



</div>
</Col>


<Col lg={3} md={12} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>

    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={3} md={12} sm={12} className="new-box" ><div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>



</div>

</Col>
  
  </Row>
</Container>


</div>


<div className="statictics">
<div className="static-header">
  <div className="raw-a">
    <a href=""> <FaAngleLeft /> </a>
    <a href=""> <FaAngleRight /> </a>
  </div>

  <a href="" className="head-namme">احصائيات الدورى المصرى</a>


</div>

<Container className="static-contain">
  <Row className="static-row">

  <Col lg={4} md={12} sm={12} >
      
      <div className="static-card">
        <div className="small-titel"><p>المباريات القادمة</p></div>
        
        <div className="small-cards">

          <div className="cardd1">
            <div className="profileT">
              <img src={team4}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> الداخلية</p>
              </div>
            </div>

            <div className="time">
              <p className="clock">16:00</p>
              <p>20/9/2023</p>
            </div>

            <div className="profileT">
              <img src={team5}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> انبى</p>
              </div>
            </div>
          </div>

          <div className="cardd1">
            <div className="profileT">
              <img src={team6}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> المقاولون العرب</p>
              </div>
            </div>

            <div className="time">
              <p className="clock">19:00</p>
              <p>20/9/2023</p>
            </div>

            <div className="profileT">
              <img src={team2}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> زد</p>
              </div>
            </div>
          </div>

          <div className="cardd1">
            <div className="profileT">
              <img src={team8}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> سموحة</p>
              </div>
            </div>

            <div className="time">
              <p className="clock">19:00</p>
              <p>20/9/2023</p>
            </div>

            <div className="profileT">
              <img src={team9}alt="" className="team-iimg" />
              <div className="nameteam">
                <p className="first"> الجونة</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="down-a">
          <a href="" className="all-goals"> <FaArrowLeftLong /> كل المباريات</a>
        </div>
      </div>
      
      </Col> 
      
          <Col lg={4} md={12} sm={12} >
      
      <div className="static-card">
        <div className="small-titel"><p>ترتيب الفرق</p></div>
        
        <div className="small-cards">
          <div className="cardd1">
            <div className="profile">
              <img src={team1}alt="" className="team" />
              <div className="name">
                <p className="first"> طلائع الجيش</p>
              </div>
            </div>
            <div className="number">
              <p>3 <span>هدف</span></p>
              
            </div>
          </div>

          <div className="cardd1">
            <div className="profile">
              <img src={team2}alt="" className="team" />
              <div className="name">
                <p className="first"> زد</p>
              </div>
            </div>
            <div className="number">
              <p>3 <span>هدف</span></p>
              
            </div>
          </div>

          <div className="cardd1">
            <div className="profile">
              <img src={team3}alt="" className="team" />
              <div className="name">
                <p className="first">الاهلى </p>
              </div>
            </div>
            <div className="number">
              <p>1 <span>هدف</span></p>
              
            </div>
          </div>

        </div>
        
        <div className="down-a">
          <a href="" className="all-goals"> <FaArrowLeftLong /> كل الترتيب</a>
        </div>
      </div>
      
      </Col>  



        <Col lg={4} md={12} sm={12} >
      <div className="static-card">
        <div className="small-titel"><p>الهدافون</p></div>
        
        <div className="small-cards">
          <div className="cardd1">
            <div className="profile">
              <img src={person}alt="" className="img-profile" />
              <div className="name">
                <p className="first">عبدالرحمن شيكا</p>
                <p className="last">طلائع الجيش</p>
              </div>
            </div>
            <div className="number">
              <p>1 <span>هدف</span></p>
              
            </div>
          </div>

          <div className="cardd1">
            <div className="profile">
              <img src={person}alt="" className="img-profile" />
              <div className="name">
                <p className="first">مصطفى سعيد ميسى</p>
                <p className="last"> زد</p>
              </div>
            </div>
            <div className="number">
              <p>1 <span>هدف</span></p>
              
            </div>
          </div>

          <div className="cardd1">
            <div className="profile">
              <img src={person}alt=""  className="img-profile"/>
              <div className="name">
                <p className="first">عبدالرحمن شيكا</p>
                <p className="last">طلائع الجيش</p>
              </div>
            </div>
            <div className="number">
              <p>1 <span>هدف</span></p>
              
            </div>
          </div>

        </div>
        
        <div className="down-a">
          <a href="" className="all-goals"> <FaArrowLeftLong /> كل الهدافين</a>
        </div>
      </div>
      </Col>
  </Row>
</Container>

</div>



<div className="videos">

<div className="video-header">
  <div className="raw-a">
    <a href="">المزيد</a>
  </div>

  <a href="" className="head-namme">صور و فيديوهات</a>


</div>


<Container>
  <Row className="video-cont">


    <Col lg={6} md={12} sm={12}>

    <Container>
  <Row className="news-container">
  <Col lg={6} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />


    </a>
</div>
    </Col>

    <Col lg={6} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />


    </a>
</div>

    </Col>

    <Col lg={6} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
</div>
    </Col>

    <Col lg={6} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
</div>
    </Col>


  
  </Row>
</Container>

    </Col>

    <Col lg={6} md={12} sm={12} className="new-boxx">
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />


    </a>
</div> 
</Col>
  </Row>


  <Row className="video-contt">
  <Col lg={3} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />


    </a>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />


    </a>
</div>

    </Col>

    <Col lg={3} md={6} sm={12}className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className="new-box">
<div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
      <p className="head-name"> <AiFillCaretRight /> </p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />

    </a>
</div>
    </Col>
</Row>
</Container>





</div>

<div className="articles">

<div className="article-header">
  <div className="raw-a">
    <a href="">المزيد</a>
  </div>

  <a href="" className="head-namme">كلام فى الكورة</a>


</div>

  
<Container className="all-art-cont">
  <Row className="articl-row">

  <Col lg={6} md={12} sm={12} className="article-box">


    
<Container >
  <Row className="low-row">
    <Col lg={6} md={6} sm={12} className="article-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={6} md={6} sm={12} className="article-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={6} md={6} sm={12} className="article-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>
    <Col lg={6} md={6} sm={12} className="article-box" >
    <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
    </Col>


  </Row>
</Container>
</Col>



     <Col lg={6} md={12} sm={12} className="article-boxx" >
       <div className="card-news">
<a href="" className="litel-card-new">
      <div className="titel-new">
<p className="head-name">الدورى الانجليزى</p>
   <h5 > بغياب صلاح.. "فيفا" يعلن عن المرشحين لجائزة أفضل لاعب في العالم </h5>
    
</div>
<img src={news2} alt="" />
<p className="box-p">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Odio quasi numquam nam ipsa est soluta porro et non,
   sunt sit. Ducimus, consequuntur! Nisi dolor
  e laboriosam reiciendis asperiores maiores at blanditiis!
</p>
<div className="date">
  <p className="text-date"> سبتمبر 18 2023 | 05:25 م
  </p>
</div>

    </a>
</div>
</Col>





 </Row>
  <Row>
     <Col lg={6} md={12} sm={12} ></Col>
      </Row>
  
</Container>
</div>

{/* footer */}
<footer>
  <div className="logo">
    <img src={Logo} alt="" />
  </div>
  <div className="footer-links">
    



  
  <Link to=""  className='llink'>ريلز</Link>

  <Link to=""  className='llink'> esports</Link>

  <Link to=""  className='llink' style={{width:"100px"}}>اخر الانتقالات</Link>

  <Link to=""  className='llink'> مالتيميديا </Link>

  <Link to="/Championships"  className='llink'> دوريات و بطولات </Link>

  <Link to=""  className='llink'>الاخبار</Link>

  <Link to=""  className='llink linkkk'>المباريات</Link>







  </div>






  <div className="footer-icons">
  <ul className="icon-list">

<li className="icon-item"><a href="/Match" className="icon-link">    <ImWhatsapp />
</a></li>
<li className="icon-item"><a href="" className="icon-link">    <BsInstagram />
</a></li>
<li className="icon-item"><a href="" className="icon-link">    <TfiYoutube />
</a></li>
<li className="icon-item"><a href="" className="icon-link">    <FaXTwitter />
</a></li>
<li className="icon-item"><a href="" className="icon-link">    <FaFacebookF />
</a></li>
</ul>
  </div>
  <hr />
<div className="end">
  <div className="left">
    <img src={gimine} alt="" />
    <p>جميع الحقوق محفوظة لدى  ©</p>
  </div>
  <div className="right">
    <a href="">للاعلان معنا</a>
    <a href="">سياسة الخصوصية</a>
    <Link to="/Support" >الدعم</Link>

  </div>
</div>

</footer>
<Routes>
  <Route path="/Championships" element={ <Championships /> } />
</Routes>

  </div>
  )
}

export default Header
 