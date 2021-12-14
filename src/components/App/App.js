import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
import SearchResults from '../SearchResults/SearchResultsContainer';
//import {listData} from '../../data/dataStore';
import MenuButton from '../MenuButton/MenuButton';
import Creator from '../Creator/Creator';
import {listData, settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
      lists: this.props.lists || [],
    }
    addList(title){
      this.setState(state => (
        {
          lists: [
            ...state.lists,
            {
              key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
              title, 
              icon: 'list-alt',
              columns: [],
              image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          ],
        }
      ));
    } 
    static propTypes = {
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
    }
    render() {
      const {lists, title, subtitle, searchString} = this.props;
      if (searchString == '') {
        return (
          <main className={styles.component}>
            {/* <MenuButton /> */}
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <Search />
            {/*<List {...listData} />*/}
            <div className={styles.columns}>
              {lists.map(listData => (
                <List key={listData.id} {...listData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
            </div>
            {/* <List title={['Things to do', <sup key='1'>soon!</sup>]} src={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
            <p>I'm planning on doing all these things sooner, rathern tahn later!</p>
          </List> */}
          </main>
        );
      } else {
        return (
          <SearchResults title={title} />
        );
      }
      
      
      
    }
}

App.propTypes = {
  lists: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default App;
