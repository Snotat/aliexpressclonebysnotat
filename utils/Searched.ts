import axios from "axios"
import { Search } from "@/components/SearchProduct"

export const searchProducts = async ({ input, page }: Search) => {
    console.log('input', input, "page", page)
    const data = await axios.get(`https://aliexpress-datahub.p.rapidapi.com/item_search_2?q=${input}&page=${page}&sort=default`, {
        headers: {
            'x-rapidapi-key': '***',
            'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
        }
    })
    return data
}
export const supperDeals = async ({ input, page }: Search) => {
    console.log('input', input, "page", page)
    const data = await axios.get(`https://aliexpress-datahub.p.rapidapi.com//item_search_promotion_deals?page=1&catId=100000742800`, {
        headers: {
            'x-rapidapi-key': '***',
            'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
        }
    })
    return data
}