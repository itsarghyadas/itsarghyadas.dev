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
          className={`pb-7 font-semibold underline underline-offset-4 ${GeistMono.className}`}
        >
          PROJECTS
        </h2>
        <div className="grid w-full gap-3.5">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex w-full items-center justify-between gap-5 rounded border border-dashed border-neutral-300/30 dark:border-neutral-800/40"
            >
              <div className="w-full">
                <div className="heading__container flex items-center justify-between border-b border-dashed p-3.5 dark:border-neutral-800/40">
                  <h1 className="flex w-full items-center gap-x-2 text-sm font-semibold text-neutral-500  dark:text-neutral-300">
                    {project.name}
                    <Link2Icon className="text-neutral-300" />
                  </h1>
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center justify-start gap-x-1 rounded-full border border-dashed border-neutral-300/30 bg-green-700/10 p-1 pr-2.5 dark:border-neutral-800/40">
                      <TriangleUpIcon className="h-5 w-5 text-green-500" />
                      <h3 className="text-xs font-semibold text-neutral-500">
                        1000
                      </h3>
                    </div>
                    <div className="flex items-center justify-start gap-x-1 rounded-full border border-dashed border-neutral-300/30 bg-red-700/10 p-1 pr-2.5 dark:border-neutral-800/40">
                      <TriangleDownIcon className="h-5 w-5 text-red-500" />

                      <h3 className="text-xs font-semibold text-neutral-500">
                        30
                      </h3>
                    </div>
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
          ))}
        </div>
      </main>
    </section>
  );
}
