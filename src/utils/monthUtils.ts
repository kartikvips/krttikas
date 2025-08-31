// Month utilities for Kṛttikās monthly themes

export const getCurrentMonth = () => {
  return new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1
};

export const monthLogos = {
  1: { name: 'January', file: '/logo-january.svg', fileLight: '/logo-january-light.svg' },
  2: { name: 'February', file: '/logo-february.svg', fileLight: '/logo-february-light.svg' },
  3: { name: 'March', file: '/logo-march.svg', fileLight: '/logo-march-light.svg' },
  4: { name: 'April', file: '/logo-april.svg', fileLight: '/logo-april-light.svg' },
  5: { name: 'May', file: '/logo-may.svg', fileLight: '/logo-may-light.svg' },
  6: { name: 'June', file: '/logo-june.svg', fileLight: '/logo-june-light.svg' },
  7: { name: 'July', file: '/logo-july.svg', fileLight: '/logo-july-light.svg' },
  8: { name: 'August', file: '/logo.svg', fileLight: '/logo-august-light.svg' }, // Default logo for August
  9: { name: 'September', file: '/logo-september.svg', fileLight: '/logo-september-light.svg' },
  10: { name: 'October', file: '/logo-october.svg', fileLight: '/logo-october-light.svg' },
  11: { name: 'November', file: '/logo-november.svg', fileLight: '/logo-november-light.svg' },
  12: { name: 'December', file: '/logo-december.svg', fileLight: '/logo-december-light.svg' }
};

export const getCurrentMonthData = () => {
  const currentMonth = getCurrentMonth();
  const monthData = monthLogos[currentMonth as keyof typeof monthLogos];
  
  return {
    month: currentMonth,
    name: monthData.name,
    file: monthData.file,
    cssName: monthData.name.toLowerCase()
  };
};

export const getCurrentFavicon = () => {
  const currentMonth = getCurrentMonth();
  return monthLogos[currentMonth as keyof typeof monthLogos].file;
};

export const getThemeAwareFavicon = () => {
  const currentMonth = getCurrentMonth();
  const monthData = monthLogos[currentMonth as keyof typeof monthLogos];
  
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return light version for light browser themes, dark version for dark themes
    return prefersDark ? monthData.file : monthData.fileLight;
  }
  
  // Default to dark version if we can't detect browser theme
  return monthData.file;
};

export const getFaviconWithTheme = (isDarkMode: boolean) => {
  const currentMonth = getCurrentMonth();
  const monthData = monthLogos[currentMonth as keyof typeof monthLogos];
  
  // Return light version for light mode, dark version for dark mode
  return isDarkMode ? monthData.file : monthData.fileLight;
};
