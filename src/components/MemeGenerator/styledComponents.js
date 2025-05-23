// Style your components here
import styled, {css} from 'styled-components'

export const MemeGeneratorBgContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 25px;
  }
`

export const MemeGeneratorBottomConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

export const MemeGeneratorContentConatiner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30px;
`

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`

export const LabelTitle = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  margin-bottom: 5px;
`

const commonStyles = css`
  border: 1px solid #d7dfe9;
  padding: 10px;
  color: #5a7184;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  margin-top: 5px;
  border-radius: 5px;
  font-family: 'Open Sans';
`

export const InputElement = styled.input`
  ${commonStyles}
`

export const FontDropdownMenu = styled.select`
  ${commonStyles}
`

export const DropDownOptions = styled.option``

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  border-width: 0;
  cursor: pointer;
`

export const MemeBgMainContainer = styled.div`
  margin-left: 30px;
  padding: 20px;
  background-image: url(${props => props.imageProp});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 400px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin-left: 0;
    margin-bottom: 30px;
  }
`

export const MemeContent = styled.p`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.changeFontSize}px;
`
