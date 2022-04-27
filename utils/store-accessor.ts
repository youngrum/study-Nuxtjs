// 作成したモジュールをインポートしてstoreに登録(エクスポート)
// 新たにモジュールを作成するたびに、作成したモジュールをこのファイルに追加

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todo from '~/store/todo'

let TodoStore: Todo
function initialiseStores(store: Store<any>): void {
  TodoStore = getModule(Todo, store)
}

export { initialiseStores, TodoStore}