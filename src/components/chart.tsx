import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const ChartX = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
    }, []);

    return (
        <div className="1">
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};