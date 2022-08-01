import {React,useState} from 'react'
import { Heart,HeartFill} from 'react-bootstrap-icons';
import './Mahsolat.css';
import { Link } from 'react-router-dom';



export default function Mahsolat() {
   let [ghalb,setGhalb] = useState(false);
   


  return (
    <div className='Mahsolat'>
         <div className='mahsolat'>
         <div className='mainCard'>
            
         <div class="card cardd">
         

            {/* ردیف اول */}
         <div className='row '>
             <div class="col-6 col-md-3 mb-3">
                <div class="card h-100 shadowCard">
                <div class="card bg-dark text-white">
                <img src="https://arga-mag.com/file/img/2021/06/Girls-white-shoe-model-44.jpg" class="card-img-top" />
                        <div class="card-img-overlay">
                           <h5 class="card-title">
                             <p className='circle  ' >
                               12%
                               </p>
                            </h5>
                           
                        </div>
                        </div>
                <div class="card-body">
                    <p class="card-text">کفش اسپرت دخترانه کد 00125 </p>
                    <div className='price'>
                    <p class="card-text">  {ghalb == false && <Heart style={{ fontSize:'20px'}} onClick={()=>{setGhalb(true)}} />} {ghalb  && <HeartFill style={{color:'red', fontSize:'20px'}} onClick={()=>{setGhalb(false)}}/>}  </p>
                    <p class="card-text"> 215,000 </p>
                    </div>
                </div>
                </div>
             </div>

             <div class="col-6  col-md-3 mb-3">
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

             <div class="col-6 col-md-3 mb-3">
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
             <div class="col-6 col-md-3 mb-3">
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
  )
}
