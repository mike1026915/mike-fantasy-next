import React from "react";

interface Props {
  children: React.ReactNode;
}

const Content = (props: Props) => {
  return (
    <main
      className={`
        bg-gray-100 min-h-[100vh] h-full w-full transition px-[5%] pt-12
      `}
    >
      {props.children}
    </main>
  )
};

export default Content;