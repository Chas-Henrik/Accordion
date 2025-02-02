import { ReactNode, useState } from "react";
import styles from './Accordion.module.css'

export type AccordionProps = {
    id: string;
    title: string;
    children: ReactNode;
}

export function Accordion({id, title, children}: AccordionProps): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const handleClick = () => setCollapsed(!collapsed);

    return (
        <article key={id} className={styles.accordion + ' ' + (collapsed ? styles.accordionCollapsed : styles.accordionExpanded)}>
            <div onClick={handleClick}><h2>{title}</h2><img src="./src/assets/keyboard_arrow_down.svg" alt="Show/Hide Icon" /></div> 
            {!collapsed && <div>{children}</div>}
        </article>
        )
}
