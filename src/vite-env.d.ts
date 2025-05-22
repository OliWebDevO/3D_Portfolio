/// <reference types="vite/client" />

interface ButtonProps {
  className?: string; 
  id?: string;
  text?: string;
}

interface LogoIconType {
  imgPath: string;
}
interface TitleHeaderProps {
  title: string;
  sub: string;
}

interface CardType {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

interface GlowCardProps {
  card: CardType;
  children?: ReactNode;
  index: number;
}

interface ModelType {
  model: TechIconType;
}

interface TechIconType {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}