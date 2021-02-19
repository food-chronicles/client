import Navbar from '../components/Navbar'
import homeBanner from '../assets/home-banner.png'

export default function Home() {
  return (
    <>
    <Navbar />
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4 pl-9 mt-5">
        <div>1</div>
        <div>
          <img className="pr-4" src={ homeBanner } alt="Home Banner"/>
        </div>
      </div>
    </div>
    
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Building apps together
        </p>
      </div>
    </div>
    </>
  );
}

