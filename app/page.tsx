'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [address, setAddress] = useState('')

  const postAddress = async () => {
    const res = await fetch('https://discord.com/api/webhooks/1199117936380624936/66puaEiCDQk0mQHwMLT-GXjQV5ARiHwqh0hqx2vOZlepTrKYhIsdenhPunDReR-VXSwJ', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ content: address })
    })
    if (res.ok) {
      setAddress('')
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <div id='screen1' className='w-full h-[960px] bg-cover flex flex-col items-center text-white' style={{backgroundImage: "url('/background.png')"}}>
        <div id='body' className='w-5/6 lg:w-2/3 h-full flex flex-col'>
          <div id='header' className='w-full h-1/6 py-10 flex justify-between items-center'>
            <img src='/GCLogo.svg' className='w-18'/>
            <button className='px-6 py-3 bg-teal-800 border-2 border-teal-200 rounded'>Connect</button>
          </div>
          <div className='h-full lg:h-2/3 flex flex-col lg:flex-row items-center justify-evenly'>
            <div id='text' className='w-full lg:w-1/2 text-center lg:text-left'>
              <h1 className='text-6xl tracking-wide' style={{fontFamily: 'Knight Warrior'}}>WELCOME TO <br/>GLOBAL CONQUEST</h1>
              <h2 className='text-sm mt-4'>Attracting players with the incentive of real money prizes for top <br/> performers in each tournament.</h2>
              <div className='mt-8'>
                <button className='px-4 py-2 bg-teal-800 border border-teal-200 rounded' onClick={() => window.open('https://discord.gg/globalconquest')}>Join Discord</button>
              </div>
            </div>
            <div id='video' className='w-screen p-4 lg:w-1/2 flex justify-center items-center'>
              <video controls loop src='/GC.mp4#t=0.001' typeof='video/mp4' className='rounded-lg'>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div id='screen2' className='w-full flex flex-col items-center bg-[#000A14] bg-no-repeat bg-right text-white' style={{backgroundImage: "url('/arrow.png')"}}>
        <div className='w-full lg:w-2/3 my-12 lg:my-24 flex flex-col items-center'>
          <div className='w-full flex justify-between items-center p-4'>
            <h1 className='text-4xl lg:text-6xl tracking-wide' style={{fontFamily: 'Knight Warrior'}}>MINI GAME TOURNAMENTS</h1>
            <div className='bg-[#030D17] p-4 flex justify-center items-center ml-8 w-full lg:w-max border-b border-teal-200 rounded-xl'>
              <button className='text-sm lg:text-base bg-teal-800 border border-teal-200 rounded p-2 font-medium w-full' onClick={() => window.open('https://discord.gg/globalconquest')}>Join Discord</button>
            </div>
          </div>
          <div className='my-8 w-[110%]'>
            <img src='/content.png'/>
          </div>
        </div>
      </div>
      <div id='screen3' className='w-full flex flex-col bg-[#000A14] bg-cover items-center text-white py-24' style={{backgroundImage: "url('/image 13.png')"}}>
        <div id='body' className='w-full lg:w-2/3 flex justify-center items-center'>
          <img className='relative hidden lg:block' src='/newletter.png'/>
          <div className='lg:absolute flex flex-col items-center text-center p-4'>
            <h1 className='text-5xl lg:text-6xl tracking-wide' style={{fontFamily: 'Knight Warrior'}}>SIGN UP FOR OUR NEWSLETTER</h1>
            <h2 className='my-8'>Join Our Newsletter To Stay Up To Date On Features And Releases.</h2>
            <div className='flex w-full'>
              <input onChange={(e) => setAddress(e.target.value)} className='rounded bg-stone-950 border border-teal-800 px-4 py-3 mr-4 w-2/3' value={address} placeholder='Enter your email'/>
              <button className='px-4 py-2 bg-teal-800 w-1/3 border border-teal-200 rounded' onClick={() => postAddress()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div id='screen4' className='w-full flex flex-col items-center bg-[#000A14] bg-no-repeat bg-bottom text-white py-24' >
        <div id='body' className='w-2/3 flex justify-center items-center'>
          <img onClick={() => window.open('https://twitter.com/globalconquest_')} className='w-10 mx-4' src='/twitter.svg'/>
          <img onClick={() => window.open('https://youtube.com/@GlobalConquest?si=ebdvQEC4kOM37Pfk')} className='w-10 mx-4' src='/Youtube.svg'/>
          <img onClick={() => window.open('https://discord.gg/globalconquest')} className='w-10 mx-4' src='/Discord.svg'/>
        </div>
      </div>
    </div>
  );
}