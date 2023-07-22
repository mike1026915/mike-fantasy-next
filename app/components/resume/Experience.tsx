import { experience } from '../../data/profile.json'

interface Experience {
  role: string;
  company: string;
  location: string;
  project: string;
  url: string;
  start: string;
  end: string;
  description: string;
  events: string[];
}

const ExperienceItem = (props: Experience) => {
  const {
    role,
    company,
    location,
    project,
    url,
    start,
    end,
    description,
    events
  } = props;

  return (
    <div></div>
  );
}


export default function Experience() {

  return (
    <>
      <h2 className='text-5xl font-bold text-gray-700'> Experience </h2>
      <div className='flex flex-col'>
        {
          experience.map((e, index) => {
            return (
              <ExperienceItem {...e} key={`${index}_experience`} />
            );
          })
        }
      </div>
    </>
  )
}