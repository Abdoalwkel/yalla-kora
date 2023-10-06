import React, {useEffect, useState} from 'react';
import './Navbar.scss';
import {motion, AnimatePresence} from "framer-motion";
import Match from '../matchs/Match'
import {BiSearch} from 'react-icons/bi';
import {ImWhatsapp} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebookF} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';
import {BrowserRouter , Routes , Route , Router , Link , NavLink } from "react-router-dom"
import Championships from '../Championships/Championships';
import Premumleage from '../premum/Premumleage'
import Egyptionleage from '../egypt/Egyptionleage';
import {LiaSearchSolid} from 'react-icons/lia';
import Logo from '../assets/Logo.png'
import Header from '../Header/Header';
import News from '../News/News';
import Support from '../support/Support';


const Navbar = () => {


// dark / light


// dark / light 




  const [open, setOpen] = useState(false);
  const [search, setsearch] = useState(false);


  const oppen = ()=>{
    setsearch(true)
  }
  const cllose = ()=>{
    setsearch(false)
  }

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }


    const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        // delay:0.9
      }
    }
  }

  return (
<>
    <BrowserRouter>
<nav>

<div className="right">

<div className="searcher">
    <header>
    <span  onClick={oppen}><BiSearch /> </span>
    </header>

    </div>

  <ul className="icon-list">

    <li className="icon-item"><a href="" className="icon-link">    <ImWhatsapp />
</a></li>
    <li className="icon-item"><a href="" className="icon-link">    <BsInstagram />
</a></li>
    <li className="icon-item"><a href="" className="icon-link">    <TfiYoutube />
</a></li>
    <li className="icon-item"><a href="" className="icon-link">    <FaXTwitter />
</a></li>
    <li className="icon-item"><a href="" className="icon-link">    <FaFacebookF />

</a></li>
<li>
{/* <DarkModeToggle /> */}

</li>

  </ul>


  <AnimatePresence>
{
search &&(

  <motion.div className="search"
  variants={item}
  initial={{height:0,opacity:0}}
  animate={{height:"53vh", opacity:1}}
  transition={{duration:.5}}
  exit="exit"
>   
<div className="btnn_close" onClick={cllose} > <MdClose /> </div>

<div className="search-input">

<form action="">
{/* <span><LiaSearchSolid /></span> */}
<input type="text" name='search' placeholder='Search' className='ser' />
</form>

</div>

  </motion.div>

)
}
</AnimatePresence>

</div>


<div className="left">
<div className="navbarlink">
  
      <Link to="/"  className='llink'>ريلز</Link>

      <Link to="/"  className='llink'> esports</Link>

      <Link to="/"  className='llink' style={{width:"100px"}}>اخر الانتقالات</Link>

      <Link to="/"  className='llink'> مالتيميديا </Link>

      <Link to="/Championships"  className='llink'> دوريات و بطولات </Link>

      <Link to="/News"  className='llink'>الاخبار</Link>

      <Link to="/"  className='llink'>المباريات</Link>

      <Link to="/"  className='llink'><img src={Logo} alt="logo" /></Link>


</div>
    
    <div className="bar">
      <header>
      <span className="menu" onClick={isOpen}><FiMenu /> </span>
      </header>

      </div>


      
    <AnimatePresence>

{
  open &&(
    <motion.div className="menu_container"
    variants={item}
    initial={{height:0,opacity:0}}
    animate={{height:"100vh", opacity:1}}
    transition={{duration:.5}}
    exit="exit"
  >   
  
  <div className="btn_close" onClick={closeMenu} > <MdClose /> </div>


<section className='menu-links'>
  
<div>
  <div className='NavLinks'>


<div className="hediin">
<div className='mine-link' >
<div className='role'>
<div className="role-link">
<h2>عربية</h2>
    <hr />
    <ul>
      <li><a href="">الدورى السعودى</a></li>
      <li><a href="">الدورى التونسى</a></li>
      <li><a href="">الدورى المغربى</a></li>
      <li><a href="">دورى نجوم قطر</a></li>
      <li><a href="">الدورى الاماراتى</a></li>
    </ul>
</div>
    </div>



    <div className='role' >
<div className="role-link">
<h2>اوروبية</h2>
    <hr />
    <ul>
      <li><a href="">الدورى الانجليزى</a></li>
      <li><a href="">الدورى الاسبانى</a></li>
      <li><a href="">كاس السوبر الاوروبى </a></li>
      <li><a href="">كاس كاراباو</a></li>
      <li><a href=""> كاس السوبر الالمانى</a></li>
      <li><a href=""> الدورى الايطالى</a></li>
      <li><a href="">الورى الالمانى</a></li>
      <li><a href=""> الدورى الفرنسى</a></li>
      <li><a href="">كاس المانيا</a></li>
      <li><a href=""> الدورى التركى</a></li>
      <li><a href=""> الدورى البرتغالى</a></li>

    </ul>
</div>
    </div>


    <div className='role' >
<div className="role-link">
<h2>عالمية</h2>
    <hr />
    <ul>
      <li><a href="">كاس العالم للاندية</a></li>
      <li><a href="">كاس العالم لكرة السلة</a></li>
    </ul>
</div>
    </div>


    <div className='role'>
<div className="role-link">
<h2>محلية</h2>
    <hr />
    <ul>
      <li><a href="">الدورى المصرى</a></li>
      <li><a href="">كاس مصر</a></li>
      <li><a href=""> كاس السوبر المصرى لاابطال</a></li>
      <li><a href="">  كاس رابطة الاندية المحترفة</a></li>
    </ul>
</div>
    </div>


    <div className='role' >
<div className="role-link">
<h2>قارية</h2>
    <hr />
    <ul>
      <li><a href="">كاس السوبر الافريقى</a></li>
      <li><a href="">الدورى الافريقى لكرة القدم</a></li>
      <li><a href="">تصفيات امم افريقيا</a></li>
      <li><a href="">تصفيات امم اوروبا</a></li>
      <li><a href="">بطولة افريقيا للكرة الطائرة للرجال </a></li>
      <li><a href="">تصفيات كاس العالم-افريقيا</a></li>
      <li><a href=""> تصفيات كاس العالم-امريكاالجنوبية</a></li>
      <li><a href="">دورى ابطال اوروبا</a></li>
      <li><a href="">الدورى الاوروبى</a></li>
      <li><a href="">دورى المؤتمر الاوروبى</a></li>
      <li><a href="">دورى ابطال افريقيا</a></li>
      <li><a href="">الكونفدرالية الافريقية</a></li>
      <li><a href=""> دورى ابطال اسيا</a></li>
      <li><a href="">كاس اسيا</a></li>

    </ul>
</div>
    </div>
</div>
</div>
<div>

<div className="multe-link">
  <ul>
    <li> <Link to="/">المباريات</Link></li>
    <hr className='line' />
    <li>      <Link to="/News">الاخبار</Link></li>
    <hr className='line' />
    <li>      <Link to="/" > مالتيميديا </Link></li>
    <hr className='line' />
    <li>      <Link to="/Championships"> دوريات و بطولات </Link></li>
    <hr className='line' />
    <li><a href="">رياضات اخرى</a></li>
    <hr className='line' />
    <li>      <Link to="/" >اخر الانتقالات</Link></li>
    <hr className='line' />
    <li><a href="">المحترفون</a></li>
    <hr className='line' />
    <li>  <Link to="/"> esports</Link></li>
    <hr className='line' />
    <li> <Link to="/">ريلز</Link></li>
  </ul>
</div>

</div>

  </div>
</div>







</section>













    </motion.div>
  )
}

</AnimatePresence>


  </div>








</nav>

<Routes>
    <Route path='/' element={<Header />} />
    <Route path='/Championships' element={<Championships />} />
    <Route path='/Match' element={<Match />} />
    <Route path='/Premumleage' element={<Premumleage />} />
    <Route path='/Egyptionleage' element={<Egyptionleage />} />
    <Route path='/News' element={<News />} />
    <Route path='/Support' element={<Support />} />


</Routes>
</BrowserRouter>

</>


  )
}

export default Navbar
