import React, { Fragment, useRef } from "react";
import Heading from "../../ui/heading/heading";
import styles from "./about.module.scss";
import Sahaj from "../../../public/assets/Sahaj.jpg";
import Image from "next/image";
import { toast } from "react-toastify";
const About = () => {
  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const nameInput = NameRef.current?.value as string | undefined;
    const emailInput = EmailRef.current?.value as string | undefined;
    const messageInput = MessageRef.current?.value as string | undefined;
    if (nameInput?.trim() === "") {
      toast.error("Please Enter Your Name!");
      return;
    }
    if (emailInput?.trim() === "" || !emailInput?.includes("@")) {
      toast.error("Please Enter A Valid Email Address!");
      return;
    }
    if (messageInput?.trim() === "") {
      toast.error("Please Enter A Message!");
      return;
    }
    toast.info("Sending Message...");
    try {
      const data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          message: messageInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data.status === 201) {
        NameRef.current!.value = "";
        EmailRef.current!.value = "";
        MessageRef.current!.value = "";
        toast.success("Message Sent Successfully!");
      }
    } catch (e) {
      toast.error("Something Went Wrong!");
      return;
    }
  };

  return (
    <Fragment>
      <Heading>About</Heading>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={Sahaj} alt={"profile"} />
        </div>
        <div className={styles.card_details}>
          <div className={styles.my_details}>
            <h2>Hi! I&apos;m Sahaj Ghatiya</h2>
            <p>
              I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I&apos;m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
          <div className={styles.contactdiv}>
            <h3 className={styles.contactheading}>DROP ME A LINE</h3>
            <div className={styles.contactform}>
              <div className={styles.form}>
                <div className={styles.nameemail}>
                  <input type="text" placeholder="Name" ref={NameRef} />
                  <input type="email" placeholder="Email" ref={EmailRef} />
                </div>
                <textarea placeholder="Message" ref={MessageRef} rows={10} ></textarea>
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
