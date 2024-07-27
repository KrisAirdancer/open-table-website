import { useEffect, useState } from "react"

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

export default function useCharacter(initialValue: Character)
{
    const CHARACTER_DATA_KEY = "characterData";

    function readValue()
    {
        const item = window.localStorage.getItem(CHARACTER_DATA_KEY);
        return item ? JSON.parse(item) : initialValue;
    };

    const [storedValue, setStoredValue] = useState(readValue);

    function setValue(key: string | number, value: any)
    {
        // TODO: To properly update the "stats" sub-object, try "if (key === 'str' || key === ...) {'stats': {...stats, [key]: value}}"
        const updatedValue = {...storedValue, [key]: value};

        setStoredValue(updatedValue);

        window.localStorage.setItem(CHARACTER_DATA_KEY, JSON.stringify(updatedValue));
    };

    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    return [storedValue, setValue];
}































// ORIGINAL
// function getSavedCharacterData(initialCharacterData: Character): Character
// {
//     const characterData = localStorage.getItem("characterData")
//     if (characterData)
//     {
//         return JSON.parse(characterData)
//     }

//     return initialCharacterData
// }

// function updateCharacterData(characterData: Character, key: string, value: string | number): Character
// {
//     console.log("AT: updateCharacterData()")
//     console.log("characterData: ", characterData)

//     switch (key)
//     {
//         case "name":
//             characterData.name = value.toString()
//             break
//         default:
//             break
//     }
//     console.log("characterData ret: ", characterData)
//     return characterData
// }

// export default function useCharacter(initialCharacterData: Character): [Character, Function]
// {
//     console.log("AT: useCharacter()")

//     const [characterData, setCharacterData] = useState(() => {
//         return getSavedCharacterData(initialCharacterData)
//     })
    
    
    
    
        
//     function setCharacter(character: Character, key?: string, value?: string | number): Character
//     {
//         console.log("AT: setCharacter()")
//         console.log(`key: ${key}, value: ${value}`)
//         console.log(characterData)
//         console.log("character: ", character)

//         if (key && value)
//         {
//             setCharacterData(updateCharacterData(character, key, value))
//         }
//         console.log("character: ", character)
//         return character
//     }
    
    
//     useEffect(() => {
//         console.log("AT: useEffect()")

//         localStorage.setItem("characterData", JSON.stringify(characterData))
//     }, [characterData])




//     return [characterData, setCharacter]
// }