import { FC, useEffect } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';
import { ICalendar } from '../Calendar';
import CustomTooltip from './CustomTooltip';
import useWaters from '@/store/useWaters';
import scss from './Statistics.module.scss';

const Statistics: FC<ICalendar> = ({ currentDate }) => {
    const { weeklyWaters, getWeeklyWaters } = useWaters();

    useEffect(() => {
        getWeeklyWaters(format(currentDate, 'yyyy-MM-dd'));
    }, [currentDate, getWeeklyWaters]);

    const formattedWeeklyWaters = weeklyWaters.map(({ date, volume }) => ({
        date: Number(format(new Date(date!), 'dd')),
        volume,
    }));

    const data = [{ date: -100, volume: 0 }, ...formattedWeeklyWaters, { date: 100, volume: 0 }];

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
                        domain={[
                            data.length > 1 ? data[1].date - 1 : 0,
                            data.length > 7 ? data[7].date + 1 : data[data.length - 2].date + 1,
                        ]}
                        dataKey="date"
                        tickSize={0}
                        tickMargin={20}
                        tick={{ fontSize: 15, color: '#323f47' }}
                        axisLine={false}
                        allowDataOverflow
                        ticks={data.slice(0, -1).map((item) => item.date)}
                    />
                    <YAxis
                        type="number"
                        tickCount={6}
                        dataKey="volume"
                        domain={[0, 'dataMax']}
                        minTickGap={17}
                        tickSize={0}
                        tickFormatter={(v) => `${Number((v / 1000).toFixed(1))} L`}
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
                        dataKey="volume"
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
