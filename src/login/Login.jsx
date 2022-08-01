import {React,useState} from 'react';
import { Heart,Basket,Trash,PersonFill,Shop,XLg} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Login.css'

export default function Login() {
  const [lgShow, setLgShow] = useState(false);
 const [lgShow1, setLgShow1] = useState(false);
  return (
    <div className='login'>
       <div className='container'>
       <div className='row bg-light'>
          <div className='col-11'></div>
          <div className='col-1'>
              <PersonFill onClick={() => setLgShow(true)} style={{fontSize:'30px'}} />
          </div>
        </div>
       </div>
   
      <Modal
        animation={false}
        size="lg"
        centered
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg" >
           {/* برای حالت لپتاپ */}
          <div className='container showIcon'>
          <div className='row'>
            <div className='col-5 bg-primary ItemCenter' >  
            <div className='row'>
            <Shop  style={{fontSize:'70px'}} />
            <br />
            <br />
            <button type="button" class="btn btn-secondary mt-3" onClick={()=>{setLgShow(false);setLgShow1(true)()}} >عضویت </button>
            </div>
          
             </div>
            <div className='col-7'>
            <div className='row m-3'> 
            <div className='col-11'></div>
            <div className='col-1'>
             <XLg  onClick={() => setLgShow(false)}  style={{fontSize:'25px',display:'flex',justifyContent:'end'}} className='deleteBotton'/> 
             </div>
             </div>
              <div className='row'>
                <h3 className='text-secondary mt-2 mb-3'>ورود</h3>
              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> نام کاربری یا آدرس ایمیل *</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>

              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row' style={{margin:'2%'}}>
                        <button type="button" class="btn btn-secondary">ورود</button>
              </div>

              <div className='row mt-3 mb-5'>
                <div className='col-4'>
                <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                     مرا به خاطر بسپار
                    </label>
               </div>
                </div>

                <div className='col-1'></div>
                <div className='col-6'>
                  <a href="">رمز عبور خود را فراموش کرده‌اید؟</a>
                </div>

              </div>
            </div>
          </div>
          </div>
{/* 
           برای حالت گوشی */}
               <div className='container showIconL'>
          <div className='row'>
            <div className='col'>
            <div className='row m-3'> 
            <div className='col-11'></div>
            <div className='col-1'>
             <XLg  onClick={() => setLgShow(false)}  style={{fontSize:'25px',display:'flex',justifyContent:'end'}} className='deleteBotton'/> 
             </div>
             </div>
              <div className='row'>
                <h3 className='text-secondary mt-2 mb-3'>ورود</h3>
              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> نام کاربری یا آدرس ایمیل *</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>

              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row' style={{margin:'2%'}}>
                        <button type="button" class="btn btn-secondary">ورود</button>
              </div>

              <div className='row' style={{margin:'2%'}}>
              <button type="button" class="btn btn-secondary mt-3" onClick={()=>{setLgShow(false);setLgShow1(true)()}} >عضویت </button>
              </div>

              <div className='row mt-3 mb-5'>
                <div className='col-5'>
                <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                     مرا به خاطر بسپار
                    </label>
               </div>
                </div>

                <div className='col-6'>
                  <a href="">رمز عبور خود را فراموش کرده‌اید؟</a>
                </div>

              </div>
            </div>
          </div>
          </div> 
      </Modal>

      <Modal
        animation={false}
        size="lg"
        centered
        show={lgShow1}
        onHide={() => setLgShow1(false)}
        aria-labelledby="example-modal-sizes-title-lg" >
           {/* برای حالت لپتاپ */}
          <div className='container showIcon'>
          <div className='row'>
            <div className='col-5 bg-primary ItemCenter' >  
            <div className='row'>
            <Shop  style={{fontSize:'70px'}} />
            <br />
            <br />
            <button type="button" class="btn btn-secondary mt-3 " onClick={()=>{setLgShow1(false);setLgShow(true)()}}> ورود</button>
            </div>
          
             </div>
            <div className='col-7'>
            <div className='row m-3'> 
            <div className='col-11'></div>
            <div className='col-1'>
             <XLg  onClick={() => setLgShow1(false)}  style={{fontSize:'25px',display:'flex',justifyContent:'end'}} className='deleteBotton'/> 
             </div>
             </div>
              <div className='row'>
                <h3 className='text-secondary mt-2 mb-3'>عضویت</h3>
              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> نام کاربری یا آدرس ایمیل *</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>

              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   تکرار گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row mt-2 mb-3'>
                <div className='col-4'>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"  />
                  <label class="form-check-label" for="flexRadioDisabled">
                    به عنوان مشتری 
                  </label>
                </div>
                </div>

                <div className='col-2'></div>
                <div className='col-5'>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"  />
                  <label class="form-check-label" for="flexRadioDisabled">
                    به عنوان فروشنده 
                  </label>
                </div>

                </div>
                <div className='col-1'></div>

              </div>

              <div className='row mb-3' style={{margin:'2%'}}>
                        <button type="button" class="btn btn-secondary">عضویت</button>
              </div>

           
            </div>
          </div>
          </div>
          {/* برای حالت گوشی */}
            
          <div className='container CenterTitle showIconL'>
          <div className='row'>
            <div className='col'>
            <div className='row m-3'> 
            <div className='col-11'></div>
            <div className='col-1'>
             <XLg  onClick={() => setLgShow1(false)}  style={{fontSize:'25px',display:'flex',justifyContent:'end'}} className='deleteBotton'/> 
             </div>
             </div>
              <div className='row'>
                <h3 className='text-secondary mt-2 mb-3'>عضویت</h3>
              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> نام کاربری یا آدرس ایمیل *</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>

              </div>
              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row'>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">   تکرار گذرواژه *  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              </div>

              <div className='row mt-2 mb-3'>
                <div className='col-6'>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"  />
                  <label class="form-check-label" for="flexRadioDisabled">
                      <p style={{fontSize:'11px'}}>    به عنوان مشتری </p>
                  </label>
                </div>
                </div>

                <div className='col-6'>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"  />
                  <label class="form-check-label" for="flexRadioDisabled">
                  <p style={{fontSize:'11px'}}>    به عنوان فروشنده  </p>
                  </label>
                </div>

                </div>
               

              </div>

              <div className='row mb-3' style={{margin:'2%'}}>
                        <button type="button" class="btn btn-secondary">عضویت</button>
              </div>
              <div className='row mb-3' style={{margin:'2%'}}>
              <button type="button" class="btn btn-secondary mt-3 " onClick={()=>{setLgShow1(false);setLgShow(true)()}}> ورود</button>
              </div>

           
            </div>
          </div>
          </div>
      </Modal>
    </div>
  )
}
