import imgGirl from '../../assets/GIRL WITH A PEARL EARRING by Johannes Vermeer.jpeg'

function ArtGirl(){
  return(
<section className="bg-[#000D0A] h-[800px] w-full ">

    <div className="flex justify-center translate-y-20">
    <a className="text-5xl text-[#9FA6A5]"> MOÇA COM BRINCO DE PÉLORA </a>
    </div>

  <div className='flex justify-center mt-32'>
    <img src={imgGirl} alt="" className='h-[500px] w-[500px]' />
  </div>
</section>
  )
}

export default ArtGirl