function decode(str){
    const arr = str.split(' ')
    const duplicates = []
    // find all words that have duplicates/occur more than once
    for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) !== i){
        duplicates.push(arr[i])
      }
    }
    const finalArr = []
    console.log(duplicates);
    for(let i = 0; i < arr.length; i++){
      if( duplicates.includes(arr[i]) ){
        finalArr.push(arr[i])
      }
    }
    // write for loop to populate that array
      // if word is a duplicate, push it to array (once)
    // return array with those words
    // we may want to use Set to eliminate duplicated
    return Array(...new Set(finalArr)).join(" ")
  }
  console.log(decode(`Banh mi pull skateboard ipsum lorem, 
  kombucha scenester banjo. Franzen mlkshk consequat, PBR&B 
  lever lever listicle irony pop-up sriracha on the saliva. 
  Shabby on chic eu iceland far next level far lever pull 
  drinking the right vinegar fanny pack pull minim right chicharrones migas.`))