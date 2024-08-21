import { Sequelize } from 'sequelize'
import lzdb from '../../../resources/storage/lzdb.db?asset'
import initModels from './models/init-models'
import { app } from 'electron'
import path from 'node:path'

const isPackaged = app.isPackaged
let filePath
console.log('isPackaged', isPackaged)
if (isPackaged) {
  filePath = path.resolve('./resources/storage/lzdb.db')
} else {
  filePath = lzdb
}
console.log('filepath', filePath)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: filePath
})
;(async () => {
  await sequelize.authenticate()
})()
  .then(() => {
    console.log('connected to sqlite successfully')
  })
  .catch((error) => {
    console.error('connect to sqlite failed', error)
  })
export const sequelizeModels = initModels(sequelize)
