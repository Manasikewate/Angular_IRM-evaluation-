import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-checked-tasks',
  templateUrl: './checked-tasks.component.html',
  styleUrls: ['./checked-tasks.component.css']
})
export class CheckedTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chartDom :any= document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    
    option && myChart.setOption(option);
    
      }
  }


