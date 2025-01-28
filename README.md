# React Date Range Picker On Selected Year Month

This npm package allows you to choose the year and month to get the start and end dates.

A customizable and easy-to-use date range picker component for React. This package allows users to select a year and month, and it will automatically generate the start and end dates for that month. It is ideal for generating date ranges for reports, filtering, or any other use cases where date selection is required.

## Features

- Select a year from a dropdown.
- Select a month from a dropdown after selecting a year.
- Automatically calculates the start and end dates for the selected month.
- Callback function (`onDateChange`) to get the selected date range (start date and end date).


![Demo Image ](https://github.com/Niloyroy14/react-get-date-range-on-month/blob/main/public/sample.png)


## Installation

To use the `react-get-date-range-on-year-month` component in your project, run the following command:

```console
npm install react-get-date-range-on-year-month
 ```

## Example Usage

To use the `DateRangeOnSelectYearMonthPicker` component in your React application, import it and provide a callback function for handling the date range change.

### Code Example:

```console
import React, { useState } from 'react';
import  DateRangeOnSelectYearMonthPicker  from 'react-get-date-range-on-year-month';

function App() {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <div>
      <h1>Date Range Picker</h1>
      <DateRangeOnSelectYearMonthPicker onDateChange={handleDateChange} />
      <div>
        <h3>Selected Dates:</h3>
        <p>Start Date: {startDate || "None"}</p>
        <p>End Date: {endDate || "None"}</p>
      </div>
    </div>
                  
    </>
  )
}

export default App

 ```

## Customizing the CSS

This package includes a default CSS file that you can modify as needed. 

### Importing the Default CSS
To use the default styles, import the CSS in your project:
```console
import 'react-get-date-range-on-year-month/dist/DateRangeOnSelectYearMonthPicker.css';
 ```

## Customizing the Styles

You can override the styles by adding your own CSS rules. For example:

```console
/* Override default styles */
.reportInput_container {
  background-color: lightblue;
}

input.form-control {
  border-color: red;
}

 ```