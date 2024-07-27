import { Link } from "react-router-dom"
import SiteHeader from "./page_elements/SiteHeader"

export default function Characters()
{
    return (
        <>
            <SiteHeader pageTitle="Characters" />
            <main className="px-5">
                <ul>
                    <li>
                        <Link to="/characters/fuku" className="hover:text-red-600">Fuku</Link>
                    </li>
                    <li>
                        <Link to="/characters/fuku" className="hover:text-red-600">Phineas Filth</Link>
                    </li>
                </ul>
            </main>
        </>
    )
}