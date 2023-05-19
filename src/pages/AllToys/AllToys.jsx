/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container, Table, Form } from 'react-bootstrap';

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(20);

  const toys = useLoaderData();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };
  
  const filteredToys = toys.filter((toy) => toy.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, limit);

  return (
    <Container>
      <h1>All Toys</h1>
      <Form.Group controlId="searchForm">
        <Form.Control type="text" placeholder="Search by toy name" value={searchTerm} onChange={handleSearch} />
      </Form.Group>
      <Form.Group controlId="limitForm">
        <Form.Label>Show:</Form.Label>
        <Form.Control as="select" value={limit} onChange={handleLimitChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Form.Control>
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy, index) => (
            <tr key={index}>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td><span>$</span>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to="/login">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllToys;
