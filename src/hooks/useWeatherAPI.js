import axios from 'axios'
const appid = process.env.REACT_APP_API_KEY;

const useWeatherAPI = function(city) {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
    .get(url + city + '&appid=' + appid)
    .then(res => {
      const data = res.data;
      setWeather(data.weather);
      setLocation(data.name);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, []);

  return {weather, location};
}

export default useWeatherAPI;
