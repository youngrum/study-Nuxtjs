// 作成したモジュールをインポートしてstoreに登録(エクスポート)
// 新たにモジュールを作成するたびに、作成したモジュールをこのファイルに追加

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

// eslint-disable-next-line import/no-mutable-exports ← 必要であれば
let todosStore: Todos
// let someStore: Something

function initializeStores(store: Store<any>): void {
  todosStore = getModule(Todos, store)
  // someStore = getModule(Something, store)
}

export { initializeStores, todosStore /*, someStore*/ }