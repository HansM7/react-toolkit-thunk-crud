
import { Button } from 'reactstrap';

function ItemUsers({users,toggleDelete,toggleEdit}) {
    return (
        <tbody>
            {
                users.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td><Button className='btn btn-sm btn-primary' onClick={()=>toggleEdit(item)}>Editar</Button></td>
                        <td><Button className='btn btn-sm btn-danger' onClick={()=>toggleDelete(item)}>Eliminar</Button></td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default ItemUsers