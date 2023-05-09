// Eu deixei comentado pq essa função só serve para caso vc deseja ir para um "dashboard", por exemplo

// function validarSessao() {

//     var email = sessionStorage.EMAIL_USUARIO;
//     var nome = sessionStorage.NOME_USUARIO;

//     if (email != null && nome != null) {
//         window.location = "../PaginaInicial/home.html";
//         finalizarAguardar();
//     } else {
//         window.location = "../Login/login.html";
//     }
// }

// Depois do cadastro ter terminado, ele vem para essa função e ele limpa a sessionStorage, que estava armezando os dados de cadastro que você inseriu na página, após isso ele te joga para  a página de Login

// EU NAO ENTENDI MT BEM PRA QUE ISSO EXISTE KKKKKKKKKKKKKKKKKKKKKKKKK
function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../Login/login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    var msgErro = document.getElementById("msgErro");
    if (texto) {
        msgErro.style.display = "block"
        msgErro.innerHTML = texto;
    }
}


// modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

