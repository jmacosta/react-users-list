import ReactDOM from 'react-dom';
import './index.css';

const USERS = [
	{
		name: 'Juan Manuel Acosta',
		active: 'Active',
		role: 'Alumno'
	},
	{
		name: 'Inés García',
		active: 'Active',
		role: 'Alumno'
	},
	{
		name: 'Otro',
		active: 'Active',
		role: 'Alumno'
	}
];

const Title = ({ children }) => <h1>{children}</h1>;
const User = ({ name, active, role }) => {
	return (
		<div className='user'>
			<span className='name'> {name}</span>
			<span className='active'>{active}</span>
			<span className='role'>{role}</span>
		</div>
	);
};
const List = ({ users, children }) => {
	const usersRendered = users.map(user => <User key={user.name} {...user} />);

	return (
		<div className='list'>
			{children}
			{usersRendered}
		</div>
	);
};

const app = (
	<List users={USERS}>
		<Title>Listado de Alumnos</Title>
	</List>
);
const container = document.getElementById('root');

ReactDOM.render(app, container);
