import { type PropsWithChildren, type ReactNode } from "react";

import { deletFunc } from "./CourseGoalList.tsx";

interface CourseGoalCompononetProps { 
    id: number;
    title: string; 
    children: ReactNode;
    deleteGoal: deletFunc;
}

// Alternatively, I can use `PropsWithChildren` to define my props. It give access to the `children` prop
type CourseGoalCompononetPropss = PropsWithChildren<{title: string, id: number, deleteGoal: deletFunc;}>;

export default function CourseGoal({title, id,  children, deleteGoal}: CourseGoalCompononetProps | CourseGoalCompononetPropss){
    return( 
        <>
            <article>
                <div>
                    <h2 className="makeCapital"> {title} </h2>
                    {children}
                </div>

                <button onClick={() => deleteGoal(id)}>Delete</button>
            </article>
        </>
    )
}