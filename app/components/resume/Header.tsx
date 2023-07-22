import React from "react";

import { MdMail } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const LINKED_IN_ICON = (
  <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentcolor"
      fill="currentcolor"
  >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
)

const contact_info: {[key: string]: {icon: React.JSX.Element, link: string, text: string}} = {
  linkedin: {
    icon: LINKED_IN_ICON,
    link: 'https://www.linkedin.com/in/mike1026915/',
    text: 'My LinkedIn',
  },
  email: {
    icon: (<MdMail />),
    link: 'mailto:mike1026915.cs96@g2.nctu.edu.tw',
    text: 'mike1026915.cs96@g2.nctu.edu.tw',
  },
  website: {
    icon: (<MdWeb />),
    link: 'https://www.mike-fang.com',
    text: 'My Personal Website',
  },
  location: {
    icon:  (<MdLocationOn />),
    link: 'https://en.wikipedia.org/wiki/Taipei',
    text: 'Taipei, Taiwan',
  },
}

export default function Header() {

  const contactItems = Object.keys(contact_info).map((key) => {
    return (
        <div
          key={key}
          className="flex text-2xl mt-1 gap-1"
        >
          {contact_info[key].icon}
          &nbsp;
          <a
              href={contact_info[key].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-xl underline"
          >
              {contact_info[key].text}
          </a>
        </div>
    )
});

  return (
    <div
      className="flex justify-center w-full border-b-8 pb-5 border-dark-green"
    >
      <div
        className="w-[66.67%]"
      >
        <h1
          className="text-7xl font-bold"
        >
          方鍾豪 Mike Fang
        </h1>
        <h3
          className="text-3xl font-medium mt-5  text-gray-700"
        >
          Senior Full Stack Software Engineer
        </h3>
      </div>

      <div
        className="w-[33.33%] border-l-2 border-dark-green flex flex-col justify-between pl-3"
      >
        {contactItems}
      </div>
    </div>
  )
}