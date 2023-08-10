import {styled} from 'styled-components'

export const StyledSidebar = styled.div`
    background:  #42607B;
    text-align: center;
    font-family: Inter;
    color: #FFFFFF;
    position: absolute;
    width: 40%;
    height: 100%;
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
    &-open {
        transform: translateX(0);
    }
    `
export const OverLay = styled.div`
    background: rgba(0,0,0,0.7);
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
    max-height: 100%;
    overflow: scroll;`