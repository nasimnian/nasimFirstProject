import {React,useState} from 'react';
import './Card.css';
import { Heart,Basket,Trash} from 'react-bootstrap-icons';
import '../assets/css/main.css';


export default function Card() {

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
        <div className='row'>
            {/* برای حالت لپتاپ */}
            <div className='col-sm-7 col-12 rightPart showIcon'>
                 <div className='row mb-1'>
                    <div className='col-5 CenterTitle'><h5> محصول</h5></div>
                    <div className='col  CenterTitle'><h5> قیمت</h5></div>
                    <div className='col CenterTitle'> <h5> تعداد</h5></div>
                    <div className='col  CenterTitle'> <h5> حذف </h5></div>
                 </div>
                 <div className='border mb-3'></div>

                 <div className='row mb-2'>
                    <div className='col-5'>
                        <div className='row'>
                        <div className='col-4'>
                        <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" class="card-img-top" />
                           </div>
                           <div className='col-8 mt-2'>
                                     <p> کفش اسپرت دخترانه </p>
                                     <p className='text-muted'>  فروشنده:  </p>
                           </div>
                        </div>
                      
                    </div>
                    <div className='col mt-2'><h6> 298,۰۰۰ تومان</h6></div>
                    <div className='col mt-2'>  
               
                       <div  role="group" aria-label="Basic outlined example">
                       <button type="button" class="btn btn-outline-primary" onClick={getClick}>+</button>
                         
                          <button type="button" class="btn btn-outline" >{num}</button>
                          <button type="button" class="btn btn-outline-primary" onClick={getClickN}>-</button>
                         
                        </div>
                        </div>
                       
                    <div className='col mt-2 CenterTitle'>  <Trash   style={{fontSize:'30px'}}/>	</div>
                 </div>

                 <div className='border mb-3'></div>

                 <div className='row mb-2'>
                    <div className='col-5'>
                        <div className='row'>
                        <div className='col-4'>
                        <img src="https://rouzegar.com/wp-content/uploads/2017/06/sports-shoes-for-girls-Rouzegar.com-15-1.jpg" class="card-img-top" />
                           </div>
                           <div className='col-8 mt-2'>
                                     <p> کفش اسپرت دخترانه </p>
                                     <p className='text-muted'>  فروشنده:  </p>
                           </div>
                        </div>
                      
                    </div>
                    <div className='col mt-2'><h6> 325,۰۰۰ تومان</h6></div>
                    <div className='col mt-2'>  
               
                       <div  role="group" aria-label="Basic outlined example">
                       <button type="button" class="btn btn-outline-primary" onClick={getClick}>+</button>
                         
                          <button type="button" class="btn btn-outline" >{num}</button>
                          <button type="button" class="btn btn-outline-primary" onClick={getClickN}>-</button>
                         
                        </div>
                        </div>
                       
                    <div className='col mt-2 CenterTitle'>  <Trash  style={{fontSize:'30px'}}/> 	</div>
                 </div>

                 <div className='border mb-3'></div>

                 <div className='row'>
                    <div className='col-4'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="کد تخفیف" />
                    </div>

                    </div>
                    <div className='col-3'>
                    <button type="button" class="btn btn-primary" style={{fontSize:'14px'}}>اعمال کد تخفیف</button>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-3'>
                    <button type="button" class="btn btn-primary " style={{fontSize:'14px'}}>به روزرسانی سبد خرید</button>
                    </div>
                 </div>

              
                 
            </div>

            {/* برای گوشی */}
            <div className='showIconL col-11 '>
            <div class="card mb-2 shadowCard maginRightCard">
            <div class="card-body">
               
                      {/* ردیف اول  */}
                    <div className='row mt-3'>
                       <div className='col-4'>
                       <img src="https://rouzegar.com/wp-content/uploads/2017/06/sports-shoes-for-girls-Rouzegar.com-15-1.jpg" class="card-img-top" />
                       </div>
                       <div className='col-8'>
                        <p>کفش اسپرت دخترانه کد 100021 رنگ سفید</p>
                       </div>
                    </div>

                    <div className='border'></div>

                      {/* ردیف دوم  */}
                    <div className='row mt-1'>
                       <div className='col-4'></div>
                       <div className='col-4'>تعداد</div>
                       <div className='col-4'>2</div>
                    </div>
                    <div className='border'></div>

                      {/* ردیف سوم  */}
                    <div className='row mt-1'>
                    <div className='col-4'></div>
                    <div className='col-4'>جمع جز</div>
                    <div className='col-4'> 285,000</div>
                    </div>
                
            </div>
            </div>
            </div>
            {/* برای گوشی2 */}
            <div className='showIconL col-11 '>
            <div class="card mb-2 shadowCard maginRightCard">
            <div class="card-body">
               
                      {/* ردیف اول  */}
                    <div className='row mt-3'>
                       <div className='col-4'>
                       <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" class="card-img-top" />
                       </div>
                       <div className='col-8'>
                        <p>کفش اسپرت دخترانه کد 100021 رنگ سفید</p>
                       </div>
                    </div>

                    <div className='border'></div>

                      {/* ردیف دوم  */}
                    <div className='row mt-1'>
                       <div className='col-4'></div>
                       <div className='col-4'>تعداد</div>
                       <div className='col-4'>2</div>
                    </div>
                    <div className='border'></div>

                      {/* ردیف سوم  */}
                    <div className='row mt-1'>
                    <div className='col-4'></div>
                    <div className='col-4'>جمع جز</div>
                    <div className='col-4'> 285,000</div>
                    </div>
                
            </div>
            </div>
            </div>

            <div className='row showIconL'>
                <div className='  mb-2 CenterTitle border bg-light' style={{marginRight:'3%'}}>  
                <button type="button" class="btn  ">بروزرسانی سبد خرید</button>
                </div>
            </div>

            {/* کد تخفیف */}
            <div className='showIconL col-11 '>
            <div class="card mb-2 shadowCard maginRightCard border1">
            <div class="card-body">
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" کد تخفیف" />
            </div>
            <div className='CenterTitle'>
            <button type="button" class="btn btn-dark  "> اعمال کد تخفیف </button>
            </div>
            
                
            </div>
            </div>
            </div>

                

            {/* کارت  */}
            <div className='col-sm-4 col-11 '>
            <div class="card mb-5 shadowCard maginRightCard">
            <div class="card-body">
                <h4 class="card-title">جمع کل سبد خرید </h4>
               
                <div className='border'></div>
                <p>
                    <div className='row mt-3'>
                        <div className='col-1'></div>
                        <div className='col'>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            پست عادی
                        </label>
                        </div>
                         </div>
                        <div className='col-2'> </div>
                        <div className='col'> 
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label" for="flexCheckChecked">
                            پست پیشتاز 
                        </label>
                    </div>
                        </div>
                        <div className='col-1'></div>
                     </div>

                 

                </p>
                <p>
                    <div className='row'>
                        <div className='col'>تخفیف شما</div>
                        <div className='col'>26.500</div>
                     </div>
                </p>
                <p>
                    <div className='row'>
                        <div className='col'>هزینه پست</div>
                        <div className='col'>30,000</div>
                     </div>
                </p>
                <p>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col'></div>
                     </div>
                </p>
                <div className='border'></div>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <h5 > مجموع قابل پرداخت</h5>
                    </div>

                    <div className='col-1'>
                    </div>

                    <div className='col-5'>
                    <h5 style={{color:'red'}}> 107,000</h5>
                    </div>
                </div>

                <div className='row m-4'>
                    <button type="button" class="btn btn-primary">ادامه جهت تسویه حساب</button>
                </div>
            </div>
            </div>
            </div>
            

        </div>
    </div>
  )
}
