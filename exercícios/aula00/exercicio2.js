const jewels = "z"
const stones = "ZZ"

let total = 0

const letters_jewsels = jewels.split("")
const letters_stones = stones.split("")

for(index_jewels=0; index_jewels<jewels.length ; ++index_jewels){
    for(index_stones=0; index_stones <stones.length ; ++index_stones){
        if(letters_jewsels[index_jewels] === letters_stones[index_stones]){
            total += 1
        }
    }
}

console.log(total)