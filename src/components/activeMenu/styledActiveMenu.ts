import { styled } from "styled-components"

export const ActiveMenuWrapper = styled.div<{open: boolean}>`
    height: 100%;
    width: 100%;
    padding:10px;
    ${props => props.open && `background: #1A2632;`}
    display: flex;
    flex-direction: column;
    `

export const Title = styled.div`
    font-family: "Inter";
    font-weight: 400;
    font-size: 24px;
    line-height: 29.05px;
`

export const TitleWrapper = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
