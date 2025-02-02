import {Accordion} from './components/Accordion'
import './App.css'

type AccordionData = {
  id: string;
  title: string;
  content: string;
}

const data:AccordionData = [
  {id: "1", title: "What's your name?", content: "My name is John Doe" },
  {id: "2", title: "What do you do?", content: "I am a Software Engineer"},
  {id: "3", title: "What do you like in free time?", content: "I like to play guitar"},
  {id: "4", title: "What's the Lun Dev channel about?", content: "It is about programming and software development"}
]

function App() {
  const accordionItems = data.map((item) => (
    <Accordion key={item.id} id={item.id} title={item.title}>
      <p>{item.content}</p>
    </Accordion>
    )
  );

  return (
    <>
      <section className="accordionList">
        {accordionItems}
      </section>
    </>
  )
}

export default App
