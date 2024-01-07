import {
  Link2Icon,
  TriangleUpIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import { GeistMono } from "geist/font/mono";
import projectData from "@/data/project-data";

export default function ProjectSection() {
  return (
    <section className="project">
      <main className="mx-auto w-full max-w-2xl border border-t-0 border-dashed border-neutral-300/30 p-5 dark:border-neutral-700/30 md:p-10">
        <h2
          className={`pb-5 text-sm font-semibold underline underline-offset-4 ${GeistMono.className}`}
        >
          PROJECTS
        </h2>
        <div className="grid w-full gap-3.5">
          {projectData.map((project) => (
            <div key={project.id} className="relative">
              <div className="absolute left-0 top-0 h-full w-full  "></div>
              <div className="flex w-full items-center justify-between gap-5 rounded border border-dashed border-neutral-300/30 dark:border-neutral-800/40">
                <div className="w-full">
                  <div className="heading__container flex items-center justify-between border-b border-dashed p-3.5 dark:border-neutral-800/40">
                    <h1 className="flex w-full items-center gap-x-2 text-sm font-semibold text-neutral-500  dark:text-neutral-300">
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
                    <p className="text-justify text-sm font-[450] leading-6 text-neutral-500 dark:text-neutral-400/90">
                      {project.description}
                    </p>
                  </div>
                  <div className="techstack__content border-t border-dashed border-neutral-300/30 p-3.5 py-2 dark:border-neutral-800/40">
                    <h3 className="text-[13.5px] font-medium text-teal-500">
                      Nextjs + Tailwindcss + MongoDB
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
