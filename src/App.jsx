import { useEffect, useState } from "react";
import "./App.scss";
import { Button, Input } from "./components";

function App() {
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formValues, setFormValues] = useState(initialValue);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!values?.firstName) {
      errors.firstName = "First Name cannot be empty";
    }

    if (!values?.lastName) {
      errors.lastName = "Last Name cannot be empty";
    }

    if (regex.test(values?.email) === false) {
      errors.email = "Looks like this is not an email";
    }

    if (!values?.password) {
      errors.password = "Last Name cannot be empty";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(formValues));
    setIsSubmit(true);
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setInitialValue(formValues);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("Success");
    }
  }, [isSubmit, error]);

  return (
    <div className="App">
      <div className="text-content">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="side">
        <div className="button-container">
          <Button className="button purple">
            <p>
              <span>Try it free 7 days</span> days then $20/mo. thereafter
            </p>
          </Button>
        </div>

        <form className="input-container" onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={formValues?.firstName}
            onChange={handleChange}
            errorMessage={error?.firstName}
          />
          <Input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formValues?.lastName}
            onChange={handleChange}
            errorMessage={error?.lastName}
          />
          <Input
            placeholder="Email Address"
            type="text"
            name="email"
            value={formValues?.email}
            onChange={handleChange}
            errorMessage={error?.email}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formValues?.password}
            onChange={handleChange}
            errorMessage={error?.password}
          />

          <Button className="button green" type="submit">
            CLAIM YOUR FREE TRIAL
          </Button>

          <div className="foot-note">
            <p>
              By clicking the button you are agreeing to our{" "}
              <span>Terms and Service</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
