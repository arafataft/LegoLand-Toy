
const LegoYouTube = () => {
  return (
    <div className="lego-youtube-section py-5 my-5">
      <h2 className="section-title text-center">Lego YouTube</h2>
      <div className="video-container d-flex align-items-center justify-content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fqXQBLoLIH0?start=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
};

export default LegoYouTube;
