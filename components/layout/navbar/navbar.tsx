import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.navbar_logo}>
          <Image
            src="/logo.png"
            width={95}
            height={57}
            alt="sahajghatiyablogs"
          />
        </div>
      </Link>

      <div className={styles.links}>
        <div className={styles.navigation}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/blogs/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link href="/blogs/family">Family</Link>
            </li>
            <li>
              <Link href="/blogs/food">Food</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sociallinks}>
          <div className={styles.socialicon}>
            <Link href="https://facebook.com/" target="_blank" rel="noreferrer">
              <BsFacebook />
            </Link>
          </div>
          <div className={styles.socialicon}>
            <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </Link>
          </div>
          <div className={styles.socialicon}>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </Link>
          </div>
          <div className={styles.socialicon}>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={styles.navbar_toggle}
        onClick={() => {
          setShow(!show);
        }}
      >
        <RxHamburgerMenu />
      </div>

      {show && (
        <div className={styles.mobile_navbar}>
          <div
            className={styles.mobile_navbar_close}
            onClick={() => {
              setShow(!show);
            }}
          >
            <AiOutlineClose />
          </div>
          <div className={styles.mobile_navbar_links}>
            <ul>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/blogs">Blogs</Link>
              </li>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/blogs/lifestyle">Lifestyle</Link>
              </li>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/blogs/family">Family</Link>
              </li>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link href="/blogs/food">Food</Link>
              </li>
            </ul>

            <div className={styles.mobile_navbar_sociallinks}>
              <div className={styles.mobile_navbar_socialicon}>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </Link>

                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </Link>

                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
