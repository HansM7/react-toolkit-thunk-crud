
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addUserMiddleware } from '../../../features/users/thunk';

import { userSchema } from '../../../models/createUserModel';



function CreateUser({modal,toggle}) {

    const dispatch = useDispatch()
  
    return (
        <div>

            <Formik

            // ---------------------------------
            initialValues={{
                name:'',
                email:'',
                age:''
            }}

            validationSchema={userSchema}

            onSubmit={async(values,{resetForm})=>{
                dispatch(addUserMiddleware(values))
                resetForm({values:''})
                toggle()
            }}
            // ---------------------------------
            
            >

                {
                    ({values,touched,errors,handleChange,handleBlur,isSubmitting})=>{
                        return(
                            <Modal isOpen={modal} toggle={toggle} >
                                <Form>
                                    
                                    <ModalHeader toggle={toggle}>Crear Usuario</ModalHeader>
                                    <ModalBody>
                                        <div>
                                            <div className='mb-4'>
                                                <Field 
                                                        className='form-control ' 
                                                        value={values.name}
                                                        type="text" 
                                                        name="name"  />
                                                <span className='text-danger '>
                                                    <ErrorMessage name="name"></ErrorMessage>
                                                </span>
                                            </div>

                                            <div className='mb-4'>
                                                <Field 
                                                        className='form-control ' 
                                                        value={values.email}
                                                        type="text" 
                                                        name="email"  />
                                                <span className='text-danger '>
                                                    <ErrorMessage name="email"></ErrorMessage>
                                                </span>
                                            </div>

                                            <div className='mb-4'>
                                                <Field 
                                                        className='form-control ' 
                                                        value={values.age}
                                                        type="number" 
                                                        name="age"  />
                                                <span className='text-danger '>
                                                    <ErrorMessage name="age"></ErrorMessage>
                                                </span>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button type='submit' className='btn btn-success' >
                                            Crear
                                        </button>
                                        <Button color="secondary" onClick={toggle}>
                                            Cancel
                                        </Button>
                                    </ModalFooter>

                                </Form>

                            </Modal>
                        )
                    }
                }

            </Formik>

        </div>
    );
}

export default CreateUser