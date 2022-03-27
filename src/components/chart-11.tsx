import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart11 = () => {
    const divRef = useRef(null);
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const data = [
        {value: 36, name: '刑事案件'},
        {value: 20, name: '民事案件'},
        {value: 18, name: '经济案件'},
        {value: 24, name: '其他案件'},
    ];
    useEffect(() => {
        setInterval(() => {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let A=getRandomInt(25);
            let B = getRandomInt(100-A);
            let C = getRandomInt(100-A-B);
            let E = 100-A-B-C;
            console.log(A + B + C + E);

            const newData = [
                {value: A, name: '10-20'},
                {value: B, name: '20-30'},
                {value: C, name: '30-40'},
                {value:E, name: '50-60'},
            ];
            x(newData);
        }, 1000);
        const x = (data) => {
            var myChart = echarts.init(divRef.current);

            myChart.setOption(createEchartsOptions({
                color: colors,
                xAxis: {show: false},
                yAxis: {show: false},
                legend: {show: false},
                series: [
                    {
                        startAngle: -20,
                        type: 'pie',
                        radius: ['25%', '90%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                            distanceToLabelLine: 0,
                            formatter(options) {
                                return options.value  + '%';
                            }
                        },
                        labelLine: {show: true, length: 0},
                        roseType: 'area',
                        itemStyle: {
                            shadowBlur: px(200),
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        data: data.map(i => i),
                    }
                ]
            }));
        }

    }, []);

    return (
        <div className="chart11">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
            <div className="legend">
                <span style={{background: colors[0]}} />刑事
                <span style={{background: colors[1]}} />民事
                <span style={{background: colors[2]}} />经济
                <span style={{background: colors[3]}} />其他
            </div>
        </div>

    );
};