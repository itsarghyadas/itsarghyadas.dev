const timelineData = [
  {
    id: 1,
    year: "2018",
    title: "Passed the 10th standard",
    description: "First step towards my career choice.",
    textColour: "text-lime-400/95",
  },
  {
    id: 2,
    year: "2018-2020",
    title: "Passed the 12th standard",
    description: "Now am I free? No, I am not.",
    textColour: "text-lime-400/95",
  },
  {
    id: 3,
    year: "2020-2023",
    title: "Graduated with a Bachelors degree in Computer Science",
    description:
      "Did I learn anything? I don't know. But I have got a 9.44 CGPA.",
    textColour: "text-lime-400/95",
  },
  {
    id: 4,
    year: "Jun-Dec 2023",
    title: "A dream internship at a startup",
    description:
      "Was it overwhelming? Abso-fu*kin-lutely. But I learnt a lot of things.",
    textColour: "text-lime-400/95",
  },
  {
    id: 5,
    year: "Jan 2024 - Current",
    title: "Hope to get a Full-time offer.",
    description: "Fingers crossed. I hope I get a full-time offer.",
    textColour: "text-lime-400/95",
  },
];

export default function TimeLineSection() {
  return (
    <section className="timeline">
      <div className="mx-auto w-full max-w-2xl border border-b-0 border-t border-dashed border-neutral-700/40 p-5 md:p-10">
        <h2 className="pb-5 font-geistMono text-sm font-semibold underline underline-offset-4">
          LIFE TIMELINE
        </h2>
        <ol className="timeline__list relative border-s border-dashed border-neutral-800">
          {timelineData.map((event) => (
            <li key={event.id} className="timeline__list__item mb-10 ms-[17px]">
              <div className="absolute -start-[7px] mt-1.5 h-3 w-3 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
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
              <p className="event__description mb-[25px] mt-1.5 font-geistMono text-xs font-semibold tracking-tighter text-neutral-400/80 md:mt-1 md:text-sm">
                {event.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
