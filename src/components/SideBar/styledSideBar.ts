import {styled} from 'styled-components'

export const StyledSidebar = styled.div`
    background:  #1A2632;
    text-align: center;
    color: rgb(255, 255, 255);
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    right: 0;
    padding: 10px;
    z-index: 1000;
    overflow: hidden;
`
export const SideBarTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    padding-top: 5px;
    line-height: 40px;`

export const Wrapper = styled.div`
    --transition-speed: 0.8s;

    `
export const OverLay = styled.div`
    background: rgba(0,0,0,0.9)
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 999;
    pointer-events: auto;
    cursor: pointer;
    padding: 0px;
    `
export const ChildrenWrapper = styled.div`
    padding: 10px
    max-height: 100vh;
    overflow: scroll;`