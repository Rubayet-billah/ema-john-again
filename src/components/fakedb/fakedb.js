// get product from localstorage
const getFromDb = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    else {
        return {};
    }
}

// get the array of all id's stored in localstorage local storage
const getArrayofIdFromDb = key => {
    const cartObj = getFromDb(key);
    // const arrId = Object.keys(cartObj);
    for (const product in cartObj) {
        console.log(product)
    };
    // const arrIdValue = Object.values(cartObj);
    // return (arrId, arrIdValue);
}
getArrayofIdFromDb('my-cart')

// store product to local storage
const setToDb = id => {
    let cartObj = getFromDb('my-cart');
    let quantity = cartObj[id];
    if (quantity) {
        cartObj[id] = quantity + 1;
    }
    else {
        cartObj[id] = 1;
    }
    localStorage.setItem('my-cart', JSON.stringify(cartObj))
}

export {
    setToDb,
    getArrayofIdFromDb,
    getFromDb
};