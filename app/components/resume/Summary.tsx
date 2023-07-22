import { SiHtml5 } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function Summary() {

  const summary = 'As an accomplished software engineer with a proven track record, I excel in adapting quickly to new technologies and environments while remaining a committed team player and communicative leader. I am proud to have played a key role in developing secure software systems and large-scale SaaS web services that have been used by millions of users worldwide. With a decade of experience in software development, testing, support, and project leadership, I am passionate about collaborating with exceptional teams to create innovative solutions that address complex business challenges. Let\'s work together to make an impact and transform the world through technology.'

  return (
    <div className="flex py-3 border-b-4 border-dark-green">
      <div
        className="flex flex-col justify-around border-r-4 p-3 border-dark-green gap-3 text-2xl"
      >
        <SiPython />
        <SiHtml5 />
        <SiReact />
        <FaNodeJs />
      </div>
      <div>
        <p
          className="py-3 pl-3 text-2xl text-gray-700"
        >
          {summary}
        </p>
      </div>
    </div>
  );
}