import React, { useRef, useState } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// 
import './Egyptionleage.scss';
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
import EPLLogo from '../assets/egyptionleague/EPLLogo.png'
import tourBG from '../assets/tourBG.jpg'


// clubs
import AhlyBank from '../assets/egyptionleague/AhlyBank.jpg'
import Alittihad from '../assets/egyptionleague/Alittihad.jpg'
import Almokawloon from '../assets/egyptionleague/Almokawloon.jpg'
import cliopatraFC from '../assets/egyptionleague/cliopatraFC.jpg'
import Elahly from '../assets/egyptionleague/Elahly.jpg'
import Eldakhleya from '../assets/egyptionleague/Eldakhleya.jpg'
import Elgouna from '../assets/egyptionleague/Elgouna.jpg'
import elmasry from '../assets/egyptionleague/elmasry.jpg'
import Enppi from '../assets/egyptionleague/Enppi.jpg'
import Ismaily from '../assets/egyptionleague/Ismaily.jpg'
import mahala from '../assets/egyptionleague/mahala.jpg'
import modernFuture from '../assets/egyptionleague/modernFuture.jpg'
import pharco from '../assets/egyptionleague/pharco.jpg'
import PyramidsFC from '../assets/egyptionleague/PyramidsFC.jpg'
import Smouha from '../assets/egyptionleague/Smouha.jpg'
import TalaeaElgaish from '../assets/egyptionleague/TalaeaElgaish.jpg'
import Zamalek from '../assets/egyptionleague/Zamalek.jpg'
import zed from '../assets/egyptionleague/zed.jpg'


import card1 from '../assets/egyptionleague/card1.jpg'
import card2 from '../assets/egyptionleague/card2.jpg'
import card3 from '../assets/egyptionleague/card3.jpg'
import card4 from '../assets/egyptionleague/card4.jpg'

import real1 from '../assets/egyptionleague/real1.jpg'
import real2 from '../assets/egyptionleague/real2.jpg'
import percytau from '../assets/egyptionleague/percytau.png'


import real3 from '../assets/egyptionleague/real3.jpg'



import person from '../assets/person.jpg'


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

  const settingsss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8,

        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 6,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
        }
      }

    ]
  };

  return (
 <section className='egyption-league'>
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




{/* head */}
<div className="big-head">
  <div className="top">
    <img src={tourBG} alt="" className='play'/>
    <p> الدورى المصرى </p>
    <img src={ EPLLogo } alt="" className='custom-img' />
  </div>
  <div className="bottom">
    <Link to="" > الرئيسية </Link>
    <Link to="" > الاخبار </Link>
    <Link to="" > نتائج المباريات </Link>
    <Link to="" > ترتيب المجموعات </Link>
    <Link to="" > الاحصائات </Link>
    <Link to="" > مالتيميديا </Link>
    <Link to="" > الهدافون </Link>
  </div>
</div>
{/* head */}

{/* teams slider */}
<div className="slider">
<Slider {...settingsss} className='teams-slide' >

          <div className='team'>
            <img src={modernFuture} alt="" /> 
            <p>فيوتشر</p>
          </div>

          <div className='team'>
            <img src={cliopatraFC} alt="" /> 
            <p>سيراميكا كليوباترا</p>
          </div>

          <div className='team'>
            <img src={AhlyBank} alt="" /> 
            <p>البنك الاهلى</p>
          </div>

          <div className='team'>
            <img src={pharco} alt="" /> 
            <p> فاركو</p>
          </div>


          <div className='team'>
            <img src={zed} alt="" /> 
            <p>زد</p>
          </div>


          <div className='team'>
            <img src={PyramidsFC} alt="" /> 
            <p> بيراميدز</p>
          </div>


          <div className='team'>
            <img src={mahala} alt="" /> 
            <p>بلدية المحلة</p>
          </div>


          <div className='team'>
            <img src={Elgouna} alt="" /> 
            <p>الجونة</p>
          </div>


          <div className='team'>
            <img src={Eldakhleya} alt="" /> 
            <p> الداخلية</p>
          </div>



          <div className='team'>
            <img src={Smouha} alt="" /> 
            <p> سموحة</p>
          </div>


          <div className='team'>
            <img src={Almokawloon} alt="" /> 
            <p>المقاولون العرب</p>
          </div>


          <div className='team'>
            <img src={Zamalek} alt="" /> 
            <p> الزمالك</p>
          </div>


          <div className='team'>
            <img src={elmasry} alt="" /> 
            <p>المصرى</p>
          </div>


          <div className='team'>
            <img src={Alittihad} alt="" /> 
            <p> الاتحاد السكندرى</p>
          </div>


          <div className='team'>
            <img src={Ismaily} alt="" /> 
            <p>الاسماعيلى</p>
          </div>


          <div className='team'>
            <img src={Enppi} alt="" /> 
            <p>انبى</p>
          </div>

          
          <div className='team'>
            <img src={TalaeaElgaish} alt="" /> 
            <p> طلائع الجيش</p>
          </div>


          <div className='team'>
            <img src={Elahly} alt="" /> 
            <p>الاهلى</p>
          </div>


          

        </Slider>
</div>
{/* teams slider */}
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

<div className="match-time">
  <div className="head-nname">
    <p className='first-name'> المباريات </p>
    <p>الجولة <span>2</span> </p>
  </div>
<hr />
<div className="mt-time">
  <div className="clubs">
    <Link to="" >
      <img src={zed} alt="" />
      <p> زد</p>
    </Link>
    <p className='clock'> 16:00 </p>
    <Link to="" >
    <img src={mahala} alt="" />
      <p>بلدية المحلة  </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> الثلاثاء 03 اكتوبر 2023    <BiTv />   </p>
<Link>
<BsArrowLeft />
</Link>
  </div>
  <hr />
</div>

<div className="mt-time">
  <div className="clubs">
    <Link to="" >
      <img src={Smouha} alt="" />
      <p> سموحة</p>
    </Link>
    <p className='clock'> 19:00 </p>
    <Link to="" >
    <img src={Almokawloon} alt="" />
      <p> المقاولون العرب </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> الثلاثاء 03 اكتوبر 2023    <BiTv />   </p>
<Link>
<BsArrowLeft />
</Link>
  </div>
  <hr />
</div>

<div className="mt-time">
  <div className="clubs">
    <Link to="" >
      <img src={Alittihad} alt="" />
      <p> الاتحاد السكندرى</p>
    </Link>
    <p className='clock'> 16:00 </p>
    <Link to="" >
    <img src={Elgouna} alt="" />
      <p> الجونة </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> الثلاثاء 03 اكتوبر 2023    <BiTv />   </p>
<Link>
<BsArrowLeft />
</Link>
  </div>
  <hr />
</div>

<div className="bottom-link">
  <Link to="" > كل المباريات </Link>
</div>

</div>

    </Col>

    <Col lg={8} md={12} sm={12}>

      <div className="new-team">

<Container>
  <Row className='new-team-row'>
    <Col lg={6} md={12} sm={12} className='team-cardd'>
    <div className="left">

<div className="card">
  <img src={card2} alt="" />
  <p className='lt-tx'>
     الإسماعيلي: جمهورنا بيتعذب بسبب مواجهة الأهلي خارج ملعبنا.. ونخطط لصفقات الشتاء
  </p>
</div>

<div className="card">
  <img src={card3} alt="" />
  <p className='lt-tx'>
  طبيب بيراميدز: إبراهيم عادل ليس بحاجة لجراحة ..وتم وضع قدمه في &quot;الجبس&quot;  </p>
</div>

<div className="card">
  <img src={card4} alt="" />
  <p className='lt-tx'>
  مصدر ليلا كورة: جلسة بين عبدالواحد وفتوح ووكيله لمناقشة ملف التجديد  </p>
</div>

</div>
    </Col>
    <Col lg={6} md={12} sm={12} className='team-cardd' >
    <div className="right">
        <div className="card">
            <img src={card1} alt="" />
            <p>
            هدف عمر كمال الأفضل في الجولة الثانية من الدوري المصري (فيديو)
هدف عمر كمال الأفضل في الجولة الثانية من الدوري المصري (فيديو)            </p>
          </div>
        </div>
    </Col>
  </Row>
</Container>



      </div>


      <div className="reals">
  <div className="head-name">
  <Link to=""> المزيد </Link>

    <p>  ريلز </p>
  </div>
<hr />
<Container className='reals-news'>
  <Row className='last-row'>
    <Col lg={4} md={6} sm={12} className='item-news'>
<div className="news-card cardd">
      <AiFillCaretRight />

        <img src={real3} alt="" />
        
        <p className="custom">   م03:37   | 25 سبتمبر 2023 </p>
        <p className='letter-text'>
        مفاجآت في تشكيل الأسبوع الأول للدوري مع عبد الباقي جمال        </p>
      </div>
    </Col>

    <Col lg={4} md={6} sm={12} className='item-news'>
      
      <div className="news-card">
      <AiFillCaretRight />

        <img src={real2} alt="" />
        <p className="custom">   م03:37   | 25 سبتمبر 2023 </p>
        <p className='letter-text'>
        عبد الباقي جمال: موديست أقل من الأهلي لهذا السبب           </p>
      </div>
    </Col>
  
    <Col lg={4} md={6} sm={12} className='item-news'>
      <div className="news-card">
      <AiFillCaretRight />

        <img src={real1} alt="" />
        <p className="custom">   م03:37   | 25 سبتمبر 2023 </p>

        <p className='letter-text'>
        عبد الباقي جمال: الأهلي فرقة مفترية مع كولر 
        </p> 
        </div>
    </Col>



  
  
  
  </Row>
</Container>

</div>

<div className="rang-team">
<div className="heaaad">
    <h1> ترتيب الفريق </h1>
    <Link>  كل الفريق </Link>
  </div>
  <hr />
<div className="card">
<div className="droup-table">

          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th className='chaildd'> عليه </th>
				<th className='chaildd'> له </th>
				<th> هزيمة </th>
				<th> تعادل </th>
				<th> فوز </th>
				<th> لعب </th>
<th className='custom-rang '>
<th className='club-ra' >الفريق</th>
        <th > الترتيب</th>
</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>6</td>
				<td className='chaildd'>1</td>
				<td className='chaildd'>4</td>
				<td>0</td>
				<td>0</td>
				<td>2</td>
				<td>2</td>
<td className='custom-rang'>
<td>فيوتشر <img src={modernFuture} alt="" /></td>
        <td> 1</td>
</td>

			</tr>

<hr />

			<tr>
        
				<td>6</td>
				<td className='chaildd'>0</td>
				<td className='chaildd'>2</td>
				<td>0</td>
				<td>0</td>
				<td>2</td>
				<td>2</td>
<td className='custom-rang'>
<td>زد <img src={zed} alt="" /></td>
        <td>2</td>
</td>

			</tr>
      <hr />

      <tr>
        
				<td>4</td>
				<td className='chaildd'>1</td>
				<td className='chaildd'>3</td>
				<td>0</td>
				<td>1</td>
				<td>1</td>
				<td>2</td>
<td className='custom-rang'>
<td>سموحة <img src={Smouha} alt="" /></td>
        <td>3</td>
</td>

			</tr>
      <hr />

      <tr>
        
				<td>4</td>
				<td className='chaildd'>0</td>
				<td className='chaildd'>2</td>
				<td>0</td>
				<td>1</td>
				<td>1</td>
				<td>2</td>
<td className='custom-rang'>
<td>طلائع الجيش <img src={TalaeaElgaish} alt="" /></td>
        <td>4</td>
</td>

			</tr>

		</tbody>
	</table>

          </div>
</div>

</div>


<div className="statticticss">
  <div className="heaaad">
    <h1> الاحصائيات </h1>
    <Link> جميع الاحصاءيات </Link>
  </div>
<hr />
<Container className='sctatics-contt'>
  <Row>

  <Col lg={6} md={6} sm={12} className='static-card'>
      <div className="card">
        <p> الاهداف المسجلة </p>
        <h1>33</h1>
      </div>
    </Col>

    <Col lg={6} md={6} sm={12} className='static-card'>
      <div className="card">
        <p> المباريات </p>
        <h1>17  <span>/ 306 </span> </h1>
      </div>

    </Col>

    <Col lg={6} md={6} sm={12} className='static-card static-carddd'>
      <div className="card">
        <p>  صانع الاهداف </p>

<div className="player">
  <div className="left">
    <img src={person} alt="" />
  </div>
  <div className="right">
    <div className="numm">
      <p>2</p>
    </div>
    <div className="txt">
<div className="club-name">
      <p> الاهلى </p>
      <img src={Elahly} alt="" className='team-icon' />
      </div>
      <p className='player-name'>
        امام عاشور 
      </p>
          </div>
  </div>
</div>

      </div>
    </Col>


    <Col lg={6} md={6} sm={12} className='static-card static-carddd'>
      <div className="card">
        <p>  الهداف </p>

<div className="player">
  <div className="left">
    <img src={percytau} alt="" />
  </div>
  <div className="right">
    <div className="numm">
      <p>2</p>
    </div>
    <div className="txt">
<div className="club-name">
      <p>  الاهلى </p>
      <img src={Elahly} alt="" className='team-icon' />
      </div>
      <p className='player-name'>
        بيرسى تاو
      </p>
          </div>
  </div>
</div>

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
