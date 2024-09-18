const subjectList = [
    {subject: "pre-spe", coeff: 8},
    {subject: "pre-hige", coeff: 3},
    {subject: "pre-lva", coeff: 3},
    {subject: "pre-lvb", coeff: 3},
    {subject: "pre-es", coeff: 3},
    {subject: "pre-emc", coeff: 1},
    {subject: "pre-fr-ecr", coeff: 5},
    {subject: "pre-fr-ora", coeff: 5},
    {subject: "term-hige", coeff: 3},
    {subject: "term-lva", coeff: 3},
    {subject: "term-lvb", coeff: 3},
    {subject: "term-es", coeff: 3},
    {subject: "term-eps", coeff: 6},
    {subject: "term-emc", coeff: 1},
    {subject: "term-bac-spe1", coeff: 16},
    {subject: "term-bac-spe2", coeff: 16},
    {subject: "term-bac-philo", coeff: 8},
    {subject: "term-bac-go", coeff: 10}
];

function handleInput() {
    const [values, coeff] = getValues();
    const maxValues = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];

    let valuesCoeff = calculateCoeff(values, coeff);
    let totalPossibleCoeff = calculateCoeff(maxValues, coeff);

    document.getElementById("final-grade").innerHTML = addTogerther(valuesCoeff);
    document.getElementById("total-possible-grade").innerHTML = addTogerther(totalPossibleCoeff);
};

function getValues() {
    let values = [];
    let coeff = [];
    for (let elt of subjectList) {
        let x = document.getElementById(elt.subject).value;
        if (x != '') {
            values.push(x);
            coeff.push(elt.coeff);
        };
    };
    return [values, coeff];
};

function calculateCoeff(numbers, coeff) {
    let totalWithCoeff = []
    for (let i in coeff) {
        if (numbers[i] != "") {
            x = parseFloat(numbers[i]) * coeff[i]
            totalWithCoeff.push(x);
        };
    };
    return totalWithCoeff;
};

function addTogerther(numbers) {
    let total = 0;
    for (let elt of numbers) {
        if (elt != "") {
            total = total + parseFloat(elt);
        }
    };
    return total;
};

document.addEventListener('input', handleInput);