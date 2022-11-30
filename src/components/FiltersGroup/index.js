import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    onChangeSearchInput,
    ratingsList,
    onSelectCategory,
    onSelectRating,
    onClearFilters,
  } = props

  const onClickClearFilter = () => {
    onClearFilters()
  }

  const onClickRating = event => {
    onSelectRating(event.target.value)
  }

  const onClickCategory = event => {
    onSelectCategory(event.target.value)
  }
  const onSearchProducts = event => {
    onChangeSearchInput(event.target.value)
  }
  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          onChange={onSearchProducts}
          className="input"
          type="search"
          placeholder="Search"
        />
        <BsSearch />
      </div>
      <div className="items-container">
        <h1 className="item-name">Category</h1>
        {categoryOptions.map(eachCategory => (
          <p key={eachCategory.categoryId}>
            <button
              value={eachCategory.categoryId}
              onClick={onClickCategory}
              className="item-button"
              type="button"
            >
              {eachCategory.name}
            </button>
          </p>
        ))}
      </div>
      <ul className="items-container">
        <h1 className="item-name">Rating</h1>

        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId} className="rating-list-item">
            <img
              className="rating-image"
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
            />
            <button
              value={eachRating.ratingId}
              onClick={onClickRating}
              className="item-button"
              type="button"
            >
              &up
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onClickClearFilter}
        type="button"
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
