

/*function search_min(array){
    let min = 100000;
    for(let i=0; i<array.length; i++){
        if (array[i] < min)
            min = array[i];
    }
    return min;
}

scores = [7,7,10,9,8,0,7,9]

scores2 = scores.filter((x) => x>0)

console.log(scores2);

const today = new Date();

console.log(today);

scores3 = Array.from(scores2);

console.log(scores3);


console.log(search_min(scores3));

console.log(Math.min(...scores));


*/

let names = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Luca Pezzolla";

names_array = names.split(",");


names_array.forEach(element => {
    name_split = element.trim()
    sigla = name_split.split(" ");
    //console.log(sigla);
    sigla.forEach(element => {
        console.log(element[0])
        
    })
    
});



