// Month utilities for Kṛttikās monthly themes

export const getCurrentMonth = () => {
  return new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1
};

export const monthLogos = {
  1: { name: 'January', file: '/logo-january.svg' },
  2: { name: 'February', file: '/logo-february.svg' },
  3: { name: 'March', file: '/logo-march.svg' },
  4: { name: 'April', file: '/logo-april.svg' },
  5: { name: 'May', file: '/logo-may.svg' },
  6: { name: 'June', file: '/logo-june.svg' },
  7: { name: 'July', file: '/logo-july.svg' },
  8: { name: 'August', file: '/logo.svg' }, // Default logo for August
  9: { name: 'September', file: '/logo-september.svg' },
  10: { name: 'October', file: '/logo-october.svg' },
  11: { name: 'November', file: '/logo-november.svg' },
  12: { name: 'December', file: '/logo-december.svg' }
};

export const getCurrentMonthData = () => {
  const currentMonth = 1;
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
