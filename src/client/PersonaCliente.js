import axios from "axios";

const obtenerPorId = async(id)=>{
    //http://localhost:8080/matriculaAPI/v1.1/personas/1
    axios.get(`http:localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
     console.log(data);
     return data;
}

const insertar = async(body)=>{
    axios.post('http:localhost:8081/matriculaAPI/v1.1/personas',body).then(r=>r.data);
    
}

const actualizarParcial = async(id,body)=>{
    axios.pach(`http:localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    
}

const actualizar = async(id,body)=>{
    axios.put(`http:localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    
}

const eliminar = async(id)=>{
    axios.delete(`http:localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    
}



export const obtenerPorFachada = async(id)=>{
    return await obtenerPorId(id);

}
const insertarFachada = async(body)=>{
   await insertar(body);
    
}
