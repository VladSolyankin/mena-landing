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

/**
 * Типы данных для StoneTypeInfo
 */

export interface StoneTypeImage {
  src: string;
  alt: string;
}

export interface StoneTypeCharacteristics {
  dimensions: {
    min: number;
    max: number;
    unit: string; // "см"
  };
  grain: {
    min: number;
    max: number;
    unit: string; // "MPa"
  };
  strength: string[]; // ["fine", "coarse"]
  shape: StoneTypeImage[]; // Несколько изображений
}

export interface StoneTypePattern {
  name: string;
  image: string;
}

export interface StoneTypeData {
  id: string;
  title: string;
  mainImage: string; // Главное изображение
  mainImageOverlay?: string; // Наложение на главное изображение (опционально)
  smallImages: StoneTypeImage[]; // 2 маленьких изображения
  smallImageOverlay?: string; // Наложение на первое маленькое изображение (опционально)
  description: string;
  tags: string[]; // Теги под главным изображением
  optionsCount: {
    number: number;
    text: string; // Например, "granite options"
  };
  characteristics: StoneTypeCharacteristics;
  patterns: StoneTypePattern[];
  dimensionsBar?: string; // Изображение для шкалы dimensions
  strengthBar?: string; // Изображение для шкалы strength
  grainBar?: string; // Изображение для шкалы grain
}

/**
 * Данные для типов продуктов (Tactile tiles, Slabs, etc.)
 */
export const stoneTypesData: Record<string, StoneTypeData> = {
  "tactile-tiles": {
    id: "tactile-tiles",
    title: "Tactile tiles",
    mainImage: "/images/stone-info/types/tactile-tiles/main-image.png",
    smallImages: [
      {
        src: "/images/stone-info/types/tactile-tiles/small-image-1.png",
        alt: "Tactile tiles product page",
      },
      {
        src: "/images/stone-info/types/tactile-tiles/stone-image-2.png",
        alt: "Tactile tiles product",
      },
    ],
    description:
      "These slabs have become an indispensable attribute of modern cities, providing an opportunity for people with visual disabilities to navigate independently in public spaces.",
    tags: ["Granite"],
    optionsCount: {
      number: 31,
      text: "granite options",
    },
    characteristics: {
      dimensions: {
        min: 1,
        max: 300,
        unit: "cm",
      },
      grain: {
        min: 60,
        max: 120,
        unit: "MPa",
      },
      strength: ["fine", "medium", "coarse"],
      shape: [
        {
          src: "/images/stone-info/types/tactile-tiles/shape-1.svg",
          alt: "Shape 1",
        },
        {
          src: "/images/stone-info/types/tactile-tiles/shape-2.svg",
          alt: "Shape 2",
        },
        {
          src: "/images/stone-info/types/tactile-tiles/shape-3.svg",
          alt: "Shape 3",
        },
        {
          src: "/images/stone-info/types/tactile-tiles/shaper-4.svg",
          alt: "Shape 4",
        },
      ],
    },
    patterns: [
      {
        name: "diagonal pattern",
        image: "/images/stone-info/types/tactile-tiles/pattern-1.png",
      },
      {
        name: "square pattern",
        image: "/images/stone-info/types/tactile-tiles/pattern-2.png",
      },
      {
        name: "cone pattern",
        image: "/images/stone-info/types/tactile-tiles/pattern-3.png",
      },
      {
        name: "line pattern",
        image: "/images/stone-info/types/tactile-tiles/pattern-4.png",
      },
    ],
    dimensionsBar: "/images/stone-info/types/tactile-tiles/dimensions-bar.png",
    strengthBar: "/images/stone-info/types/tactile-tiles/strength-bar.png",
    grainBar: "/images/stone-info/types/tactile-tiles/grain-bar.png",
  },
};

/**
 * Получить данные о типе продукта по ID
 */
export const getStoneTypeData = (id: string): StoneTypeData | undefined => {
  return stoneTypesData[id];
};
