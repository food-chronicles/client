import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CarouselImage from '../components/CarouselImage'
import FooterPage from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar />
    <Banner />
    <CarouselImage />
    <FooterPage />
    </div>
  );
}

