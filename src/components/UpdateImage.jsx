import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, FormGroup, Label, Input, FormText, CardImg } from "reactstrap";
import "./styles.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateDataImage } from "../redux/actions/TodoImageActions";

const schema = yup.object().shape({
  titleImage: yup
    .string()
    .max(15, "Tiêu đề hình ảnh quá dài")
    .required("Không được để trống"),
  descImage: yup
    .string()
    .max(50, "Mô tả hình ảnh quá dài")
    .required("Không được để trống"),
  categories: yup.string().required("Vui lòng chọn danh mục"),
  image: yup.string().required("Vui lòng chọn hình ảnh"),
});

const UpdateImage = (props) => {
  const { id, titleImage, descImage, categories, security, image, createDate } =
    props.data;

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={toggle} outline color="success">
        Sửa
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: 1000 }}>
        <ModalHeader>Sửa hình ảnh yêu thích</ModalHeader>
        <Formik
          initialValues={{
            id: id,
            titleImage: titleImage,
            descImage: descImage,
            categories: categories,
            image: image,
            security: security,
            createDate: createDate,
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(updateDataImage(values));
            toggle();
          }}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <ModalBody>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="titleImage" sm={2}>
                    Tiêu đề
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="titleImage"
                      id="titleImage"
                      placeholder="Nhập tên hình ảnh"
                      value={values.titleImage}
                      onChange={handleChange}
                    />
                    {errors.titleImage && touched.titleImage ? (
                      <div style={{ color: "red" }}>{errors.titleImage}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="descImage" sm={2}>
                    Mô tả
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="descImage"
                      id="descImage"
                      value={values.descImage}
                      onChange={handleChange}
                    />
                    {errors.descImage && touched.descImage ? (
                      <div style={{ color: "red" }}>{errors.descImage}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="categories" sm={2}>
                    Danh mục
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="select"
                      name="categories"
                      id="categories"
                      onChange={handleChange}
                      value={values.categories}
                    >
                      <option value={0}>Chọn danh mục</option>
                      {[
                        "Thanh xuân",
                        "Gia đình",
                        "Bạn gái",
                        "Bạn thân",
                        "Gaming",
                      ].map((cate, index) => (
                        <option key={index + 1} value={index + 1}>
                          {cate}
                        </option>
                      ))}
                    </Input>
                    {errors.categories && touched.categories ? (
                      <div style={{ color: "red" }}>{errors.categories}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="image" sm={2}>
                    URL hình ảnh
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="image"
                      id="image"
                      value={values.image}
                      onChange={handleChange}
                    />
                    {errors.image && touched.image ? (
                      <div style={{ color: "red" }}>{errors.image}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="image" sm={2}></Label>
                  <Col sm={10}>
                    <CardImg
                      top
                      style={{ width: 200, height: 200 }}
                      src={values.image}
                      alt="Hình ảnh"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={{ paddingBottom: 10 }}>
                  <Label for="security" sm={2}></Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup style={{ padding: 0 }} check>
                      <Label check>
                        <Field type="checkbox" id="security" name="security" />{" "}
                        Bảo mật
                      </Label>
                    </FormGroup>
                    <FormText color="muted">
                      Bảo mật thông tin hình ảnh cho bạn
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 10 }}>
                    {/* <Button color="primary" type="submit">
                      Thêm vào
                    </Button> */}
                  </Col>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={toggle}>
                  Hủy
                </Button>{" "}
                <Button color="primary" type="submit">
                  Sửa
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default UpdateImage;
