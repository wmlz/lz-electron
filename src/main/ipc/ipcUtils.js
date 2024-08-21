import { ipcRenderer } from 'electron'

class IpcUtils {
  // 封装 ipcRenderer.invoke 方法
  static async invoke(channel, ...args) {
    try {
      return await ipcRenderer.invoke(channel, ...args)
    } catch (error) {
      console.error(`IPC invoke error on channel ${channel}:`, error)
      throw error // 可以选择重新抛出错误，或者处理错误后返回默认值
    }
  }
}

export default IpcUtils
