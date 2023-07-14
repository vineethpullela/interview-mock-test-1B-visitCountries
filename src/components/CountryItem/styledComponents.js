import styled from 'styled-components'

export const VisitedCountryItem = styled.li`
  height: 150px;
  width: 220px;

  background-color: #1f1f2f;
  margin-left: 5px;
  margin-bottom: 5px;
`

export const VisitedCountryItemImage = styled.img`
  height: 100px;
  width: 100%;
`

export const VisitedCountryItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`

export const VisitedCountryItemName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 8px;
  cursor: pointer;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`
