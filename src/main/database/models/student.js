import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize

export default class student extends Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      'student',
      {
        name: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        birthday: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        tableName: 'student',
        timestamps: false
      }
    )
  }
}
