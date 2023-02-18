import imgEscultura from '../../assets/Young_Greek_God_Dionysus__God_of_the_grape_-removebg-preview.png'
import imgArtWork from  '../../assets/weird medieval guys (@WeirdMedieval) _ Twitter.png'
import imgArtWork2 from  '../../assets/Beasts _ Griffin.jpeg'


function HeaderBody(){
  return(
    <section className="my-6 ">

      <div className="flex justify-around items-center">
        <div className="h-[400px] w-[300px] ">
          <img src={imgArtWork} className='h-[400px] w-[300px]   rounded-tl-[137px] rounded-tr-[137px] rounded-br-[154px] rounded-bl-[154px] '/>
        </div>
        <div className="overflow-hidden h-[500px] w-[500px]  bg-[#252617] rounded-tl-[240px]  rounded-tr-[240px]  outline outline-2 outline-branco-2">

          <img src={imgEscultura} className='h-[520px] w-[520] ml-16'/>

        </div>
        <div className="h-[400px] w-[300px]  ">
        <img src={imgArtWork2} className='h-[400px] w-[300px] rounded-tl-[137px] rounded-tr-[137px] rounded-br-[154px] rounded-bl-[154px]   '/>
        </div>
      </div>

    </section>
  )

}

export default HeaderBody