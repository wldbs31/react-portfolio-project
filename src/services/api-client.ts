import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '8c1f83a48d9d4e63a8b543c8f800ff4f'
    }
})