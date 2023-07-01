import React from "react";

interface Props {

}

const Content = (props: Props) => {
  return (
    <main
      className={`
        bg-gray-100 min-h-[100vh] h-full w-full p-[3%] transition
        md:pl-[50px]
        sm:pl-[calc(30vh+5%+1%)]
      `}
    >

    </main>
  )
};

export default Content;