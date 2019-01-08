import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, deleteItem } from '../../store/actions/itemActions';


class TodoList extends Component {
  /*
  state = {
    items: [
      { id: uuid(), name: 'Make Cofee'},
      { id: uuid(), name: 'Code'},
      { id: uuid(), name: 'Sleep'},
      { id: uuid(), name: 'Code'}
    ]
  }
  */
  componentDidMount() {
    this.props.getItems();
  }

  handelDelete = id => {
    this.props.deleteItem(id);
  };

  render() {
    const {items} = this.props.item;
    return (
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item._id} timeout={1000} classNames="fade">
                <ListGroupItem > 
                  <Button className="remove-btn" color="danger" size="sm" onClick={()=>this.handelDelete(item._id)} > &times; </Button>
                  { item.name }
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
    )
  }
}


TodoList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect( mapStateToProps, { getItems, deleteItem })(TodoList);