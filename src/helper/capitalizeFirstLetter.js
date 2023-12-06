export const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
        // Check if the input is a non-empty string
        return { original: str, extractedAndCapitalized: '' };
      }
    
      // Extract the first letter and capitalize it
      const firstLetter = str.charAt(0).toUpperCase();
      // Extract the rest of the string
      const restOfString = str.slice(1);
    
      return { original: str, extractedAndCapitalized: firstLetter + restOfString };
  }