import heroBg from '../assets/images/car_fleet.jpg'

const HeroBackground = () => {
  return (
   <div
  className="relative h-[400px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
    borderRadius: `30px`
  }}
>
  <div>
    <h1 className='text-3xl font-bold'>About Us</h1>
    <p>Discover Your Next Luxury Drive</p>
  </div>
</div>
  )
}

export default HeroBackground