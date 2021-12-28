import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd'; 

const Card = props => {
  const {title, column, index, id} = props;
  console.log('column', column);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <section 
          className={styles.component}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
      
          {title}
          {
            (column) ? (<p>
          From column {column.title}
            </p>) : (null)
          }

        </section>
      )}
    </Draggable>
  );
};
 
Card.propTypes = {
  title: PropTypes.string,
  column: PropTypes.object,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;