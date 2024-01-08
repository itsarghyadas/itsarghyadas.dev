import { Link2Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import projectData from "@/data/project-data";

export default function ProjectSection() {
  return (
    <section className="project">
      <main className="mx-auto w-full max-w-2xl border border-b-0 border-t-0 border-dashed border-neutral-700/40 md:p-10">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-geistMono text-sm font-semibold underline underline-offset-4">
            TOP PROJECTS
          </h2>
          <h4 className="flex items-center gap-x-1 font-geistMono text-sm font-semibold text-neutral-300/80">
            View all
            <ArrowRightIcon className="text-neutral-400" />
          </h4>
        </div>
        <div className="grid w-full gap-5">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative flex w-full items-center justify-between gap-5 rounded border border-dashed border-neutral-700/40 bg-neutral-800/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <div className="w-full">
                <div className="heading__container flex items-center justify-between border-b border-dashed border-neutral-700/40 p-3.5">
                  <h1 className=" flex w-full items-center gap-x-2 font-geistMono text-sm font-semibold text-neutral-300">
                    {project.name}
                    <Link2Icon className="text-neutral-300" />
                  </h1>
                  <div className="flex items-center gap-x-1.5">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                          project.status === "Active"
                            ? "bg-green-500/80"
                            : "bg-red-500/80"
                        } opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex h-2 w-2 ${
                          project.status === "Active"
                            ? "bg-green-500/80"
                            : "bg-red-500/80"
                        } rounded-full `}
                      ></span>
                    </span>

                    <h3
                      className={`font-geistMono text-xs font-bold ${
                        project.status === "Active"
                          ? "text-green-500/80"
                          : "text-red-500/80"
                      }`}
                    >
                      {project.status}
                    </h3>
                  </div>
                </div>
                <div className="project__content p-3.5">
                  <p className="font-geistMono text-sm font-[450] leading-6 text-neutral-300/50">
                    {project.description}
                  </p>
                </div>
                <div className="techstack__content border-t border-dashed border-neutral-800/50 p-3.5 py-2">
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
