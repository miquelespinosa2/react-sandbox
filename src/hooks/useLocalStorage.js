import React from 'react'
import {useState} from 'react'


function useLocalStorage(key, initialValue) {
const [localStorageValue, setLocalStorageValue] = useState(() =>
getLocalStorageValue(key, initialValue))

const setValue = (value => {
  console.log(value)
})

return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
