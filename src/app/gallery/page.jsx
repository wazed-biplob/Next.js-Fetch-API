import Image from "next/image";
import WImage from "../assets/W.jpg";
const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery</h1>
      {/* <img
        width={500}
        height={500}
        className="mx-auto"
        src="https://i.ibb.co/9NdZ7st/music.jpg"
        alt="image"
      /> */}
      <h1>Next Js Image Component</h1>
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src="https://i.ibb.co/9NdZ7st/music.jpg"
        alt="next-image"
      />
      <h1>Local Image</h1>
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src={WImage}
        alt="next-image"
      />
    </div>
  );
};

export default GalleryPage;
