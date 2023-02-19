import imgEscultura from '../../assets/Young_Greek_God_Dionysus__God_of_the_grape_-removebg-preview.png'
import imgArtWork from  '../../assets/3d16b926-f7a7-4216-a81c-e07a8677c5f0-removebg-preview.png'
import imgArtWork2 from  '../../assets/9311cdc8-ef50-4e9c-91b5-25b2dba7fa09-removebg-preview.png'


function HeaderBody(){
  return(
    <div className="my-6 ">

      <div className="flex justify-around items-center ">
        <div className="overflow-hidden h-[400px] w-[300px] rounded-tl-[137px] rounded-tr-[137px] rounded-br-[154px] rounded-bl-[154px]  bg-[#252617] ">
          <img src={imgArtWork} className='h-[400px] w-[300px]  mt-5'/>
        </div>
        <div className="overflow-hidden h-[500px] w-[500px]  bg-[#252617] rounded-tl-[240px]  rounded-tr-[240px]  outline outline-2 outline-branco-2">

          <img src={imgEscultura} className='h-[520px] w-[520] ml-16'/>

        </div>
        <div className="overflow-hidden h-[400px] w-[300px] bg-[#252617] rounded-tl-[137px] rounded-tr-[137px] rounded-br-[154px] rounded-bl-[154px] ">
        <img src={imgArtWork2} className='h-[400px] w-[300px]   mt-5 '/>
        </div>
      </div>

    </div>
  )

}

export default HeaderBody