import { PieChart, Pie, Cell } from 'recharts';
import { getLsData } from '../Utility/Utitity';
import { useEffect, useState } from 'react';


const PiChart = () => {
    const lsDonation = getLsData()
    const [selectDonations, setSelectDonations] = useState(0)
    const [remainingDonations, setRemainingDonations] =useState(12)
    useEffect(()=>{
        setSelectDonations(lsDonation?.length)
        setRemainingDonations(12-lsDonation?.length)
    },[lsDonation])
   

    const data = [
        { name: 'Group A', value: selectDonations },
        { name: 'Group B', value: remainingDonations},

    ];
    const COLORS = ['#ff444a', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        className='font-bold text-xl'
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
        </div>
    );
};

export default PiChart;