'use client';
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
 } from "chart.js";

 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const Charts = () => {
const [charData, setData] = useState({
    datasets : [],
});

    const [charOption, setOption] = useState({});

    useEffect(() => {
        setData({
            labels : [2019, 2020, 2021, 2022, 2023],
            datasets : [
                {
                    judul : 'Data Pengunjung',
                    data : [1000, 2000, 3000, 4000, 6000, 132123],
                    bordercolor : 'rgb(53, 162, 235)',
                    bgcolor : 'rgb(53, 162, 235, 0.4)',
                },
            ]
        })
        setOption ({
           plugins : {
            legend : {
                position :'top',
            },
            title : {
                display : true,
                text : 'Data Pengunjung',
            }
           },
           maintainAspecRatio : false,
           responsive : true, 
        })
    }, [])
    return (
        
        <section className="container mx-auto pt-10">
            <div className="w-full relative border rounded-lg bg-white">
                    <Bar data={charData} options={charOption}/>
            </div>
        </section>
        
    );
};

export default Charts;    
