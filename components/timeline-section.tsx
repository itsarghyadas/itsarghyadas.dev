const timelineData = [
  {
    id: 1,
    year: "2018",
    title: "Passed the 10th standard",
    description: "First step towards my career choice.",
    textColour: "text-yellow-400/90",
  },
  {
    id: 2,
    year: "2018-2020",
    title: "Passed the 12th standard",
    description: "Now am I free? No, I am not.",
    textColour: "text-cyan-400/90",
  },
  {
    id: 3,
    year: "2020-2023",
    title: "Graduated with a Bachelors degree in Computer Science",
    description:
      "Did I learn anything? I don't know. But I have got a 9.44 CGPA.",
    textColour: "text-green-400/90",
  },
];

export default function TimeLineSection() {
  return (
    <section className="timeline">
      <div className="mx-auto w-full max-w-2xl border border-b-0 border-t-0 border-dashed border-neutral-300/30 p-5 dark:border-neutral-700/30 md:p-10">
        <h2 className="pb-5 font-geistMono text-sm font-semibold underline underline-offset-4">
          LIFE TIMELINE
        </h2>
        <ol className="relative border-s border-dashed border-gray-200 dark:border-neutral-800">
          {timelineData.map((event) => (
            <li key={event.id} className="mb-10 ms-4">
              <div className="absolute -start-[7px] mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/50 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-neutral-500/50"></span>
                </span>
              </div>
              <time className="font-geistMono text-xs font-medium leading-none text-neutral-500">
                {event.year}
              </time>
              <h3
                className={`my-1 font-geistMono text-sm font-bold ${event.textColour}`}
              >
                {event.title}
              </h3>
              <p className="mb-4 mt-1.5 font-geistMono text-xs font-semibold tracking-tighter text-neutral-400/80 md:text-sm">
                {event.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
