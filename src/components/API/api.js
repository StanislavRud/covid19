import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.covid19api.com/summary',
});


export const covidAPI = {
    getCountries() {
        return instance.get()
            .then(response => {
                return response.data
            });
    },
}