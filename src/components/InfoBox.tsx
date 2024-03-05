import {type ReactNode } from "react";


interface InfoBoxProp {
    mode: 'hint' | 'warning';
    infoClass: string;
    children: ReactNode
}

export default function InfoBox({mode, children, infoClass}: InfoBoxProp){
    if(mode === 'hint'){
        return(
            <>
                <aside className={`infobox ${infoClass}`}>
                    <p>{children}</p>
                </aside>
            </>
        )
    } 

    return(
        <>
            <aside className={`infobox infobox-warning ${infoClass}`}>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        </>
    ) 

}