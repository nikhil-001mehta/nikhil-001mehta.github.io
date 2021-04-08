import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import PageHead from "../components/head";
import animatingTitleStyles from "../css/animatingTitle.module.css";
import { useAnimatingTitle } from "../hooks/animatingTitle";
import pageStyles from "./contactme.module.css";

const keywords = [
  "Technical&nbsp;Consultancy",
  "Freelance work",
  "Web&nbsp;Development",
  "Nodejs&nbsp;Development",
  "Project&nbsp;Evaluation",
  "Technical&nbsp;roadmaps",
  "Project&nbsp;Assesment",
  "Contributions",
  "Any&nbsp;help",
];

export default function ContactMe() {
  const animatingTitleRef = useRef();
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  useAnimatingTitle(animatingTitleRef, keywords);
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  useEffect(() => {
    if (location.hash.includes("thanks")) {
      setFormSubmitted(true);
    }
  });
  return (
    <Layout>
      <PageHead
        title={`Contact me`}
        description={"technikhil314 contact information"}
      />
      <header className={clsx("hero hero--primary", "heroBanner")}>
        <div className="container">
          <div aria-label={`Get in touch with me for ${keywords[0]}`}>
            <h2
              className={animatingTitleStyles.animatingTitleWrapper}
              aria-hidden="true"
            >
              Get in touch with me for{" "}
              <span
                className={animatingTitleStyles.animatingTitle}
                ref={animatingTitleRef}
                dangerouslySetInnerHTML={{ __html: keywords[0] }}
              ></span>
            </h2>
          </div>
          <main>
            {formSubmitted ? (
              <h3 className="text--normal">
                Thank you. I will reply you shortly.
              </h3>
            ) : null}
            <form
              action="https://formsubmit.co/b875dd73db519b913d3066f7fb041415"
              method="POST"
              className={clsx(pageStyles.contactForm)}
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="_next"
                value={`${process.env.HOST_NAME}/contactme#thanks`}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className={clsx(pageStyles.formGroup)}>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  id="name"
                />
                <label htmlFor="name">Your Full Name</label>
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  required
                  id="email"
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact number"
                  required
                  id="contactNumber"
                />
                <label htmlFor="contactNumber">Contact Number</label>
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Message"
                  id="message"
                />
                <label htmlFor="message">Message</label>
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <input
                  type="file"
                  name="attachment"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <input
                  type="text"
                  placeholder="Attach a document"
                  onClick={() => fileInputRef.current.click()}
                  onChange={() => {}}
                  value={fileName}
                  id="attachment"
                />
                <label htmlFor="attachment">Attachment</label>
              </div>
              <button type="submit" className="button button--info button--md">
                Submit
              </button>
            </form>
          </main>
        </div>
      </header>
      <main></main>
    </Layout>
  );
}
