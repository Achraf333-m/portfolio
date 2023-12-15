import Links from "./UI/Links";
import movflixSubscription from "@/public/movflix-Sub.png";
import movflixStripe from "@/public/movflix-stripe.png";
import movflixhome from "@/public/movflix-home.png";
import Image from "next/image";

function Project({
  name,
  technologies,
  Web,
  Git,
  image1,
  image2,
  image3,
  description,
}) {
  return (
    <div data-aos="fade-in" className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl" data-aos="fade-in" data-aos-delay="300">
          {name}
        </h1>
        <p className="font-extralight text-md">{technologies}</p>
        <Links Wlink={Web} Glink={Git} />
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
            data-aos-delay="200"
            src={image2}
          />
          <Image
            alt="section-image"
            className="hover-transition"
            data-aos="fade-right"
            data-aos-delay="400"
            src={image3}
          />
        </div>
        <p className="font-light text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Project;
