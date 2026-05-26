function SobraDosalario(meusalario){
    const contadeluz = 200;
    const aluguel = 1000;
    const resto = meusalario - (contadeluz + aluguel);
    return `O valor que sobra do meu salário é: ${resto}`;
}
const minhassobras = SobraDosalario(10000);
console.log(SobraDosalario(10000));