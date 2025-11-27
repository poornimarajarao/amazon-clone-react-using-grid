import React from 'react'

export default function Loder() {
    const totalCard=28;
    const placeHolders=Array.from({length:totalCard})
  return (
   <>
   <section className="container-fluid">
    <div className="row">
        {placeHolders.map((_,index)=>(
              <div className="col-3 my-2" key={index}>
            <div className="card">
                <div className="card-header text-center" style={{height:'200px',width:'250px'}}>
                </div>
                <div className="card-body">
                    <div style={{
                        height:'20px'
                    }}></div>
                    <div style={
                        {
                            height:'20px',
                            width:'50%'
                        }
                    }>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
   </section>
   </>
  )
}
