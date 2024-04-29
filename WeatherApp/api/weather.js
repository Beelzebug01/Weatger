export const fetchWeatherData = async (city) => {
    try {
      const apiKey = "e8e1af4ea20e72185bb661a10006d553";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
   };