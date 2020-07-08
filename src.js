// JavaScript Document
var ctx = document.getElementById('myChart');
let colorHex = ['#2FBB00','#fff'];

let myChart = new Chart(ctx, {
    type:'pie',
    data: {
       
        datasets: [{
            
            data:[25, 75],
            backgroundColor: colorHex
        }],      
    },
                   options: {
                tooltips: {
                    enabled: false
                },       
                   responsive: true,
                   legend: {
                   position: 'bottom'
                   },
                   plugins: {
                   datalabels: {
                   color:'#000',
                   borderwidth: 2,
                   borderColor:'#fff',
                   borderRadius: 25,
                   backgroundColor: (context) => {
                   return context.dataset.backgroundColor;
                   },
                   font: {
                   weight: 'bold',
                   size: '10',
                   },
                   formatter: (value) => {
                   return value + '%';
                   }    
                   }
                   }
                   }

})


