import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsersMiddleware } from "../../features/users/thunk"
import { setUserTemporal } from "../../features/users/user.slice"
import ItemUsers from "./ItemUsers"
import DeleteUser from './modals/DeleteUser'
import EditUser from "./modals/EditUser"



function DataUsers() {

	const dispatch=useDispatch()

	const {users,isData,userTemporal} = useSelector((state)=>state.users)

	const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)

	const toggleEdit = (user) => {
		if(!modalEdit){
			dispatch(setUserTemporal(user))
		}
		setModalEdit(!modalEdit)
	}

    const toggleDelete = (user) => {
		if(!modalDelete){
			dispatch(setUserTemporal(user))
		}
		setModalDelete(!modalDelete)
	}
	

	useEffect(() => {
		dispatch(getUsersMiddleware())
	}, [])
	

	return (
		<>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Email</th>
						<th>Edad</th>
						<th>Eliminar</th>
						<th>Editar</th>
					</tr>
				</thead>
				{
					(isData)?(
						<ItemUsers 
						users={users} 
						modalDelete={modalDelete}
            			toggleDelete={toggleDelete}
						modalEdit={modalEdit}
            			toggleEdit={toggleEdit}
						/>
					):""
				}
			</table>

			<DeleteUser
            modalDelete={modalDelete}
            toggleDelete={toggleDelete}
            />

			<EditUser
			modalEdit={modalEdit}
			toggleEdit={toggleEdit}
			/>
		</>
	)
}

export default DataUsers