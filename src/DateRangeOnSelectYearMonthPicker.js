import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';

export default function DateRangeOnSelectYearMonthPicker({ onDateChange }){


    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    const years = useMemo(() => {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: currentYear - 2014 }, (_, i) => currentYear - i);
    }, []);
  
    const months = [
      { value: "jan", name: "January" },
      { value: "feb", name: "February" },
      { value: "mar", name: "March" },
      { value: "apr", name: "April" },
      { value: "may", name: "May" },
      { value: "jun", name: "June" },
      { value: "jul", name: "July" },
      { value: "aug", name: "August" },
      { value: "sep", name: "September" },
      { value: "oct", name: "October" },
      { value: "nov", name: "November" },
      { value: "dec", name: "December" },
    ];
  
    function createDateRange(year, month) {
      const getEndDate = (date) => {
        const d = new Date(date);
        d.setMonth(d.getMonth() + 1);
        d.setDate(0);
        return d.toISOString().split("T")[0];
      };
  
      const monthMappings = {
        jan: "01",
        feb: "02",
        mar: "03",
        apr: "04",
        may: "05",
        jun: "06",
        jul: "07",
        aug: "08",
        sep: "09",
        oct: "10",
        nov: "11",
        dec: "12",
      };
  
      const start = `${year}-${monthMappings[month]}-01`;
      const end = getEndDate(start);
      return { startDate: start, endDate: end };
    }
  
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
      setSelectedMonth("");
      setStartDate("");
      setEndDate("");
      onDateChange("", ""); // Reset dates in parent
    };
  
    const handleMonthChange = (e) => {
      if (!selectedYear) return;
      const month = e.target.value;
      setSelectedMonth(month);
      const { startDate, endDate } = createDateRange(selectedYear, month);
      setStartDate(startDate);
      setEndDate(endDate);
      onDateChange(startDate, endDate); // Pass dates to parent
    };
  

    
  return (
     <>
          <div>
            <section className="reportInput_container">
            <div className={`row`}>
                <div className={`col-md-3 col-lg-3 col-sm-12`}>
                                <label> Year: </label>
                                <Form.Select size="lg" name="userId"  onChange={handleYearChange}>
                                    <option value="">Select Year</option>
                                    { years?.map((option)=>(
                                        <option key={option} value={option}>{option}</option>
                                    ))
                                    }
                                </Form.Select>  
                </div>

          { selectedYear && (
              <>
                <div className={`col-md-3 col-lg-3 col-sm-12 mt`}>
                            <label>Month: </label>
                            <Form.Select size="lg" name="userId" value={selectedMonth}  onChange={handleMonthChange}>
                                    <option value="">Select Month</option>
                                    { months?.map((month)=>(
                                        <option key={month.value} value={month?.value}>{month?.name}</option>
                                    ))
                                    }
                                </Form.Select> 
                </div>

                { selectedYear && selectedMonth && (
              <>
                 <div className='col-md-3 col-lg-3 col-sm-12 mt-4 mt'>
                       <label> Start date: </label>
                       <input type="text" name="startdate" className='form-control' value={startDate} readOnly  />
                 </div>

                 <div className='col-md-3 col-lg-3 col-sm-12 mt'>
                    <label> End Date: </label>
                    <input type="text" name="enddate" className='form-control' value={endDate} readOnly  />
                  </div>
                </>

                )}

                </>
            )}


            </div>
            </section>
        </div>
     </>
  )
}
