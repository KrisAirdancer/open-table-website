import NavBar from "./NavBar";

type SiteHeaderProps = {
    pageTitle: string
}

export default function SiteHeader({pageTitle}: SiteHeaderProps)
{
    return (
        <>
            <h1 className="m-2 text-3xl font-bold text-red-600">{pageTitle}</h1>
            <NavBar />
        </>
    )
}