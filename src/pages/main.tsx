import { useEffect, useState } from 'react'
import { Button, SideBar } from '../components'
import { ButtonLabel, MainPageWrapper } from './styledPage';
import axios from 'axios';
import { ActiveMenu, ActiveMenuProps } from '../components/activeMenu/ActiveMenu';
import InfoPanel from '../components/ProviderInfoPanel/ProviderInfoPanel';


function Main() {

  const [open, setOpen] = useState(true);
  const [providersUrlList,setProvidersUrlList] = useState([])
  useEffect(()=>{
    async function getAllProviders() {
        const response = await axios.get('https://api.apis.guru/v2/providers.json');
        setProvidersUrlList(response.data.data)
    }
    getAllProviders()
  }, [])

  const data: ActiveMenuProps[] = providersUrlList.map((url: any) => ({
    title: url,
    defaultOpen: false,
    children: <InfoPanel url={url} />
  }))

  return (
        <MainPageWrapper>
          <Button onClick={() => {
        setOpen((val)=>!val)}}>
          <ButtonLabel>Explore Web APIs</ButtonLabel>
        </Button>
        <SideBar
          title="test"
          open={open}
          onClose={() => setOpen(false)}>
            {data.map((element)=><ActiveMenu{...element}/>)}
        </SideBar>
        </MainPageWrapper>
  )
}

export default Main