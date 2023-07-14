import styled from 'styled-components'

export const CountryListItem = styled.li`
  background-color: #334155;
  margin-left: 0px;
  border: 1px solid #94a3b8;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CountryName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 19px;
`

export const VisitButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
`

export const VisitedText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
`
