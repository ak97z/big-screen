import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
    const divRef = useRef(null);
    const data = [
        {value: 8, name: '东岗路'},
        {value: 6, name: '段家滩'},
        {value: 11, name: '雁北'},
        {value: 9, name: '五泉山'},
        {value: 12, name: '中山路'},
        {value: 6, name: '庆阳路'},
        {value: 8, name: '武都路'},
        {value: 8, name: '酒泉路'},
        {value: 8, name: '天水路'},
    ];
    useEffect(() => {
        setInterval(() => {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let A=getRandomInt(20);
            let B = getRandomInt(100-A);
            let C = getRandomInt(100-A-B);
            let D = getRandomInt(100-A-B-C);
            let E = getRandomInt(100-A-B-C-D);
            let F = getRandomInt(100-A-B-C-D-E);
            let G = getRandomInt(100-A-B-C-D-E-F);
            let H = getRandomInt(100-A-B-C-D-E-F-G);
            let I = 100-A-B-C-D-E-F-G-H;
            // console.log(A + B + C + D + E);

            const newData = [
                {value: A, name: '东岗路'},
                {value: B, name: '段家滩'},
                {value: C, name: '雁北'},
                {value: D, name: '五泉山'},
                {value: E, name: '中山路'},
                {value: F, name: '庆阳路'},
                {value: G, name: '武都路'},
                {value: H, name: '酒泉路'},
                {value: I, name: '天水路'},
            ];
            x(newData);
        }, 1000);
        const x = (data) => {
            var myChart = echarts.init(divRef.current);
            myChart.setOption(createEchartsOptions({
                xAxis: {show: false},
                yAxis: {show: false},
                grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 'center',
                    textStyle: {color: 'white'},
                    itemWidth: px(10),
                    itemHeight: px(10),
                    formatter(name) {
                        const value = data.find(i => i.name === name)?.value + '%';
                        return name + ' ' + value;
                    }
                },
                series: [
                    {
                        center: ['60%', '50%'],
                        type: 'pie',
                        radius: '80%',
                        label: {show: false},
                        labelLine: {show: false},
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }));
        }

    }, []);

    return (
        <div className="chart12">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
        </div>

    );
};