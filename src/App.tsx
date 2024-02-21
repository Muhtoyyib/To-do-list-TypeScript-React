import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

import goalsImage from './assets/goals.jpg'
import { useState } from "react";

export interface CourseGoalProps{
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);
  
  function handleAddGoal(title: string, description: string){
    setGoals(prevGoals => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title: title,
        description: description
      }

      return [...prevGoals, newGoal];
    })
  }

  function handleDeleteGoal(id: number): void{
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header img={{src: goalsImage, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal handleAddGoal={handleAddGoal}/>

      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}
