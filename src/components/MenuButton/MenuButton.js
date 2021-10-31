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
      return (
        <div>
          <button onClick={() => this.handleClick()}>
            <p>MenuButton</p>
          </button>
          {this.state.visible ? 

          //this.state.columns.map((n) => {<ul>n</ul>})

            listData.columns.map(({key, col}) => (key={col.id} (<ul>{col.title} {col.cards.map(({key, card}) => key={card.id} <li>{card.title}</li>)}</ul>)),

            : null
          }
          {/* <p>{this.state.visible ? 'I\'m visible' : 'false'}</p> */}
        </div>
      );
    }
}

export default MenuButton;