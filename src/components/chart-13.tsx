import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart13 = () => {
    const divRef = useRef(null);
    const data = [
        {value: 0.08, name: '东岗路'},
        {value: 0.06, name: '段家滩'},
        {value: 0.11, name: '雁北'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: 0.06, name: '庆阳路'},
        {value: 0.08, name: '武都路'},
        {value: 0.08, name: '酒泉路'},
        {value: 0.08, name: '天水路'},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '东岗路', value: Math.random()},
                {name: '段家滩',  value: Math.random()},
                {name: '雁北',  value: Math.random()},
                {name: '五泉山',  value: Math.random()},
                {name: '中山路',  value: Math.random()},
                {name: '庆阳路',  value: Math.random()},
                {name: '武都路',  value: Math.random()},
                {name: '酒泉路',  value: Math.random()},
                {name: '天水路',  value: Math.random()},
            ];
            x(newData);
        }, 1000);
        const x = (data) => {
        var myChart = echarts.init(divRef.current);

        myChart.setOption(createEchartsOptions({
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'1%',
                containLabel: true
            },
            xAxis: {
                data: data.map(i => i.name),
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
                    }
                },
            },

            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                // axisLabel: {
                //     formatter(value) {
                //         return (value * 100).toFixed(0) + '%';
                //     }
                // }
                axisLabel: {show: false}

            },
            series: [{
                type: 'bar',
                data: data.map(i => i.value),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                }, {
                    offset: 1,
                    color: '#1E34FA'
                }]),
            }]
        }));
        }
    }, []);

    return (
        <div ref={divRef} className="chart">

        </div>
    );
};






