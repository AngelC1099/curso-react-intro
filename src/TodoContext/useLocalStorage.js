import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
  
          let defaultItem = initialValue;
      
          if (localStorageItem) {
            defaultItem = JSON.parse(localStorageItem);
            setItem(defaultItem);
          }
          else {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          }
  
          setLoading(false);
        }
        catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000)
    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorage }