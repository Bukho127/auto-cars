import heroBg from '../assets/images/Homepage-Promo-Model-3.avif'

const HeroBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1, 
      }}
    >

    </div>
  )
}

export default HeroBackground