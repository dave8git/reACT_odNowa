import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';
import MenuButton from '../MenuButton/MenuButton';

class App extends React.Component {
  
  render() {
    return (
      <main className={styles.component}>
        <MenuButton />
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List {...listData} />
        {/* <List title={['Things to do', <sup key='1'>soon!</sup>]} src={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
          <p>I'm planning on doing all these things sooner, rathern tahn later!</p>
        </List> */}
      </main>
    )
  }
}

export default App;
