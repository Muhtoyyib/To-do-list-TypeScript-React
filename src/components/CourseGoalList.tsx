import { type ReactNode } from "react";
import { CourseGoalProps } from "../App.tsx";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox.tsx";


export type deletFunc = (id: number) => void;

interface CourseGoalListProps {
    goals: CourseGoalProps[];
    onDelete: deletFunc;
}

export default function CourseGoalList({goals, onDelete}: CourseGoalListProps){
    let warningMode: ReactNode;

    if(goals.length === 0){
        return (
            <InfoBox mode="hint" infoClass="infobox-hint">
                You have no course goal yet, start adding some!
            </InfoBox>
        ) 
    } else if(goals.length == 1){
            warningMode = (
                <InfoBox mode="warning" infoClass="warning--low">
                    Only one goal found!
                </InfoBox>
            )
    }else if(goals.length >= 3 && goals.length <= 5){
        warningMode = (
            <InfoBox mode="warning" infoClass="warning--medium">
                You are adding too many goals on your plate, please take a time to review all
            </InfoBox>
        )
    }else if(goals.length > 5){
        warningMode = (
            <InfoBox mode="warning" infoClass="warning--high">
                You have enough goals to for this period, complete some before adding more!
            </InfoBox>
        )
    }

    return(
        <>
            {warningMode}
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