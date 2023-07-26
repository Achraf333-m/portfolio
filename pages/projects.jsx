import Header from "@/components/Header";
import "@/styles/globals.css";

function Projects() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center max-w-5xl mx-auto">
        <h1 className="pb-44">My Projects</h1>
        <div className="pb-44 flex flex-col items-center justify-center">
          <h3>some of my clones:</h3>
          <br />
          carousel here Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit voluptatem architecto, excepturi repudiandae accusantium
          aspernatur, vel tempora commodi repellat nihil nisi libero facilis
          laudantium obcaecati fugiat et nulla quaerat. Esse!
        </div>
        <div className="pb-44 flex flex-col items-center justify-center">
          <h1>more here, just style it now</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est
          eveniet veritatis hic dolorum, maxime eius dolor voluptas perferendis
          qui ipsa temporibus facilis officiis nulla beatae consequatur
          doloremque exercitationem iure.
        </div>
        contact me
      </section>
    </>
  );
}

export default Projects;
