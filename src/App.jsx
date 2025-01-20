import React from 'react';
import { useEffect,useState } from 'react';
import Form from 'react-bootstrap/Form';
import monthlyReportstyles from "./App.css";

const App = () => {

    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [showData,setShowData] =  useState(false);
    const [showErrorMessage,setShowErrorMessage] =  useState(false);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearArray = [];
        for (let i = currentYear; i >= 2015; i--) {
          yearArray.push(i);
        }
        setYears(yearArray);
      }, []);
    
      //console.log(years);
    
      const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setSelectedMonth('');
        setStartDate('');
        setEndDate('');
      };
    
      const handleMonthChange = (e) => {
        const month = e.target.value;
        //console.log(month);
        setSelectedMonth(month);
        let dateRange= createDateRange(selectedYear,month);
        //console.log(dateRange.startDate);
        setStartDate(dateRange.startDate);
        setEndDate(dateRange.endDate);
    
      };
    
      const months = [
        { value: 'jan', name: 'January' },
        { value: 'feb', name: 'February' },
        { value: 'mar', name: 'March' },
        { value: 'apr', name: 'April' },
        { value: 'may', name: 'May' },
        { value: 'jun', name: 'June' },
        { value: 'jul', name: 'July' },
        { value: 'aug', name: 'August' },
        { value: 'sep', name: 'September' },
        { value: 'oct', name: 'October' },
        { value: 'nov', name: 'November' },
        { value: 'dec', name: 'December' },
      ];

    function createDateRange(year,month) {

        function getEndDate(date) {
            let d = new Date(date);
            d.setMonth(d.getMonth() + 1);
            d.setDate(0);
            return d.toISOString().split('T')[0];
        }
    
          let dateRange= {
            jan: {
                start: `${year}-01-01`,
                end: getEndDate(`${year}-01-01`)
            },
            feb: {
                start: `${year}-02-01`,
                end: getEndDate(`${year}-02-01`)
            },
            mar: {
                start: `${year}-03-01`,
                end: getEndDate(`${year}-03-01`)
            },
            apr: {
                start: `${year}-04-01`,
                end: getEndDate(`${year}-04-01`)
            },
            may: {
                start: `${year}-05-01`,
                end: getEndDate(`${year}-05-01`)
            },
            jun: {
                start: `${year}-06-01`,
                end: getEndDate(`${year}-06-01`)
            },
            jul: {
                start: `${year}-07-01`,
                end: getEndDate(`${year}-07-01`)
            },
            aug: {
                start: `${year}-08-01`,
                end: getEndDate(`${year}-08-01`)
            },
            sep: {
                start: `${year}-09-01`,
                end: getEndDate(`${year}-09-01`)
            },
            oct: {
                start: `${year}-10-01`,
                end: getEndDate(`${year}-10-01`)
            },
            nov: {
                start: `${year}-11-01`,
                end: getEndDate(`${year}-11-01`)
            },
            dec: {
                start: `${year}-12-01`,
                end: getEndDate(`${year}-12-01`)
            },
            tot: {
                start: `${year}-01-01`,
                end: getEndDate(`${year}-12-01`)
            }
        };
        
        return {
             startDate: dateRange[month].start,
             endDate: dateRange[month].end,
        }
    }
    

    return (
        <div>
            <p>Niloy</p>
            <section className=''>
            <div className={`row ${monthlyReportstyles.filterOption}`}>
                <div className={`col-md-3 col-lg-3 col-sm-12 ${monthlyReportstyles.yearRow}`}>
                    <div className={`${monthlyReportstyles.dateInput}`}>
                        <div className='row'>
                            <div className='col-md-4  col-lg-4 col-sm-12'>
                                <label> Year </label>
                            </div>
                            <div className='col-md-8  col-lg-8 col-sm-12'>
                                <Form.Select size="lg" name="userId" className={styles["dropdown-menu"]}  onChange={handleYearChange}>
                                    <option>Select Year</option>
                                    { years?.map((option)=>(
                                        <option key={option} value={option}>{option}</option>
                                    ))
                                    }
                                </Form.Select>  
                            </div>
                        </div> 
                    </div>
                </div>

          { selectedYear && (
              <>
                <div className={`col-md-3 col-lg-3 col-sm-12 ${monthlyReportstyles.monthRow}`}>
                    <div className={`${monthlyReportstyles.dateInput}`}>
                        <div className='row'>
                            <div className='col-md-4  col-lg-4 col-sm-12'>
                                <label> Month </label>
                            </div>
                            <div className='col-md-8  col-lg-8 col-sm-12'>
                                   
                            <Form.Select size="lg" name="userId" className={styles["dropdown-menu"]}  onChange={handleMonthChange}>
                                    <option>Select Month</option>
                                    { months?.map((month)=>(
                                        <option key={month.value} value={month?.value}>{month?.name}</option>
                                    ))
                                    }
                                </Form.Select> 
                            </div>
                        </div> 
                    </div>
                </div>

                </>
            )}

            { selectedYear && selectedMonth && (
              <>
                <div className={`col-md-2 col-lg-2 col-sm-12 col-lg-2 ${monthlyReportstyles.searchButtonRow}`}>
                  <div className={`${monthlyReportstyles.searchButton}`}>
                      <ActionButton onClick={(e)=>handleDownloadMonthlyReport(e)}  label="Search"  Icon={FaSearch} />
                  </div>
               </div>
              </>
            )}

            </div>
            </section>
        </div>
    );
};

export default App;