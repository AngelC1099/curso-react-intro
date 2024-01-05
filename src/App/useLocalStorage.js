import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let defaultItem = initialValue;
  
    if (localStorageItem) {
      defaultItem = JSON.parse(localStorageItem);
    }
    else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
  
    const [item, setItem] = React.useState(defaultItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    }
  
    return [item, saveItem];
  }

  export { useLocalStorage }