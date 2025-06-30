import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('atlantis', 'root', 'fatec', {
	host: 'localhost',
	dialect: 'mysql',
});

export default sequelize;