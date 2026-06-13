import Image from "next/image";
import fs from "fs";
import path from "path";
import { personal } from "@/data/resume";

function hasAvatar() {
  const avatarPath = path.join(process.cwd(), "public", "avatar.jpg");
  return fs.existsSync(avatarPath);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProfileAvatar() {
  const showImage = hasAvatar();

  return (
    <div className="relative shrink-0">
      <div
        className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/60 to-accent-dim/30 blur-sm"
        aria-hidden
      />
      <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-accent/30 bg-card shadow-lg sm:h-44 sm:w-44 md:h-52 md:w-52">
        {showImage ? (
          <Image
            src={personal.avatar}
            alt={personal.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 144px, 208px"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-card font-mono text-3xl font-bold text-accent sm:text-4xl">
            {getInitials(personal.name)}
          </div>
        )}
      </div>
    </div>
  );
}
