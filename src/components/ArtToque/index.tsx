import imgToque from '../../assets/toque.jpeg'



function ArtToque(){
  return(

    <section className="bg-cinza-2 h-[800px] w-full ">

    <div className="flex justify-center translate-y-20">
    <a className="text-5xl text-[#F2C36B]">A CRIAÇÃO DE ADÃO</a>
    </div>

  <div className='flex justify-center mt-32'>
    <img src={imgToque} alt="" className='h-[500px] w-[600px]' />
  </div>
</section>

  )
}


export default ArtToque