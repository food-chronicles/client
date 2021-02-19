import homeBanner from '../assets/home-banner.png'

export default function Banner () {
  return (
    <div className="grid grid-cols-2 mt-5 ml-5 mr-5 mb-12">
       <div className="container mx-auto px-12">
        <div className="justify-center">
          <h1 className="text-3xl text-justify max-w-md text-blue-900 mt-12 ml-2 leading-tight">
          Are you sure that what you eat is 
          what you get? Find the truth in
          our app.
          </h1>
          <h1 className="text-1xl text-blue-400 mt-5 ml-2 leading-tight">
          With blockchain technology we provide your food chronicles
          </h1>
        </div>
       </div>
        <div className="justify-center">
          <img className="pl-12" src={ homeBanner } alt="Home Banner"/>
        </div>
    </div>
  )
}