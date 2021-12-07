import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

const List = (props) => {
  const { title, image, description, columns, addColumn } = props;
  return (
    <section className={styles.component}>
      <Hero titleText={title} image={image} />
      <div className={styles.description}>{ReactHtmlParser(description)}</div>
      <div className={styles.columns}>
        {columns.map((columnData) => (
          <Column key={columnData.id} {...columnData} />
        ))}
        {/*
            /* <Column title={'Animals'} />
            <Column title={'Plants'} />
            <Column title={'Minerals'} /> 
          */}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </div>
    </section>
  );
};

List.propTypes = {
  description: PropTypes.node,
  columns: PropTypes.array,
  title: PropTypes.string,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription, 
};
export default List;
