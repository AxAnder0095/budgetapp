import {PureComponent} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let today = new Date();
let priorDateOne = new Date(new Date().setDate(today.getDate() - 1));
let priorDateTwo = new Date(new Date().setDate(today.getDate() - 2));
let priorDateThree = new Date(new Date().setDate(today.getDate() - 3));
let priorDateFour = new Date(new Date().setDate(today.getDate() - 4));
let priorDateFive = new Date(new Date().setDate(today.getDate() - 5));
let priorDateSix = new Date(new Date().setDate(today.getDate() - 6));

let dayOne = (today.getDate()).toString();
let dayTwo = (priorDateOne.getDate()).toString();
let dayThree = (priorDateTwo.getDate()).toString();
let dayFour = (priorDateThree.getDate()).toString();
let dayFive = (priorDateFour.getDate()).toString();
let daySix = (priorDateFive.getDate()).toString();
let daySeven = (priorDateSix.getDate()).toString();


// console.log(today.getDate());
// console.log(priorDateOne.getDate());
// console.log(priorDateTwo.getDate());
// console.log(priorDateThree.getDate());
// console.log(priorDateFour.getDate());
// console.log(priorDateFive.getDate());
// console.log(priorDateSix.getDate());



const data = [
    {
        name: daySeven,
        spending: 2400,
        // amt: 2400,
    },
    {
        name: daySix,
        spending: 1398,
        // amt: 2210,
    },
    {
        name: dayFive,
        spending: 12000,
        // amt: 2290,
    },
    {
        name: dayFour,
        spending: 3908,
        // amt: 2000,
    },
    {
        name: dayThree,
        spending: 4800,
        // amt: 2181,
    },
    {
        name: dayTwo,
        spending: 3800,
        // amt: 2500,
    },
    {
        name: dayOne,
        spending: 4300,
        // amt: 2100,
    },
];

export default class SLineChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="spending" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
