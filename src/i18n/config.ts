interface LocalConfig {
  fallbackLng: string;
  languages: {
    [key: string]: string;
  };
}

const config: LocalConfig = {
  fallbackLng: 'en',
  languages: {
    'en-US': 'English',
    es: 'Español',
  },
};

export const resources = Object.keys(config.languages).reduce(
  (acc: { [key: string]: any }, key) => {
    acc[key] = {
      translation: require(`../../locales/${key}.json`),
    };
    return acc;
  },
  {},
);

export default config;
