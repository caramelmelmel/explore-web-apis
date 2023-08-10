import axios from "axios";

export async function getAllProviders() {
    const response = await axios.get('https://api.apis.guru/v2/providers.json');
    if (!response && !response.data && !response.data.data) {
        return []
    }
    return response.data.data
}

export async function getSpecificProvider(providerUrl) {
    const response = await axios.get(`https://api.apis.guru/v2/${providerUrl}.json`)
    if (!response && !response.data && !response.data.apis) {
        return {}
    }
    const keys = Object.keys(response.data.apis)
    const details = data[keys[0]]
    return details
}