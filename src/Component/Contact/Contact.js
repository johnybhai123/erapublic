import React, { useState } from "react";
import axios from "axios";
import { BsGeoAlt } from "react-icons/bs";
import { AiOutlinePhone,AiOutlineMail } from "react-icons/ai";
import Component from './Component';
import {  useHistory } from 'react-router';

import {
  Button,
  Fill,
  Form,
  Input,
  Main,
  Sub,
  Talk,
} from "../Admissioninquiry/Admissioninquiry.element";
import { Directortext } from "../Codeofconduct/Code.element";
import { Directorbackground, Main1, Sub1 } from "./Contact.element";

function Contact() {
  let history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [classn, setClassn] = useState("");
  const [lastschool, setLastschool] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [load, setLoad] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const createPost = async () => {
      try {
        setLoad(true);
        const Response = await axios
          .post(`https://erapublicschool.herokuapp.com/contact/`, {
            first_name: firstname,
            last_name: lastname,
            city: city,
            email: email,
            mobile: mobile,
            description: description,
            classn: classn,
            lastschool: lastschool,
          })
          .then((res) => {
            setLoad(false);
            alert("Thankyou Admission inquiry submitted successfully");
            history.push("/");
          });
      } catch (error) {
        console.log(error);
      }
    };
    createPost();
  };

  return (
    <Main1>
      <Directorbackground>
        <Directortext>
          <h1>Contact Us</h1>
          <p>
            The New Era Public School| <span>Contact Us</span>{" "}
          </p>
        </Directortext>
      </Directorbackground>

      <Sub1>
        <Main>
          <Sub>
            <Fill>
              <h1>Fill the form. It's easy.</h1>
              <Form onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column wrap",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Last School"
                    value={lastschool}
                    onChange={(e) => setLastschool(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Class"
                    value={classn}
                    onChange={(e) => setClassn(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Phone"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Input
                    type="text-area"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button type="submit" value="Submit">
                    {load ? (
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Form>
            </Fill>
            <Talk>
              <h1>Let's talk about Admission.</h1>
              <p>Our School has very simple and Fast Admission Process</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Component
                  logo={<BsGeoAlt />}
                  name="271 - 1/2, Chhota Bangarda Main Road , indore
Pin code – 452001
"
                />
                <Component
                  logo={<AiOutlinePhone />}
                  name="Phone-0731-2991095,+91-8109100056"
                />
                <Component
                  logo={<AiOutlineMail />}
                  name="tneps.campus2@gmail.com"
                />
              </div>
            </Talk>
          </Sub>
        </Main>

        <div style={{ padding: "10px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.829994115423!2d75.8264190149069!3d22.734559432735836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdf2e8e62ea9%3A0xb3c423226f7945e0!2sThe%20New%20Era%20Public%20School!5e0!3m2!1sen!2sin!4v1632161821130!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            width={1000}
            height={500}
          />
        </div>
      </Sub1>
    </Main1>
  );
}

export default Contact;
