import "./modal.css";
import { Modal } from "antd";

const ModalComponent = (props) => {
    
  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.setOpen(false);
  };
  return (
    <>
      <Modal
        title={props.title}
        open={props.open}
        onOk={props.handleOk}
        onCancel={handleCancel}
      >
        {props.children}
      </Modal>
    </>
  );
};


export default ModalComponent;