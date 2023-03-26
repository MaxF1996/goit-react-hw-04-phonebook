import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, filterInputing }) => {
  return (
    <>
      <FilterLabel htmlFor="filterInput">Find Contact</FilterLabel>
      <FilterInput
        id="filterInput"
        type="text"
        name={filter}
        onChange={filterInputing}
        placeholder="Find contact by name"
      ></FilterInput>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInputing: PropTypes.func.isRequired,
};

export default Filter;
