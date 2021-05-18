import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FaLock } from "react-icons/fa";
import { loadDataImage } from "../redux/actions/TodoImageActions";
import DeleteImage from "./DeleteImage";
import UpdateImage from "./UpdateImage";
const ListImage = () => {
  const listImage = useSelector((state) => state.TodoImage.dataImage);
  const loading = useSelector((state) => state.TodoImage.loading);
  const error = useSelector((state) => state.TodoImage.error);
  const dispatch = useDispatch();

  // lấy data từ server
  useEffect(() => {
    dispatch(loadDataImage());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {listImage.map((list, index) => (
          <Col key={index} xs="3">
            <Card style={{ marginBottom: 10 }}>
              <CardImg
                top
                style={{ width: 305, height: 260 }}
                src={list.image}
                alt={list.titleImage}
              />
              <CardBody>
                <CardTitle tag="h5">{list.titleImage}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {list.createDate}
                </CardSubtitle>
                <CardText>{list.descImage}</CardText>
                <UpdateImage data={list} />
                <DeleteImage id={list.id} />
                {list.security ? (
                  <FaLock color="gray" style={{ marginLeft: 10 }} />
                ) : null}
              </CardBody>
            </Card>
          </Col>
        ))}
        {loading && <div>Loading</div>}
        {error && <div>Error</div>}
      </Row>
    </Container>
  );
};

export default ListImage;
