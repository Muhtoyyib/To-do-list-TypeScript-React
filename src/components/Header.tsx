import { type PropsWithChildren} from "react";

type HeaderProps = PropsWithChildren<{img: imgProps}>

// interface HeaderProps {
//     img: imgProps;
//     children: ReactNode
// }

interface imgProps {
    src: string;
    alt: string;
}

export default function Header({img, children}: HeaderProps){

    return(
        <>
            <header>
                <img {...img}/>
                {children}
            </header>
        </>
    )
}