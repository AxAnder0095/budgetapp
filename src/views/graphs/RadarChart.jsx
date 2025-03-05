import {PureComponent} from "react";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from "recharts";

const data = [
    {
        subject: 'Food',
        A: 80,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Utilities',
        A: 60,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Housing',
        A: 120,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Entertainment',
        A: 56,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Savings',
        A: 33,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Memberships',
        A: 40,
        B: 0,
        fullMark: 150,
    },
];

export default class BRadarChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#00df82" fill="#00df82" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
