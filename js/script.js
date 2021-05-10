let page = document.getElementById("content")
let stringA = document.getElementById("first_set")
let stringB = document.getElementById("second_set")

let option = document.getElementById("operation")
let solve_info = document.createElement("div")
solve_info.setAttribute("id", "solve_info")


function createSet(string) {
    let arr = string.split(" ")
    return arr
}

function solve(A, B, operation) {
    let result

    switch(operation) {
        case '1':
            result = entry(A, B)
            break
        case '2':
            result = sum(A, B)
            break
        case '3':
            result = composition(A, B)
            break
        case '4':
            result = difference(A, B)
            break
        case '5':
            result = difference(B, A)
            break
        case '6':
            result = symmetricalDifference(A, B)
            break
        case '7' :
            result = entry(B, A)
            break
    }

    return result
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("solve").onclick = function() {
        solve_info.innerText = ""
        let setA = createSet(stringA.value)
        let setB = createSet(stringB.value)
        let operation = option.value
        
        if (setA[0] == "" || setB[0] == "") {
            solve_info.innerText += "Fill all the fields first."
        } else {
            solve_info.innerText += "Answer: "

            if (operation == '1') {
                solve_info.innerText += "{"

                for(let i = 0; i < setA.length; i++) {
                    if (i == setA.length - 1 || setA.length == 1) {
                        solve_info.innerText += setA[i] 
                    } else { 
                        solve_info.innerText += setA[i] + ", "
                    }
                }

                solve_info.innerText += "} "

                let result = solve(setA, setB, operation)
                if (result == true) {
                    solve_info.innerHTML += "&#8838"
                } else {
                    solve_info.innerHTML += "&#8840"
                }

                solve_info.innerText += " {"

                for(let i = 0; i < setB.length; i++) {
                    if (i == setB.length - 1 || setB.length == 1) {
                        solve_info.innerText += setB[i]
                    } else {
                        solve_info.innerText += setB[i] + ", "
                    } 
                }

                solve_info.innerText += "}"
            } else if (operation == '7') {
                solve_info.innerText += "{"

                for(let i = 0; i < setB.length; i++) {
                    if (i == setB.length - 1 || setB.length == 1) {
                        solve_info.innerText += setB[i] 
                    } else { 
                        solve_info.innerText += setB[i] + ", "
                    }
                }

                solve_info.innerText += "} "
                
                let result = solve(setA, setB, operation)
                if (result == true) {
                    solve_info.innerHTML += "&#8838"
                } else {
                    solve_info.innerHTML += "&#8840"
                }

                solve_info.innerText += " {"

                for(let i = 0; i < setA.length; i++) {
                    if (i == setA.length - 1 || setA.length == 1) {
                        solve_info.innerText += setA[i]
                    } else {
                        solve_info.innerText += setA[i] + ", "
                    } 
                }

                solve_info.innerText += "}"
            } else if (operation == '2' || operation == '3' || operation == '6' || operation == '4') {
                solve_info.innerText += "{"

                for(let i = 0; i < setA.length; i++) {
                    if (i == setA.length - 1 || setA.length == 1) {
                        solve_info.innerText += setA[i] 
                    } else { 
                        solve_info.innerText += setA[i] + ", "
                    }
                }

                solve_info.innerText += "} "
                
                switch (operation) {
                    case '2':
                        solve_info.innerHTML += "&#8746"
                        break
                    case '3':
                        solve_info.innerHTML += "&#8745"
                        break
                    case '6':
                        solve_info.innerHTML += "&#8710"
                        break
                    case '4':
                        solve_info.innerText += "\\"
                        break
                }
                
                solve_info.innerText += " {"

                for(let i = 0; i < setB.length; i++) {
                    if (i == setB.length - 1 || setB.length == 1) {
                        solve_info.innerText += setB[i]
                    } else {
                        solve_info.innerText += setB[i] + ", "
                    } 
                }

                solve_info.innerText += "} ="

                let result = solve(setA, setB, operation)
                solve_info.innerText += " {"

                if (result.length == 0) {
                    solve_info.innerHTML += "&#8709"
                } else {
                    for(let i = 0; i < result.length; i++) {
                        if (i == result.length - 1 || result.length == 1) {
                            solve_info.innerText += result[i]
                        } else {
                            solve_info.innerText += result[i] + ", "
                        } 
                    }
                }

                solve_info.innerText += "}"
            } else if (operation == '5') {
                solve_info.innerText += "{"

                for(let i = 0; i < setB.length; i++) {
                    if (i == setB.length - 1 || setB.length == 1) {
                        solve_info.innerText += setB[i]
                    } else {
                        solve_info.innerText += setB[i] + ", "
                    } 
                }

                solve_info.innerText += "} \\ {"
                
                for(let i = 0; i < setA.length; i++) {
                    if (i == setA.length - 1 || setA.length == 1) {
                        solve_info.innerText += setA[i] 
                    } else { 
                        solve_info.innerText += setA[i] + ", "
                    }
                }

                solve_info.innerText += "} ="

                let result = solve(setA, setB, operation)
                solve_info.innerText += " {"

                if (result.length == 0) {
                    solve_info.innerHTML += "&#8709"
                } else {
                    for(let i = 0; i < result.length; i++) {
                        if (i == result.length - 1 || result.length == 1) {
                            solve_info.innerText += result[i]
                        } else {
                            solve_info.innerText += result[i] + ", "
                        } 
                    }
                }

                solve_info.innerText += "}"
            }
        }

        page.appendChild(solve_info)
    }
});
