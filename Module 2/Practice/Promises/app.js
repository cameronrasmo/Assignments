function promiseBackNFurth(){
    return new Promise((resolved, rejected) => {
        const randumb = Math.floor(Math.random() * 2);
        if(randumb === 0){
            resolved("YAY");
        }
        else if(randumb === 1){
            rejected("NO");
        }
    })
}

promiseBackNFurth().then(resolvedData => console.log(resolvedData)).catch(rejectedData => console.log(rejectedData));
