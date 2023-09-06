import { Tab, Row, Col, Nav } from 'react-bootstrap';
import tables from './DataComponent';
import Statistici from './Statistici';
const containerStyle = {
    height: "100vh",
    width: "100vw",
    padding: "0px",
    margin: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const cardStyle = {
    height: "80%",
    width: "80%",
    opacity: "0.8",
    margin: "auto",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    flexDirection: "column",
    translation: "translateY(-50%)"
}
const typesOfData=[
    "abonamente",
    "antrenamente",
    "produse",
    "comenzi",
    "stiri",
]
export default function Home()
{
    return <div style={containerStyle}>
        <div style={cardStyle}>
        <h1 style={{margin:10}}>Manage</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="abonamente" style={{width:"100%",height:"100%"}}>
            <Row style={{width:"100%",height:"100%",margin:10,padding:40}}>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    {typesOfData.map((typeOfData,index)=>{
                        return <Nav.Item>
                            <Nav.Link eventKey={typeOfData}>{typeOfData.replace(typeOfData[0],typeOfData[0].toUpperCase())}</Nav.Link>
                        </Nav.Item>
                    }
                    )}
                    <Nav.Item>
                        <Nav.Link eventKey="statistici">Statistici</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    {typesOfData.map((typeOfData,index)=>{
                        return <Tab.Pane eventKey={typeOfData}>
                            {tables[index].component}
                        </Tab.Pane>
                    }
                    )}
                    <Tab.Pane eventKey="statistici">
                        <Statistici/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
    </div>;
}