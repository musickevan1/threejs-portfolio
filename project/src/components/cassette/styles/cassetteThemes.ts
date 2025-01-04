import { CassetteTheme } from '../../../types';

const defaultTheme: CassetteTheme = {
  body: '#3d2424',
  label: '#ffc107',
  text: 'Portfolio',
  accent: '#ff6f00',
  pattern: 'waves'
};

export const cassetteThemes: Record<string, CassetteTheme> = {
  home: defaultTheme,
  about: {
    body: '#2a4858',
    label: '#81d4fa',
    text: 'About Me',
    accent: '#29b6f6',
    pattern: 'grid'
  },
  projects: {
    body: '#2e4532',
    label: '#a5d6a7',
    text: 'Projects',
    accent: '#66bb6a',
    pattern: 'dots'
  },
  contact: {
    body: '#4a3b4a',
    label: '#ce93d8',
    text: 'Contact',
    accent: '#ab47bc',
    pattern: 'lines'
  }
};

export const getThemeForSection = (section: string): CassetteTheme => {
  return cassetteThemes[section] || defaultTheme;
};