import Image from "next/image";

function Cert({ image1, image2, image3, title, subtitle, link, desc }) {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-lg font-semibold">{subtitle}</h4>
        <a className="animate-pulse hover:text-pink-200" target="_blank" href={link}>See my progression</a>
      </div>
      <p className="">
        {desc}
      </p>
      <div className="project-style">
      <Image
            alt="section-image"
            className="hover-transition"
            data-aos="fade-right"
            src={image1}
          />
      <Image
            alt="section-image"
            className="hover-transition"
            data-aos="fade-right"
            src={image2}
          />
      <Image
            alt="section-image"
            className="hover-transition"
            data-aos="fade-right"
            src={image3}
          />
      </div>
    </div>
  );
}

export default Cert;
