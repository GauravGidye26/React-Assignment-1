import React, { useState } from 'react';
import ListComponent from './components/ListComponent.jsx';

function App(){

  const [listData, setListData] = useState([
	  { key: 1, value: 'JavaScript' },
	  { key: 2, value: 'Python' },
	  { key: 3, value: 'Java' },
	  { key: 4, value: 'C#' },
	  { key: 5, value: 'C++' },
	  { key: 6, value: 'TypeScript' },
	  { key: 7, value: 'Ruby' },
	  { key: 8, value: 'Swift' },
	  { key: 9, value: 'Go' },
	  { key: 10, value: 'PHP' },
  ]);
 
 return (
    <>
      <div>
        <h1>List of Programming Languages:</h1>
        <ListComponent data={listData} />
      </div>
    </>
  );
};

export default App;
