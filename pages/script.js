// Função para extrair os parâmetros da URL
function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    
    // Capturando os valores dos parâmetros
    const model = params.get('model');
    const pedra = params.get('pedra');
    const tamanho = params.get('tamanho');
    
    return { model, pedra, tamanho };
}

// Função para exibir ou usar os parâmetros na página
function displayCustomization() {
    const { model, pedra, tamanho } = getURLParameters();

    // Exibir os valores na página ou usá-los de outra forma
    document.getElementById('selected-model').textContent = `Modelo: ${model}`;
    document.getElementById('selected-pedra').textContent = `Pedra: ${pedra}`;
    document.getElementById('selected-tamanho').textContent = `Tamanho: ${tamanho}`;
}

// Chame a função quando a página carregar
window.onload = displayCustomization;
