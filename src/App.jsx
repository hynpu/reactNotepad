import "./styles.css"

export default function App(){
  return (
    <>
      <form action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">new item</label>
          <input type="text" id='item' />
        </div>
        <button className="btn">add</button>
      </form>
      <h1 className="header">to do list</h1>
      <u1 className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox"/>
            item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox"/>
            item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </u1>
    </>
  )
}