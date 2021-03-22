import React, { useState, useEffect } from 'react'

export default function LeaveCard(props) {
    const { leave } = props;
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect(() => {

        var temp1 = leave.from;
        var temp2 = leave.to;
        temp1 = temp1.split('T')[0];
        temp2 = temp2.split('T')[0];
        setFrom(temp1);
        setTo(temp2);

    }, [])

    return (
        <div>



            <div className="card " style={{ backgroundColor: "skyblue", color: "white" }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <h8>{leave.id}</h8>
                        </div>
                        <div className="col-md-2">
                            <h8>{from}</h8>
                        </div>
                        <div className="col-md-2">
                            <h8>{to}</h8>
                        </div>
                        <div className="col-md-3">
                            <h8>{new Date(leave.to).getDate() - new Date(leave.from).getDate() + 1} Days</h8>
                        </div>
                        <div className="col-md-3">
                            <h8>{leave.type}</h8>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}
