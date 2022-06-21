import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";

const initialValues = {
  userName: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data submition", values);
};

const validationSchema = Yup.object({
  userName: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "* This field cannot contain only blankspaces"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
    ),
});

function Reg() {
  const formik = useFormik({
    initialValues,
    onSubmit,

    validationSchema,
  });

  return (
    <>
      <section className="section7">
        <Form className=" m-auto mt-5" onSubmit={formik.handleSubmit}>
          <h1 className="text-capitalize text-center mb-5">login form </h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter User Name"
              name="userName"
              {...formik.getFieldProps("userName")}
            />
            {formik.errors.userName && formik.touched.userName ? (
              <div style={{ color: "red" }}>{formik.errors.userName}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          <Button
            className="btn"
            variant="primary"
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Reg;
