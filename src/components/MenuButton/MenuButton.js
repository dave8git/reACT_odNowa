import React from 'react';
//import styles from './App.scss';
import List from '../List/List.js';
import Column from '../Column/Column';
//import {pageContents, listData} from '../../data/dataStore';

class MenuButton extends React.Component {
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
        {this.state.visible ? <p>I'm visible</p> : null}
        {/* <p>{this.state.visible ? 'I\'m visible' : 'false'}</p> */}
        
        {this.state.columns.map((n) => console.log(<ul>n</ul>))}, 

        </div>
    
    )
  }
}

export default MenuButton;