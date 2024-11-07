import axios from "axios"

export const ProductData = async ({ itemID }: { itemID: string }) => {
    let data = axios.get(`https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=${itemID}`, {
        headers: {
            'x-rapidapi-key': '***',
            'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
        }
    })
    return data;
}