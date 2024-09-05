const Model = document.querySelector('.model');
const modelButtons = document.querySelectorAll('.model-btn');
const pedraButtons = document.querySelectorAll('.pedra-btn');
const path = './imgs/';
const names = ['ringreta', 'ringchanf', 'tradring'];  // Modelos disponíveis
const End = document.querySelector('.toend');
const Range = document.getElementById('size');

let currentModel = names[0];  // Modelo inicial é "ringreta"
let Pedra = false;
let isThin = false;  // Flag para verificar se o modelo é a versão fina

// Função para atualizar o modelo
function updateModel() {
    let modelPath = `${path}${currentModel}`;
    
    // Adiciona "fina" se o range for 0
    if (isThin) {
        modelPath += 'fina';
    }

    // Adiciona "compedra" se a opção de pedra estiver ativa
    if (Pedra) {
        modelPath += 'compedra.glb';
    } else {
        modelPath += '.glb';
    }

    Model.src = modelPath;
    Update(Model.src);
}

// Função para definir o botão ativo
function setActiveButton(buttons, activeButton) {
    buttons.forEach(button => {
        button.classList.remove('active');  // Remove a classe 'active' de todos os botões
    });
    activeButton.classList.add('active');  // Adiciona a classe 'active' ao botão clicado
}

// Adiciona evento aos botões de modelo
modelButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentModel = button.getAttribute('data-model');
        setActiveButton(modelButtons, button);  // Define o botão ativo
        updateModel();
    });
});

// Adiciona evento aos botões de pedra
pedraButtons.forEach(button => {
    button.addEventListener('click', () => {
        Pedra = button.getAttribute('data-pedra') === 'sim';
        setActiveButton(pedraButtons, button);  // Define o botão ativo para pedra
        updateModel();
    });
});

// Função para atualizar o link do botão de fabricação
function Update(some) {
    if (some == path + 'ringreta.glb') {
        End.href = 'google.com';
    }
    else if (some == path + 'ringretacompedra.glb') {
        End.href = 'amazon.com';
    }
    else if (some == path + 'ringchanf.glb') {
        End.href = 'chanfrada';
    }
    else if (some == path + 'ringchanfcompedra.glb') {
        End.href = 'chanfrada com pedra';
    }
    else if (some == path + 'tradring.glb') {
        End.href = 'tradicional';
    }
    else if (some == path + 'tradringcompedra.glb') {
        End.href = 'tradicional com pedra';
    }
}

// Função para alternar entre as abas de Modelo, Pedra e Tamanho
const Btns = document.querySelectorAll('.btns button');
const Cards = document.querySelectorAll('.card');

function activeBtn(e) {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    Cards.forEach((card) => {
        card.classList.add('hide');

        if (card.dataset.name == e.target.dataset.name) {
            card.classList.remove('hide');
        }
    });
}

Btns.forEach((btn) => {
    btn.addEventListener('click', activeBtn);
});

// Adiciona evento ao controle de tamanho (range)
Range.addEventListener('input', () => {
    isThin = Range.value === '0';  // Verifica se o valor do range é 0
    updateModel();
});


document.querySelector('.reset').addEventListener('click',() => {
    document.location.reload()
})

const shareBtn = document.querySelector('.share');
const shareOptions = document.querySelector('.share-options');
const btnWhats = document.querySelector('.whats')

shareBtn.addEventListener('click', (e) => {
    // Previne que o clique no botão feche o menu imediatamente
    e.stopPropagation();
    shareOptions.classList.toggle('active');
});

document.querySelector('.copy').addEventListener('click', () => {
    // Captura do modelo selecionado
    const selectedModel = document.querySelector('.model-btn.active').getAttribute('data-model');
    
    // Captura da pedra selecionada
    const selectedPedra = document.querySelector('.pedra-btn.active').getAttribute('data-pedra');
    
    // Captura do tamanho selecionado
    const selectedTamanho = document.getElementById('size').value;
    
    // Construindo a URL de compartilhamento com os parâmetros
    const shareURL = `https://kelwinxd.github.io/Ring-Personalization/pages/showcase.html?model=${selectedModel}&pedra=${selectedPedra}&tamanho=${selectedTamanho}`;
    
    // Copia a URL para a área de transferência
    navigator.clipboard.writeText(shareURL).then(() => {
        console.log('copiado')
    }).catch(err => {
        console.error('Erro ao copiar a URL: ', err);
    });
});


document.querySelector('.whats').addEventListener('click', () => {
    // Captura do modelo selecionado
    const selectedModel = document.querySelector('.model-btn.active').getAttribute('data-model');
    
    // Captura da pedra selecionada
    const selectedPedra = document.querySelector('.pedra-btn.active').getAttribute('data-pedra');
    
    // Captura do tamanho selecionado
    const selectedTamanho = document.getElementById('size').value;

    // Construindo a URL de compartilhamento com os parâmetros
    const shareURL = `https://kelwinxd.github.io/Ring-Personalization/pages/showcase.html?model=${selectedModel}&pedra=${selectedPedra}&tamanho=${selectedTamanho}`;
    const message = `Veja a personalização da minha aliança: ${shareURL}`;

    // Detectar dispositivo
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let whatsappURL;
    if (isMobile) {
        // Para dispositivos móveis, usamos o esquema padrão do WhatsApp
        whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    } else {
        // Para computadores, redirecionamos para o WhatsApp Web
        whatsappURL = `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    }

    // Abrir o link correspondente
    window.open(whatsappURL, '_blank');
});

const subMenu = document.querySelector('.submenu')

document.addEventListener('click', (e) => {
    // Verifica se o clique foi fora do botão e do menu de opções
    if (!shareBtn.contains(e.target) && !shareOptions.contains(e.target)) {
        shareOptions.classList.remove('active');
    }

    if(!menu.contains(e.target)){
        subMenu.classList.remove('showup')
        overlay.classList.remove('showup')
    }
});



const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const overlay = document.querySelector('.shadow')

// Abre o submenu quando clica no ícone de hambúrguer
menu.addEventListener('click', (e) => {
    subMenu.classList.add('showup');
    overlay.classList.add('showup')

});

// Fecha o submenu quando clica no "X"
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Previne que o evento se propague para o menu
    subMenu.classList.remove('showup');
    overlay.classList.remove('showup')
});

// Previne que o clique dentro do submenu dispare o evento de clique no menu
subMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});