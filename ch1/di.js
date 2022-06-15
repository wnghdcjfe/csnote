import axios from "axios";

const fetchResource = (httpClient) => (url) =>
    httpClient(url)
    .then((data) => data.json)
    .catch((error) => console.log(error));


const httpClient = axios.create({
    baseURL: "https://kundol.com",
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}); 

const getData = fetchResource(httpClient); 
//httpClient라는 서비스를 주입 / fetchResource : 클라이언트
getData("/resourcepath").then((response) => console.log(response.data));