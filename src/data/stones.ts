/**
 * Типы данных для информации о камнях
 */

export interface LocationData {
  icon: string;
  text: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: string;
  aspectRatio: string;
}

export interface ProductSpec {
  icon: string;
  label: string;
  value: string;
  unit: string;
  leftPosition: string;
  iconLeftPosition: string;
  iconTopPosition: string;
  iconWidth: string;
  iconHeight: string;
  iconAspect: string;
}

export interface ColorOption {
  name: string;
  ralCode: string;
  backgroundColor: string;
  textColor?: string; // Опционально, по умолчанию rgba(0,0,0,0.8)
}

export interface StoneData {
  id: string;
  title: string;
  collection: string; // Например, "Marble Collection"
  description: string; // Основное описание камня
  shortDescription: string; // Короткое описание для хедера
  location: LocationData;
  heroImageBackground: string; // Главное изображение в хедере
  heroImage: string; // Главное изображение в хедере
  galleryImages: GalleryImage[];
  specs: ProductSpec[];
  colorOptions?: ColorOption[]; // Опции цветов для камня
}

/**
 * Данные о камнях
 * Пока заполнены только для Bianco Carrara
 */
export const stonesData: Record<string, StoneData> = {
  "bianco-carrara": {
    id: "bianco-carrara",
    title: "Bianco Carrara",
    collection: "Marble Collection",
    description:
      "Legendary Italian marble, quarried in Carrara for over two thousand years. Its pure white background with soft grey veining evokes a sense of purity, harmony, and refined elegance.",
    shortDescription:
      "An exceptional example of the combination of elegance and nature",
    location: {
      icon: "/images/stone-info/location.svg",
      text: "Italy, Carrara",
    },
    heroImage: "/public/images/stone-info/types/bianco-carrara/top.png",
    heroImageBackground:
      "radial-gradient(90.87% 115.37% at 50% 140.14%, #049FB4 0%, #28282B 100%)",
    galleryImages: [
      {
        id: 1,
        src: "/images/stone-info/types/bianco-carrara/hero-1.png",
        alt: "Bianco Carrara marble texture",
        width: "w-[736px]",
        aspectRatio: "aspect-[1.79]",
      },
      {
        id: 2,
        src: "/images/stone-info/types/bianco-carrara/hero-2.png",
        alt: "Bianco Carrara interior application",
        width: "w-[368px]",
        aspectRatio: "aspect-[1.79]",
      },
    ],
    specs: [
      {
        icon: "/images/stone-info/vector-2.svg",
        label: "DENSITY:",
        value: "2710",
        unit: "kg/m3",
        leftPosition: "left-10",
        iconLeftPosition: "left-10",
        iconTopPosition: "top-[46px]",
        iconWidth: "w-[17px]",
        iconHeight: "h-[17px]",
        iconAspect: "aspect-[1]",
      },
      {
        icon: "/images/stone-info/vector-3.svg",
        label: "STRENGTH:",
        value: "125",
        unit: "MPa",
        leftPosition: "left-[397px]",
        iconLeftPosition: "left-[397px]",
        iconTopPosition: "top-[43px]",
        iconWidth: "w-4",
        iconHeight: "h-5",
        iconAspect: "aspect-[0.82]",
      },
      {
        icon: "/images/stone-info/image.svg",
        label: "WATER ABSORBATION:",
        value: "0.1",
        unit: "%",
        leftPosition: "left-[755px]",
        iconLeftPosition: "left-[754px]",
        iconTopPosition: "top-11",
        iconWidth: "w-[17px]",
        iconHeight: "h-[19px]",
        iconAspect: "aspect-[0.84]",
      },
    ],
    colorOptions: [
      {
        name: "Snow White",
        ralCode: "RAL 9016",
        backgroundColor: "#fcfcfa",
        textColor: "rgba(0, 0, 0, 0.8)",
      },
      {
        name: "Light Grey",
        ralCode: "RAL 7035",
        backgroundColor: "#b3b5bd",
        textColor: "rgba(0, 0, 0, 0.8)",
      },
    ],
  },
};

/**
 * Получить данные о камне по ID
 */
export const getStoneData = (id: string): StoneData | undefined => {
  return stonesData[id];
};

/**
 * Получить все ID камней
 */
export const getAllStoneIds = (): string[] => {
  return Object.keys(stonesData);
};
