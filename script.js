'user strict';

//Calculo 1

const calcular1 = () => {
  let valor1 = document.getElementById('numCalc1Porcent');
  let valor2 = document.getElementById('numCalc1Val');
  let resposta = document.getElementById('res1');

  if ((valor1.value == 0) | (valor2.value == 0)) {
    alert('Por favor preencha todos os campos');
  } else {
    let porcent = (valor1.value / 100) * valor2.value;

    resposta.innerHTML = `${porcent.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}`;
  }
};

const limpar1 = () => {
  let valor1 = document.getElementById('numCalc1Porcent');
  let valor2 = document.getElementById('numCalc1Val');
  let resposta = document.getElementById('res1');

  if (valor1.value | (valor2.value != 0)) {
    valor1.value = '';
    valor2.value = '';
    resposta.innerHTML = 'Resultado:';
  }
};

//Calculo 2

const calcular2 = () => {
  let valor1Calc2 = document.getElementById('numCalc2Val1');
  let valor2Calc2 = document.getElementById('numCalc2Val2');
  let resposta2 = document.getElementById('res2');

  if ((valor1Calc2.value == 0) | (valor2Calc2.value == 0)) {
    alert('Por favor preencha todos os campos');
  } else {
    let porcent2 = (valor1Calc2.value / valor2Calc2.value) * 100;

    resposta2.innerHTML = `R$ ${
      valor1Calc2.value
    },00 equivale a <strong>${porcent2.toFixed(2)}%</strong> de R$ ${
      valor2Calc2.value
    },00 `;
  }
};

const limpar2 = () => {
  let valor1Calc2 = document.getElementById('numCalc2Val1');
  let valor2Calc2 = document.getElementById('numCalc2Val2');
  let resposta2 = document.getElementById('res2');

  if (valor1Calc2.value | (valor2Calc2.value != 0)) {
    valor1Calc2.value = '';
    valor2Calc2.value = '';
    resposta2.innerHTML = 'Resultado:';
  }
};

//Calculo 3

const calcular3 = () => {
  let valor1Calc3 = document.getElementById('numCalc3Valor');
  let valorPorcent = document.getElementById('numCalc3Porcent');
  let resposta3 = document.getElementById('res3');

  if ((valor1Calc3.value == 0) | (valorPorcent.value == 0)) {
    alert('Por favor preencha todos os campos');
  } else {
    let valor1Calc3Number = Number(valor1Calc3.value);
    let valorPorcentNumber = Number(valorPorcent.value);

    let porcentagem = valorPorcentNumber / 100;
    let soma = valor1Calc3Number * porcentagem + valor1Calc3Number;

    resposta3.innerHTML = `${soma.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}`;
  }
};

const limpar3 = () => {
  let valor1Calc3 = document.getElementById('numCalc3Valor');
  let valorPorcent = document.getElementById('numCalc3Porcent');
  let resposta3 = document.getElementById('res3');

  if (valor1Calc3.value | (valorPorcent.value != 0)) {
    valor1Calc3.value = '';
    valorPorcent.value = '';
    resposta3.innerHTML = 'Resultado:';
  }
};

//Calculo 4

const calcular4 = () => {
  let valor1Calc4 = document.getElementById('numCalc4Valor');
  let valorPorcent4 = document.getElementById('numCalc4Porcent');
  let resposta4 = document.getElementById('res4');

  if ((valor1Calc4.value == 0) | (valorPorcent4.value == 0)) {
    alert('Por favor preencha todos os campos');
  } else {
    let valor1Calc4Number = Number(valor1Calc4.value);
    let valorPorcent4Number = Number(valorPorcent4.value);

    let porcentagem4 = valorPorcent4Number / 100;
    let sub = valor1Calc4Number - valor1Calc4Number * porcentagem4;

    resposta4.innerHTML = `${sub.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}`;
  }
};

const limpar4 = () => {
  let valor1Calc4 = document.getElementById('numCalc4Valor');
  let valorPorcent4 = document.getElementById('numCalc4Porcent');
  let resposta4 = document.getElementById('res4');

  if (valor1Calc4.value | (valorPorcent4.value != 0)) {
    valor1Calc4.value = '';
    valorPorcent4.value = '';
    resposta4.innerHTML = 'Resultado:';
  }
};
