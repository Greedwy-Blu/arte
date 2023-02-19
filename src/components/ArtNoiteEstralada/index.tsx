import imgNoiteEstrelada from "../../assets/8deaf0b3-2477-4a93-a246-f69c5dbb188e.jpeg";
import imgCampo from "../../assets/Campo de trigo com corvos, 1890 ( Vincent Van Gogh.jpeg";
function ArtNoiteEstralada() {
  return (
    <section className="bg-[#033649] h-[800px] w-full mt-32 ">
      <div className="flex justify-center translate-y-20 -translate-x-24">
        <a className="text-5xl text-[#F2C36B]">NOITE ESTRELADA</a>
      </div>

      <div className="flex justify-between">
        <div className=" mt-32">
          <img src={imgNoiteEstrelada} alt="" className="h-[500px] w-[600px]" />
        </div>

        <div className=" overflow-hidden h-[400px] w-[300px] rounded-tl-[137px] rounded-tr-[137px] rounded-br-[154px] rounded-bl-[154px]  bg-[#252617] translate-x-24">
          <img src={imgCampo} className="h-[400px] w-[300px]  " />
        </div>

        <div className="mt-[500px] -translate-y-20 -translate-x-24">
          <a className=" text-[#F2C36B] ">CAMPO DE TRIGO COM CORVOS</a>
        </div>
      </div>
    </section>
  );
}

export default ArtNoiteEstralada;
