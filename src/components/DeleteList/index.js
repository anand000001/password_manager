import './index.css'

const DeleteList = props => {
  const {listDetails, deleteUser} = props
  const {website, userName, password, id} = listDetails
  const ben = listDetails ? 'list-container' : ''

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="list-item">
        <div className="icon">{website[0]}</div>
        <div className="para">
          <p>{website}</p>
          <p>{userName}</p>
          <p>{password}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-img"
          testId="delete"
          type="button"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default DeleteList
