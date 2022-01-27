import styled from 'styled-components'
import corona from '../component/corona.jpg'

export const Input = styled.input`
  border: none;
  height: 30px;
  background-color: #dce4ff;
  /* color: -internal-light-dark(black, white); */
  border-radius: 0.5rem;
  /* border: 1px solid; */
  /* background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%); */
  /* border-bottom-right-radius: 0.5rem; */
  color: black;
  &:focus {
    border: none;
    outline: none;
  }
`;


export const StyledButton = styled.button`

font-size: 14px;
height: 30px;
border-radius: 30px;
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



export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  height: 100px;
  background: 
              linear-gradient(to right, white, grey);
  align-items: center;
  &:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  };
  

`


export const Container = styled.div`
padding: 10px 40px;
align-items: center;
`

export const FCard = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
height: 200px;
align-items: center;


`
