
import Header from './components/resume/Header';
import Summary from './components/resume/Summary';
import Experience from './components/resume/Experience';
import Education from './components/resume/Education';
import Skills from './components/resume/Skills';
import Hobby from './components/resume/Hobby';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Summary />
      <main className='flex pt-5'>
        <div className="flex flex-col">
          <Experience />
          <Education />
        </div>
        <div className="flex flex-col">
          <Skills />
          <Hobby />
        </div>
      </main>
    </div>
  );
}
