import { useState } from 'react'
import { Button, SideBar } from './components'
import { ButtonLabel, MainPageWrapper } from './pages/styledPage';

function App() {
  const [open, setOpen] = useState(false);

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
        </SideBar>
        </MainPageWrapper>
        
        
  )
}

export default App