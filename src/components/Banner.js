import homeBanner from '../assets/home-banner.png'

export default function Banner () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-2 xl:grid-cols-2 xl2:grid-cols-2 mt-12 md:grid-cols-2 justify-center">
      <div className="container mx-auto px-12">
        <div className="justify-center mr-10">
          <img className="pl-12" src={ homeBanner } alt="Home Banner"/>
        </div>
      </div>

       <div className="container mx-auto px-12 mt-6 mb-10 flex justify-center flex-col max-w-xl">
          <h1 className="text-3xl text-blue-900 ml-2 leading-tight  ">
          Are you sure that what you eat is 
          what you get? Find the truth in
          our app.
          </h1>
          <h1 className="text-1xl text-blue-400 mt-2 ml-2 pb-3 leading-tight">
          With blockchain technology we provide your food chronicles
          </h1>
          <button class="h-10 px-5 ml-2 text-indigo-100 transition-colors duration-150 bg-blue-400 rounded-lg focus:shadow-outline hover:bg-blue-500">
          <span class="mr-1">Try now</span>
          </button>
       </div>
    </div>
  )
}