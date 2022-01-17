import styled from 'styled-components'
import corona from '../component/corona.jpg'

export const StyledButton = styled.button`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
border: 1px solid;
font-size: 14px;
`

export const OuterDiv = styled.div`
text-align: center;
font-size: 40px;
padding-bottom: 70px;
`

export const HeaderC = styled.header`
height: 25vh;
width: 100%;
color: white;
background-image: url(${corona});
background-repeat: no-repeat;
/* background-position: center; */
background-size: cover;
`
export const Data = styled.data`
border: 1px solid;
`

export const STable = styled.table`
width: 100%;
border-collapse: collapse;
text-align: center;
overflow: hidden;
`
export const STHead = styled.thead`
position: sticky;
z-index: 100;
`

export const STHeadTR = styled.tr``

export const STH = styled.th`
font-weight: normal;
text-transform: capitalize;
color: black;
font-weight: 600;
font-size: 14px;

:not(:last-of-type){
    border-right: 1px solid black;
}
`

export const STBody = styled.tbody``


export const STBodyTR = styled.tr``


export const STD = styled.td``
