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
}

const DEFAULT_CHARACTER_DATA = {
    name: "",
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
    alignment: 0
}

function CharacterSheetBox({ title, children }: any)
{
    return (
        <div className="p-1 mb-2 w-1/2 max-w-screen-sm border-white border-2">
            {title && <p className="mb-2">{title}</p>}
            {children}
        </div>
    )
}

function CharacterSheetInput({ inputValue, labelText, characterDataKey, onChangeHandler, small }: any)
{
    return (
        <>
            {labelText && <label>{labelText}</label>}
            <input
                type="text"
                id="name"
                name="name"
                value={inputValue}
                onChange={(event) => onChangeHandler(characterDataKey, event.target.value)}
                className={`text-white bg-transparent focus:outline-none ${small && "w-5"}`}
            />
        </>
    )
}

export default function CharacterSheet()
{
    const [character, setCharacter] = useCharacter(DEFAULT_CHARACTER_DATA);

    return (
        <>
            <SiteHeader pageTitle="Character Sheet"/>
            <main className="flex flex-col items-center">
                <CharacterSheetBox>
                    <CharacterSheetInput
                        inputValue={character.name}
                        characterDataKey="name"
                        onChangeHandler={setCharacter}
                    />
                </CharacterSheetBox>

                <CharacterSheetBox title="Ability Scores">
                    <p>
                        <CharacterSheetInput
                            labelText="HP: "
                            inputValue={character.current_hit_points}
                            characterDataKey="current_hit_points"
                            onChangeHandler={setCharacter}
                            small={true}
                        />
                        <span> / </span>
                        <CharacterSheetInput
                            inputValue={character.max_hit_points}
                            characterDataKey="max_hit_points"
                            onChangeHandler={setCharacter}
                            small={true}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="AC: "
                            inputValue={character.armor_class}
                            characterDataKey="armor_class"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <br></br>
                    {/* TODO: Make a new component for the ability scores that calcualtes and displays the modifier. */}
                    <p>
                        <CharacterSheetInput
                            labelText="STR: "
                            inputValue={character.str}
                            characterDataKey="str"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="DEX: "
                            inputValue={character.dex}
                            characterDataKey="dex"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="CON: "
                            inputValue={character.con}
                            characterDataKey="con"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="INT: "
                            inputValue={character.int}
                            characterDataKey="int"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="WIS: "
                            inputValue={character.wis}
                            characterDataKey="wis"
                            onChangeHandler={setCharacter}
                        />
                    </p>
                    <p>
                        <CharacterSheetInput
                            labelText="CHA: "
                            inputValue={character.cha}
                            characterDataKey="cha"
                            onChangeHandler={setCharacter}
                        />
                    </p>
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