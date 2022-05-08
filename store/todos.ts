// 自作モジュールの作成
// デコレータを使用してモジュールであることや、Mutation・Actionメソッドであることを伝える
// クラス内でなら、他のプロパティの要素にはthisでアクセス可能

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators' // vuex-module-decoratorsからクラスオブジェクトをインポート
import { $axios } from '~/utils/api' // axiosなどはNuxtアプリケーションインスタンスにアクセスするための処理 ※vuexのモジュールからはNuxtアプリケーションインスタンスにアクセス不可のため
import { Todo_mod } from '~/models/Todo' //Todoモジュールのインポート


// モジュールクラス(class Todos extends VuexModule)を宣言 ※1
// ※1 宣言前に@moduleデコレータを付与する必要がある
@Module({ 
  name: 'todos',
  stateFactory: true, // stateFactory: trueを渡すことで、Nuxt.jsのモジュールであることを宣言
  namespaced: true // モジュールに名前空間を付与 state, getters, actions, mutationsには自動的に自分が属しているモジュールの名前が与えられる
})
export default class Todos extends VuexModule {
  public list_todos: Todo_mod[] = [] // todoリスト自体を作成したTodoモジュール(独自の型)として宣言 

  /**
   * Todo を追加する
   * @param id Todo id
   * @param text Todo テキスト
   * @param done Todoの完了フラグ
   */
  @Mutation
  add(text: string) {
    const todos = this.list_todos //操作対象のtodoリストを（Todoモジュール(独自の型))として定数宣言 ※list_todosを代入してるから型宣言不要
    // Todo を作成 (add関数の処理)
    const todo: Todo_mod = { // 定数todoは list_todosを加工するための配列なので Todoモジュール(独自の型)として宣言する
      // リストがない場合、id = 0
      // リストがある場合、id = リストの最終要素の id + 1 にして、textとdoneプロパティを返す
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      text,
      done: false
    }
    // リストに addで追加されたtodoリスト(配列) を追加
    this.list_todos.push(todo)
  }
  /**
   * Todo を削除する
   * @param todo 削除する Todo インスタンス
   */
  @Mutation
  remove(todo: Todo_mod) { //Todoモジュール(独自の型)宣言された配列がわたるので、引数は "todo: Todo_mod"
    this.list_todos.splice(this.list_todos.indexOf(todo), 1)
  }

  /**
   * Todo の done（完了状態）を切り替える
   * @param todo 完了状態を切り替える対象の Todo インスタンス
   */
  @Mutation
  toggle(todo: Todo_mod) { //Todoモジュール(独自の型)宣言された配列がわたるので、引数は "todo: Todo_mod"
    todo.done = !todo.done
  }

}