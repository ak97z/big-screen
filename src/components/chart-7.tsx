import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart7 = () => {
    const divRef = useRef(null);
    const data = [
        {value: 0.2, name: '女'},
        {value: 0.8, name: '男'},
    ];
    useEffect(() => {
        setInterval(() => {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
           let w=getRandomInt(100);
            let m = 100-w;
            const newData = [
                {name: '男', value: m},
                {name: '女',  value: w},
            ];
            x(newData);
        }, 1000);

        const x = (data) => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis:{show:false},
            yAxis:{show:false},
            legend:{show:false},
            color: ['#8D70F8', '#33A4FA'],

            series:[
                {
                    type:'pie',
                    radius: ['60%', '80%'],
                    data:data.map(i => i),
                    label: {
                        show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
                        formatter(options) {
                            return options.value  + '%';
                        }
                    },
                    labelLine:{show:false},
                    itemStyle: {
                            borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                }
            ],
        }));
        }
    }, []);

    return (
        <div className="年龄段-图1">
            <div className="chart">
                <div className="main" ref={divRef}/>
                <div className="text">性别</div>
            </div>
            <div className="legend">
                <span className="male"/>男
                <span className="female"/>女
            </div>

        </div>

    );
};