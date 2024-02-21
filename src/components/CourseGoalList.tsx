import CourseGoal from "./CourseGoal";

import { CourseGoalProps } from "../App.tsx";

export type deletFunc = (id: number) => void;

interface CourseGoalListProps {
    goals: CourseGoalProps[];
    onDelete: deletFunc;
}

export default function CourseGoalList({goals, onDelete}: CourseGoalListProps){
    return(
        <>
            <ul>
                {
                    goals.map((goal) => (
                        <li key={goal.id}>
                        <CourseGoal title={goal.title} id={goal.id} deleteGoal={onDelete}> 
                            <p>{goal.description}</p>
                        </CourseGoal>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}