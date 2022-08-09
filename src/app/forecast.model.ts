export interface Forecast {
    daily:
    {
        dt: number;
        temp: {
            min: number;
            max: number;
        }
        weather: 
            {
                icon: string;
            }[]
        
    }[]

}