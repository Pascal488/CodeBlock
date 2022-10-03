import axios from "axios";

export class ApiService {

    headers = {
        'X-RapidAPI-Key': '94509c7e82mshb6add7bfaecc75ap122b19jsna909a42423b8',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    };

    serverURL = 'https://love-calculator.p.rapidapi.com/getPercentage';

    calculateValue = async (Yourname: string, Loversname: string) => {
        try {
            let _data = await axios({
                url: `${this.serverURL}?sname=${Yourname}&fname=${Loversname} `,
                method: "GET",
                headers: this.headers,
            });
            return _data;
        } catch (err) {
           window.alert(err);
        }
    }
}


export interface Response {
    id: number;
}


   