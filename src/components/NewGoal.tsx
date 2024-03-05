import { useRef, type FormEvent } from "react";

import { CourseGoalProps } from "../App";
type addGoal = (title: string, description: string) => void;

interface NewGoalProp{
    handleAddGoal: addGoal;
    goals: CourseGoalProps[];
}

export default function NewGoal({handleAddGoal, goals}: NewGoalProp){
    const goal = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

       const enteredGoal = goal.current!.value;
       const enteredDescription = description.current!.value;

       handleAddGoal(enteredGoal, enteredDescription);

       event.currentTarget.reset();
    }

    if(goals.length <= 5){
        return(
            <>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="goal"> Your Goal</label>
                        <input type="text" id="goal" name="goal" ref={goal}/>
                    </p>
    
                    <p>
                        <label htmlFor="description"> Short Description</label>
                        <input type="text" id="description" name="description" ref={description} />
                    </p>
    
                    <p>
                        <button type="submit">Add Goal</button>
                    </p>
                </form>
            </>
        )
    } else {
        return(
            <>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="goal"> Your Goal</label>
                        <input type="text" id="goal" name="goal" ref={goal} disabled/>
                    </p>
    
                    <p>
                        <label htmlFor="description"> Short Description</label>
                        <input type="text" id="description" name="description" ref={description} disabled/>
                    </p>
    
                    <p>
                        <button type="submit">Add Goal</button>
                    </p>
                </form>
            </>
        )
    }

}