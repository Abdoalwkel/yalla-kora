import React, { useRef, useState } from 'react';


// 
import './News.scss';
// slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {FaAngleLeft} from 'react-icons/fa6'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col } from 'react-bootstrap';

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

import { Link } from 'react-router-dom';

import {AiFillCaretRight} from 'react-icons/ai'
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
import new1 from '../assets/news/new1.jpg'
import new2 from '../assets/news/new2.jpg'
import new3 from '../assets/news/new3.jpg'
import new4 from '../assets/news/new4.jpg'
import new5 from '../assets/news/new5.jpg'
import new6 from '../assets/news/new6.jpg'
import new7 from '../assets/news/new7.jpg'
import new8 from '../assets/news/new8.jpg'
import new9 from '../assets/news/new9.jpg'

import {ImOpera, ImWhatsapp} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa';
import {FaCalendarDays} from 'react-icons/fa6';
import {BiTv} from 'react-icons/bi';
import {BsArrowLeft} from 'react-icons/bs';

import gimine from '../assets/geminiLogo.png';
import Logo from '../assets/Logo.png';
const Match = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
 <section className='News'>
   <div className='all-matchE2'>
{/* first slide */}
<div className="all-branc-top">
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
  {/* first slide */}
</div>


<Container className='sec3'>
  <Row className='sec3-row'>

    <Col lg={4} md={12} sm={12} className='littel-side'>

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

    <Col lg={8} md={12} sm={12}>



<div className="last-news">
  <div className="head-newss">

    <p> اخبار </p>
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
  
  {/*  ===== */}
  

  <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new1} alt="" />
        <p className="custom"> المحترفين </p>
        <p className='letter-text'>
        نوفي بازار الصربي يقدم عمر فايد لاعباً في الفريق (صور) 
        </p>
             </div>
    </Col>



    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new2} alt="" />
        <p className="custom"> دورى ابطال اوروبا </p>
        <p className='letter-text'>
        جوارديولا يتحدث عن.. معاناة هالاند.. أزمة ليفربول.. وعودة ستونز      

            </p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new3} alt="" />
        <p className="custom"> الدورى الاسبانى </p>
        <p className='letter-text'>
        وكيل ديفيز: ريال مدريد أحد الأندية التي ترغب بالتعاقد مع أفضل ظهير أيسر في العالم
</p>      
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new4} alt="" />
        <p className="custom"> دورى ابطال اوروبا </p>
        <p className='letter-text'>
        دياز: المحافظة على دوري الأبطال أمتع من الفوز به لأول مرة           </p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new5} alt="" />
        <p className="custom"> دورى ابطال اسيا </p>
        <p className='letter-text'>
        استبعاد بونو ضمن 5 تعديلات.. نيمار وميتروفيتش يقودان هجوم الهلال أمام نساجي الإيراني           </p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new6} alt="" />
        <p className="custom"> الدورى الانجليزى</p>
        <p className='letter-text'>
        ينتهي في 2026.. ذا صن: أرسنال يبدأ مفاوضاته لتمديد عقد بن وايت             </p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new7} alt="" />
        <p className="custom"> كاس الامم الافريقية</p>
        <p className='letter-text'>
        معسكر أكتوبر.. مؤتمر صحفي لفيتوريا بمقر اتحاد الكرة الخميس
</p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new8} alt="" />
        <p className="custom"> دورى ابطال اوروبا </p>
        <p className='letter-text'>
        مدرب دورتموند: مباراة ميلان مختلفة عن باريس سان جيرمان.. ونريد تحقيق أول انتصار            </p>
      </div>
    </Col>


    
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
        <img src={new9} alt="" />
        <p className="custom"> الدورى الفرنسى</p>
        <p className='letter-text'>
        من سلسلة الإعارات لمناطحة مبابي.. 8 محطات رسمت طريق التألق لمصطفى محمد            </p>
      </div>
    </Col>

  </Row>
  <div className="bottom-link">
    <Link className='more'>المزيد من الاخبار</Link>
  </div>
</Container>

</div>





    </Col>














  </Row>
</Container>

<footer className='match-footer'>
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

    </div>
 </section>
  )
}

export default Match
