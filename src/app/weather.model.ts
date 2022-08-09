export interface Weather {
  coord: {
    lon: number;
    lat: number;
  }
  name: string;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
