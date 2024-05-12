import axios from "axios";

const BASE_URL = "https://emoji-api.com"
const API_KEY = "8215dff750ff730c97fc77be6d0c3f084c027d10"


export default class EmojiService {
    static async getAll() {
        return await axios.get(`${BASE_URL}/emojis?access_key=${API_KEY}`, {
            params: {
                access_key: API_KEY
            }
        });
    }

    static async search(str) {
        return await axios.get(`${BASE_URL}/emojis`, {
            params: {
                access_key: API_KEY,
                search: str
            }
        });
    }

}