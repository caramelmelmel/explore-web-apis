import { ReactNode, useState } from "react"
import closeIcon from './close.svg'
import openIcon from './open.svg'
import { ActiveMenuWrapper, Title, TitleWrapper } from "./styledActiveMenu"

export interface ActiveMenuProps {
    title: string
    defaultOpen: boolean
    children: ReactNode
}


const ActiveMenuTitle = ({ title, open, onClick }: Omit<ActiveMenuProps, 'children' | 'defaultOpen'> & {
    onClick: CallableFunction,
    open: boolean
}) => {
    const icon = open ? <img src={openIcon} />: <img src={closeIcon} />
    return <TitleWrapper onClick={() => onClick()}>
        <Title>{title}</Title>
        {icon}
    </TitleWrapper>
}

export const ActiveMenu = ({ title, defaultOpen, children }: ActiveMenuProps) => {
    const [open, setOpen] = useState(defaultOpen)
    return <ActiveMenuWrapper open={open}>
        <ActiveMenuTitle
            title={title}
            open={open}
            onClick={() => setOpen((val) => !val)}
        />
        {open && children}
    </ActiveMenuWrapper>
}
