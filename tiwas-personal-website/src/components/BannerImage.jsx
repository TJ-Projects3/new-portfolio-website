import './BannerImage.css';

export default function BannerImage() {
  return (
    <>
      <div className="banner-image" aria-label="Profile photo">
        <img
          className="banner-image__img"
          src="/tiwa-professional.jpg"
          alt="Tiwa professional headshot"
        />
      </div>
      <div className="banner-image-text">
        <p>Hello, I'm Tiwa</p>
      </div>
    </>
  );
}
