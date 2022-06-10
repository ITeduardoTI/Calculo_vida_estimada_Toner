function calcular() {
    const botao = document.querySelector('#calcButton')
    botao.addEventListener('click', e => {
        const paginasTotal = Number(document.querySelector('#totalPag').value)
        const paginasPorDia = Number(document.querySelector('#dayPag').value)
        const porcentagem = Number(document.querySelector('#pagePercent').value)
        const labelResultado = document.querySelector('.resultadoInt')
        e.preventDefault();

        let quantidadeDeDias;
        let meses;
        let resultado;
        let stringResultado;
        let dia;
        let mes;
        let contaDias;
        let labelResultadoFormatado;

        // Quantidade de páginas impressas por dia
        quantidadeDeDias = paginasTotal / paginasPorDia;

        meses = quantidadeDeDias / 30;

        resultado = meses * 5 / porcentagem

        stringResultado = String(resultado.toFixed(2));

        [mes, dia] = stringResultado.split('.');

        contaDias = (Number('0.' + dia)) * 30;

        console.log();

        labelResultado.innerHTML = `O toner durará ${mes} Meses e ${Math.ceil(contaDias.toFixed(3))} Dias`



    })
}

calcular()



