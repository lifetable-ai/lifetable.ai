import { EventEmitter } from 'eventemitter3'

export interface IStore {
  [propName: string]: any
}

class StoreConstruct extends EventEmitter {
  store: IStore = {
    'canvas.operateMode': 'editing',
  }

  get(name) {
    return this.store[name]
  }

  set(name, value) {
    const pre = this.store[name]
    this.store[name] = value
    this.emit(name, value, pre)
  }

  // @ts-ignore
  on(
    name: any,
    fn: (value, preValue) => void,
  ) {
    super.on(name, fn)
  }

  // @ts-ignore
  once(
    name: any,
    fn: (value, preValue) => void,
  ) {
    super.once(name, fn)
  }
}
const store = new StoreConstruct()
// @ts-ignore
window.store = store
export default store

interface StoreInfo {
  AppTitle: {
    store: any
    name: 'AppTitle'
  }
  AppCard: {
    store: any
    name: 'AppCard'
  }
}

export const Store = {
  AppTitle: getModuleEvent<'AppTitle'>('AppTitle'),
  AppCard: getModuleEvent<'AppCard'>('AppCard'),
}

function getModuleEvent<key extends keyof StoreInfo>(
  moduleName: StoreInfo[key]['name'],
) {
  return {
    set: function set<T extends keyof StoreInfo[key]['store']>(
      name: T,
      data?: StoreInfo[key]['store'][T],
    ): void {
      store.set(`${moduleName}.${String(name)}`, data)
    },
    on: function on<T extends keyof StoreInfo[key]['store']>(
      name: T,
      callback: (
        data: StoreInfo[key]['store'][T],
        preData: StoreInfo[key]['store'][T],
      ) => void,
    ): void {
      store.on(`${moduleName}.${String(name)}`, callback)
    },
    once: function once<T extends keyof StoreInfo[key]['store']>(
      name: T,
      callback: (
        data: StoreInfo[key]['store'][T],
        preData: StoreInfo[key]['store'][T],
      ) => void,
    ): void {
      store.once(`${moduleName}.${String(name)}`, callback)
    },
    off: function on<T extends keyof StoreInfo[key]['store']>(
      name: T,
      callback: (
        data: StoreInfo[key]['store'][T],
        preData: StoreInfo[key]['store'][T],
      ) => void,
    ): void {
      store.off(`${moduleName}.${String(name)}`, callback)
    },
    get: function get<T extends keyof StoreInfo[key]['store']>(
      name: T,
    ): StoreInfo[key]['store'][T] {
      return store.get(`${moduleName}.${String(name)}`)
    },
  }
}

// @ts-ignore
window.Store = Store

// export function useStore<T>(
//   key: StoreKey,
//   defaultValue: T = store.get(key) as T,
// ): [T, (data: T) => void] {
//   const [state, setState] = useState<T>(store.get(key) || defaultValue)
//   useEffect(() => {
//     const setter = (data) => {
//       setState(data)
//     }
//     store.on(key, setter)
//     return () => {
//       store.off(key, setter)
//     }
//   }, [])
//   const set = (data) => {
//     store.set(key, data)
//   }
//   return [state, set]
// }
