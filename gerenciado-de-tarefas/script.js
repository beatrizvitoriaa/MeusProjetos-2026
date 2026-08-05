const lista = document.getElementById("lista");

function adicionarTarefa(){

    const input = document.getElementById("tarefa");

    const texto = input.value.trim();

    if(texto === ""){

        alert("Digite uma tarefa!");

        return;

    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = texto;

    li.appendChild(span);

    const acoes = document.createElement("div");

    acoes.classList.add("acoes");

    // Concluir

    const concluir = document.createElement("button");

    concluir.innerHTML = "✔";

    concluir.className = "concluir";

    concluir.onclick = function(){

        li.classList.toggle("concluida");

    }

    // Editar

    const editar = document.createElement("button");

    editar.innerHTML = "✏";

    editar.className = "editar";

    editar.onclick = function(){

        const novo = prompt("Editar tarefa:", span.textContent);

        if(novo !== null && novo.trim() !== ""){

            span.textContent = novo;

        }

    }

    // Excluir

    const excluir = document.createElement("button");

    excluir.innerHTML = "🗑";

    excluir.className = "excluir";

    excluir.onclick = function(){

        li.remove();

    }

    acoes.appendChild(concluir);

    acoes.appendChild(editar);

    acoes.appendChild(excluir);

    li.appendChild(acoes);

    lista.appendChild(li);

    input.value="";

    input.focus();

}