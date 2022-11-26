import EventEmitter from 'eventemitter3'

const event = new EventEmitter()

function getModuleEvent<E extends { [key: string]: any }>(moduleName: string) {
  return {
    /** 触发事件 */
    emit: function emit<T extends keyof E>(
      name: T,
      data?: E[T],
      ...others: any
    ): void {
      console.log(
        `LOG ${moduleName}.${String(name)}`,
        data,
        others,
      )
      event.emit(`${moduleName}.${String(name)}`, data, ...others)
    },
    /** 监听事件 */
    on: function on<T extends keyof E>(
      name: T,
      callback: (data: E[T]) => void,
    ): void {
      event.on(`${moduleName}.${String(name)}`, callback)
    },
    /** 取消监听事件 */
    off: function off<T extends keyof E>(
      name: T,
      callback?: (data: E[T]) => void,
    ): void {
      event.off(`${moduleName}.${String(name)}`, callback)
    },
    /** 一次性监听事件 */
    once: function once<T extends keyof E>(
      name: T,
      callback: (data: E[T]) => void,
    ): void {
      const wrapCallback = (data) => {
        callback(data)
        this.off(name, wrapCallback)
      }
      this.on(name, wrapCallback)
    },
  }
}

export const Evt = {
  AppTitle:  getModuleEvent('AppTitle'),
  AppCard: getModuleEvent('AppCard'),
  AppNavbar: getModuleEvent('AppNavbar'),
}

// @ts-ignore
window.Evt = Evt
