function parseSet(set) {
    let result = set.filter(function(item, pos) {
        return set.indexOf(item) == pos
    })

    result.sort()
    return result
}

function entry(A, B) {
    let copy_A = JSON.parse(JSON.stringify(parseSet(A)))
    let copy_B = JSON.parse(JSON.stringify(parseSet(B)))

    return copy_A.every(elem => copy_B.includes(elem))
}

function sum(A, B) {
    let copy_A = JSON.parse(JSON.stringify(parseSet(A)))
    let copy_B = JSON.parse(JSON.stringify(parseSet(B)))
    
    let result = []
    let index = 0, i = 0, j = 0

    while (i < copy_A.length && j < copy_B.length) {
        if (copy_A[i] == copy_B[j]) {
            result[index] = copy_A[i]
            index++
            i++
            j++
        } else if (copy_A[i] < copy_B[j]) {
            result[index] = copy_A[i]
            index++
            i++
        } else {
            result[index] = copy_B[j]
            index++
            j++
        }
    }

    while (i < copy_A.length) {
        result[index] = copy_A[i]
        index++
        i++
    }

    while (j < copy_B.length) {
        result[index] = copy_B[j]
        index++
        j++
    }

    return result
}

function composition(A, B) {
    let copy_A = JSON.parse(JSON.stringify(parseSet(A)))
    let copy_B = JSON.parse(JSON.stringify(parseSet(B)))
    
    let result = []
    let index = 0, i = 0, j = 0

    while (i < copy_A.length && j < copy_B.length) {
        if (copy_A[i] == copy_B[j]) {
            result[index] = copy_A[i]
            index++
            i++
            j++
        } else if (copy_A[i] < copy_B[j]) {
            i++
        } else {
            j++
        }
    }

    return result
}

function difference(A, B) {
    let copy_A = JSON.parse(JSON.stringify(parseSet(A)))
    let copy_B = JSON.parse(JSON.stringify(parseSet(B)))
    
    let result = []
    let index = 0, i = 0, j = 0

    while (i < copy_A.length && j < copy_B.length) {
        if (copy_A[i] == copy_B[j]) {
            i++
            j++
        } else if (copy_A[i] < copy_B[j]) {
            result[index] = copy_A[i]
            index++
            i++
        } else {
            j++
        }
    }

    while (i < copy_A.length) {
        result[index] = copy_A[i]
        index++
        i++
    }

    return result
}

function symmetricalDifference(A, B) {
    let copy_A = JSON.parse(JSON.stringify(parseSet(A)))
    let copy_B = JSON.parse(JSON.stringify(parseSet(B)))
    
    let result = []
    let index = 0, i = 0, j = 0

    while (i < copy_A.length && j < copy_B.length) {
        if (copy_A[i] == copy_B[j]) {
            i++
            j++
        } else if (copy_A[i] < copy_B[j]) {
            result[index] = copy_A[i]
            index++
            i++
        } else {
            result[index] = copy_B[j]
            index++
            j++
        }
    }

    while (i < copy_A.length) {
        result[index] = copy_A[i]
        index++
        i++
    }

    while (j < copy_B.length) {
        result[index] = copy_B[j]
        index++
        j++
    }

    return result
}
