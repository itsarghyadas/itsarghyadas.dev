import ProjectSection from "@/components/project-section";
export default function Home() {
  return (
    <section className="home">
      <div className="relative mx-auto max-w-2xl overflow-hidden">
        <div className="absolute left-0 top-5 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-cyan-500 via-red-500 to-orange-500 opacity-10 blur-[75px]"></div>

        <div className="absolute bottom-10 right-5 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-cyan-500 via-teal-500 to-orange-500 opacity-10 blur-[75px]"></div>
        <div className=" backdrop-blur-2xl">
          <main className="h-full w-full border border-t-0 border-dashed border-neutral-300/30 dark:border-neutral-700/30">
            <h1 className=" p-5 text-justify text-[15px] font-medium leading-7 text-neutral-500">
              Hi there, I am{" "}
              <span className="font-[550] text-neutral-700 dark:text-neutral-300">
                Arghya
              </span>{" "}
              from India. Iam an 21 y/o CS graduate. I like gaming and building
              things. I enjoy web development and logic building. Currently I am
              working at a startup and my own side projects.
            </h1>
          </main>
          <div>
            <ProjectSection />
          </div>
        </div>
      </div>
    </section>
  );
}
