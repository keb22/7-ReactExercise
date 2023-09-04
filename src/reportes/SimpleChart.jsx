import React, { useState } from "react";
import axios from "axios";
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Bar , Tooltip } from "recharts";


const SimpleChart =() =>{

  //Data
  const [data, setData] = useState([]);


  //Función para obtener los datos
  const obtenerRegistro = async () => {
  
    try {
      const response = await axios.get('http://localhost/12-Dashboard/src/back-end/Data.php');
      const records = response.data;
      console.log(records);
      setData(records);
    } catch (error) {
      console.error(error);
    }
    };

    obtenerRegistro();
  return(
    <div>
      <h1>Simple Chart</h1>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data} 
          width={500} 
          height={300} 
          margin={{
           top:5,
           right:30,
           left:20,
           bottom:5,
       }}>
         <CartesianGrid strokeDasharray="4 1 2" />
         <XAxis dataKey="nombre" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="total" fill="#6b48ff" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}
 export default SimpleChart;