import axios from "axios";
import { useEffect, useState } from "react"
import { ButtonLabel, ButtonWrap, Contacts, 
        ContactsLabel, 
        ContactsSectionWrapper, 
        ContactsWrapper, 
        DetailsImage, 
        DetailsPageWrapper, 
        HeadingTitle, 
        HeadingWrapper, 
        InformationWrapper } from "./styledPage";
import { ContentDescription, ContentItemWrapper, ContentLabel } from "./styledPage";
import { Button } from "../components";
import { useNavigate, useParams } from "react-router-dom";

type DataDetails = {
    swaggerUrl: string,
    info: {
        contact: {
            email: string,
            name: string,
            url: string
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

const Heading = ({iconUrl, title})=>{
    return (
        <HeadingWrapper>
            <DetailsImage src={iconUrl}/>
            <HeadingTitle>{title}</HeadingTitle>
        </HeadingWrapper>
    )
}

const ContentItem = ({title, desc}) => {
    return (
        <ContentItemWrapper>
            <ContentLabel>{title}</ContentLabel>
            <ContentDescription>{desc}</ContentDescription>
        </ContentItemWrapper>

    )
}
const infoList = ['email','name','url']
const ContactsItem = ({contactInfo}) => {
    if (!contactInfo) {
        return null;
    }
    const data = Object.entries(contactInfo)
    .filter(([key]) => infoList.includes(key))
    .map(([key, value]) => {
        return <ContactsSectionWrapper>
            <ContactsLabel>
            {key[0].toUpperCase() + key.slice(1)}
            </ContactsLabel>
            <Contacts>{value}</Contacts>
        </ContactsSectionWrapper>
    })
    return (
        <ContactsWrapper>
            {data}
        </ContactsWrapper>
    )
}
const APIDetails = () => {
    const urlParams = useParams()
    const {url} = urlParams;
    const [ProviderAPIDetails, setProviderAPIDetails] = useState<DataDetails>()
    useEffect(()=>{
        async function getSpecificProvider(providerUrl: string) {
            const response = await axios.get(`https://api.apis.guru/v2/${providerUrl}.json`)
            const data = (response.data as ResponseDetails).apis
            const keys = Object.keys(data)
            const details = data[keys[0] as keyof typeof data]
            setProviderAPIDetails(details)
        }
        getSpecificProvider(url!)
    },[url])

    const icon = ProviderAPIDetails?.info['x-logo'].url;
    const title = ProviderAPIDetails?.info.title;
    const description = ProviderAPIDetails?.info.description;
    const swaggerUrl = ProviderAPIDetails?.swaggerUrl;
    const contactInfo = ProviderAPIDetails?.info.contact;
    const navigate = useNavigate();

    return(
        <DetailsPageWrapper>
            <Heading iconUrl={icon} title={title}/>
            <InformationWrapper>
                <ContentItem title={"Description"} desc={description} />
                <ContentItem title={"Swagger"} desc={swaggerUrl}/>
                <ContentItemWrapper>
                    <ContentLabel>Contact</ContentLabel>
                    <ContactsItem contactInfo={contactInfo}/>
                </ContentItemWrapper>
                
            </InformationWrapper>
            <ButtonWrap>
                <Button onClick={()=>{navigate('/?sidebaropen=true')}}>
                        <ButtonLabel>Explore more APIs</ButtonLabel>
                    </Button>
                </ButtonWrap>
        </DetailsPageWrapper>
        
    
    )
}

export default APIDetails
