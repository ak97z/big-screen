import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart10 = () => {
    const divRef = useRef(null);
    const data=[
        {name:'入室抢劫',number:1},
        {name:'当街偷盗',number:1},
        {name:'团伙诈骗',number:1},
        {name:'刑事案件',number:1},
        {name:'民事案件',number:1}
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '入室抢劫', number: Math.random()},
                {name: '当街偷盗',  number: Math.random()},
                {name: '团伙诈骗',  number: Math.random()},
                {name: '刑事案件',  number: Math.random()},
                {name: '民事案件',  number: Math.random()},
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
                axisLabel: {show: false}

            },

            series: [{
                type: 'bar',
                data: data.map(i=>i.number),
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
    }, [])

    return (
                <div className="chart" ref={divRef}></div>
    );
};






