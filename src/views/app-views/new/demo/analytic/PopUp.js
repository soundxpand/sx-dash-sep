import React, { Component } from "react";
import { Modal } from "antd";

export class PopUp extends Component {
  state = { visible: true };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Work Under Progress"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            Analytics is under progress. but you
            can view example data and know how your
            analytics page will look once ready.
          </p>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
