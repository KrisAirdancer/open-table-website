import useCharacter from "../hooks/useCharacter";
import SiteHeader from "./page_elements/SiteHeader";

// TODO: Where is the proper place to put TypeScript types that need to be global? Move this there.
type Character = {
    name: string
    id: string
    inventory: string
    character_description: string
    notes: string
    journal: string
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number
    current_hit_points: number
    max_hit_points: number
    item_slots: number
    armor_class: number
    alignment: number
    speed: number
}

// TODO: Add placeholder text to all of the input fields. Lookup how to do this proeprly in React. I don't think giving things an initial value like I am doing is the right way.

const DEFAULT_CHARACTER_DATA = {
    name: "name",
    id: "",
    inventory: "",
    character_description: "",
    notes: "",
    journal: "",
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    current_hit_points: 0,
    max_hit_points: 0,
    item_slots: 0,
    armor_class: 0,
    alignment: 0,
    speed: 30
}

function CharacterSheetBox({ title, children }: any)
{
    return (
        <div className="p-1 mb-2 w-full max-w-screen-sm border-white border-2">
            {title && <p className="mb-2">{title}</p>}
            {children}
        </div>
    )
}

function CharacterSheetInput({ inputValue, labelText, characterDataKey, onChangeHandler, long, className }: any)
{
    return (
        <p className={className}>
            {labelText && <label className="mr-2">{labelText}</label>}
            <input
                type="text"
                id="name"
                name="name"
                value={inputValue}
                onChange={(event) => onChangeHandler(characterDataKey, event.target.value)}
                className={`text-white bg-transparent focus:outline-none ${!long && "w-5"}`}
            />
        </p>
    )
}

function HitPointsInput({ onChangeHandler, currentHitPoints, maxHitPoints }: any)
{
    const styles = "text-white bg-transparent focus: outline-none w-5";
    return (
        <label>
            <span className="mr-2">HP:</span>
            <input
                className={styles}
                value={currentHitPoints}
                onChange={(event) => onChangeHandler("current_hit_points", event.target.value)}
            />
            <span className="mr-2">/</span>
            <input
                className={styles}
                value={maxHitPoints}
                onChange={(event) => onChangeHandler("max_hit_points", event.target.value)}
            />
        </label>
    )
}

export default function CharacterSheet()
{
    const [character, setCharacter] = useCharacter(DEFAULT_CHARACTER_DATA);

    return (
        <>
            <SiteHeader pageTitle="Character Sheet"/>
            <main className="flex flex-col items-center px-2">
                <CharacterSheetBox>
                    <CharacterSheetInput inputValue={character.name} characterDataKey="name" onChangeHandler={setCharacter} long={true} />
                </CharacterSheetBox>

                <CharacterSheetBox title="Ability Scores">
                    <HitPointsInput onChangeHandler={setCharacter} currentHitPoints={character.current_hit_points} maxHitPoints={character.max_hit_points} />
                    <CharacterSheetInput labelText="AC:" inputValue={character.armor_class} characterDataKey="armor_class" onChangeHandler={setCharacter} />
                    <div className="mt-5">
                        {/* TODO: Make a new component for the ability scores that calcualtes and displays the modifier. Or at least add a place to enter the modifier. */}
                        <CharacterSheetInput labelText="STR:" inputValue={character.str} characterDataKey="str" onChangeHandler={setCharacter} />
                        <CharacterSheetInput labelText="DEX:" inputValue={character.dex} characterDataKey="dex" onChangeHandler={setCharacter} />
                        <CharacterSheetInput labelText="CON:" inputValue={character.con} characterDataKey="con" onChangeHandler={setCharacter} />
                        <CharacterSheetInput labelText="INT:" inputValue={character.int} characterDataKey="int" onChangeHandler={setCharacter} />
                        <CharacterSheetInput labelText="WIS:" inputValue={character.wis} characterDataKey="wis" onChangeHandler={setCharacter} />
                        <CharacterSheetInput labelText="CHA:" inputValue={character.cha} characterDataKey="cha" onChangeHandler={setCharacter} />
                    </div>
                    <div className="mt-5">
                        <CharacterSheetInput labelText="Item Slots (10 + CON):" inputValue={character.item_slots} characterDataKey="item_slots" onChangeHandler={setCharacter} />
                        {/* TODO: Add the "ft" units label to the end of this line. */}
                        <CharacterSheetInput labelText="Speed:" inputValue={character.speed} characterDataKey="speed" onChangeHandler={setCharacter} />
                    </div>
                </CharacterSheetBox>
            </main>
        </>
    );
}








// ORIGINAL
// export default function CharacterSheet()
// {
//     const [character, setCharacter] = useCharacter(DEFAULT_CHARACTER_DATA);

//     return (
//         <>
//             <SiteHeader pageTitle="Character Sheet"/>
//             <input value={character.name} onChange={e => setCharacter(character, "name", e.target.value)}></input>
//         </>
//     )
// }