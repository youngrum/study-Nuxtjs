// 自作モジュールの作成
// デコレータを使用してモジュールであることや、Mutation・Actionメソッドであることを伝える
// クラス内でなら、他のプロパティの要素にはthisでアクセス可能

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators' // vuex-module-decoratorsからクラスオブジェクトをインポート
import { $axios } from '~/utils/api' // axiosなどはNuxtアプリケーションインスタンスにアクセスするための処理 ※vuexのモジュールからはNuxtアプリケーションインスタンスにアクセス不可のため
import { Todo } from '~/models/Todo' //Todoモジュールのインポート


// モジュールクラス(class Todos extends VuexModule)を宣言 ※1
// ※1 宣言前に@moduleデコレータを付与する必要がある
@Module({ 
  name: 'todos',
  stateFactory: true, // stateFactory: trueを渡すことで、Nuxt.jsのモジュールであることを宣言
  namespaced: true
})
export default class Todos extends VuexModule {
  public todos: Todo[] = []

  /**
   * Todo を追加する
   * @param text Todo テキスト
   */
  @Mutation
  add(text: string) {
    const todos: Todo[] = this.todos
    // Todo を作成
    const todo: Todo = {
      // リストがない場合、id = 0
      // リストがある場合、id = リストの最終要素の id + 1
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      text,
      done: false
    }
    // リストに Todo を追加
    this.todos.push(todo)
  }
  /**
   * Todo を削除する
   * @param todo 削除する Todo インスタンス
   */
  @Mutation
  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }

  /**
   * Todo の done（完了状態）を切り替える
   * @param todo 完了状態を切り替える対象の Todo インスタンス
   */
  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done
  }

}