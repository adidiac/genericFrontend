import React, {useState, useEffect} from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import "./DataComponent.css"
import { abonamenteCrud,antrenamenteCrud,comenziCrud,produseCrud,stiriCrud } from './ServerConnection';
function GenericModal({form, show, onHide, onSubmit, title, submitButtonText, children})
{
    return <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={onSubmit}>
                {form}
                {children}
                <Button variant="primary" type="submit" style={{marginTop:10}}>
                    {submitButtonText}
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}
function GenericAddForm({data,onSubmit})
{
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(formData);
        handleClose();
    }
    return <>
        <Button variant="primary" onClick={handleShow}>
            Add
        </Button>
        <GenericModal
            form={data.map((data)=>{
                return <Form.Group controlId={data.name}>
                    <Form.Label>{data.label}</Form.Label>
                    <Form.Control name={data.name} type={data.type} placeholder={data.placeholder} onChange={handleChange}/>
                </Form.Group>
            })}
            show={show}
            onHide={handleClose}
            onSubmit={handleSubmit}
            title="Add"
            submitButtonText="Add"
        />
    </>
}
const GenericUpdateForm = ({data,onSubmit})=>{
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    const [dataValues, setDataValues] = useState({});
    useEffect(()=>{
        let values={};
        data.forEach((data)=>{
            values[data.name]=data.value;
        })
        setDataValues(values);
    },[data]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setDataValues({...dataValues,[name]:value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(dataValues);
        handleClose();
    }
    return <>
        <Button variant="primary" onClick={handleShow}>
            Update
        </Button>
        <GenericModal
            form={data.map((data)=>{
                return <Form.Group controlId={data.name}>
                    <Form.Label>{data.label}</Form.Label>
                    <Form.Control name={data.name} type={data.type} placeholder={data.placeholder} value={dataValues[data.name]}
                    onChange={handleChange}/>
                </Form.Group>
            }
            )}
            show={show}
            onHide={handleClose}
            onSubmit={handleSubmit}
            title="Update"
            submitButtonText="Update"
        />
    </>
}
//define how an Abonament should look like
const Abonamente = {
    id: 0,
    TipAbonament: "",
    Pret: 0,
    Specificatii: "",
}
const Antrenamente= {
    id: 0,
    TipAntrenament: "",
    Antrenor: "",
    OraInceput: "",
    OraSfarsit: "",
}
const Produse={
    id: 0,
    DenumireProdus: "",
    Pret: 0,
    Descriere: "",
    Cantitate: 0,
}
const Comenzi = {
    id: 0,
    DenumireProdus: "",
    Pret: 0,
    Descriere: "",
    Cantitate: 0,
    Email: "",
}
const Stiri={
    id: 0,
    Specificatii: "",
}
function AbonamenteTabel()
{
    const [data, setData] = useState([]);

    const getData = async ()=>{
        //ToDo
        const data =await abonamenteCrud.getAll();
        setData(data);
    }

    const updateData = async (data,id)=>{
        //ToDo
        const result=await abonamenteCrud.update(data,id);
        getData();
    }

    const deleteData = async (id)=>{
        //ToDo
        const result=await abonamenteCrud.delete(id);
        getData();
    }

    const addData =async (data)=>{
        //ToDo
        const result=await abonamenteCrud.insert(data);
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>TipAbonament</th>
                <th>Pret</th>
                <th>Specificatii</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((abonament)=>{
                return <tr>
                    <td>{abonament.id}</td>
                    <td>{abonament.TipAbonament}</td>
                    <td>{abonament.Pret}</td>
                    <td>{abonament.Specificatii}</td>
                    <td>
                        <GenericUpdateForm
                            data={[
                                {name:"TipAbonament",type:"text",placeholder:"TipAbonament",label:"TipAbonament",value:abonament.TipAbonament},
                                {name:"Pret",type:"number",placeholder:"Pret",label:"Pret",value:abonament.Pret},
                                {name:"Specificatii",type:"text",placeholder:"Specificatii",label:"Specificatii",value:abonament.Specificatii}
                            ]}
                            onSubmit={(data)=>updateData(data,abonament.id)}
                        />
                        <Button variant="danger" onClick={()=>deleteData(abonament.id)}>Delete</Button>
                    </td>
                </tr>
            }
            )}
        </tbody>
        <GenericAddForm
            data={[
                {name:"TipAbonament",type:"text",placeholder:"TipAbonament",label:"TipAbonament"},
                {name:"Pret",type:"number",placeholder:"Pret",label:"Pret"},
                {name:"Specificatii",type:"text",placeholder:"Specificatii",label:"Specificatii"}
            ]}
            onSubmit={(data)=>addData(data)}
        />
    </Table>
}

function AntrenamenteTabel()
{
    const [data, setData] = useState([]);

    const getData = async ()=>{
        //ToDo
        const data =await antrenamenteCrud.getAll();
        setData(data);
    }

    const updateData = async (data,id)=>{
        //ToDo
        const result=await antrenamenteCrud.update(data,id);
        getData();
    }

    const deleteData = async (id)=>{
        //ToDo
        const result=await antrenamenteCrud.delete(id);
        getData();
    }

    const addData = async (data)=>{   
        //ToDo
        const result=await antrenamenteCrud.insert(data);
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>TipAntrenament</th>
            <th>Antrenor</th>
            <th>OraInceput</th>
            <th>OraSfarsit</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((antrenament,index)=>{
                return <tr>
                    <td>{index+1}</td>
                    <td>{antrenament.TipAntrenament}</td>
                    <td>{antrenament.Antrenor}</td>
                    <td>{antrenament.OraInceput}</td>
                    <td>{antrenament.OraSfarsit}</td>
                    <td>
                        <GenericUpdateForm
                            data={[
                                {name:"TipAntrenament",type:"text",placeholder:"TipAntrenament",label:"TipAntrenament",value:antrenament.TipAntrenament},
                                {name:"Antrenor",type:"text",placeholder:"Antrenor",label:"Antrenor",value:antrenament.Antrenor},
                                {name:"OraInceput",type:"text",placeholder:"OraInceput",label:"OraInceput",value:antrenament.OraInceput},
                                {name:"OraSfarsit",type:"text",placeholder:"OraSfarsit",label:"OraSfarsit",value:antrenament.OraSfarsit}
                            ]}
                            onSubmit={(data)=>updateData(data,antrenament.id)}
                        />
                        <Button variant="danger" onClick={()=>deleteData(antrenament.id)}>Delete</Button>
                    </td>
                </tr>
            }
        )}
        </tbody>
        <GenericAddForm
            data={[
                {name:"TipAntrenament",type:"text",placeholder:"TipAntrenament",label:"TipAntrenament"},
                {name:"Antrenor",type:"text",placeholder:"Antrenor",label:"Antrenor"},
                {name:"OraInceput",type:"text",placeholder:"OraInceput",label:"OraInceput"},
                {name:"OraSfarsit",type:"text",placeholder:"OraSfarsit",label:"OraSfarsit"}
            ]}
            onSubmit={(data)=>addData(data)}
        />
    </Table>

}

function ProduseTabel()
{
    const [data, setData] = useState([]);

    const getData =async ()=>{
        //ToDo
        const data =await produseCrud.getAll();
        setData(data);
    }

    const updateData = async (data,id)=>{
        //ToDo
        const result=await produseCrud.update(data,id);
        getData();
    }

    const deleteData =async (id)=>{
        //ToDo
        const result=await produseCrud.delete(id);
        getData();
    }

    const addData = async (data)=>{
        //ToDo
        const result=await produseCrud.insert(data);
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>DenumireProdus</th>
            <th>Pret</th>
            <th>Descriere</th>
            <th>Cantitate</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((produs)=>{
                return <tr>
                    <td>{produs.id}</td>
                    <td>{produs.DenumireProdus}</td>
                    <td>{produs.Pret}</td>
                    <td>{produs.Descriere}</td>
                    <td>{produs.Cantitate}</td>
                    <td>
                        <GenericUpdateForm
                            data={[
                                {name:"DenumireProdus",type:"text",placeholder:"DenumireProdus",label:"DenumireProdus",value:produs.DenumireProdus},
                                {name:"Pret",type:"number",placeholder:"Pret",label:"Pret",value:produs.Pret},
                                {name:"Descriere",type:"text",placeholder:"Descriere",label:"Descriere",value:produs.Descriere},
                                {name:"Cantitate",type:"number",placeholder:"Cantitate",label:"Cantitate",value:produs.Cantitate}
                            ]}
                            onSubmit={(data)=>updateData(data,produs.id)}
                        />
                        <Button variant="danger" onClick={()=>deleteData(produs.id)}>Delete</Button>
                    </td>
                </tr>
            }
        )}
        </tbody>
        <GenericAddForm
            data={[
                {name:"DenumireProdus",type:"text",placeholder:"DenumireProdus",label:"DenumireProdus"},
                {name:"Pret",type:"number",placeholder:"Pret",label:"Pret"},
                {name:"Descriere",type:"text",placeholder:"Descriere",label:"Descriere"},
                {name:"Cantitate",type:"number",placeholder:"Cantitate",label:"Cantitate"}
            ]}
            onSubmit={(data)=>addData(data)}
        />
    </Table>

}

function ComenziTabel(){
    const [data, setData] = useState([]);

    const getData =async  ()=>{
        //ToDo
        const data =await comenziCrud.getAll();
        setData(data);
    }

    const updateData = async (data,id)=>{
        //ToDo
        const result=await comenziCrud.update(data,id);
        getData();
    }

    const deleteData = async (id)=>{
        //ToDo
        const result=await comenziCrud.delete(id);
        getData();
    }

    const addData = async (data)=>{
        //ToDo
        const result=await comenziCrud.insert(data);
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>Client</th>
            <th>Produs</th>
            <th>Cantitate</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((comanda)=>{
                return <tr>
                    <td>{comanda.id}</td>
                    <td style={{overflow:'scroll'}}>{comanda.Client}</td>
                    <td >{comanda.Produs}</td>
                    <td>{comanda.Cantitate}</td>
                    <td>
                        <GenericUpdateForm
                            data={[
                                {name:"Client",type:"text",placeholder:"Client",label:"Client",value:comanda.Client},
                                {name:"Produs",type:"text",placeholder:"Produs",label:"Produs",value:comanda.Produs},
                                {name:"Cantitate",type:"number",placeholder:"Cantitate",label:"Cantitate",value:comanda.Cantitate}
                            ]}
                            onSubmit={(data)=>updateData(data,comanda.id)}
                        />
                        <Button variant="danger" onClick={()=>deleteData(comanda.id)}>Delete</Button>
                    </td>
                </tr>
            }
        )}
        </tbody>
        <GenericAddForm
            data={[
                {name:"Client",type:"text",placeholder:"Client",label:"Client"},
                {name:"Produs",type:"text",placeholder:"Produs",label:"Produs"},
                {name:"Cantitate",type:"number",placeholder:"Cantitate",label:"Cantitate"}
            ]}
            onSubmit={(data)=>addData(data)}
        />
    </Table>

}

function StiriTabel(){

    const [data, setData] = useState([]);

    const getData = async ()=>{
        //ToDo
        const data =await stiriCrud.getAll();
        setData(data);
    }

    const updateData = async (data,id)=>{
        //ToDo
        const result=await stiriCrud.update(data,id);
        getData();
    }

    const deleteData = async (id)=>{
        //ToDo
        const result=await stiriCrud.delete(id);
        getData();
    }

    const addData =async (data)=>{
        //ToDo
        const result=await stiriCrud.insert(data);
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>Id</th>
            <th>Specificatii</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((stire)=>{
                return <tr>
                    <td>{stire.id}</td>
                    <td>{stire.Specificatii}</td>
                    <td>
                        <GenericUpdateForm
                            data={[
                                {name:"Specificatii",type:"text",placeholder:"Specificatii",label:"Specificatii",value:stire.Specificatii}
                            ]}
                            onSubmit={(data)=>updateData(data,stire.id)}
                        />
                        <Button variant="danger" onClick={()=>deleteData(stire.id)}>Delete</Button>
                    </td>
                </tr>
            }
        )}
        </tbody>
        <GenericAddForm
            data={[
                {name:"Specificatii",type:"text",placeholder:"Specificatii",label:"Specificatii"}
            ]}
            onSubmit={(data)=>addData(data)}
        />
    </Table>

}

const tables=[
    {name:"abonamente",component:<AbonamenteTabel />},
    {name:"antrenamente",component:<AntrenamenteTabel />},
    {name:"produse",component:<ProduseTabel />},
    {name:"comenzi",component:<ComenziTabel />},
    {name:"stiri",component:<StiriTabel />}
]

export default tables;