function EnviarForm() {
    var login = document.getElementById('input-login').value
    var senha = document.getElementById('input-senha')

    if (login === "" || login === undefined || login === null) {
        alert('Preencha todos os campos, por favor.')
    }

    else if (senha === "" || senha === undefined || senha === null) {
        alert('Preencha todos os campos, por favor.')
    }

    else {
        if (login == 'responsavel') {
            localStorage.setItem('acesso', 'resp')
            localStorage.setItem('chat-tipo-login', 1)

        } else {
            localStorage.setItem('acesso', 'aluno')
            localStorage.setItem('chat-tipo-login', 2)
        }



    }
}

function Exit() {

    localStorage.removeItem('acesso')
    localStorage.removeItem('chat-tipo-login')
    window.location.reload(true)

    location.href = 'login.html';

}

function Login() {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();

    if (usuario == "responsavel") {
        localStorage.setItem('acesso', 'resp')
        localStorage.setItem('chat-tipo-login', 1)
        window.location = "sistema.html";
        done = 1;
    } else if (usuario == "aluno") {
        localStorage.setItem('acesso', 'aluno')
        localStorage.setItem('chat-tipo-login', 2)
        window.location = "sistema.html";
        done = 1;
    } else if (usuario == "responsavel-legal") {
        localStorage.setItem('acesso', 'resp-legal')
        localStorage.setItem('chat-tipo-login', 3)
        window.location = "sistema.html";
        done = 1;
    } else if (usuario == "responsavel-fin") {
        localStorage.setItem('acesso', 'resp-fin')
        localStorage.setItem('chat-tipo-login', 4)
        window.location = "sistema.html";
        done = 1;
    }

    if (done == 0) { alert("Dados incorretos, tente novamente"); }
}