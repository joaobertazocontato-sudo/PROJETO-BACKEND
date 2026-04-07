const perfilProfissional = {
  nome: "Victor Rizzo",
  empresa: "padres tech",
  profissao: "Desenvolvedor Full Stack",
  certificacoes: ["AWS Certified Solutions Architect"],
  experiencia: 8,
  habilidades: ["JavaScript", "Node.js", "React", "Python"],
  salarioMedio: "R$ 12.000"
};

const frase = `\n${perfilProfissional.nome} é um \n${perfilProfissional.profissao} com \n${perfilProfissional.experiencia}
 anos de experiência, dominando as tecnologias: \n${perfilProfissional.habilidades.join(", ")}. Possui certificações em 
 \n${perfilProfissional.certificacoes.join(" e ")}. que atua na \n${perfilProfissional.empresa}
 , com salário médio de \n${perfilProfissional.salarioMedio}.`;
 

console.log(frase);