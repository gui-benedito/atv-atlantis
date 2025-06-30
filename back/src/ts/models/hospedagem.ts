import { BelongsToGetAssociationMixin, DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import Cliente from './cliente';
import Acomodacao from './acomodacao';

class Hospedagem extends Model {
	public id!: number;
	public clienteId!: number;  // Alterado de UUID para INTEGER
	public acomodacaoId!: number;  // Alterado de UUID para INTEGER
	public checkIn!: Date;
	public checkOut!: Date | null;
	
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	
	public getCliente!: BelongsToGetAssociationMixin<Cliente>;
	public getAcomodacao!: BelongsToGetAssociationMixin<Acomodacao>;

	public static associate(models: any) {
		Hospedagem.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
		Hospedagem.belongsTo(models.Acomodacao, { foreignKey: 'acomodacaoId', as: 'acomodacao' });
	}

	public static initModel = (sequelizeInstance: Sequelize) => {
		Hospedagem.init(
			{
				id: {
					type: DataTypes.INTEGER,  
					autoIncrement: true,     
					primaryKey: true,  
				},
				clienteId: {
					type: DataTypes.INTEGER,  // Alterado de UUID para INTEGER
					allowNull: false,
				},
				acomodacaoId: {
					type: DataTypes.INTEGER,  // Alterado de UUID para INTEGER
					allowNull: false,
				},
				checkIn: {
					type: DataTypes.DATE,
					allowNull: false,
				},
				checkOut: {
					type: DataTypes.DATE,
					allowNull: true,
				},
			},
			{
				tableName: 'hospedagens',
				sequelize: sequelizeInstance, 
			}
		);
		return Hospedagem;
	}
}

export default Hospedagem;
