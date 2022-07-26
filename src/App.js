import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Baju1 from './Assets/baju1.svg';
import Baju2 from './Assets/baju2.svg';
import {ReactComponent as Trash} from './Assets/trash.svg';
import {ReactComponent as Arrow} from './Assets/arrow.svg';
import {ReactComponent as Like} from './Assets/like.svg';
import {ReactComponent as Plus} from './Assets/plus.svg';
import {ReactComponent as Minus} from './Assets/minus.svg';

function App() {
  const [count,setCount]=useState(1);
  const [count2,setCount2]=useState(1);
  return (
    <div className="App">
      <div className='bg-cart'><h1 className='text-2xl text-center py-8'>Shopping Chart</h1></div>
      <div className=' lg:flex justify-center gap-7 py-5 '>
        <div className=' px-40 py-5 border rounded-lg border-gray-100 shadow-xl'>
          <p className='text-xl font-semibold pb-3'>Cart (2 items)</p>
          <div className=''>
            <div className='grid grid-rows-2 gap-10'>
              <div className='flex gap-4'>
                <div className=' flex bg-items justify-center rounded-lg w-52 h-52'>
                  <img src={Baju1} className=' h-3/4 w-3/4'/>
                </div>
                <div className='text-start'>
                  <p className='text-xl font-semibold pb-1'>Blue denim shirt</p>
                  <p className='text-sm pb-6'>SHIRT BLUE</p>
                  <p className='text-sm pb-1'>COLOR BLUE</p>
                  <p className='text-sm pb-6'>SIZE M</p>
                  <div className='flex gap-5'>
                    <div className='flex gap-2'>
                      <Trash className='self-center'/>
                      <p className='text-sm'>REMOVE ITEM</p>
                    </div>
                    <div className='flex gap-2'>
                      <Like className='self-center'/>
                      <p className='text-sm'>MOVE TO WISH LIST</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-rows-3'>
                  <div>
                    <div className='grid grid-cols-3 border divide-x-2 rounded-lg'>
                      <Plus onClick={()=>setCount(count+1)} className=' h-full justify-self-center'/>
                      <p className='text-center px-3 py-1'>{count}</p>
                      <Minus onClick={()=>setCount(count-1)} className='h-full justify-self-center'/>
                    </div>

                    <p className='text-xs text-center'>(Note 1 Place)</p>
                  </div>
                  <p></p>
                  <p className='text-end text-lg font-bold'>${count*17.99}</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className=' flex bg-items justify-center rounded-lg w-52 h-52'>
                  <img src={Baju2} className=' h-3/4 w-3/4'/>
                </div>
                <div className='text-start'>
                  <p className='text-xl font-semibold pb-1'>Blue denim shirt</p>
                  <p className='text-sm pb-6'>SHIRT BLUE</p>
                  <p className='text-sm pb-1'>COLOR BLUE</p>
                  <p className='text-sm pb-6'>SIZE M</p>
                  <div className='flex gap-5'>
                    <div className='flex gap-2'>
                      <Trash className='self-center'/>
                      <p className='text-sm'>REMOVE ITEM</p>
                    </div>
                    <div className='flex gap-2'>
                      <Like className='self-center'/>
                      <p className='text-sm'>MOVE TO WISH LIST</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-rows-3'>
                  <div>
                    <div className='grid grid-cols-3 border divide-x-2 rounded-lg'>
                      <Plus onClick={()=>setCount2(count2+1)} className=' h-full justify-self-center'/>
                      <p className='text-center px-3 py-1'>{count2}</p>
                      <Minus onClick={()=>setCount2(count2-1)} className='h-full justify-self-center'/>
                    </div>

                    <p className='text-xs text-center'>(Note 1 Place)</p>
                  </div>
                  <p></p>
                  <p className='text-end text-lg font-bold'>${count2*35.99}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-start '>
          <div className='grid border rounded-lg border-gray-100 shadow-xl px-5 py-5'>
            <p className='text-xl font-semibold py-4'>The total amount of</p>
            <div className='grid grid-cols-2 gap-10 py-4'>
              <p className='text-start'>Temporary amount</p>
              <p className='text-end'>$53.98</p>
            </div>
            <div className='grid grid-cols-2 gap-10 pb-4 border-b-2'>
              <p className='text-start'>Shipping</p>
              <p className='justify-self-end'>Gratis</p>
            </div>
            <div className='grid grid-cols-2 gap-10 pb-4 pt-4'>
              <div>
                <p className='text-start'>The total amount of</p>
                <p>(including VAT)</p>
              </div>
              <p className='text-end self-center font-semibold'>$53.98</p>
            </div>
            <button className='bg-button text-white text-sm py-3 rounded-lg'>GO TO CHECKOUT</button>
          </div>
          <div className='flex gap-10 rounded-lg border border-gray-100 shadow-xl px-5 py-5 mt-10'>
            <p>Add a discount code (optional)</p>
            <Arrow className='rotate-180 self-center '/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
