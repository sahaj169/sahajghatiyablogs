import React, { useRef } from "react";
import styles from "./footer.module.scss";
import { toast } from "react-toastify";

const Footer = () => {
  const EmailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailInput = EmailRef.current?.value as string | undefined;
    if (emailInput?.trim() === "" || !emailInput?.includes("@")) {
      toast.error("Please Enter A Valid Email Address!");
      return;
    }

    try {
      const previousemails = await fetch("/api/subscribemail");
      const previousemailsdata = await previousemails.json();
      const previousemailsarray = previousemailsdata?.data?.map(
        (email: { email: string }) => email.email
      );
      if (previousemailsarray.includes(emailInput)) {
        toast.info("You Are Already Subscribed To My Mailing List. Thanks!");
        return;
      }
    } catch (e) {
      toast.error("Something Went Wrong!");
      return;
    }

    try {
      const data = await fetch("/api/subscribemail", {
        method: "POST",
        body: JSON.stringify({ email: emailInput }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 201) {
        EmailRef.current!.value = "";
        toast.success("Subscribed Successfully To My Mailing List!");
      }
    } catch (e) {
      toast.error("Something Went Wrong!");
      return;
    }
  };
  return (
    <div className={styles.footer}>
      <div className={styles.mail_div}>
        <div className={styles.heading}>
          <p>join my mailing list</p>
        </div>
        <div className={styles.input_div}>
          <input
            type="text"
            placeholder="Enter Your Email Here"
            ref={EmailRef}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Subscribe
          </button>
        </div>
        <div className={styles.credits}>
          <p>© 2022 by Sahaj Ghatiya. Made with Love and NextJs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
