import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ListComponent({ data }){
  return (
    <div className="container">
      <ListGroup>
        {data.map((item, index) => (
          <ListGroup.Item key={index} action variant="secondary">
			  {item.key}. {item.value}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListComponent;
