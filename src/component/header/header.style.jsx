import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainer = css`
    padding: 10px 15px;
    cursor: pointer;
`
export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #fff;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 0px 5px;
`;
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2opx;
`
export const OptionLink = styled(Link)`
    ${OptionContainer}
`
export const OptionDiv = styled.div`
    ${OptionContainer}
`