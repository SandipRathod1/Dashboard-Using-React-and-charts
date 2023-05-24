import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const CityChart = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const key = [];
    const value = [];

    axios.get('http://localhost:8090/data')
      .then(response => {
        console.log(response);
        response.data.map(item => {
          key.push(item.end_year);
          value.push(item.city);
        });
        setCategory(value);
        setData(key);
      })
      .catch(e => {
        alert(e);
      });
  }, []);

  return (
    <Chart
      options={{
        chart: {
          id: 'id',
        },
        xaxis: {
          categories: category,
        },
        colors: ['#FF0000'], // Set the color to green
      }}
      series={[
        {
          name: 'city',
          data: data,
        },
      ]}
      type="line"
      width={1200}
      height={500}
    />
  );
};

export default CityChart;
