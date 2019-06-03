import React, { useState, useContext, useEffect } from 'react';

import AppContext from '../../../services/context';
import PropertiesProvider from '../../../services/properties';

import './EditForm.css';

const EditForm = ({ location, match }) => {
  const { id } = match.params;

  const { state, dispatch } = useContext(AppContext);
  const { properties, history } = state;

  // State logic
  const updateState = (state, setState) => {
    return e => {
      const { name, type, value } = e.target;

      setState({
        ...state,
        [name]: type === 'number' ? Number(value) : value
      });
    };
  };

  const [details, setDetails] = useState({
    address: '',
    zipcode: '',
    city: ''
  });
  const updateDetails = updateState(details, setDetails);

  const [owner, setOwner] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const updateOwner = updateState(owner, setOwner);

  const [price, setPrice] = useState(0);
  const updatePrice = ({ target }) => {
    setPrice(Number(target.value));
  };

  useEffect(() => {
    // Sets default property
    const property = properties.filter(p => p.id === Number(id))[0];

    if (property) {
      setDetails(property.details);
      setOwner(property.owner);
      setPrice(property.price);
    }
  }, [properties, id]);

  // Returns to dashboard
  const closeEditForm = e => {
    if (e.target === e.currentTarget) {
      history.push('/');
    }
  };

  // Form cycle
  const currentPath = location.pathname.split('/');
  const formSteps = ['property', 'owner', 'price'];
  const currentStep = currentPath.pop();
  const stepIndex = formSteps.indexOf(currentStep);

  // Form switching
  const switchRight = (right = true) => {
    return () => {
      const direction = right ? 1 : -1;
      const nextForm = formSteps[stepIndex + direction];
      const nextPath = [...currentPath, nextForm].join('/');

      history.push(nextPath);
    };
  };
  const nextForm = switchRight();
  const previousForm = switchRight(false);

  //Form submition
  const submitForm = () => {
    PropertiesProvider.update(id, {
      details,
      owner,
      price
    }).then(({ data }) => {
      dispatch({
        type: 'UPDATE_PROPERTY',
        payload: data
      });
      history.push('/');
    });
  };

  return (
    <div className="overlay" onClick={closeEditForm}>
      <section className="Edit-Form">
        <header className="header">
          <p>Edit {currentStep} information</p>
          <button type="button" onClick={closeEditForm}>
            Close
          </button>
        </header>

        <main className="content">
          {stepIndex === 0 && (
            <article className="form">
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  placeholder="property address, including neighborhood"
                  value={details.address}
                  onChange={updateDetails}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Mexico City"
                  value={details.city}
                  onChange={updateDetails}
                />
              </label>
              <label>
                Zip Code:
                <input
                  type="number"
                  name="zipcode"
                  placeholder="e.g. 03570"
                  value={details.zipcode}
                  onChange={updateDetails}
                />
              </label>
            </article>
          )}
          {stepIndex === 1 && (
            <article className="form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Owner's full name"
                  value={owner.name}
                  onChange={updateOwner}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Owner's contact email"
                  value={owner.email}
                  onChange={updateOwner}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="number"
                  name="phone"
                  placeholder="Owner's phone number"
                  value={owner.phone}
                  onChange={updateOwner}
                />
              </label>
            </article>
          )}
          {stepIndex === 2 && (
            <article className="form">
              <label>
                Price: $
                <input
                  type="numer"
                  placeholder="Price (MXN)"
                  value={price}
                  onChange={updatePrice}
                />
              </label>
            </article>
          )}
        </main>

        <footer className="footer">
          {stepIndex > 0 && (
            <button type="text" onClick={previousForm}>
              Previous
            </button>
          )}
          {stepIndex !== formSteps.length - 1 ? (
            <button type="button" onClick={nextForm}>
              Next
            </button>
          ) : (
            <button type="button" onClick={submitForm}>
              Finish
            </button>
          )}
        </footer>
      </section>
    </div>
  );
};

export default EditForm;
