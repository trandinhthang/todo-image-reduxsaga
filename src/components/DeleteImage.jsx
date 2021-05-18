import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { deleteDataImage } from "../redux/actions/TodoImageActions";

const DeleteImage = (props) => {
  const dispatch = useDispatch();
  // function delete
  const deleteImage = (id) => {
    dispatch(deleteDataImage(id));
  };
  return (
    <>
      <Button
        onClick={() => deleteImage(props.id)}
        outline
        style={{ marginLeft: 10 }}
        color="danger"
      >
        Xóa
      </Button>
    </>
  );
};

export default DeleteImage;
