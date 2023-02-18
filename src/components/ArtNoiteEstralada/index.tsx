import imgNoiteEstrelada from '../../assets/8deaf0b3-2477-4a93-a246-f69c5dbb188e.jpeg'

function ArtNoiteEstralada(){
  return(
<section className="bg-[#033649] h-[800px] w-full mt-32">

    <div className="flex justify-center translate-y-20">
    <a className="text-5xl text-[#F2C36B]">NOITE ESTRELADA</a>
    </div>

  <div className='flex justify-center mt-32'>
    <img src={imgNoiteEstrelada} alt="" className='h-[500px] w-[600px]' />
  </div>
</section>
  )
}

export default ArtNoiteEstralada