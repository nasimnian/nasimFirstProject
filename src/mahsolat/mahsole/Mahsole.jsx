import { Heart,Basket} from 'react-bootstrap-icons';
import './Mahsole.css';
import { Link } from 'react-router-dom';

import React, { useState,Component } from "react"
import { Carousel } from 'react-responsive-carousel';
export default function Mahsole() {

  let[num,setNum]= useState(0);
  function getClick (){
    setNum(++ num)
    
    console.log(`num is ${num}`)
  }
  function getClickN (){
    if (num > 0){
      setNum(-- num)
      
    }
    console.log(`num is ${num}`)
  }


  return (
    <div>
       <div className ="card mb-3 mainCardMahsole shadowCardMahsole  " style={{height:'95%'}} >
            <div class="row g-0">
                <div class="col-md-5">
                <Carousel axis='vertical' dynamicHeight='false'  >
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                    
                </div>
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                  
                </div>
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                  
                </div>
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                   
                </div>
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                 
                </div>
                <div>
                    <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" />
                  
                </div>
            </Carousel>                </div>
                <div class="col-md-6">
                <div class="card-body">

                <div className='sabad'>
                 <button type="button" class="btn "> <Basket /></button>  
                </div>
                
                   
                    <h5 class="card-title"> مدل نیم بوت زنانه </h5>
                    <h5 class="card-title">    2020 </h5>
                    <div className='border'></div>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col'><h5 className='mt-3'>سایز 38</h5></div>
                        <div className='col'><h5 className='mt-3 priceColor'>218,000 </h5></div>
                        
                    </div>

                    <div className='row mt-3 mb-3'>
                       <div className='col-3'></div>
                       <div className='col-3'>
                       <div  role="group" aria-label="Basic outlined example">
                       <button type="button" class="btn btn-outline-primary" onClick={getClick}>+</button>
                         
                          <button type="button" class="btn btn-outline" >{num}</button>
                          <button type="button" class="btn btn-outline-primary" onClick={getClickN}>-</button>
                         
                        </div>
                        </div>
                        <div className='col-4'> <button type="button" class="btn btn-success">افزودن به سبد خرید</button></div>

                        <div className='col-2'></div>
                      </div>
                     
             

                    <div className='border'></div>

                    <div className='mt-5 sabadButton'>
                    شناسه محصول:کتونی سفید دخترانه بندی
                    تاناکورا سنندج، دسته کفش 
                    </div>

                    
                </div>
                </div>
            </div>
      </div>
           {/* پایین صفحه */}
           <div>
         <div class="card shadowCardMahsole mt-1 mainCardMahsole" >
            <div class="card-body">
               <h5 class="card-title"> توضیحات</h5>
               <h6 class="card-subtitle mb-2 text-muted">لطفا قبل از انتخاب به سایز دقت فرمایید. </h6>
               <div className='container'></div>
               <p class="card-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
               و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                 </p>
               <div className='border1 '></div>
               <div className='text-muted mt-2'>               هیچ دیدگاهی برای این محصول نوشته نشده است. </div>
            </div>
            
            <div className='row CenterMahsole'> 
            <div className='col-11 col-sm-10 '>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">دیدگاه شما </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
          </div>
            </div>
          </div>
          <div className='row CenterMahsole'>
            <div className='col-11 col-sm-5'>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> نام </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>

              </div> 
            <div className='col-11 col-sm-5'>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> ایمیل</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            </div>
            <div className='row CenterMahsole'>
            <div className='col-11 col-sm-5'>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
              ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
              </label>
            </div>
              </div>
              <div className='col-11 col-sm-5'>

              </div>
            </div>  
            <div className='row mt-3 mb-3'>
            <div className='col-1'></div>
            <div className='col-5'><button type="button" class="btn btn-primary">ثبت</button></div>
              
           
            </div>

          </div>
            </div>
         </div>
         <div class="card shadowCardMahsole mt-1 mainCardMahsole" >
          <h4  className='mt-3 mb-3'style={{marginRight:'5%',color:'red'}}>         محصولات مرتبط   </h4>
           
          <div className='Mahsolat'>
         <div className='mahsolat'>
         <div className='mainCard'>
            
         <div class="card cardd">
         

            {/* ردیف اول */}
         <div className='row '>
             <div class="col-6 col-md-3 mb-3">
                <div class="card h-100 shadowCard">
                <div class="card bg-dark text-white">
                <img src="https://www.gptravel.bg/img/uploads/tours/4155/29284_orig.jpg" class="card-img-top" />
                        <div class="card-img-overlay">
                        </div>
                        </div>
                <div class="card-body">
                  <div className='sabadButton mt-3'>
                <button type="button" class="btn btn-primary">مشاهده همه </button>
                </div>
                </div>
                </div>
             </div>

             <div class="col-6 col-md mb-3">
                <div class="card h-100 shadowCard">
                <div class="card bg-dark text-white">
                <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" class="card-img-top" />
                        <div class="card-img-overlay">
                           <h5 class="card-title">
                             <p className='circle  ' > 12%</p>
                            </h5>
                           
                        </div>
                        </div>
                <div class="card-body">
                    <p class="card-text">کفش اسپرت دخترانه کد 00125 </p>
                    <div className='price'>
                    <p class="card-text">  <Heart /> </p>
                     <p class="card-text"> 215,000 </p>
                    </div>
                </div>
                </div>
             </div>

             <div class="col-6  col-md mb-3">
                <div class="card h-100 shadowCard">
                <img src="https://rouzegar.com/wp-content/uploads/2017/06/sports-shoes-for-girls-Rouzegar.com-15-1.jpg" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">کفش اسپرت دخترانه کد 00125</p>
                    <div className='price'>
                    <p class="card-text">  <Heart /> </p>
                    <p class="card-text">350,000</p>
                    </div>
                </div>
                </div>
             </div>

             <div class="col-6 col-md mb-3">
                <div class="card h-100 shadowCard">
                <img src="https://harfetaze.com/wp-content/uploads/2021/09/White-linen-22.jpg" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">کفش اسپرت دخترانه کد 00125</p>
                    <div className='price'>
                    <p class="card-text">  <Heart /> </p>
                    <p class="card-text">712,000</p>
                    </div>
                </div>
                </div>
             </div>
             <div class="col-6 col-md mb-3">
                <div class="card h-100 shadowCard">
                <img src="http://dl.topnaz.com/2018/05/Shoe-2-1-e1527253625515.jpg" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">کفش مجلسی زنانه کد 00125</p>
                    <div className='price'>
                    <p class="card-text">  <Heart /> </p>
                    <p class="card-text">500,000</p>
                    </div>
                </div>
                </div>
             </div>
           
         </div>

    
       
         
            </div>
         </div>
    
      </div>
    </div>

         </div>
         

   
 
  
    </div>
  )
}
