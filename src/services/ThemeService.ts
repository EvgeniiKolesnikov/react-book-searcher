export default class ThemeService {
  static loadTheme(): string {
    const colorTheme = localStorage.getItem('colorTheme');
    const initialColor = colorTheme ? JSON.parse(colorTheme) : 'sun';
    if (initialColor === 'moon') {
      document.documentElement.setAttribute('theme', 'moon');
    }
    return initialColor;
  }

  static toggleTheme() {
    if (document.documentElement.hasAttribute('theme')) {
      document.documentElement.removeAttribute('theme');
      localStorage.setItem('colorTheme', JSON.stringify('sun'));
    } else {
      document.documentElement.setAttribute('theme', 'moon');
      localStorage.setItem('colorTheme', JSON.stringify('moon'));
    }
  }
}
