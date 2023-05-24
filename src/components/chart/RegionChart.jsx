import React , { useState, useEffect} from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'
const  RegionChart =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const key = [];
      const value = [];

      axios.get("http://localhost:8090/data").then(response =>{
          response.data.map(item => {
              key.push(item.intensity);
              value.push(item.region)
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
          id: 'apexchart-example'
        },
        xaxis: {
          categories: category
        },
        colors: ['#FF0000'],
        width: ['50px']
      }} 
      series={[{
        name: 'year',
        data: data
      }]} type="line" width={1200} height={500} />
    )
}

export default RegionChart