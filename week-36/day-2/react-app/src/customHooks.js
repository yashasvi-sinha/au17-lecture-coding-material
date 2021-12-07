import { useEffect, useState } from "react"

export function useDocumentTitle(customTitle){

    useEffect(() => {
        document.title = customTitle
        
    }, [customTitle])

}


export function useToggle(initState = false){
    const [flip, setFlip] = useState(initState)

    const changeValue = () => {
        setFlip(!flip)
    }

    return [flip, changeValue]
}


export function useLocalStorage(key, defaultValue){

    const [storageValue, setStorageValue] = useState(() => {

        const data = JSON.parse(localStorage.getItem(key)) || defaultValue
        return data
    })


    useEffect( () => {

        localStorage.setItem(key, storageValue)

    }, [storageValue])

    return [storageValue, setStorageValue]
}