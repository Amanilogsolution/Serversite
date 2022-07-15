import React from 'react'

export default function Footer() {
  return (
    <div style={{position:"fixed",bottom:"0", width:"100%"}}>
        <div className="card text-center" >
        <div className="card-header bg-dark text-light">Featured</div>
        <div className="card-body bg-secondary">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="card-footer bg-dark text-light">2 days ago</div>
      </div>
    </div>
  )
}
