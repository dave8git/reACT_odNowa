import React from 'react';
//import styles from './App.scss';
import List from '../List/List.js';
//import {pageContents, listData} from '../../data/dataStore';

class MenuButton extends React.Component {
    state = {
        visible: false, 
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
        {this.state.visible ? <p>I'm visible</p> : null}
        {/* <p>{this.state.visible ? 'I\'m visible' : 'false'}</p> */}
       
    </div>
    
    )
  }
}

export default MenuButton;