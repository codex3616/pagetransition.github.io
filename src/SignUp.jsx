import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  // console.log(data);
  const FetchInput = (e) => {
    const { name, value } = e.target;
    setData((oldVal) => {
      return { ...oldVal, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `${data.fullname} and no = ${data.phone} and email is ${data.email} and message is ${data.message}`
    );
    // console.log(data);

    setData({
      fullname: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="container mx-auto my-5 contact-us">
        <h1 className=" text-capitalize text-center"> Sign Up</h1>
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={FetchInput}
                  value={data.fullname}
                  name="fullname"
                  required
                  placeholder="fullname"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={FetchInput}
                  value={data.phone}
                  name="phone"
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={FetchInput}
                  value={data.email}
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={FetchInput}
                  value={data.message}
                  name="message"
                  placeholder="write here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary mt-2 mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
