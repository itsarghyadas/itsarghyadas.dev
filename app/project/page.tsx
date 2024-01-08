import {
  Link2Icon,
  TriangleUpIcon,
  TriangleDownIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import allProjectsData from "@/data/all-project-data";

export default function Projectpage() {
  return (
    <section className="project h-full overflow-hidden">
      <main className="relative mx-auto h-full w-full max-w-2xl overflow-hidden border border-b-0 border-t-0 border-dashed border-neutral-300/30 p-5 backdrop-blur dark:border-neutral-700/30 md:p-10">
        <div className="absolute left-0 top-5 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-green-500 via-teal-500 to-blue-500 opacity-10 blur-[80px]"></div>
        <div className="absolute bottom-20 right-0 -z-10 m-auto h-[220px] w-[270px] rounded-b rounded-l-xl rounded-r-md rounded-t-full bg-gradient-to-tr from-orange-500 via-red-500 to-lime-500 opacity-10 blur-[80px]"></div>
        <div className="flex items-center justify-between pb-5">
          <h2
            className={` text-sm font-semibold underline underline-offset-4 ${GeistMono.className}`}
          >
            All PROJECTS
          </h2>
          <h4 className="flex items-center gap-x-1 font-geistMono text-sm font-semibold text-neutral-300/80">
            Vote them
            <ArrowRightIcon className="text-neutral-400" />
          </h4>
        </div>
        <div className="grid w-full gap-5">
          {allProjectsData.map((project) => (
            <div
              key={project.id}
              className="relative flex w-full items-center justify-between gap-5 rounded border border-dashed border-neutral-300/30 bg-neutral-800/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] dark:border-neutral-700/40"
            >
              <div className="w-full">
                <div className="heading__container flex items-center justify-between border-b border-dashed p-3.5 dark:border-neutral-700/40">
                  <h1 className=" flex w-full items-center gap-x-2 font-geistMono text-sm font-semibold text-neutral-500  dark:text-neutral-300">
                    {project.name}
                    <Link2Icon className="text-neutral-300" />
                  </h1>
                  <div className="flex items-center gap-x-1.5">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                          project.status === "Active"
                            ? "bg-green-500/50 dark:bg-green-500/80"
                            : "bg-red-500/50 dark:bg-red-500/80"
                        } opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex h-2 w-2 ${
                          project.status === "Active"
                            ? "bg-green-500/50 dark:bg-green-500/80"
                            : "bg-red-500/50 dark:bg-red-500/80"
                        } rounded-full `}
                      ></span>
                    </span>

                    <h3
                      className={`font-geistMono text-xs font-bold ${
                        project.status === "Active"
                          ? "text-green-500/50 dark:text-green-500/80"
                          : "text-red-500/50 dark:text-red-500/80"
                      }`}
                    >
                      {project.status}
                    </h3>
                  </div>
                </div>
                <div className="project__content p-3.5">
                  <p className="font-geistMono text-sm font-[450] leading-6 text-neutral-500 dark:text-neutral-300/50">
                    {project.description}
                  </p>
                </div>
                <div className="techstack__content border-t border-dashed border-neutral-300/30 p-3.5 py-2 dark:border-neutral-800/50">
                  <h3 className="font-geistMono text-xs font-medium text-teal-500">
                    {project.techStack}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
