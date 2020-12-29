import { useRouter } from 'next/router';

type Locale = 'en' | 'ru';
type Localization<T> = Record<Locale, T>;

export const useLocalization = <T>(localization: Localization<T>) => {
  const locale = useRouter().locale as Locale;
  return localization[locale];
};
