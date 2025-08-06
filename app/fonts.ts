import { Saira, Saira_Condensed } from 'next/font/google';

export const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
});

export const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-saira-condensed',
});