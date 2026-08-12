let soma = 0;
for (let i=2; i<process.argv.length-1;i++){
    soma+= Number(Process.argv[i]);
}
console.log("soma="+soma);