import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

function Links({Glink, Wlink}) {
  return (
    <div className="flex space-x-4 mt-5 mb-10 text-lg md:text-xl">
      <a
        className="hover:scale-125 transition duration-300"
        href={Glink}
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        className="hover:scale-125 transition duration-300 animate-bounce"
        href={Wlink}
        target="_blank"
      >
        <BiLink />
      </a>
    </div>
  );
}

export default Links;
