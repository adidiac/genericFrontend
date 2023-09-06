import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
  import { Pie,Line } from "react-chartjs-2";
  import { abonamenteCrud,antrenamenteCrud,comenziCrud,produseCrud,stiriCrud,persoaneCrud } from './ServerConnection';
import { Col, Container, Row } from "react-bootstrap";
 
const LineChart = ({ chartData,text }) => {
    return (
        <div style={{width:"90vh",height:"50vh"}}>
        <Line
            data={chartData}
            options={{
            plugins: {
                title: {
                display: true,
                text: text
                },
                legend: {
                display: false
                }
            }
            }}
        />
        </div>
    );
};

const BarChart = ({ chartData,text }) => {
  return (
    <div style={{width:"90vh",height:"50vh"}}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: text
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
function PieChart({ chartData,text }) {
    return (
      <div style={{width:"90vh",height:"50vh"}}>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: text,
              }
            }
          }}
        />
      </div>
    );
  }

export default function Statistici()
{
    
    const [chartComenziPerProdus, setChartComenziPerProdus] = useState({});
    const [chartAntrenamentePerPrograme, setChartAntrenamentePerPrograme] = useState({});
    const [chartAbonamentePerPersoane, setChartAbonamentePerPersoane] = useState({});

    const chartComenziPerProdusFunc = async () => {
        let comenzi=await comenziCrud.getAll();
        let produseCount={};
        for(let comanda of comenzi)
        {
            if(produseCount[comanda.Produs])
                produseCount[comanda.Produs]++;
            else
                produseCount[comanda.Produs]=1;
        }
        //make a list with a distinct color for each produs
        let colors=[];
        for(let produs in produseCount)
        {
            let color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            //verify if the color is already in the list
            while(colors.includes(color))
            {
                color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            }
            //verify that is a valid color
            colors.push(color);
        }

        //complete chartComenziPerProdus with produseCount
        let chartComenziPerProdusData={
            labels: Object.keys(produseCount),
            datasets: [
                {
                    label: 'Comenzi per produs',
                    data: Object.values(produseCount),
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        };
        setChartComenziPerProdus(chartComenziPerProdusData);

    }
    const chartAntrenamentePerProgrameFunc = async () => {
        let antrenamente=await antrenamenteCrud.getAll();
        // extract the OraInceput and OraSfarsit from the antrenamente
        let intervale=[];
        for(let antrenament of antrenamente)
        {
            intervale.push(antrenament.OraInceput+'-'+antrenament.OraSfarsit);
        }
        //number how many antrenamente are in each interval
        let intervaleCount={};
        for(let interval of intervale)
        {
            if(intervaleCount[interval])
                intervaleCount[interval]++;
            else
                intervaleCount[interval]=1;
        }
        //make a list with a distinct color for each interval
        let colors=[];
        for(let interval in intervaleCount)
        {
            let color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            //verify if the color is already in the list
            while(colors.includes(color))
            {
                color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            }
            //verify that is a valid color
            colors.push(color);
        }

        //complete chartAntrenamentePerPrograme with intervaleCount
        let chartAntrenamentePerProgrameData={
            labels: Object.keys(intervaleCount),
            datasets: [
                {
                    label: 'Antrenamente per programe',
                    data: Object.values(intervaleCount),
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        };
        setChartAntrenamentePerPrograme(chartAntrenamentePerProgrameData);

    }

    const chartAbonamentePerPersoaneFunc = async () => {
        let abonamente=await abonamenteCrud.getAll();
        let persoane=await persoaneCrud.getAll();
        //extract idAbonament from persoane
        console.log(persoane);
        console.log(abonamente);
        let idAbonament=[];
        for(let persoana of persoane)
        {
            //find name of abonament in abonamente by idAbonament
            let abonament=abonamente.find(abonament=>abonament.id==persoana.idAbonament);
            if(abonament)
                idAbonament.push(abonament.TipAbonament);
        }
        //number how many persoane are in each abonament
        let idAbonamentCount={};
        for(let abonament of idAbonament)
        {
            if(idAbonamentCount[abonament])
                idAbonamentCount[abonament]++;
            else
                idAbonamentCount[abonament]=1;
        }
        //make a list with a distinct color for each abonament
        let colors=[];
        for(let abonament in idAbonamentCount)
        {
            let color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            //verify if the color is already in the list
            while(colors.includes(color))
            {
                color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.5)';
            }
            //verify that is a valid color
            colors.push(color);
        }

        //complete chartAbonamentePerPersoane with idAbonamentCount
        let chartAbonamentePerPersoaneData={
            labels: Object.keys(idAbonamentCount),
            datasets: [
                {
                    label: 'Abonamente per persoane',
                    data: Object.values(idAbonamentCount),
                    backgroundColor: colors,
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        };
        setChartAbonamentePerPersoane(chartAbonamentePerPersoaneData);

    }
    useEffect(() => {   
        chartComenziPerProdusFunc();
        chartAntrenamentePerProgrameFunc();
        chartAbonamentePerPersoaneFunc();
    }, []);

    return <Container>
            <Row style={{height:"60vh",maxWidth:"100vh",padding:10,overflow:"auto"}}>
                <Col style={{margin:10}}>
                {
                    chartComenziPerProdus?<PieChart chartData={chartComenziPerProdus} text="Comenzi per produs"/> :<></>
                }
                </Col>
                <Col style={{margin:10}}>
                { chartAbonamentePerPersoane?  
                <LineChart chartData={chartAntrenamentePerPrograme} text="Antrenamente per programe"/>
                :<></>
                }
                </Col>
                <Col style={{margin:10}}>
                    {
                    chartAbonamentePerPersoane?
                    <BarChart chartData={chartAbonamentePerPersoane} text="Abonamente per persoane"/>
                    :<></>
                    }
                </Col>
            </Row>
        
    </Container>
}