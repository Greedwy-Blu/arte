import imgGirl from '../../assets/GIRL WITH A PEARL EARRING by Johannes Vermeer.jpeg'

import  imgArtPainting from "../../assets/The art of Painting, Johannes Vermeer, 1670-71.jpeg";
function ArtGirl(){
  return(
<section className="bg-[#000D0A] h-[800px] w-full ">

    <div className="flex justify-center translate-y-20">
    <a className="text-5xl text-[#9FA6A5]"> MOÇA COM BRINCO DE PÉLORA </a>
    </div>


<div className='flex justify-between'>

    <div className=" overflow-hidden h-[400px] w-[300px] rounded-tl-[137px] rounded-tr-[137px]  bg-[#252617] mt-28 ml-5">
          <img src={imgArtPainting} className="h-[400px] w-[300px]  " />
        </div>


    <div className="mt-[500px] -translate-y-2 -translate-x-32">
          <a className=" text-[#9FA6A5]">A ARTE DA PINTURA</a>
        </div>


  <div className='flex justify-end mt-32 mr-5'>
    <img src={imgGirl} alt="" className='h-[500px] w-[500px]' />
  </div>

  </div>

</section>
  )
}

export default ArtGirl