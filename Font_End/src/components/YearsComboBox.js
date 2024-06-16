// YearsComboBox.js

import React, { useState } from "react";

const YearsComboBox = ({ onChange }) => {
  // Generate an array of years (e.g., from current year to 10 years back)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);

  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    onChange(selectedYear);
  };

  return (
    <select onChange={handleYearChange}>
      <option value="">Select a year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearsComboBox;
