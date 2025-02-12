export const MODE = process.env.MODE;
export const BASE_PATH = MODE === "production" ? "/feed-hive-view/" : "/";
export const BRAND_NAME = process.env.BRAND_NAME;
export const AUTHOR = process.env.AUTHOR as unknown as {
  NAME: string;
  URL: string;
  EMAIL: string;
};
export const DATETIME_FORMAT = "YYYY. MM. DD HH:mm";

export const LOGO_COLOR = import.meta.resolve(
  `${BASE_PATH}logo/logo-color.svg`
);
export const LOGO_BLACK = import.meta.resolve(
  `${BASE_PATH}logo/logo-black.svg`
);
export const HIVE_DECO = import.meta.resolve(
  `${BASE_PATH}images/hive_decoration.svg`
);

/* icons */
export const LINKEDIN = import.meta.resolve(`${BASE_PATH}icons/LinkedIn.svg`);
export const INSTAGRAM = import.meta.resolve(
  `${BASE_PATH}icons/Logo_Instagram.svg`
);
export const YOUTUBE = import.meta.resolve(
  `${BASE_PATH}icons/Logo_YouTube.svg`
);
export const TWITTER = import.meta.resolve(`${BASE_PATH}icons/X_Logo.svg`);
