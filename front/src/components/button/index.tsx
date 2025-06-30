import { Link } from "react-router-dom";
import styles from './style.module.css';
import clsx from 'clsx';

interface ButtonProps {
    href: string;
    title: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void
}

export default function Button({ href, title, type, onClick }: ButtonProps) {
    if (type === 'submit') {
        return (
            <button 
                className={clsx(styles.button, styles.submit)}
                type={type}
            >
                {title}
            </button>
        );
    }

    return (
        <Link to={href} className={styles.link}>
            <button 
                className={clsx(styles.button)} 
                type={type}
                onClick={onClick}
            >
                {title}
            </button>
        </Link>
    );
}
