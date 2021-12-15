import React from 'react';
//import styles from './App.scss';
import {listData} from '../../data/dataStore';
import PropTypes from 'prop-types';

class MenuButton extends React.Component {
    static propTypes = {
      columns: PropTypes.columns,
    }
    state = {
      visible: false, 
      columns: this.props.columns || [],
    }
    handleClick = () => {
      this.setState({
        visible: !(this.state.visible), 
      }); 
    }
    render() { 
      console.log('this.props.columns', this.props.columns);
      const { props } = this;
      return (
        <div>
          <button onClick={() => this.handleClick()}>
            <p>MenuButton</p>
          </button>
          {this.state.visible ? 

          //this.state.columns.map((n) => {<ul>n</ul>})

            props.columns.map((col) => <ul key={col.id}>{col.title} {/*{col.cards.map((card) => <li key={card.id}>{card.title}</li>)}*/}</ul>)

            : null
          }
          {/* <p>{this.state.visible ? 'I\'m visible' : 'false'}</p> */}
        </div>
      );
    }
}

export default MenuButton;