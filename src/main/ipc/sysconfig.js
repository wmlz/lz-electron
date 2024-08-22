import ipcUtils from './ipcUtils'

export const sysConfig = {
  selectAll: selectAll,
  insert: insert,
  verifyPassword: verifyPassword
}

async function selectAll() {
  return await ipcUtils.invoke('queryDatabase')
}

async function insert(param) {
  return await ipcUtils.invoke('db_insert_config', param)
}

async function verifyPassword(param) {
  return await ipcUtils.invoke('verifyPassword', param)
}
