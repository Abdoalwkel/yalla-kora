import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Championships.scss'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col , } from 'react-bootstrap';
// router
import {BrowserRouter , Routes , Route , Router , Link , NavLink } from "react-router-dom"
// icons
import {ImWhatsapp} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa';
import {FaArrowLeftLong} from 'react-icons/fa6'
import {FaAngleRight } from 'react-icons/fa6'

import {FaAngleLeft} from 'react-icons/fa6'
import {AiFillCaretRight} from 'react-icons/ai'
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
import NationsofeEurop from '../assets/NationsofeEurop.png'
import CAFChampionsLeague from '../assets/CAFChampionsLeague.png'
import UEFAChampionsLeague from '../assets/UEFAChampionsLeague.png'
import AfricanLeague from '../assets/AfricanLeague.png'
import caf from '../assets/caf.png'
import AFCChampionsLeague from '../assets/AFCChampionsLeague.png'
import EuropaLeague from '../assets/EuropaLeague.png'
import CAFConfederation from '../assets/CAFConfederation.png'
import southamericalogo from '../assets/southamericalogo.png'
import Conference from '../assets/Conference.png'
import AFCAsianCup from '../assets/AFCAsianCup.png'

import egyptionleauge from '../assets/egyptionleauge.png'
import EgyptionCup from '../assets/EgyptionCup.png'
import rabeth from '../assets/rabeth.jpg'
import worldcup from '../assets/worldcup.jpg'

import PremierLeague from '../assets/PremierLeague.png'
import spanishleague from '../assets/spanishleague.png'
import EFLCup from '../assets/EFLCup.png'
import italyinLeauge from '../assets/italyinLeauge.jpg'
import Bundesliga from '../assets/Bundesliga.png'
import franchleauge from '../assets/franchleauge.jpg'
import GermanyCup from '../assets/GermanyCup.png'
import SuperLig from '../assets/SuperLig.png'
import bortogalLeauge from '../assets/bortogalLeauge.jpg'


import Untitled from '../assets/Untitled.jpg'
import saudialealuge from '../assets/saudialealuge.jpg'
import Saudi from '../assets/Saudi.png'
import TunisianLeague from '../assets/TunisianLeague.png'
import BOTOLAPRO from '../assets/BOTOLAPRO.jpg'
import QatarLeague from '../assets/QatarLeague.png'
import emaritsleauge from '../assets/emaritsleauge.jpg'

import lastnews1 from '../assets/lastnews1.jpg'
import lastnews2 from '../assets/lastnews2.jpg'
import lastnews3 from '../assets/lastnews3.jpg'
import lastnews4 from '../assets/lastnews4.jpg'
import lastnews5 from '../assets/lastnews5.jpg'
import lastnews6 from '../assets/lastnews6.jpg'
import lastnews7 from '../assets/lastnews7.jpg'
import lastnews8 from '../assets/lastnews8.jpg'
import lastnews9 from '../assets/lastnews9.jpg'
import lastnews10 from '../assets/lastnews10.jpg'
import lastnews11 from '../assets/lastnews11.jpg'
import lastnews12 from '../assets/lastnews12.jpg'










const Championships = () => {


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

    <main className='all-them'>
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




<Container className="head-champ">
  <Row className='champ-roow'>
    <Col lg={4} md={12} sm={12} className='left-champ' >
      <div className="newss">
        <h1>اخبار تهمك</h1>

        <ul>
          <li>
            <Link to="">
            <p className='num'>1</p>
            <p className="text-news">
            يلا كورة يكشف موعد عودة مصابين الأهلي لتدريبات فريق الكرة
            </p>
            </Link>
            </li>

            <li>
            <Link to="">
            <p className='num'>2</p>
            <p className="text-news">
            السؤال الأصعب.. كيف يتصرف حسين لبيب وفاروق جعفر في أزمة غرامة كهربا؟            </p>
            </Link>
            </li>

            <li>
            <Link to="">
            <p className='num'>3</p>
            <p className="text-news">
            رسالة جدلية.. هل عاد بدر بانون إلى الرجاء المغربي؟            </p>
            </Link>
            </li>

            <li>
            <Link to="">
            <p className='num'>4</p>
            <p className="text-news">
            ركلة جزاء تهدم عرش نابولي.. عملاق الجنوب تحت التهديد بسبب أوسيمين            </p>
            </Link>
            </li>

            <li>
            <Link to="">
            <p className='num'>5</p>
            <p className="text-news">
            عمر كمال.. "صياد" الكرة الثانية يواصل إطلاق صواريخه (فيديو)            </p>
            </Link>
            </li>

        </ul>

      </div>
    </Col>



    <Col lg={8} md={12} sm={12} className='right-champ'>
      
      
      <div className="adress">
        <h1>دوريات وبطولات</h1>
        <hr />
      </div>


<div className="Continental">

  <div className="Continental-head">
    <p>قارية</p>
  </div>

<Container className='continintal-card'>
  <Row className='continintal-row'>



    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={NationsofeEurop} alt="" />
  <Link className='leage-name' to="" >تصفيات امم اوروبا </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={CAFChampionsLeague} alt="" />
  <Link className='leage-name' to="" >  دورى ابطال افريقيا </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={UEFAChampionsLeague} alt="" />
  <Link className='leage-name' to="/Match" > دورى ابطال اوروبا </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={AfricanLeague} alt="" />
  <Link className='leage-name' to="" > الدورى الافريقى لكرة القدم </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={caf} alt="" />
  <Link className='leage-name' to="" >تصفيات كاس العالم - افريقيا</Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={AFCChampionsLeague} alt="" />
  <Link className='leage-name' to="" > دورى ابطال اسيا </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={EuropaLeague} alt="" />
  <Link className='leage-name' to="" >الدورى الاوروبى</Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={CAFConfederation} alt="" />
  <Link className='leage-name' to="" > الكونفدرالية الافريقية </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={southamericalogo} alt="" />
  <Link className='leage-name' to="" >تصفيات كاس العالم - امريكا الجنوبية</Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={Conference} alt="" />
  <Link className='leage-name' to="" > المؤتمر الاوروبى </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage'>
<div className="card">
  <img src={AFCAsianCup} alt="" />
  <Link className='leage-name' to="" > كاس اسيا </Link>
</div>
    </Col>
  </Row>
</Container>

</div>

<div className="Continental22">

  <div className="Continental-head2">
    <p> محلية </p>
  </div>

<Container className='continintal-card2'>
  <Row className='continintal-row2'>



    <Col lg={3} md={6} sm={12} className='continintal-leage2'>
<div className="card">
  <img src={egyptionleauge} alt="" />
  <Link className='leage-name2' to="/Egyptionleage" > الدورى المصرى </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage2'>
<div className="card">
  <img src={EgyptionCup} alt="" />
  <Link className='leage-name2' to="" > دورى القسم الثانى-ا </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage2'>
<div className="card">
  <img src={EgyptionCup} alt="" />
  <Link className='leage-name2' to="" > كاس مصر </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage2'>
<div className="card">
  <img src={rabeth} alt="" />
  <Link className='leage-name2' to="" > كاس رابطة الاندية المحترفه </Link>
</div>
    </Col>

  </Row>
</Container>

</div>


<div className="Continental33">

  <div className="Continental-head3">
    <p> عالمية </p>
  </div>

<Container className='continintal-card3'>
  <Row className='continintal-row3'>



    <Col lg={3} md={6} sm={12} className='continintal-leage3'>
<div className="card">
  <img src={worldcup} alt="" />
  <Link className='leage-name3' to="" > كاس العالم لاندية </Link>
</div>
    </Col>



  </Row>
</Container>

</div>

<div className="Continental44">

  <div className="Continental-head4">
    <p> اوروبية </p>
  </div>

<Container className='continintal-card4'>
  <Row className='continintal-row4'>



    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={PremierLeague} alt="" />
  <Link className='leage-name4' to="/Premumleage" > الدورى الانجليزى </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={spanishleague} alt="" />
  <Link className='leage-name4' to="" > الدورى الاسبانى </Link>
</div>
    </Col>

       <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={EFLCup} alt="" />
  <Link className='leage-name4' to="" > كاس كارباو </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={italyinLeauge} alt="" />
  <Link className='leage-name4' to="" > الدورى الايطالى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={Bundesliga} alt="" />
  <Link className='leage-name4' to="" > الدورى الالمانى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={franchleauge} alt="" />
  <Link className='leage-name4' to="" > الدورى الفرنسى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={GermanyCup} alt="" />
  <Link className='leage-name4' to="" > كاس المانيا </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={SuperLig} alt="" />
  <Link className='leage-name4' to="" > الدورى التركى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage4'>
<div className="card">
  <img src={bortogalLeauge} alt="" />
  <Link className='leage-name4' to="" > الدورى البرتغالى </Link>
</div>
    </Col>


  </Row>
</Container>

</div>

<div className="Continental55">

  <div className="Continental-head5">
    <p> عربية </p>
  </div>

<Container className='continintal-card5'>
  <Row className='continintal-row5'>



    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={Untitled} alt="" />
  <Link className='leage-name5' to="" > البطولة العربية لااندية لكرة السلة </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={saudialealuge} alt="" />
  <Link className='leage-name5' to="" > دورى روشن السعودى </Link>
</div>
    </Col>

       <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={Saudi} alt="" />
  <Link className='leage-name5' to="" > كاس خادم الحرمين الشريفين </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={TunisianLeague} alt="" />
  <Link className='leage-name5' to="" > الدورى التونسى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={BOTOLAPRO} alt="" />
  <Link className='leage-name5' to="" > الدورى المغربى </Link>
</div>
    </Col>


    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={QatarLeague} alt="" />
  <Link className='leage-name5' to="" > الدورى نجوم قطر </Link>
</div>
    </Col>

    <Col lg={3} md={6} sm={12} className='continintal-leage5'>
<div className="card">
  <img src={emaritsleauge} alt="" />
  <Link className='leage-name5' to="" > الدورى الاماراتى </Link>
</div>
    </Col>

  </Row>
</Container>

</div>



<div className="last-news">
  <div className="head-name">
  <Link to=""> المزيد </Link>

    <p> اخر الاخبار </p>
  </div>
<hr />
<Container className='lllast-news'>
  <Row className='last-row'>
    <Col lg={4} md={6} sm={12} className='item-news'>
<div className="news-card cardd">
        <img src={lastnews1} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        الدوري المصري.. المصري 0-0 فاركو.. ضغط بورسعيدي
        </p>
      </div>
    </Col>

    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews2} alt="" />
        <p className="custom"> الدورى الاسبانى </p>
        <p className='letter-text'>
        أتلتيكو مدريد يكرس عقدته لأوساسونا بثنائية في عقر داره بالدوري الإسباني         </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews3} alt="" />
        <p className='letter-text'>
        لمشاهدة أمتع المباريات.. أفضل تلفزيون ذكي بخصم حتى 21%         </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews4} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        أقل من هدفين.. انخفاض المعدل التهديفي في الجولة الثانية من الدوري المصري        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews5} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        ثنائي يزاحم بيرسي تاو وإمام عاشور في صدارة قائمة تهديفية بالدوري         </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
<div className="news-card ">
        <img src={lastnews6} alt="" />
        <p className="custom"> الدورى السعودى </p>
        <p className='letter-text'>
        مقابل 40 مليون ريال سنوياً.. الهلال يخوض مبارياته في "بوليفارد هول"        </p>
      </div>
    </Col>

    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews7} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        زد الحصان الأسود والزمالك يتعثر من جديد.. حصاد الجولة الثانية للدوري في غياب الأهلي        </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews8} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        فاركو: سنقدم شكوى ضد حكم لقاء المصري.. ونريد سماع ما دار في غرفة الـVAR        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews9} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        أحمد نادر السيد يقترب من باوك اليوناني         </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews10} alt="" />
        <p className="custom"> الدورى الانجليزى </p>
        <p className='letter-text'>
        ضحية مُعتادة على أهدافه.. ماذا قدم محمد صلاح أمام توتنهام قبل قمة السبت؟ (فيديو)        </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews11} alt="" />
        <p className="custom"> الدورى الايطالى </p>
        <p className='letter-text'>
        روما يتلقى هزيمة ثقيلة من جنوى بالدوري الإيطالي (فيديو)        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={lastnews12} alt="" />
        <p className="custom"> دورى ابطال افريقيا </p>
        <p className='letter-text'>
        آخر تطورات حالة المصابين في الأهلي قبل مواجهة سان جورج        </p>
      </div>
    </Col>
  
  
  
  </Row>
</Container>

</div>



<div className="video-news">
  <div className="head-name">
  <Link to=""> المزيد </Link>

    <p> مالتميديا </p>
  </div>
<hr />
<Container className='vvideo-news'>
  <Row className='last-row'>
    <Col lg={4} md={6} sm={12} className='item-news'>
<div className="news-card cardd">
<AiFillCaretRight />

        <img src={lastnews1} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        الدوري المصري.. المصري 0-0 فاركو.. ضغط بورسعيدي
        </p>
      </div>
    </Col>

    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />
        <img src={lastnews2} alt="" />
        <p className="custom"> الدورى الاسبانى </p>
        <p className='letter-text'>
        أتلتيكو مدريد يكرس عقدته لأوساسونا بثنائية في عقر داره بالدوري الإسباني         </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews3} alt="" />
        <p className='letter-text'>
        لمشاهدة أمتع المباريات.. أفضل تلفزيون ذكي بخصم حتى 21%         </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews4} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        أقل من هدفين.. انخفاض المعدل التهديفي في الجولة الثانية من الدوري المصري        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews5} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        ثنائي يزاحم بيرسي تاو وإمام عاشور في صدارة قائمة تهديفية بالدوري         </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
<div className="news-card ">
<AiFillCaretRight />

        <img src={lastnews6} alt="" />
        <p className="custom"> الدورى السعودى </p>
        <p className='letter-text'>
        مقابل 40 مليون ريال سنوياً.. الهلال يخوض مبارياته في "بوليفارد هول"        </p>
      </div>
    </Col>

    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews7} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        زد الحصان الأسود والزمالك يتعثر من جديد.. حصاد الجولة الثانية للدوري في غياب الأهلي        </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews8} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        فاركو: سنقدم شكوى ضد حكم لقاء المصري.. ونريد سماع ما دار في غرفة الـVAR        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />
        <img src={lastnews9} alt="" />
        <p className="custom"> الدورى المصرى </p>
        <p className='letter-text'>
        أحمد نادر السيد يقترب من باوك اليوناني         </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews10} alt="" />
        <p className="custom"> الدورى الانجليزى </p>
        <p className='letter-text'>
        ضحية مُعتادة على أهدافه.. ماذا قدم محمد صلاح أمام توتنهام قبل قمة السبت؟ (فيديو)        </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews11} alt="" />
        <p className="custom"> الدورى الايطالى </p>
        <p className='letter-text'>
        روما يتلقى هزيمة ثقيلة من جنوى بالدوري الإيطالي (فيديو)        </p>
      </div>
    </Col>


    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={lastnews12} alt="" />
        <p className="custom"> دورى ابطال افريقيا </p>
        <p className='letter-text'>
        آخر تطورات حالة المصابين في الأهلي قبل مواجهة سان جورج        </p>
      </div>
    </Col>
  
  
  
  </Row>
</Container>

</div>



    </Col>
  </Row>
</Container>

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


    
  </main>


  )
}

export default Championships
