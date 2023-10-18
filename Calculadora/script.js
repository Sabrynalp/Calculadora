// Código JavaScript da calculadora
let currentExpression = ''; // Variável para acompanhar a expressão atual
let history = []; // Array para armazenar o histórico

function clearDisplay() {
    document.getElementById('display').value = '';
    currentExpression = ''; // Limpa a expressão atual
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    currentExpression += value; // Adiciona o valor à expressão atual
}

function deleteLastNumber() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1); // Remove o último caractere da expressão
}

function calculateResult() {
    try {
        if (currentExpression !== '') {
            const result = eval(currentExpression);
            document.getElementById('display').value = result;
            // Adiciona a operação e o resultado ao histórico
            history.push({ expression: currentExpression, result: result });
            updateHistory();
            currentExpression = result.toString(); // Define a expressão atual como o resultado
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        currentExpression = ''; // Limpa a expressão atual em caso de erro
    }
}

function toggleHistory() {
    const historySection = document.querySelector('.history');
    historySection.style.display = historySection.style.display === 'block' ? 'none' : 'block';
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Limpa o histórico atual
    history.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Cálculo ${index + 1}: ${entry.expression} = ${entry.result}`;
        historyList.appendChild(listItem);
    });
}

