import React from 'react';
import './Payment.css'

export default function Payment() {
  return (
    <div className='Payment' style={{height:'100%'}}>
        <div class="card shadowCard bg-light mb-3" style={{marginRight:'1%', marginLeft:'1%'}} >
        <div class="card shadowCard " style={{margin:'2%'}} >
      <div className='row ' style={{marginRight:'5%'}}>
         <div className='col-sm-6 col-12'>
            <h4 style={{marginRight:'15%',color:'red'}} className="mt-3">جزئیات صورت حساب</h4>
            {/* ردیف اول */}
            <div className='row mb-1'>
                <div className='col-sm col-11'>
                <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">نام * </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                </div>
                <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">نام خانوادگی * </label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                </div>
            </div>
            {/* ردیف دوم */}
            <div className='row mb-1'>
                <div className='col-sm col-11'>
                <label for="exampleDataList" class="form-label"> استان*</label>
                    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="" />
                    <datalist id="datalistOptions">
                    <option value=" تهران" />
                    <option value=" اصفهان"/>
                    <option value="شیراز" />
                    <option value="کرمانشاه "/>
                    <option value="البرز"/>
                    </datalist>
                </div>
            </div>
            {/* ردیف سوم */}
            <div className='row mb-1'>
                <div className='col-sm col-11'>
                <label for="exampleDataList" class="form-label"> شهر*</label>
                    <input class="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="" />
                    <datalist id="datalistOptions1">
                    <option value=" تهران" />
                    <option value=" اصفهان"/>
                    <option value="شیراز" />
                    <option value="کرمانشاه "/>
                    <option value="البرز"/>
                    </datalist>
                </div>
            </div>

            {/* ردیف چهارم */}
            <div className='row mb-1'>
            <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label"> آدرس دقیق* </label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                </div>
            </div>
            {/* ردیف پنجم */}
            <div className='row mb-1'>
            <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">  کد پستی* </label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                </div>
            </div>
            {/* ردیف ششم */}
            <div className='row mb-1'>
            <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label"> شماره همراه* </label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                </div>
            </div>

            {/* ردیف 7 */}
            <div className='row mb-1'>
            <div className='col-sm col-11'>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">توضیحات </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            </div>
            </div>
          
         </div>
         <div className='col-sm-5 col-11 mt-5 ' style={{margin:'3%'}}>
            {/* عکس بالای صفحه */}
         <div id="carouselExampleControls" class="carousel slide showIcon" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.rokna.net/thumbnail/U00EGIRgoqEy/NS2RJzVApQ3E7SFsFf8OS-KvMGwizaa_Q-_dxw0RVwm0qukoI27-JV2XP73Xc1uGeDRyE0w8KrrrEvf2Lcb5DzYd4j3WYr7vwXrZnkpaTeA2XpHC-O3G6s2hyv02wPAW/%D8%B9%D8%B1%D9%88%D8%B3%DB%8C.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
       <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="..." /> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         <div class="card shadowCard bg-light mt-5" >
                <div class="card-body">
                    <h5 class="card-title">
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
                 </h5>
                    
                    <p class="card-text">اطلاعات شخصی شما برای پردازش سفارش شما و پشتیبانی از تجربه شما در این وبسایت و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است استفاده می‌شود.</p>
                    
                    <div className='row' style={{margin:'2%'}}>
                        <button type="button" class="btn btn-primary">ثبت</button>
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
