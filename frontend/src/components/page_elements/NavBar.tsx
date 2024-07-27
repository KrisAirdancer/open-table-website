import { Link } from "react-router-dom"

type NavBarLinkProps = {
    target: string
    text: string
}

function NavBarLink({target, text}: NavBarLinkProps)
{
    return <Link to={target} className="mx-2 hover:text-red-600">{text}</Link>
}

export default function NavBar()
{
    return (
        <nav className="mb-5">
            <NavBarLink target="/" text="Home" />
            <NavBarLink target="/character-sheet" text="Character Sheet" />
            <NavBarLink target="/characters" text="Characters" />
        </nav>
    )
}