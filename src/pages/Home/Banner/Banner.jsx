

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://source.unsplash.com/random/800x607/?legos')",
        height: '92vh',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="mb-3 text-light">
          <span style={{ color: '#00e68a' }}>Welcome To</span>
             <span style={{ color: '#FBAF  ' }}> LegoLand Toy</span>
        </h1>
        <p className="mx-auto text-light" style={{ maxWidth: "300px" }}>
          We offer a wide range of Lego toys for kids and enthusiasts. Explore our collection and let your imagination run wild!
        </p>
      </div>
    </div>
  );
};

export default Banner;
