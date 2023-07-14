import {
  VisitedCountryItem,
  VisitedCountryItemContent,
  VisitedCountryItemImage,
  VisitedCountryItemName,
  RemoveButton,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, onClickRemove} = props
  const {id, imageUrl, name} = countryDetails

  const onClickRemoveItem = () => {
    onClickRemove(id)
  }
  return (
    <VisitedCountryItem>
      <VisitedCountryItemImage src={imageUrl} alt="thumbnail" />
      <VisitedCountryItemContent>
        <VisitedCountryItemName>{name}</VisitedCountryItemName>
        <RemoveButton type="button" onClick={onClickRemoveItem}>
          Remove
        </RemoveButton>
      </VisitedCountryItemContent>
    </VisitedCountryItem>
  )
}

export default CountryItem
