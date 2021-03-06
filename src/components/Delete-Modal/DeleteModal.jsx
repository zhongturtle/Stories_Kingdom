import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import React, { PureComponent, PropTypes } from 'react';

class DeleteModal extends PureComponent {
  render() {
    const {open, deleteFun, closeModal, deleteTargetName} = this.props;
    return (
      <Modal
        open={ open }
        basic
        size='small'>
        <Header icon='archive' content='確認刪除？' />
        <Modal.Content>
          <p>
            <span>是否確定刪除 "{ deleteTargetName }"</span>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color='red'
            onClick={ closeModal }
            inverted>
            <Icon name='remove' /> No
          </Button>
          <Button
            color='green'
            inverted
            onClick={ deleteFun }>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      );
  }
}

DeleteModal.propTypes = {
  open: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  deleteTargetName: PropTypes.string,
  deleteFun: React.PropTypes.func.isRequired
};

export default DeleteModal;
