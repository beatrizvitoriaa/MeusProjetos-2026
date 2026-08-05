const ctx = document.getElementById("grafico");

new Chart(ctx,{

type:"bar",

data:{

labels:["Jan","Fev","Mar","Abr","Mai","Jun"],

datasets:[{

label:"Relatórios",

data:[12,19,10,25,18,30],

backgroundColor:"#10b981"

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});