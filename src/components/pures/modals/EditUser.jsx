import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { updateUserMiddleware } from '../../../features/users/thunk';
import { userSchema } from '../../../models/createUserModel'




function EditUser({modalEdit,toggleEdit}) {

    const dispatch = useDispatch()

    const {userTemporal} = useSelector(state=>(state.users))


    return (
        <div>

            <Formik

            enableReinitialize

            // ---------------------------------
            initialValues={{
                name:(userTemporal.name)?userTemporal.name:"",
                email:(userTemporal.email)?userTemporal.email:"",
                age:(userTemporal.age)?userTemporal.age:"",
            }}

            validationSchema={userSchema}

            onSubmit={async(values,{resetForm})=>{
                dispatch(updateUserMiddleware(values,userTemporal.id))
                resetForm({values:''})
                toggleEdit()
            }}
            // ---------------------------------
            
            >

                {
                    ({values,touched,errors,handleChange,handleBlur,isSubmitting})=>{
                        return(
                            <Modal isOpen={modalEdit} toggle={toggleEdit} >
                                <Form>
                                    
                                    <ModalHeader toggle={toggleEdit}>Editar usuario</ModalHeader>
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
                                                        className='form-control' 
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
                                            Guardar cambios
                                        </button>
                                        <Button color="secondary" onClick={toggleEdit}>
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
    )
}

export default EditUser