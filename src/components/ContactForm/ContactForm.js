import {  useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Label } from './ContactForm.style';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Ivan Ivanov"
          />
        </Label>
        <Label>
          Number
          <Input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="111-11-11"
          />
        </Label>
        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
