import React from "react";
import Link from 'next/link'

export default function Menu() {

  const liStyle = "list-none text-2xl underline my-2 hover:opacity-70 hover:scale-125"

  return (
    <nav
      className="mt-5 ml-12"
    >
      <li
        className={liStyle}
      >
        <Link href="/">
          Resume
        </Link>
      </li>
      <li
        className={liStyle}
      >
        Blog
      </li>
    </nav>
  )
}