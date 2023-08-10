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
    SideBarRef, 
    title, 
    children,
    onClose
}: Omit<SideBarProps, 'open'> & {
    SideBarRef: MutableRefObject<HTMLDivElement | null>
}) => <Wrapper>
    <StyledSidebar ref={SideBarRef}>
    <SideBarTitle>{title}</SideBarTitle>
    <ChildrenWrapper>{children}</ChildrenWrapper>
</StyledSidebar>
<OverLay onClick={() => onClose()}/>
</Wrapper>

export const SideBar = ({ title, open, children, onClose }: SideBarProps) => {
    const sideBarRef = useRef<HTMLDivElement | null>(null)
    const Menu = useCallback(() => <SideBarPanel
        SideBarRef={sideBarRef}
        title={title} 
        children={children}
        onClose={onClose}
    />, [children, title, onClose, sideBarRef])
    return open
        ? createPortal(<Menu />, document.body, 'sidebar-panel')
        : null   
        
}

