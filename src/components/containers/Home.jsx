import React, { useState } from 'react'
import DataUsers from '../pures/DataUsers'
import { Button} from 'reactstrap';
import CreateUser from '../pures/modals/CreateUser';


function Home() {

    const [modal, setModal] = useState(false)
    

    const toggle = () => setModal(!modal)
    

    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>User Managment <b>[React Toolkit Thunk]</b></h2>
                                </div>
                                <div className="col-sm-7">
                                    <Button className="btn btn-secondary" onClick={toggle}>Add user</Button>						
                                </div>
                            </div>
                        </div>
                        
                        <DataUsers 
                        
                        />
                        
                    </div>
                </div>
            </div>

            <CreateUser
            modal={modal}
            toggle={toggle}
            />

            
        </>
        
    )
}

export default Home