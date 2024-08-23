import ipcUtils from './ipcUtils'

export const sysConfig = {
  selectAll: selectAll,
  insert: insert,
  verifyPassword: verifyPassword,
  getOneByKey: getOneByKey,
  setEnableLock: setEnableLock,
  updateLockPassword: updateLockPassword
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

async function getOneByKey(param) {
  return await ipcUtils.invoke('getSysConfigByKey', param)
}

async function setEnableLock(param) {
  return await ipcUtils.invoke('setEnableLock', param)
}

async function updateLockPassword(param) {
  return await ipcUtils.invoke('updateLockPassword', param)
}
