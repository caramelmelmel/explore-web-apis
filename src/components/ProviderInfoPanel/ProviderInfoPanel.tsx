import axios from "axios"
import { useEffect,useState } from "react"
import { InfoPanelIcon, ProviderInfoPanelText, Wrapper } from "./styledProviderInfoPanel"

type DataDetails = {
    swaggerUrl: string,
    info: {
        contact: {
            email: string,
            name: string,
            url: string,
            "x-twitter": string
        }
        description: string,
        title: string,
        "x-logo": {
            url: string
        }
    }
}

interface ResponseDetails {
    apis: Record<string,DataDetails>
}

const InfoPanel = (props: any) => {
    const [ProviderAPIDetails, setProviderAPIDetails] = useState<DataDetails>()
    useEffect(()=>{
        async function getSpecificProvider(providerUrl: string) {
            const response = await axios.get(`https://api.apis.guru/v2/${providerUrl}.json`)
            const data = (response.data as ResponseDetails).apis
            const keys = Object.keys(data)
            const details = data[keys[0] as keyof typeof data]
            setProviderAPIDetails(details)
        }
        getSpecificProvider(props.url)
    },[props.url])
    return(
        <Wrapper>
            <InfoPanelIcon src={ProviderAPIDetails?.info["x-logo"].url}/>
            <ProviderInfoPanelText>{ProviderAPIDetails?.info.title}</ProviderInfoPanelText>
        </Wrapper>
    )
}

export default InfoPanel;
