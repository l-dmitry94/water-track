import { FC } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ICalendar } from '../Calendar';
import CustomTooltip from './CustomTooltip';
import scss from './Statistics.module.scss';

const Statistics: FC<ICalendar> = ({ currentDate }) => {
    console.log(currentDate);
    const data = [
        { name: -100, pv: 0 },
        { name: 16, pv: 2200 },
        { name: 17, pv: 1800 },
        { name: 18, pv: 2500 },
        { name: 19, pv: 1750 },
        { name: 20, pv: 2340 },
        { name: 21, pv: 2400 },
        { name: 22, pv: 1600 },
        { name: 100, pv: 0 },
    ];

    return (
        <div className={scss.statistics}>
            <ResponsiveContainer width={'100%'} height={314}>
                <AreaChart data={data} margin={{ top: 12, right: 12 }}>
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9BE1A0" stopOpacity={1} />
                            <stop offset="95%" stopColor="#9BE1A0" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        type="number"
                        tickCount={7}
                        domain={[data[1].name - 1, data[7].name + 1]}
                        dataKey="name"
                        tickSize={0}
                        tickMargin={20}
                        tick={{ fontSize: 15, color: '#323f47' }}
                        axisLine={false}
                        allowDataOverflow
                        ticks={data.slice(0, -1).map((item) => item.name)}
                    />
                    <YAxis
                        type="number"
                        tickCount={6}
                        dataKey="pv"
                        domain={[0, 'dataMax']}
                        minTickGap={17}
                        tickSize={0}
                        tickFormatter={(v) => `${v / 1000} L`}
                        tick={{ fontSize: 15, color: '#323f47' }}
                        tickMargin={20}
                        axisLine={false}
                    />
                    <Tooltip
                        formatter={(value) => [value]}
                        labelFormatter={() => ''}
                        content={<CustomTooltip />}
                        cursor={true}
                        isAnimationActive={true}
                    />
                    <Area
                        type="linear"
                        dataKey="pv"
                        stroke="#87d28d"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        dot={{ stroke: '#87d28d', strokeWidth: 3, r: 10, fill: '#ffffff' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
