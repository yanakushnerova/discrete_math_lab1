// A = ["a", "b", "b", "c"]
// B = ["c", "d", "b", "d" , "e"]

// console.log(entry(A, B))
// console.log(sum(A, B))
// console.log(composition(A, B))
// console.log(difference(A, B))
// console.log(symmetricalDifference(A, B))

let stringA = document.getElementById("first_set")
let stringB = document.getElementById("second_set")

let operation = document.getElementById("operation").value

function createSet(string) {
    let arr = string.split(" ")
    return arr
}

function solve()

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("solve").onclick = function() {
        let setA = createSet(stringA.value)
        let setB = createSet(stringB.value)
        console.log(createSet(stringA.value))
        console.log(createSet(stringB.value))

        console.log(operation)
    }
});
