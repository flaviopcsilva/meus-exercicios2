function imprimirData(dia,mes,ano){
  
  console.log(`${String(dia).padStart(2,"0")}/${String(mes).padStart(2,"0")}/${String(ano).padStart(4,"0")}`);
}

imprimirData(1,1,1981);