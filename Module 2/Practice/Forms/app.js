document.adlib.addEventListener("submit", (e) => {
    e.preventDefault();

    const noun = document.adlib.noun.value;
    const adverb = document.adlib.adverb.value;
    const verb = document.adlib.verb.value;
    
    alert(`The ${noun} did ${adverb} ${verb} in it's home. ew`)
})