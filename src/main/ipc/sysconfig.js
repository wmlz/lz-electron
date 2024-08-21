import ipcUtils from './ipcUtils'

export const sysConfig = {
  selectAll: selectAll,
  insert: insert
}

async function selectAll() {
  return await ipcUtils.invoke('queryDatabase')
}

async function insert(param) {
  return await ipcUtils.invoke('db_insert_config', param)
}
