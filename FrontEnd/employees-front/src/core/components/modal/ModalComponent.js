import "./modal.css";
import { Modal } from "antd";

const ModalComponent = (props) => {

  return (
    <>
      <Modal
        title={props.title}
        open={props.open}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        {props.children}
      </Modal>
    </>
  );
};


export default ModalComponent;