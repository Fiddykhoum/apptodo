import '../App.css';

function Todos() {
    const todos = [
    {
        id: 1,
        text: 'Faire la vaisselle',
        createdAt: '2020-03-10',
        status: 'à faire'
    },
    {
        id: 2,
        text: 'Sortir le chien',
        createdAt: '2020-03-02',
        status: 'Fait'
    },
    {
        id: 3,
        text: 'Mieux apprendre React',
        createdAt: '2020-02-24',
        status: 'à faire'
    }
    ];

    const todosJSX = todos.map(todo => {
    return <li
        key={todo.id} className='todo'>
        <span>{new Date(todo.createdAt).toLocaleDateString()}</span>
        <p>{todo.text} - {todo.status}</p>
    </li>
    })
    
    return(
    <div className="wrapper">
        <h2>Mes todos</h2>
        <ul>
          {todosJSX}
        </ul>
    </div>
    )
}
export default Todos;