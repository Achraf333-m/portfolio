import Image from "next/image";

function AboutPara({ title, para, Newimage }) {
  return (
    <div className="">
      <h1>{title}</h1>
      <div className="flex justify-between py-4 space-y-4 flex-col md:flex-row md:space-y-0 md:space-x-4">
        <p className="md:w-[500px] text-xl">{para}</p>
        <Image src={Newimage} className="rounded-lg h-60 w-full md:w-[50%]" />
      </div>
    </div>
  );
}

export default AboutPara;
