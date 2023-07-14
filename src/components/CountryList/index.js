import {
  CountryListItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountryList = props => {
  const {countryDetails, onCLickVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    onCLickVisited(id)
  }

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton type="button" onClick={onClickVisit}>
          Visit
        </VisitButton>
      )}
    </CountryListItem>
  )
}

export default CountryList
