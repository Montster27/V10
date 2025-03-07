// /Users/montysharma/Documents/V10/simplified/src/utils/timeUtils.js
/**
 * Format a date object for display
 * @param {Date} date - Date to format
 * @param {Object} options - Formatting options
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return new Date(date).toLocaleDateString('en-US', mergedOptions);
};

/**
 * Advance a date by a specified number of days
 * @param {Date} date - Starting date
 * @param {number} days - Number of days to advance
 * @returns {Date} - New date
 */
export const advanceDateByDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

/**
 * Calculate the semester based on the date
 * @param {Date} date - Current date
 * @returns {string} - Semester name (e.g., "Fall 1983")
 */
export const getCurrentSemester = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  
  // January (0) - May (4): Spring
  // June (5) - July (6): Summer
  // August (7) - December (11): Fall
  
  if (month >= 0 && month <= 4) {
    return `Spring ${year}`;
  } else if (month >= 5 && month <= 6) {
    return `Summer ${year}`;
  } else {
    return `Fall ${year}`;
  }
};
