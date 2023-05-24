import React , { useState, useEffect} from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'
const  RelevanceChart =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const key = [];
      const value = [];

      axios.get("http://localhost:8090/data").then(response =>{
          response.data.map(item => {
              key.push(item.end_year);
              value.push(item.relevance)
          })
          setCategory(value)
          setData(key)
      }).catch(e => {
          alert(e);
      })
  }, [])
  
    return (
      <Chart options={{
        chart: {
          id: ''
        },
        xaxis: {
          categories: category
        },
        colors: ['#00FF00']
      }} 
      series={[{
        name: 'year',
        data: data
      }]} type="line" width={1200} height={500} />
    )
}

export default RelevanceChart