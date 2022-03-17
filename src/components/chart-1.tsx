import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({

            xAxis: {
                data: ['兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州', '兰州兰州'],
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
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29],

            }]
        }));
    }, []);
    return (
        <div className="管辖统计 bordered">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={divRef}></div>
        </div>
    );
};






