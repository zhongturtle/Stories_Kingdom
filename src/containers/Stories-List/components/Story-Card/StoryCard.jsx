import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'

import classNames from 'classnames/bind';
import styles from './StoryCard.scss';

let cx = classNames.bind(styles);
// TODO: 刪除故事
// TODO: 敘述欄位
class StoryCard extends Component {

  _clickDeleteBtn = (e, data) => {
    const {id} = data;
    this.props.commonProps.openDeleteModal(id);
  }

  render() {
    const {item, itemSelected, dragHandle, commonProps} = this.props;
    const dragged = itemSelected !== 0;
    const scale = itemSelected * 0.05 + 1;
    const shadow = itemSelected * 15 + 1;

    const boxClassName = cx('StoryCard', {
      dragged,
    });

    const boxStyle = {
      transform: `scale(${scale})`,
      boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`
    };



    return (
      <div className={ boxClassName } style={ boxStyle }>
        { dragHandle(<div className="StoryCard__inner_flex">
                       <div className={ styles.story__detail }>
                         <div className="detail__name">
                           { commonProps.stories[item.id].name }
                         </div>
                         <div className="detail__description">
                           { commonProps.stories[item.id].description }
                         </div>
                       </div>
                       <Button
                         icon='delete'
                         attached='right'
                         id={ item.id }
                         onClick={ this._clickDeleteBtn } />
                     </div>) }
      </div>
      );
  }
}


StoryCard.propTypes = {
  item: PropTypes.object, // data of list
  itemSelected: PropTypes.number.isRequired, // selected state
  dragHandle: PropTypes.func,
  commonProps: PropTypes.object, // props pass from DraggableList
};

export default StoryCard;
