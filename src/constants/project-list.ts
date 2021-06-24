import type { Project } from "../types/project";
import { TechName } from "../types/tech";

export const projectList: Project[] = [
  {
    title: "Instagram Redesign Concept",
    desciptions:
      "A small makeover of Instagram on the front end, inspired by the dark makeover of AppleUI.",
    link: "https://github.com/ishan-srivastava/ig-clone",
    banner: "./assets/images/ig.gif",
    techList: [
      TechName.REACT,
      TechName.REDUX,
      TechName.TAILWIND,
      TechName.TS,
      TechName.AWS,
    ],
  },
  {
    title: "Portfolio",
    desciptions: "A minimal UI Portfolio, made from scratch using Svelte.",
    link: "https://github.com/ishan-srivastava/portfolio",
    banner: "./assets/images/portfolio.gif",
    techList: [TechName.SVELTE, TechName.TS, TechName.AWS],
  },
  {
    title: "Blog Site",
    desciptions:
      "A personal blog site made from scratch using React + Tailwind.",
    link: "https://github.com/ishan-srivastava/ishans-blog",
    banner: "./assets/images/blog.gif",
    techList: [TechName.REACT, TechName.TAILWIND, TechName.TS, TechName.AWS],
  },
  {
    title: "Vaccine Slot Availabilty Notifier",
    desciptions:
      "A automated node script, that crawls the gov. vaccine website and notifies about any free slot available, via email.",
    link: "https://github.com/ishan-srivastava/covid-vaccine-tracker",
    banner:"./assets/images/cvt.gif",
    techList: [TechName.NODEJS, TechName.TS, TechName.AWS],
  },
  {
    title: "React Seed Project",
    desciptions:
      "A starter project, that's inspired from past frontEnd experiences, fine-tuned to my likings.",
    link: "https://github.com/ishan-srivastava/portfolio",
    techList: [
      TechName.REACT,
      TechName.REDUX,
      TechName.TAILWIND,
      TechName.TS,
    ],
    banner: "./assets/images/seed.gif",
  },
  {
    title: "RoadRash Concept",
    desciptions:
      "Inspired from the classic bike race game RoadRash, I made a small clone when I used to work in Java GUI.",
    link: "https://github.com/ishan-srivastava/javacode/tree/master/RoadRash",
    techList: [TechName.JAVA],
    banner: "./assets/images/rash.gif",
  },
  {
    title: "Pacman",
    desciptions: "Started as a hobby project when I was 20, written in Java",
    link: "https://github.com/ishan-srivastava/javacode/tree/master/packman",
    banner: "./assets/images/pm.gif",
    techList: [TechName.JAVA]
  },
  {
    title: "Tic TacToe",
    desciptions:
      "A basic engine written in Java that plays a 2x2 tictactoe game with first player.",
    link: "https://github.com/ishan-srivastava/javacode/tree/master/tictactoe",
    techList: [TechName.JAVA],
    banner: "./assets/images/tic.gif",
  },
  {
    title: "Open Source Contributions : Fastest Node Validator",
    desciptions:
      "The fastest JS validator library for NodeJS | Browser | Deno.",
    link: "https://github.com/icebob/fastest-validator",
    techList: [TechName.TS, TechName.NODEJS],
    banner: "./assets/images/fv.gif",
  },
];
