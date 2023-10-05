import React, { useRef, useState } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// 
import './Match.scss';
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
import UEFAChampionsLeague from '../assets/UEFAChampionsLeague.png'
import tourBG from '../assets/tourBG.jpg'

import ACMilan from '../assets/champions/ACMilan.jpg'
import Arsenal from '../assets/champions/Arsenal.jpg'
import AtleticoMadrid from '../assets/champions/AtleticoMadrid.jpg'
import Barcelona from '../assets/champions/Barcelona.jpg'
import BayernMunchen from '../assets/champions/BayernMunchen.jpg'
import BorussiaDortmund from '../assets/champions/BorussiaDortmund.jpg'
import Celtic from '../assets/champions/Celtic.jpg'
import club1 from '../assets/champions/club1.jpg'
import Feyenoord from '../assets/champions/Feyenoord.jpg'
import Galatasaray from '../assets/champions/Galatasaray.jpg'
import InterMilan from '../assets/champions/InterMilan.jpg'
import Lazio from '../assets/champions/Lazio.jpg'
import Leipzig from '../assets/champions/Leipzig.jpg'
import Lens from '../assets/champions/Lens.jpg'
import ManchesterCity from '../assets/champions/ManchesterCity.jpg'
import ManchesterUnited from '../assets/champions/ManchesterUnited.jpg'
import Napoli from '../assets/champions/Napoli.jpg'
import NewcastleUnited from '../assets/champions/NewcastleUnited.jpg'
import Porto from '../assets/champions/Porto.jpg'
import PSG from '../assets/champions/PSG.jpg'
import PSVEindhoven from '../assets/champions/PSVEindhoven.jpg'
import RealMadrid from '../assets/champions/RealMadrid.jpg'
import RealSociedad from '../assets/champions/RealSociedad.jpg'
import RedBullSalzburg from '../assets/champions/RedBullSalzburg.jpg'
import RedStar from '../assets/champions/RedStar.jpg'
import Sevilla from '../assets/champions/Sevilla.jpg'
import SportingBraga from '../assets/champions/SportingBraga.jpg'
import UnionBerlin from '../assets/champions/UnionBerlin.jpg'
import YoungBoys from '../assets/champions/YoungBoys.jpg'
import Benfica from '../assets/champions/Benfica.jpg'
import person from '../assets/person.jpg'

import cardd1 from '../assets/champions/cardd1.jpg'
import cardd2 from '../assets/champions/cardd2.jpg'
import cardd3 from '../assets/champions/cardd3.jpg'
import cardd4 from '../assets/champions/cardd4.jpg'
import Casemiro from '../assets/Casemiro.png'

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
import {FaCalendarDays} from 'react-icons/fa6';
import {BiTv} from 'react-icons/bi';
import {BsArrowLeft} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaArrowLeftLong} from 'react-icons/fa6';
import {FaAngleRight } from 'react-icons/fa6';
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
 <section className='all-match'>
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
    <p> دورى ابطال اوروبا </p>
    <img src={ UEFAChampionsLeague } alt="" className='custom-img' />
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
            <img src={ACMilan} alt="" /> 
            <p>ميلان</p>
          </div>

          <div className='team'>
            <img src={Benfica} alt="" /> 
            <p>بنفكا</p>
          </div>

          <div className='team'>
            <img src={Arsenal} alt="" /> 
            <p>ارسنال</p>
          </div>

          <div className='team'>
            <img src={AtleticoMadrid} alt="" /> 
            <p>اتليتكو مدريد</p>
          </div>


          <div className='team'>
            <img src={Barcelona} alt="" /> 
            <p>برشلونة</p>
          </div>


          <div className='team'>
            <img src={BayernMunchen} alt="" /> 
            <p>بايرن ميونخ</p>
          </div>


          <div className='team'>
            <img src={BorussiaDortmund} alt="" /> 
            <p>بروسيادورتموند</p>
          </div>


          <div className='team'>
            <img src={Celtic} alt="" /> 
            <p>سلتيك</p>
          </div>


          <div className='team'>
            <img src={club1} alt="" /> 
            <p>رويال انتويرب</p>
          </div>



          <div className='team'>
            <img src={ManchesterCity} alt="" /> 
            <p>مانشستر سيتى</p>
          </div>


          <div className='team'>
            <img src={Feyenoord} alt="" /> 
            <p>فينورد</p>
          </div>


          <div className='team'>
            <img src={Galatasaray} alt="" /> 
            <p>جالاتا سراي</p>
          </div>


          <div className='team'>
            <img src={Lens} alt="" /> 
            <p>لانس</p>
          </div>


          <div className='team'>
            <img src={InterMilan} alt="" /> 
            <p>انتر ميلان</p>
          </div>


          <div className='team'>
            <img src={Lazio} alt="" /> 
            <p>لاتسيو</p>
          </div>


          <div className='team'>
            <img src={Leipzig} alt="" /> 
            <p>لايبزيج</p>
          </div>

          
          <div className='team'>
            <img src={ManchesterUnited} alt="" /> 
            <p>مانشستر يونايتد</p>
          </div>


          <div className='team'>
            <img src={Napoli} alt="" /> 
            <p>نابولى</p>
          </div>


          
          <div className='team'>
            <img src={NewcastleUnited} alt="" /> 
            <p>نيوكاسل</p>
          </div>

          
          <div className='team'>
            <img src={Porto} alt="" /> 
            <p>بورتو</p>
          </div>

          
          <div className='team'>
            <img src={PSG} alt="" /> 
            <p>باريس سان جيرمان</p>
          </div>


          
          <div className='team'>
            <img src={PSVEindhoven} alt="" /> 
            <p>ايندهوفن</p>
          </div>

          
          <div className='team'>
            <img src={RealMadrid} alt="" /> 
            <p>ريال مدريد</p>
          </div>


          
          <div className='team'>
            <img src={RealSociedad} alt="" /> 
            <p>ريال سوسيدا</p>
          </div>


          
          <div className='team'>
            <img src={RedBullSalzburg} alt="" /> 
            <p>ريدبول ساليزبورج</p>
          </div>


          
          <div className='team'>
            <img src={RedStar} alt="" /> 
            <p>سرفينا زافيزدا</p>
          </div>

          
          <div className='team'>
            <img src={Sevilla} alt="" /> 
            <p>اشبيلية</p>
          </div>

          
          <div className='team'>
            <img src={YoungBoys} alt="" /> 
            <p>يانج بويز</p>
          </div>
          
          
          <div className='team'>
            <img src={SportingBraga} alt="" /> 
            <p>سبورتينج براجا</p>
          </div>

          
          <div className='team'>
            <img src={UnionBerlin} alt="" /> 
            <p>يونيون برلين</p>
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
      <img src={SportingBraga} alt="" />
      <p>سبورتينج براجا</p>
    </Link>
    <p className='clock'> 19:45 </p>
    <Link to="" >
    <img src={UnionBerlin} alt="" />
      <p>يونيون برلين </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> السيت 07 اكتوبر 2023    <BiTv />   </p>
<Link>
<BsArrowLeft />
</Link>
  </div>
  <hr />
</div>

<div className="mt-time">
  <div className="clubs">
    <Link to="" >
      <img src={SportingBraga} alt="" />
      <p>سبورتينج براجا</p>
    </Link>
    <p className='clock'> 19:45 </p>
    <Link to="" >
    <img src={UnionBerlin} alt="" />
      <p>يونيون برلين </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> السيت 07 اكتوبر 2023    <BiTv />   </p>
<Link>
<BsArrowLeft />
</Link>
  </div>
  <hr />
</div>

<div className="mt-time">
  <div className="clubs">
    <Link to="" >
      <img src={SportingBraga} alt="" />
      <p>سبورتينج براجا</p>
    </Link>
    <p className='clock'> 19:45 </p>
    <Link to="" >
    <img src={UnionBerlin} alt="" />
      <p>يونيون برلين </p>
    </Link>
  </div>
  <div className="calender">
    <p>  <FaCalendarDays /> السيت 07 اكتوبر 2023    <BiTv />   </p>
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
  <img src={cardd2} alt="" />
  <p className='lt-tx'>ضحية جديدة.. منزل راموس يتعرض للسرقة</p>
</div>

<div className="card">
  <img src={cardd3} alt="" />
  <p className='lt-tx'>
  "تجنبًا لحدوث كارثة".. إلغاء قمة الدوري الهولندي بعد 55 دقيقة بسبب الشغب
  </p>
</div>

<div className="card">
  <img src={cardd4} alt="" />
  <p className='lt-tx'>
  قمة نابولي وريال مدريد أمام مدرجات ممتلئة
  </p>
</div>

</div>
    </Col>
    <Col lg={6} md={12} sm={12} className='team-cardd' >
    <div className="right">
        <div className="card">
            <img src={cardd1} alt="" />
            <p>
              سطو نجوم الكرة.. مسلسل لم ينته وراموس آخر ضحاياه
            </p>
          </div>
        </div>
    </Col>
  </Row>
</Container>



      </div>

<div className="groups">
<h1>
  المجموعات
</h1>
<hr />
<div className="slidde">

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 1
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3</td>
				<td>3</td>
				<td>4</td>
				<td>1</td>
				<td className='teaam'>
        <p> بايرن ميونخ </p>

          <img src={BayernMunchen} alt="" />
        </td>
			</tr>

			<tr>
				<td>1</td>
				<td>2</td>
				<td>2</td>
				<td>1</td>
				<td className='teaam'>
        <p> جالاتا سراى </p>

          <img src={Galatasaray} alt="" />
        </td>
			</tr>

      <tr>
				<td>1</td>
				<td>2</td>
				<td>2</td>
				<td>1</td>
				<td className='teaam'>
        <p> كوبنهاجن </p>

          <img src={person} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>4</td>
				<td>3</td>
				<td>1</td>
				<td className='teaam'>
        <p>مانشستر يونايتد</p>
          <img src={ManchesterUnited} alt="" />
        </td>
			</tr>



      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 2
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3</td>
				<td>0</td>
				<td>4</td>
				<td>1</td>
				<td className='teaam'>
        <p>ارسنال</p>

          <img src={Arsenal} alt="" />
        </td>
			</tr>

			<tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p> اشبيلية </p>

          <img src={Sevilla} alt="" />
        </td>
			</tr>

      <tr>
				<td>3</td>
				<td>0</td>
				<td>5</td>
				<td>1</td>
				<td className='teaam'>
        <p> لانس </p>

          <img src={Lens} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>4</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>ايندهوفن</p>
          <img src={PSVEindhoven} alt="" />
        </td>
			</tr>



      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 3
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3</td>
				<td>1</td>
				<td>2</td>
				<td>1</td>
				<td className='teaam'>
        <p>نابولى</p>

          <img src={Napoli} alt="" />
        </td>
			</tr>

			<tr>
				<td>3</td>
				<td>0</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>ريال مدريد</p>

          <img src={RealMadrid} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>2</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>سبورتينج براجا</p>

          <img src={SportingBraga} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>1</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>يونيون برلين</p>

          <img src={UnionBerlin} alt="" />
        </td>
			</tr>

      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 4
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>

			<tr>
				<td>3</td>
				<td>0</td>
				<td>2</td>
				<td>1</td>
				<td className='teaam'>
        <p>ريدبول ساليزبورج</p>

          <img src={RedBullSalzburg} alt="" />
        </td>
			</tr>

      <tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>انتر ميلان</p>

          <img src={InterMilan} alt="" />
        </td>
			</tr>

      <tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>ريال سوسيدا</p>
          <img src={RealSociedad} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>2</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>بنفكا</p>

          <img src={Benfica} alt="" />
        </td>
			</tr>

      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 5
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3</td>
				<td>0</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>فينفورد</p>

          <img src={Feyenoord} alt="" />
        </td>
			</tr>

			<tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>اتليتكو مدريد</p>

          <img src={AtleticoMadrid} alt="" />
        </td>
			</tr>

      <tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>لاتسيو</p>

          <img src={Lazio} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>2</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>سلتيك</p>
          <img src={Celtic} alt="" />
        </td>
			</tr>


      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 6
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>



      <tr>
				<td>3</td>
				<td>0</td>
				<td>2</td>
				<td>1</td>
				<td className='teaam'>
        <p>ب . س جيرمان</p>

          <img src={PSG} alt="" />
        </td>
			</tr>

      <tr>
				<td>1</td>
				<td>0</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>نيوكاسل</p>
          <img src={NewcastleUnited} alt="" />
        </td>
			</tr>

			<tr>
				<td>1</td>
				<td>0</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>ميلان</p>

          <img src={ACMilan} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>2</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>بروسيادورتموند</p>

          <img src={BorussiaDortmund} alt="" />
        </td>
			</tr>

      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 7
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>

			<tr>
				<td>3</td>
				<td>1</td>
				<td>3</td>
				<td>1</td>
				<td className='teaam'>
        <p>مانشستر سيتى</p>

          <img src={ManchesterCity} alt="" />
        </td>
			</tr>

      <tr>
				<td>3</td>
				<td>1</td>
				<td>3</td>
				<td>1</td>
				<td className='teaam'>
        <p>لايبزيج</p>

          <img src={Leipzig} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>3</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>يانج بويز</p>
          <img src={YoungBoys} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>3</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>سرفينا زافيزدا</p>

          <img src={RedStar} alt="" />
        </td>
			</tr>

      

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
<div className="team-rang">
<h1 className="rang-name">
            المجموعة 8
          </h1>
          <div className="droup-table">
          <table>
		<thead>
			<tr>
				<th> النقاط </th>
				<th> عليه </th>
				<th> له </th>
				<th> لعب </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>3</td>
				<td>0</td>
				<td>5</td>
				<td>1</td>
				<td className='teaam'>
        <p>برشلونة</p>

          <img src={Barcelona} alt="" />
        </td>
			</tr>

			<tr>
				<td>3</td>
				<td>1</td>
				<td>3</td>
				<td>1</td>
				<td className='teaam'>
        <p>بورتو</p>

          <img src={Porto} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>3</td>
				<td>1</td>
				<td>1</td>
				<td className='teaam'>
        <p>شاختار دونيستك</p>

          <img src={person} alt="" />
        </td>
			</tr>

      <tr>
				<td>0</td>
				<td>5</td>
				<td>0</td>
				<td>1</td>
				<td className='teaam'>
        <p>رويال انتويرب</p>
          <img src={club1} alt="" />
        </td>
			</tr>

    

		</tbody>
	</table>

          </div>
</div>
        </SwiperSlide>


        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    
  
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
        <h1>48</h1>
      </div>
    </Col>

    <Col lg={6} md={6} sm={12} className='static-card'>
      <div className="card">
        <p> المباريات </p>
        <h1>16</h1>
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
      <p>1</p>
    </div>
    <div className="txt">
<div className="club-name">
      <p>  اتليتكو مدريد </p>
      <img src={AtleticoMadrid} alt="" className='team-icon' />
      </div>
      <p className='player-name'>
        ناهويل مولينا
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
    <img src={Casemiro} alt="" />
  </div>
  <div className="right">
    <div className="numm">
      <p>2</p>
    </div>
    <div className="txt">
<div className="club-name">
      <p> مانشستر يونايتد </p>
      <img src={ManchesterUnited} alt="" className='team-icon' />
      </div>
      <p className='player-name'>
        كاسيميرو
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
