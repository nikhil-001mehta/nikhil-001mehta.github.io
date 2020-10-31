import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import animatingTitleStyles from '../css/animatingTitle.module.css';
import { useAnimatingTitle } from '../hooks/animatingTitle';
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
  "Any&nbsp;help"
];

export default function () {
  const animatingTitleRef = useRef();
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  useAnimatingTitle(animatingTitleRef, keywords);
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  }
  useEffect(() => {
    if (location.search.includes('thanks')) {
      setFormSubmitted(true);
    }
  })
  return (
    <Layout
      title={`Contact me`}
      description={"technikhil314 contact information"}>
      <header className={clsx('hero hero--primary', "heroBanner")}>
        <div className="container">
          <h2 className={animatingTitleStyles.animatingTitleWrapper}>
            Get in touch with me for {" "}
            <span aria-label={keywords[0]} className={animatingTitleStyles.animatingTitle} ref={animatingTitleRef}>
            </span>
          </h2>
          <main>
            {
              formSubmitted ? <h3 className="text--normal">Thank you. I will reply you shortly.</h3> : null
            }
            <form action="https://formsubmit.co/nikhil.001mehta@gmail.com" method="POST" className={clsx(pageStyles.contactForm)} encType="multipart/form-data">
              <input type="hidden" name="_next" value={`${process.env.HOST_NAME}/contactme?thanks`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <div className={clsx(pageStyles.formGroup)}>
                <label>Your Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required id="name" />
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <label>Your Email</label>
                <input type="email" name="email" placeholder="john.doe@example.com" />
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <label>Contact Number</label>
                <input type="tel" name="contactNumber" placeholder="Contact number" required id="contactNumber" />
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <label>Message</label>
                <textarea rows="5" name="message" placeholder="Message" id="message" />
              </div>
              <div className={clsx(pageStyles.formGroup)}>
                <label>Attachment</label>
                <input type="file" name="attachment" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                <input type="text" placeholder="Attach a document" onClick={() => fileInputRef.current.click()} onChange={() => { }} value={fileName} id="attachment" />
              </div>
              <button type="submit" className="button button--info button--md">Submit</button>
            </form>
          </main>
        </div>
      </header>
      <main>

      </main>
    </Layout>
  );
}
