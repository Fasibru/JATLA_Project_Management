import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  updateFilters,
} from '../../actions/index';

function DateFilter(props) {
  // const { className } = props;
  const {
    dateRangeStart,
    dateRangeEnd,
    minDate,
    filters,
  } = props;

  const handleFilter = (event) => {
    // eslint-disable-next-line no-shadow
    updateFilters(event.target.name, event.target.value);

    axios.put('/api/filters', {
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="sidenav__date">
      <p>Since:</p>
      <input
        type="Date"
        name="dateRangeStart"
        value={dateRangeStart}
        min={minDate}
        onChange={handleFilter}
      />
      <p>Until:</p>
      <input
        type="Date"
        name="dateRangeEnd"
        value={dateRangeEnd}
        max={dateRangeEnd}
        onChange={handleFilter}
      />
    </div>
  );
}

DateFilter.propTypes = {
  // className: PropTypes.string.isRequired,
  dateRangeStart: PropTypes.string.isRequired,
  dateRangeEnd: PropTypes.string.isRequired,
  minDate: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    showTasks: PropTypes.string,
    dateRangeStart: PropTypes.string,
    dateRangeEnd: PropTypes.string,
  }).isRequired,
};

export default DateFilter;