export const convertToDateString = (milliseconds) => {
    if (milliseconds === null || milliseconds === "") {
      return "-";
    }
    const Covertedmilliseconds = parseInt(milliseconds);
    const date = new Date(Covertedmilliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const formattedDate = `${month}-${day}-${year} ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    return formattedDate; // Change the date format as needed
  };
  