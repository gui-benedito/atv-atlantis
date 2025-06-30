import { DataTypes, Model, Sequelize } from 'sequelize';
import { TipoDocumento } from '../enumeracoes/TipoDocumento';

class Documento extends Model {
	public id!: number;
	public tipo!: TipoDocumento;
	public numero!: string;
	public dataExpedicao!: Date;
	public clienteId!: number;  // Alterado de UUID para INTEGER
	
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	
	public static associate(models: any) {
		Documento.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
	}
	
	public static initModel = (sequelizeInstance: Sequelize) => {
		Documento.init(
			{
				id: {
					type: DataTypes.INTEGER,  
					autoIncrement: true,     
					primaryKey: true,  
				},
				tipo: {
					type: new DataTypes.ENUM(...Object.values(TipoDocumento)),
					allowNull: false,
				},
				numero: {
					type: new DataTypes.STRING(128),
					allowNull: false,
				},
				clienteId: {
					type: DataTypes.INTEGER,  
					allowNull: false,
				},
			},
			{
				tableName: 'documentos',
				sequelize: sequelizeInstance,
			}
		);
		
		return Documento;
	};
}

export default Documento;
