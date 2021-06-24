import { colors, PastelColor } from "./constants/pastel-colors";
import { Tech, TechName } from "./types/tech";

export const getTechInfo = (techName: TechName): Tech => {
  switch (techName) {
    case TechName.ANGULAR: {
      return { name: "Angular 2+", icon: "./assets/images/angular-icon.svg" };
    }
    case TechName.REACT: {
      return { name: "ReactJs", icon: "./assets/images/react.svg" };
    }
    case TechName.SVELTE: {
      return { name: "Svelte", icon: "./assets/images/svelte.svg" };
    }
    case TechName.REDUX: {
      return { name: "Redux", icon: "./assets/images/redux.svg" };
    }
    case TechName.TAILWIND: {
      return { name: "Tailwind css", icon: "./assets/images/tailwind.svg" };
    }
    case TechName.NODEJS: {
      return { name: "Node Js", icon: "./assets/images/nodejs.svg" };
    }
    case TechName.AWS: {
      return { name: "Amazon Web Services", icon: "./assets/images/aws.svg" };
    }
    case TechName.TS: {
      return { name: "Typescript", icon: "./assets/images/typescript.svg" };
    }
    case TechName.JAVA: {
      return { name: "Java / Java GUI", icon: "./assets/images/java.svg" };
    }
  }
  return null;
};

let colorIndex = 0;
export function getRandomColor(): PastelColor {
  return colors[colorIndex++ % colors.length];
}
