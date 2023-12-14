import Header from "@/components/Header";
import Head from "next/head";

function Education() {
  return (
    <>
      <Head>
        <title>Education and Certificates</title>
      </Head>
      <div className="w-full h-screen bg-gradient-to-l from-yellow-700/0 to to-blue-400/0">
        <img
          src="/background.jpg"
          className="fixed -z-20 opacity-60 w-full h-full object-cover"
        />
        <div className="w-full px-2 md:px-4 darkMode lightMode ">
          <Header />
          <section className="max-w-5xl mx-auto py-40 px-4 space-y-20 overflow-x-hidden">
            insert content here
          </section>
        </div>
      </div>
    </>
  );
}

export default Education;
