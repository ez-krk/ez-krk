import Image from "next/image";
import Link from "next/link";

import { Matrix } from "./components/matrix";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import local from "next/font/local";

const graffiti = local({ src: './assets/fonts/don-graffiti.otf' });
const pixel = local({ src: './assets/fonts/pixel.ttf' });

const kebab = 'ez-krk';
const snake = 'ez_krk';

const socials = {
  discord: `${snake}`,
  github: `${kebab}`,
  twitter: `@${snake}`,
  mail: `me@${kebab}.dev`
};

const projects = [
  {
    slug: 'whitehat',
    website: 'https://whitehat.vercel.app/',
    description: 'anonymous bug bounty protocol',
    github: 'whitehat'
  },
  {
    slug: 'kanban',
    website: 'https://sol-kanban.vercel.app/',
    description: 'organizational toolkit for crypto-natives',
    github: 'kanban'
  },
]

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">

        <div className="relative flex flex-col place-items-center space-y-4 mb-8">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full border-2 border-black"
            src="/dev.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"><span className={graffiti.className}>€$¥</span></h1>
          <div className="flex justfy-center items-center space-x-4">
            <Link href={`https://github.com/${socials.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="h-8 w-8 text-white" />
            </Link>
            <Link href={`https://x.com/${socials.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-8 w-8 text-white" />
            </Link>
            <Link href={`https://discord.com/channels/@me/${socials.discord}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} className="h-8 w-8 text-white" />
            </Link>
            <Link href={`mailto:${socials.mail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-white" />
            </Link>

          </div>
          <h2 className="text-xl text-white">solana developer</h2>
        </div>

        <div className="flex flex-col justfy-center items-center text-center lg:max-w-5xl w-full space-y-4">
          {
            projects.map(project => (
              <Link
                href={project.website}
                className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-100 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                key={project.slug}
              >
                <h3 className={`mb-3 w-full text-2xl font-semibold`}>
                  {project.slug}
                </h3>
                <p className={`m-0 w-full text-sm opacity-50`}>
                  {project.description}
                </p>
              </Link>

            ))
          }
        </div>
      </main>
      <Matrix />
    </>
  );
}
