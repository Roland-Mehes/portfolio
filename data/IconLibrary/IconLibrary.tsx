import Html5 from '@/public/svg/html5';
import Css3 from '@/public/svg/css3';
import JavaScriptSVG from '@/public/svg/JavaScriptSVG';
import ReactSVG from '@/public/svg/React';
import NextSVG from '@/public/svg/NextSVG';
import TailwindCss from '@/public/svg/TailwindCss';
import Figma from '@/public/svg/Figma';
import TypeScript from '@/public/svg/TypeScript';

// Icon Map
export const iconMap: Record<string, React.ReactNode> = {
  Html5: <Html5 />,
  Css3: <Css3 />,
  JavaScriptSVG: <JavaScriptSVG />,
  ReactSVG: <ReactSVG />,
  NextSVG: <NextSVG />,
  TailwindCss: <TailwindCss />,
  Figma: <Figma />,
  TypeScript: <TypeScript />,
};
