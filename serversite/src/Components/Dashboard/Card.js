import React from 'react'

export default function Card() {
  return (
    <div>
        <div className='row' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light  " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            
            
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
               
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            </div>
    </div>
  )
}
