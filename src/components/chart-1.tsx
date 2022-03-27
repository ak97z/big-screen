import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart1 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        // 10, 20, 36, 41, 15, 26, 37, 18, 29
        {name: '兰州兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},
        {name: '兰州', number: 1},

    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '兰州兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
                {name: '兰州', number: Math.random(),},
            ];
            x(newData);
        }, 1000);
        const x = (data) => {
            myChart.current.setOption(createEchartsOptions({
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top:'1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: [0, 0.01],
                    axisTick: {show: false},
                    splitLine: {show: false},
                    data: data.map(i => i.name),
                    axisLabel: {
                        formatter(val) {
                            if (val.length > 2) {
                                const array = val.split('');
                                array.splice(2, 0, '\n');
                                return array.join('');
                            } else {
                                return val;
                            }
                        },
                    }
                },
                yAxis: {
                    splitLine: {show:false},
                    type: 'value',
                    axisLabel: {show: false}
                },
                series: [{
                    name: 'number',
                    type: 'bar',
                    data: data.map(i => i.number),
                    itemStyle: {
                        normal: {
                            color: '#083B70',
                        }
                    }
                },
                ]
            }));
        };

        /*   var myChart = echarts.init(divRef.current);
          myChart.setOption(createEchartsOptions({

              xAxis: {
                  data: data.map(i=>i.name),
                  axisTick: {show: false},
                  axisLine: {
                      lineStyle: {color: '#083B70'}
                  },
                  axisLabel: {
                      formatter(val) {
                          if (val.length > 2) {
                              const array = val.split('');
                              array.splice(2, 0, '\n');
                              return array.join('');
                          } else {
                              return val;
                          }
                      },
                  }
              },
              yAxis: {
                  splitLine: {show: false},
                  axisLine: {show: true, lineStyle: {color: '#083B70'}},
              },

              series: [{
                  type: 'bar',
                  data: data.map(i=>i.number),

              }]
          }));*/
    }, []);
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
    }, []);
    return (
        <div className="管辖统计 bordered">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={divRef}> </div>
        </div>
    );
};






