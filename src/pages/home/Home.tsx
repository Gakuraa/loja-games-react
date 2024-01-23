import homeLogo from '../../assets/home.gif';
import './Home.css';

function Home() {
  return (
    <div className="bg-purple-950 h-screen flex flex-col items-center justify-center relative">
      <img src={homeLogo} alt="gif" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="bg-purple-950 p-8 rounded-md text-center mt-[-40rem]">
          <h2 className="text-5xl font-bold ">Compre seus games e consoles na maior loja de games do Brasil!</h2>
          <p className="text-xl mt-5">Confira aqui!</p>
          <div className="flex justify-around gap-4">
            <button className="rounded bg-purple-300 text-blue-600 py-2 px-4 mt-5">Confira</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
