import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  height: 100vh;
  padding: 20px;
`

export const MainHeading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
`

export const CountryListContainer = styled.ul`
  height: 300px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  overflow-y: scroll;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const VisitedCountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
`

export const VisitedCountriesListContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const NoVisitedCountry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoCountriesFound = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
`
