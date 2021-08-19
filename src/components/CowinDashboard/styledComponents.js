import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #161625;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  max-width: 1110px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`
export const Logo = styled.img`
  width: 50px;
  height: 50px;
`
export const LogoHeading = styled.h1`
  color: #2cc6c6;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;
  margin-left: 10px;
`
export const Heading = styled.h1`
  color: #cbd5e1;
  font-family: 'Roboto';

  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
`
export const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  width: 50%;
  margin: 10px;
`

export const FailureText = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  line-height: 1.4;
  text-align: center;
`
