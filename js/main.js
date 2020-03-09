function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.global-labs.co.za/");
    window.location.href = "https://www.global-labs.co.za/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Passsando o mouse");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);

}


























/*var nome = "Túlio Farias";
var idade = "32";
var idade2 = "10";
var n1 = 10;
var n2 = 32;
var frase = "Japão é o melhor time do mundo"*/
//alert( nome + " tem " + idade + " anos" );
//alert(idade + idade2);

/*console.log(nome);
console.log(idade);
console.log(idade2+idade);
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.replace("Japão" , "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));

console.log(n1 * n2);*/

/*var lista = ["Maça" , "Banada" , "Jaca"]
console.log(lista);

lista.push("Uva");

console.log(lista);

lista.pop("Banana");

console.log(lista);

console.log(lista.length);

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" _ "));
console.log(lista.toString()[0]);*/

/*var fruta = {nome:"Maça" , cor:"Vermelha"}

console.log(fruta);

console.log(fruta.nome);
console.log(fruta.cor);*/


/*var frutas = [{nome:"Maça" , cor:"Vermelha"} , {nome:"Uva" , cor:"Roxa"}]

console.log(frutas);

console.log(frutas[1].nome);*/

/*var idade = prompt("Qual sua idade? ");

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/

/*var count = 0;
while(count < 13){
    console.log(count);
    count ++;
};*/

/*var count;
for (count=0; count <= 5; count++){
    console.log(count);
}*/

/*var d = new Date();

console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getDate());*/

/*function soma(n1 , n2){
    return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
console.log(setReplace("Vai Japão", "Japão" , "Brasil"));*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar;
}

var idade = prompt("Qual dua Idade? ");
console.log(validaIdade(idade));

console.log(soma(54,23));*/














