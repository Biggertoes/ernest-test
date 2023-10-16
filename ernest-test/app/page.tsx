import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main>
      
      <div className='fixed w-1/3'>
        <p className='pl-10 pt-10 text-sm text-black'>Ernest is a studio that develops designs, images, and animations for clients in cultue and commerce. Diego Grandry holds a degree in Interactive Media Design. Samuel holds a degree in Graphic Design.</p>
        <p className='pl-10 pt-5 text-sm text-black'>For inquiries, contact us at <a href="mailto:7p1f5@example.com">7p1f5@example.com</a></p>
      </div>
      <div className="snap-mandatory snap-y scroll-py-10 w-screen h-screen overflow-x-hidden overflow-y-scroll will-change-scroll">
        
        <div className="snap-normal snap-center bg-white w-screen h-screen flex flex-col intems-center justify-center will-change-scroll">
          <img src="mugler_01_web.png" alt="" className='self-center w-auto h-3/4 mx-1' />
          <h1 className='text-xs text-black font-medium subpixel-antialiased self-center mt-3'>MUGLER TEST VISUALIZATIONS</h1>
          <h2 className='text-xs text-black font-light subpixel-antialiased self-center '>CGI, ART DIRECTION</h2>
        </div>
        
        <div className="snap-normal snap-center bg-white w-screen h-screen flex flex-col intems-center justify-center will-change-scroll">
          <img src="humid_30_web.png" alt="" className='self-center w-auto h-3/4  mx-1' />
          <h1 className='text-xs text-black font-medium subpixel-antialiased self-center mt-3'>PARTY IN A HUMIDIFIER</h1>
          <h2 className='text-xs text-black font-light subpixel-antialiased self-center '>CGI, ART DIRECTION</h2>
        </div>

        <div className="snap-normal snap-center bg-white w-screen h-screen flex flex-col intems-center justify-center will-change-scroll">
          <img src="SHAPE-OF-U_REEDITION_20230307_RickOwens_V2_[MODIFIED].jpg" alt="" className='self-center w-auto h-3/4 mx-1'/>
          <h1 className='text-xs text-black font-medium subpixel-antialiased self-center mt-3'>SHAPE OF YOU</h1>
          <h2 className='text-xs text-black font-light subpixel-antialiased self-center '>SCULPTING, TEXTURING, RENDERING</h2>
        </div>
        
        <div className="snap-normal snap-center bg-white w-screen h-screen flex flex-col intems-center justify-center will-change-scroll">
          <img src="diegoHair.PNG" alt="" className='self-center w-auto h-3/4 mx-1'/>
          <h1 className='text-xs text-black font-medium subpixel-antialiased self-center mt-3'>MUGLER TEST VISUALIZATIONS</h1>
          <h2 className='text-xs text-black font-light subpixel-antialiased self-center '>CGI, ART DIRECTION</h2>
        </div>
      
      </div>
      

    </main>
  )
}
