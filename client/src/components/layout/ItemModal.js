import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect }  from 'react-redux';

import { addItem } from '../../store/actions/itemActions';


class ItemModal extends Component {

  state = {
    modal: false,
    name: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    console.log(newItem);
    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{marginBottom:'2rem'}}
          onClick= { this.toggle }
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Item To List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add new item"
                  onChange={this.handleChange}
                />
                <Button color="secondary" style={{ marginTop: '2rem' }} block> Add </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  item: state.item
});

export default connect( mapStateToProps, { addItem })(ItemModal);