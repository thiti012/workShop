import React, { useEffect, useState } from "react";
import BackOffice from "../../components/BackOffice";
import{ Bar } from 'react-chartjs-2'
import { Chart as Chartjs,CategoryScale,LinearScale,Title,Tooltip,Legend, BarElement,LineElement  } from "chart.js";
import axios from "axios";
import config from "../../config";



Chartjs.register(CategoryScale,LinearScale,BarElement,LineElement,Title,Tooltip,Legend);

function DashBoard(){

    const [data,setData] = useState(null);//เปลี่ยนให้เริ่มต้นเป็น null
    const [options] = useState({
        responsive: true,
        plugins: {
            Legend:{
                position: 'top',
            },
            Title: {
                display: true,
                text: 'Monthly Sale Data'
            },
        },
        scales:{
            y:{
                beginAtZero: true
            }
        }

    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get(config.apiPath + '/api/sale/dashboard',config.headers());
        let data = [];

        if(res.data.results !== undefined){
            for(let i = 0; i < res.data.results.length; i++){
                data.push(res.data.results[i].sumPrice);
            }
        }

        setData({
            labels: ['January','February','March','April','May','June','July','Ausgust','September','October','November'],
            datasets: [
                {
                    label: 'Monthly Sales',
                    data: data,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(151, 183, 117, 0.2)',],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                      ],
                    borderWidth: 1

                }
            ]

        })
    }

        
    
    
    return <BackOffice>
        {data ? (
             <Bar data={data} options={options} style={{width: '50%'}}/>

        ) : (
            <p>Loading...</p>
        )}

       

    </BackOffice>


}

export default DashBoard;