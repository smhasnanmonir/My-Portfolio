import emailjs from "@emailjs/browser";
import contact from "../../../src/assets/contact.png";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Bounce, Slide } from "react-awesome-reveal";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Send Email?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(
            "service_svanmnf",
            "template_xzhvbdi",
            form.current,
            "_nlXL3ufBOtWeQEN7"
          )
          .then(
            (result) => {
              console.log(result.text);
              Swal.fire("Email was sent successfully.");
            },
            (error) => {
              console.log(error.text);
              Swal.fire("Email sent failed.");
            }
          );
      }
    });
  };
  return (
    <div id="contact">
      <Bounce>
        <h1 className="text-[45px] font-rubic text-center py-[55px]">
          Contact Me
        </h1>
      </Bounce>
      <div className="md:px-0 px-[25px] mb-14 flex md:flex-row flex-col md:gap-[55px] gap-[35px] justify-center items-center">
        <div className="md:w-1/2">
          <Slide cascade damping={0.1} direction="left" duration={1500}>
            <img className="w-full" src={contact} alt="Contact.png" />
          </Slide>
        </div>
        <div className="grid place-items-center md:w-1/2 w-full">
          <form className="w-full" ref={form} onSubmit={sendEmail}>
            <Slide direction="right" duration={1500}>
              <label>Name</label>
              <input
                className="form-group w-full"
                type="text"
                name="user_name"
              />
              <label>Email</label>
              <input
                className="form-group w-full"
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <textarea className="form-group w-full h-[75px]" name="message" />
              <input
                className="btn btn-outline w-[120px]"
                type="submit"
                value="Send"
              />
            </Slide>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
