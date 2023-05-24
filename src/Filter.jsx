import React, { useState } from 'react';
import Intensity from './pages/intensity/Intensity'
import City from './pages/city/City'
import Country from './pages/country/Country'
import Region from './pages/region/Region'
import Likelihood from './pages/likelihood/Likelihood'
import Relevance from './pages/relevance/Relevance'
import Topics from './pages/topics/Topics'
import Year from './pages/year/Year'

const Filter = ({type}) => {
  const [selectedOption, setSelectedOption] = useState(type);

  const handleFilterChange = (option) => {
    setSelectedOption(option);
  };

  let chartComponent;
  switch (selectedOption) {
    case 'intensity':
      chartComponent = <Intensity />;
      break;
    case 'city':
      chartComponent = <City />;
      break;
    case 'country':
      chartComponent = <Country />;
      break;
    case 'region':
      chartComponent = <Region />;
      break;
    case 'year':
      chartComponent = <Year />;
      break;
    case 'likelihood':
      chartComponent = <Likelihood />;
      break;
    case 'relevance':
      chartComponent = <Relevance />;
      break;
    case 'topics':
      chartComponent = <Topics />;
      break;
    default:
      chartComponent = null;
      break;
  }

  return (
    <div>
        <chartComponent  />
      {chartComponent}
    </div>
  );
};

export default Filter;
