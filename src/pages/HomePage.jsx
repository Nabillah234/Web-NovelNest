import FotoImage from "../assets/images/Foto.jpeg";
import FantasiImage from "../assets/images/Fantasi.png";
import MisteriImage from "../assets/images/Misteri.png";
import RomantisImage from "../assets/images/Romantis.png";

import Novel1 from "../assets/images/Novel-1.webp";
import Novel2 from "../assets/images/Novel-2.webp";
import Novel3 from "../assets/images/Novel-3.webp";
import Novel4 from "../assets/images/Novel-4.webp";
import Novel5 from "../assets/images/Novel-5.webp";

const HomePage = () => {
  return (
  <div className="homepage pb-10">
  <div className="container mx-auto px-4">
    <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
      <div className="box">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Welcome to <span className="font-bold text-sky-400 ">NovelNest</span>
        </h1>
        <p className="text-base/8 mb-7">Nikmati pengalaman membaca yang nyaman dan menyenangkan di NovelNest.</p>
        <a href="#" className="bg-sky-300 hover:bg-sky-700 transition-all py-2 px-4 text-white shadow rounded-full">Novel Kami <i className="ri-bookmark-line ms-1"></i>{""}</a>
      </div>
      <div className="box">
        <img src={FotoImage} alt="Foto Image" className="md:w-full w-[400px] mx-auto md:m-0"></img>
      </div>
    </div>
         <div className="genre pt-32"> 
            <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Genre</h1>
            <div className="genre-box pt-12 grid grid-cols-3 gap-6">
               <div className="box bg-amber-950 rounded-lg shadow p-4">
               <i className="ri-number-1 text-3xl text-white"></i>
               <h3 className="text-xl font-bold text-white mt-6 mb-2">Romantis</h3>
               <p className="text-white text-base/loose"></p>
               <img src={RomantisImage} alt="Romantis Image" className="md:w-full w-[400px] mx-auto md:m-0"></img>
         </div>
         <div className="box  bg-slate-600 rounded-lg shadow p-4">
               <i className="ri-number-2 text-3xl text-white"></i>
               <h3 className="text-xl font-bold text-white mt-6 mb-2">Misteri</h3>
               <p className="text-white text-base/loose"></p>
               <img src={MisteriImage} alt="Misteri Image" className="md:w-full w-[400px] mx-auto md:m-0"></img>
         </div>
         <div className="box  bg-sky-950 rounded-lg shadow p-4">
               <i className="ri-number-3 text-3xl text-white"></i>
               <h3 className="text-xl font-bold text-white mt-6 mb-2">Fantasi</h3>
               <p className="text-white text-base/loose"></p>
               <img src={FantasiImage} alt="Fantasi Image" className="md:w-full w-[400px] mx-auto md:m-0"></img>
         </div>
         </div>

         <div className="novel pt-32">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Novel </h1>
          <div className="novel-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={Novel1} alt="Novel Image" className="w-full h-[550px]" />
              <h1 >Laut Bercerita</h1>
              <p>Tamat</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Novel2} alt="Novel Image" className="w-full h-[550px]" />
              <h1>Black Showman Dan Pembunuhan Di Kota Tak Bernama</h1>
              <p>Tamat</p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img src={Novel3} alt="Novel Image" className="w-full h-[550px]"/>
              <h1>Omniscient Reader's Viewpoint</h1>
              <p>Tamat</p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img src={Novel4} alt="Novel Image" className="w-full h-[550px]" />
              <h1>Harry Potter</h1>
              <p>Tamat</p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img src={Novel5} alt="Novel Image" className="w-full h-[550px]" />
              <h2>The Beginning After The End</h2>
              <p>Bab 498</p>
            </div>

          </div>
         </div>
    <div>
   </div>
    </div>
  </div>
  </div>
  );
}

export default HomePage