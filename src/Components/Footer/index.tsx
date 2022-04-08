import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import "./footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-6">
            <div className="heading h5 stolzl-bold">
              Talk to an <br /> automation expert
            </div>
            <div className="content mt-4" style={{ width: "86%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              iure similique perspiciatis. A molestias delectus ratione sapiente
              quos tempora, facilis minus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="call-content">
              <div className="phone h6 mt-5 d-flex">
                <BiPhoneCall
                  className="mr-3"
                  style={{ fontSize: "22px", transform: "rotate(30deg)" }}
                />
                <div className="tag stolzl-bold" style={{ fontSize: "19px" }}>
                  Phone
                </div>
              </div>
              <div
                style={{ height: "120px", marginLeft: "30px" }}
                className="same mt-2 d-flex flex-column justify-content-around align-items-start"
              >
                <div className="title h6 stolzl-bold">Call Us</div>
                <div className="number h6 stolzl-bold ">+34 5454 545 44</div>
                <div className="call">
                  <a
                    href="/#"
                    style={{
                      border: "2px solid",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#000",
                      padding: "10px 35px",
                      borderRadius: "40px",
                    }}
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="email-content">
              <div className="email h6 mt-5 d-flex">
                <AiOutlineMail className="mr-3" style={{ fontSize: "22px" }} />
                <div className="tag stolzl-bold" style={{ fontSize: "19px" }}>
                  Email
                </div>
              </div>
              <div
                style={{ height: "120px", marginLeft: "30px" }}
                className="same mt-2 d-flex flex-column justify-content-around align-items-start"
              >
                <div className="number h6 stolzl-bold">xyz@gmail.com</div>
                <div className="call">
                  <a
                    href="/#"
                    style={{
                      border: "2px solid",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#000",
                      padding: "10px 35px",
                      borderRadius: "40px",
                    }}
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 contact-form">
            <form>
              <label htmlFor="Name">Name*</label>
              <input type="text" id="name" placeholder="Enter name" required />
              <label htmlFor="Email">Email*</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                required
              />
              <label htmlFor="Company">Company*</label>
              <input
                type="text"
                id="company"
                placeholder="Enter company name"
                required
              />
              <label htmlFor="Message">Message*</label>
              <textarea
                name="message"
                id="message"
                placeholder="Type message"
              ></textarea>
              <input className="submit" type="submit" value="Send Message" />
              <div className="text">
                Lorem ipsum dolor sit amet consectetur elit. Maiores asperiores.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
