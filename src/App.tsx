import { useState } from "react";
import {Accordion} from './components/Accordion'
import './App.css'

type AccordionData = {
  id: string;
  title: string;
  content: string;
}

const data: AccordionData[] = [
  {id: "1", title: "What's your name?", content: "My name is John Doe" },
  {id: "2", title: "What do you do?", content: "I am a Software Engineer"},
  {id: "3", title: "What do you like in free time?", content: "I like to play guitar"},
  {id: "4", title: "What's the Lun Dev channel about?", content: "It is about programming and software development"}
]



function App() {
  const [favFood, setFavFood] = useState<string>("pizza");

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => setFavFood(e.target.id);

  const accordionItems = data.map((item:AccordionData) => (
    <Accordion key={item.id} id={item.id} title={item.title}>
      <p>{item.content}</p>
    </Accordion>
    )
  );

  return (
    <>
      <section className="accordionList">
        {accordionItems}
        <Accordion key="100" id="100" title="Select your favorite food:">
          <form>
            <label htmlFor="pizza"><input id="pizza" type="radio" name="food" onChange={onRadioChange} checked={favFood==="pizza"}></input> Pizza</label>
            <label htmlFor="hamburger"><input id="hamburger" type="radio" name="food" onChange={onRadioChange} checked={favFood==="hamburger"}></input> Hamburger</label>
            <label htmlFor="pasta"><input id="pasta" type="radio" name="food" onChange={onRadioChange} checked={favFood==="pasta"}></input> Pasta</label>
            <label htmlFor="sushi"><input id="sushi" type="radio" name="food" onChange={onRadioChange} checked={favFood==="sushi"}></input> Sushi</label>
          </form>
        </Accordion>
      </section>
    </>
  )
}

export default App
