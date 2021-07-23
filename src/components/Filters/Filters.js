import PropTypes from 'prop-types';
import { Control, Input, FiltersComponent, Select } from './elements';

function Filters({ onChange }) {
  return (
    <FiltersComponent>
      <Control>
        <label htmlFor="user-list-search">Search</label>
        <Input
          onChange={({ target }) => onChange('search', target.value)}
          type="search"
          id="user-list-search"
          name="search"
        />
      </Control>
      <Control>
        <label htmlFor="user-list-sorting">Sort by</label>
        <Select
          id="user-list-sorting"
          onChange={({ target }) => onChange('sort', target.value)}
        >
          <option value="">Select an option</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
        </Select>
      </Control>
    </FiltersComponent>
  );
}

Filters.propTypes = {
  onChange: PropTypes.func,
};

Filters.defaultProps = {
  onChange: (a, b) => {
    console.log(a, b);
  },
};

export default Filters;
