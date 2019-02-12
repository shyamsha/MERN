function missingElement(array) {
    for (let i = 0; i < array.length; i++) {
        let add = array[i + 1] - array[i]
        if (add == 2) {
            return array[i] + 1
        } else if (add == -2) {
            return array[i] - 1
        }
    }
}
