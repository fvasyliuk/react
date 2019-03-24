

const db = (setStor)=>{
    fetch('http://localhost:3001/api/v1/questions')
    .then(response => response.json())
    .then(json => setStor({type:'SET_PRODUCTS', payload:json.question}))
}


export default db;