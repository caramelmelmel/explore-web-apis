import { ReactNode } from "react"
import closeIcon from './close.svg'
import openIcon from './open.svg'
import { ActiveMenuWrapper } from "./styledActiveMenu"

export interface ActiveMenuProps {
    title: string
    open: boolean
    children: ReactNode
}

const ActiveMenuTitle = ({title,open}:Omit<ActiveMenuProps, 'children'>) => {
    const icon = open ? <img src={openIcon}/> : <img src={closeIcon}/>
    return <span>{title}{icon}</span>
}

export const ActiveMenu = ({open, title, children}: ActiveMenuProps) => {
    return (
        <ActiveMenuWrapper>
            <ActiveMenuTitle title={title} open={open}/>
            {children}
        </ActiveMenuWrapper>
    )
}
