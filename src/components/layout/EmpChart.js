
import React, { useState, useEffect, useContext } from 'react'
import Pie from 'react-chartjs-2'
export default function EmpChart(props) {

  useEffect(() => {


  }, [])
  const [intern, setIntern] = useState(8);
  const [associate, setAssociate] = useState(10);
  const [softwareEngg, setSoftwareEngg] = useState(12);
  const [seniorSoftwareEngg, setSeniorSoftwareEngg] = useState(14);
  const [projectManager, setProjectManager] = useState(16);





  const [data, setData] = useState({
    labels: [
      "2017", "2018", "2019", "2020", "2021"
    ],
    datasets: [
      {
        data: [
          intern, associate, softwareEngg, seniorSoftwareEngg, projectManager
        ],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
      },

    ]
  }
  )


  const [options, setOption] = useState({
    responsive: true
  }

  )


  return (
    <div>
      <Pie data={data} options={options} />

    </div>
  )
}







