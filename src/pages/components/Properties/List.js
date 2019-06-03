import React, { useContext } from 'react';

import AppContext from '../../../services/context';

import './List.css';
const PropertyRow = ({ property, history }) => {
  const { id, details, owner, price } = property;
  const priceTag = `$${price.toLocaleString()}`;

  const editUrl = `/edit/${id}/property`;
  const redirectToEdit = e => {
    e.preventDefault();

    history.push(editUrl);
  };

  return (
    <tr onClick={redirectToEdit}>
      <td>{details.address}</td>
      <td>{details.city}</td>
      <td>{details.zipcode}</td>
      <td>{owner.name}</td>
      <td>{owner.email}</td>
      <td>{owner.phone}</td>
      <td>{priceTag}</td>
      <td>
        <a href={editUrl}>Edit</a>
      </td>
    </tr>
  );
};

const Properties = () => {
  const { state } = useContext(AppContext);
  const { filteredProperties, history } = state;

  const propertiesRows = filteredProperties.map(property => (
    <PropertyRow key={property.id} property={property} history={history} />
  ));

  return (
    <table className="Products-Table">
      <thead>
        <tr>
          <th colSpan={3}>Property Information</th>
          <th colSpan={3}>Owner Information</th>
        </tr>
        <tr className="text-align-left">
          <th>Address</th>
          <th>City</th>
          <th>Zip Code</th>
          <th className="column-division">Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th className="column-division">Price</th>
        </tr>
      </thead>
      <tbody>{propertiesRows}</tbody>
    </table>
  );
};

export default Properties;
