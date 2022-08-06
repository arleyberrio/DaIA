<template>    
      <div>        
          <v-row>            
            <v-col>
              <Bar :chart-data="chartData"/> 
            </v-col>                        
            <v-col>
              <canvas id="myChart" ></canvas>   
            </v-col>                                   
          </v-row>                               
      </div>         
</template>

<script>
import Chart from 'chart.js/auto';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default 
{
    name: 'GraficaInicial',
    components: { Bar },
    data() {
    return {      
      chartData: {        
        labels: [ 'Enero', 'Febrero', 'Marzo','Abril','Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label: 'Ventas por mes',
            backgroundColor: '#24A0DA',
            data: [10, 17, 24,18,16,27,22,12,14,23,19,32]            
          }
        ]
      }
    }
  },  
  
    props:
    {
        msg: String    
    },
    mounted()
    {
        const ctx = document.getElementById('myChart');                             
const data = {
 
  labels: [
    'Emprendimiento',
    'Acompañamiento',
    'Sensibilización'        
  ],
  datasets: [{
    label: 'Dona',
    data: [20, 40, 80],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4    
  }]
};
const myChart = new Chart(ctx, 
{
    type: 'doughnut',
    data: data
})
myChart;
    }
}
</script>
