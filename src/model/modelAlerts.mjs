let revenues = []

let expenses = []

function moneyFormatter(value){
    return value.toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    })
}

function saveRevenue(){
    do{
        option = prompt(
            '1 - Cadastrar nova receita.\n'+
            '2 - Sair'
        )

        switch(option){
            case '1':
                let name = prompt('Qual receita deseja cadastrar?')
                let value = parseFloat(prompt('Qual o valor da receita que deseja cadastrar?'))
                let includeRevenue = {name, value}
                revenues.push(includeRevenue)

                let revenueSum = revenues.reduce((accumulator, current) => {
                    return accumulator + current.value
                }, 0)

                alert('Receita: '
                    + '{nome: ' + includeRevenue.name + ', valor: '
                    +moneyFormatter(includeRevenue.value) + '}' + '\n'
                    +'incluída com sucesso!\n\n'
                    +'Total de receitas: '
                    + moneyFormatter(revenueSum)
                )
            break
            case '2':
                alert('Voltando ao menu inicial!')
            break
            default:
                alert('Opção inválida!')
        }

    }while(option!='2')
}

function saveExpense(){
    do{
        option = prompt(
            '1 - Cadastrar nova Despesa.\n'+
            '2 - Sair'
        )
        switch(option){
            case '1':
                let name = prompt('Qual despesa deseja cadastrar?')
                let value = parseFloat(prompt('Qual o valor da despesa que deseja cadastrar?'))
                let includeExpense = {name, value}
                expenses.push(includeExpense)

                let expenseSum = expenses.reduce((accumulator, current) =>{
                    return accumulator + current.value
                }, 0)

                alert('Despesa: '
                    + '{nome: ' + includeExpense.name + ', valor: '
                    +moneyFormatter(includeExpense.value) + '}' + '\n'
                    +'incluída com sucesso!\n\n'
                    +'Total de despesas: '
                    + moneyFormatter(expenseSum)
                )
            break
            case '2':
                alert('Voltando ao menu inicial!')
            break
            default:
                alert('Opção inválida!')
        }
    }while(option!='2')
}

function menu(){
    return prompt(
        'Menu\n\n'
        +'1 - Cadastrar Receita\n'
        +'2 - Cadastrar Despesa\n'
        +'3 - Verificar Saldo\n'
        +'4 - Sair\n'
    )
}

function sumRevenue(){
    let sumRev = revenues.reduce((accumulator, current) =>{
        return accumulator + current.value
    }, 0)
    return sumRev
}

function sumExpense(){
    let sumExp = expenses.reduce((accumulator, current) => {
        return accumulator + current.value
    }, 0)
    return sumExp
}

function calculateBalance(){
    let balance = sumRevenue() - sumExpense()
    return alert('Total de receitas: '
                + moneyFormatter(sumRevenue()) + '\n'
                +'Total de despesas: ' 
                +moneyFormatter(sumExpense()) + '\n'
                +'Saldo: ' 
                + moneyFormatter(balance))
}

function initiateMenu(){
    option = ''
    do{
        option = menu()
        switch(option){
            case '1':
                saveRevenue()
            break
            case '2':
                saveExpense()
            break
            case '3':
                calculateBalance()
            break
            case '4':
                alert('Saindo... encerrando o programa...')
            break
            default:
                alert('Opção inválida!')
        }
    }while(option!='4')
}

initiateMenu()