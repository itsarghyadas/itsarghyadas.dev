import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-dashed  border-neutral-700/30 bg-background/50 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between border border-b-0 border-t-0 border-dashed border-neutral-700/30 p-5 py-2.5">
        <p className="font-geistMono text-sm font-[550] text-neutral-400/90">
          Built by Arghya
        </p>
        <div className="flex items-center gap-x-2">
          <TwitterLogoIcon className="h-5 w-5 text-neutral-400/70" />
          <GitHubLogoIcon className="h-5 w-5 text-neutral-400/70" />
        </div>
      </div>
    </footer>
  );
}
