import { ReactNode, useCallback, useRef, useState, MutableRefObject, useEffect } from "react"
import { StyledSidebar } from './styledSideBar'

interface SideBarProps {
    open: boolean
    children: ReactNode
    title: string
}

const SubMenu = ({
    sideBarRef,
    title,
    children
}: Omit<SideBarProps,'open'> & {
    sideBarRef: MutableRefObject<HTMLDivElement | null>
}) => <StyledSidebar ref={sideBarRef}>
        <div>{title}</div>
        {children}
    </StyledSidebar>

const SideBar = ({title,open,children}:SideBarProps) => {
    const [openSidebar, setOpenSideBar] = useState(open);
    const sideBarRef = useRef<HTMLDivElement|null>(null);
    const Menu = useCallback(()=> <SubMenu
    sideBarRef={sideBarRef}
    title={title}
    children={children}
    />,[title, children, sideBarRef])

    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            const sideBar = sideBarRef.current;
            if (sideBar && !sideBar.contains(e.target as HTMLElement)) {
                sideBar.remove();
            }
        }
        document.addEventListener('click',clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler)
        }
    })
    return <>
            {openSidebar&&(<Menu/>)}
        </>
    
}

export default SideBar;
