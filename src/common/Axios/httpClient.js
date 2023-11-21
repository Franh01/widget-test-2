import axios from "axios";


const httpClient = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BACK_URL,
  headers: { 
    'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/json',
    //Cookie:'session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJakV5TVRJeE1pSXNJbVZ0WVdsc0lqb2labkpoYm1OcGMyTnZRRzF2ZG1sbmIyOHVZMjl0SWl3aWRYTmxjbDlwWkNJNklqRXlNVEl4TWpFaUxDSnBZWFFpT2pFMk9Ua3dNak15TlROOS5pd1Y0aU9lRkhodFFYSHY5V3JKdDVpZDAtSkFObERyQkM5UE5TNjg0QjZZIiwiYWxnIjoiSFMyNTYifQ'
  }
});

export default httpClient;
