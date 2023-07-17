

let deposito = 0;
let extrato = '';
let quantidadeSaque = 0;
let saqueLimite = 3;
let saldo = 0;



while (true) {

    let menu = prompt(`
====================
O que você deseja fazer?
[d]Deposito
[s]Saque
[e]Extrato
[q]Sair
====================`)


    if (menu == 'd') {
        let valor = parseFloat(prompt('Informe o valor do depósito: '));
        if (valor > 0) {
            saldo = saldo + valor
            extrato = extrato + `
Deposito no valor de R$ ${valor} realizado.\n`
            alert(`Deposito no valor de R$${valor} realizado.`)
        }
        else {alert('Digite um valor válido!')}
    }
    else if (menu == 's') {
        let valor = parseFloat(prompt('Informe o valor do saque: '));
        if (quantidadeSaque < saqueLimite && valor >= 1 && valor <= 500 && valor <= saldo) {
            saldo = saldo - valor
            extrato = extrato + `
Saque no valor de R$ ${valor} realizado.\n`
            quantidadeSaque = quantidadeSaque + 1
            alert(`Saque no valor de R$${valor} realizado.`)
        }
        else if (valor > saldo) {
            alert('Saldo insuficiente!')
        }
        else if (quantidadeSaque >= saqueLimite) {
            alert('Você excedeu o limite de 3 saques diários!')
        }
        else if (valor > 500) {
            alert('Máximo de R$ 500,00 por transação')
        }
        else if (valor <= 0 ) {
            alert('Por favor, digite um valor válido!')
        }
    }
    else if (menu == 'e') {
        alert(`
==============================
${extrato}
        
Seu saldo é de: R$ ${saldo}
==============================`)
    }
    else if (menu == 'q') {
        document.write('Obrigado! Volte sempre!')
        break
    }
    else {alert`Por favor, digite um dado válido!`}
}


