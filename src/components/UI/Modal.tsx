import React,{Fragment} from "react";
import classes from "./Modal.module.css";
const Backdrop = (props: any) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props: any) => {
    return <Fragment>
        <Backdrop/>
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
};
export default Modal;
