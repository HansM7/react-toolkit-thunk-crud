
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteUserMiddleware } from '../../../features/users/thunk';


function DeleteUser({modalDelete,toggleDelete}) {

    const dispatch = useDispatch()

    const {userTemporal} = useSelector(state=>(state.users))



    const handleDelete = async(id) => {
        dispatch(deleteUserMiddleware(id))
    }

    return (
        <div>
            <Modal isOpen={modalDelete} toggle={toggleDelete}>
                <ModalHeader toggle={toggleDelete}>Eliminar usuario</ModalHeader>
                <ModalBody>
                    Estas seguro de eliminar a <strong>{userTemporal.name}</strong>
                </ModalBody>
                <ModalFooter>
                <button className='btn btn-danger' onClick={()=>{handleDelete(userTemporal.id)}}>
                    Eliminar
                </button>{' '}
                <Button color="secondary" onClick={toggleDelete}>
                    Cancelar
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DeleteUser