import { 
    MutableRefObject, 
    ReactNode, 
    useCallback, 
    useRef 
} from "react"
import { 
    ChildrenWrapper, 
    SideBarTitle, 
    OverLay, 
    StyledSidebar, 
    Wrapper 
} from "./styledSideBar"
import { createPortal } from "react-dom"

interface SideBarProps {
    open: boolean
    children: ReactNode
    title: String
    onClose: CallableFunction
}

const SideBarPanel = ({ 
    drawerRef, 
    title, 
    children,
    onClose
}: Omit<SideBarProps, 'open'> & {
    drawerRef: MutableRefObject<HTMLDivElement | null>
}) => <Wrapper>
    <StyledSidebar ref={drawerRef}>
    <SideBarTitle>{title}</SideBarTitle>
    <ChildrenWrapper>{children}</ChildrenWrapper>
</StyledSidebar>
<OverLay onClick={() => onClose()}/>
</Wrapper>

export const SideBar = ({ title, open, children, onClose }: SideBarProps) => {
    const drawerRef = useRef<HTMLDivElement | null>(null)
    const Menu = useCallback(() => <SideBarPanel
        drawerRef={drawerRef}
        title={title} 
        children={children}
        onClose={onClose}
    />, [children, title, onClose, drawerRef])
    return open
        ? createPortal(<Menu />, document.body, 'drawer-panel')
        : null   
        
}


