import ProjectSection from "@/components/project-section";
import TimeLineSection from "@/components/timeline-section";

export default function Home() {
  return (
    <section className="home relative bg-neutral-800/[0.075]">
      <div className="relative mx-auto max-w-2xl overflow-hidden">
        <div className="absolute left-0 top-5 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-cyan-500 via-red-500 to-orange-500 opacity-10 blur-[75px]"></div>

        <div className=" backdrop-blur-2xl">
          <main className="h-full w-full border border-t-0 border-dashed border-neutral-300/30 dark:border-neutral-700/30">
            <h1 className=" p-5 font-geistMono text-sm font-[550] leading-[1.55rem] text-neutral-300/70 [word-spacing:-0.7px] md:leading-[1.65rem] md:tracking-normal md:[word-spacing:0px]">
              Hi there, I am{" "}
              <span className="relative bg-gradient-to-tr from-orange-400 via-red-500 to-amber-400/80 bg-clip-text font-cabinet font-[900] text-neutral-700 text-transparent underline underline-offset-4">
                <span className="absolute -bottom-[2.5px] left-0 h-[1px] w-full rounded-full bg-gradient-to-tr from-gray-400 via-red-500 to-amber-400 "></span>
                Arghya
              </span>{" "}
              from India. I am an 21 y/o CS graduate. I like gaming and building
              things. I enjoy web development and logic building. Currently I am
              working at a startup and my own side projects.
            </h1>
          </main>
          <div className="relative">
            <div className="absolute bottom-20 right-0 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-cyan-500 via-teal-500 to-orange-500 opacity-10 blur-[75px]"></div>
            <ProjectSection />
          </div>
          <div className="relative">
            <div className="absolute bottom-16 left-0 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-purple-500 via-sky-500 to-blue-500 opacity-10 blur-[75px]"></div>
            <TimeLineSection />
          </div>
        </div>
      </div>
    </section>
  );
}
