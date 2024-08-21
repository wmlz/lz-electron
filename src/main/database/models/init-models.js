import _sequelize from 'sequelize'
const DataTypes = _sequelize.DataTypes
import _student from './student.js'
import _sys_config from './sys_config.js'

export default function initModels(sequelize) {
  const student = _student.init(sequelize, DataTypes)
  const sys_config = _sys_config.init(sequelize, DataTypes)

  return {
    student,
    sys_config
  }
}
