import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize

export default class sys_config extends Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      'sys_config',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        key: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        },
        value: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        remark: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        create_time: {
          type: DataTypes.DATE,
          allowNull: true
        },
        update_time: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        tableName: 'sys_config',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_sys_config_1',
            unique: true,
            fields: [{ name: 'key' }]
          }
        ]
      }
    )
  }
}
