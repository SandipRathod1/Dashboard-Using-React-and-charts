import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const TopicsChart = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const categories = [];
    const values = [];

    axios
      .get("http://localhost:8090/data")
      .then((response) => {
        response.data.forEach((item) => {
          categories.push(item.topics);
          values.push(item.start_year);
        });
        setCategory(categories);
        setData(values);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Chart
      options={{
        chart: {
          id: 'apexchart-example'
        },
        labels: category // Use categories for labels in pie chart
      }}
      series={data}
      type="line" 
      width={1200}
      height={500}
    />
  );
};

export default TopicsChart;
