import styles from './Navigation.module.scss';
import Link from 'next/link'
import { useRouter } from "next/router";

function Navigation() {

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <Link href="/"><h5 className={styles.link}>Chris' Notes</h5></Link>
            <ul className="">
                <li className={(router.pathname == "/" ? styles.active : "")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={(router.pathname == "/about" ? styles.active : "")}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
