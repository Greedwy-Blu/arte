import imgArt from '../../assets/5c811df3b78f13095baa16dc_Brush.png'


function TextHeader(){

  return(
   <header >

    <div className='flex justify-center mt-5'>
      <img src={imgArt} alt="" className='h-20 w-20' />
    </div>
    <div className="flex justify-center mt-20">
      <p className="text-5xl">
        <a className="text-center text-branco-1">CONCEPT ART</a>
      </p>
    </div>
    <div className="flex justify-center mt-32">

      <p className="text-center">

        <a className="font-semibold text-4xl text-[#F2C36B]">A arte nos ajuda a desenvolver nosso senso crítico, imaginário e também interpretativo</a>

      </p>

    </div>
   </header>
  )
}

export default TextHeader