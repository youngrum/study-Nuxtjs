// todoモジュール作成
// デコレータを使用してモジュールであることや、Mutation・Actionメソッドであることを伝える
// クラス内でなら、他のプロパティの要素にはthisでアクセス可能

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators' // vuex-module-decoratorsからクラスオブジェクトをインポート
import { $axios } from '~/utils/api' // axiosなどはNuxtアプリケーションインスタンスにアクセスするための処理 ※vuexのモジュールからはNuxtアプリケーションインスタンスにアクセス不可のため

// モジュールで使用する独自の型を宣言
interface Todo  {
  id?: Number
  title: String
  description: String
  done: Boolean
}

// モジュールクラス(class Todos extends VuexModule)を宣言 ※1
// ※1 宣言前に@moduleデコレータを付与する必要がある
@Module({ 
  name: 'todo',
  stateFactory: true, // stateFactory: trueを渡すことで、Nuxt.jsのモジュールであることを宣言
  namespaced: true
})
export default class Todos extends VuexModule {
  private todos: Todo[] = [] // クラスプロパティとしてstateを宣言 Vuexの流儀の従うのなら、外部からstateにアクセスさせたくないのでprivateで宣言

  public get getTodos() { // stateを取得するgetters関数宣言
    return this.todos
  }

  public get getTodo() {
    return (id: Number) => this.todos.find((todo) => todo.id === id)
  }

  public get getTodoCount() {
    return this.todos.length
  }

// Mutation = Vuex のストアの状態を変更するための処理
// Mutationは同期処理でなければならない = Actionとの違い
  @Mutation
  private add(todo: Todo) {
    this.todos.push(todo)
  }

  @Mutation
  private remove(id: Number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  @Mutation set(todos: Todo[]) {
    this.todos = todos
  }
  

// Mutationをコミットする
// Actionは非同期処理も可能 ※Mutationで複数の状態の変更が非同期に行われた場合に挙動が予測不能になるのを防ぐという意図がある
  @Action({ rawError: true })
  public async fetchTodos() {
    const { data } = await $axios.get<Todo[]>('https://httpbin.org/get')
    this.set(data)
  }

  @Action({ rawError: true })
  public async createTodo(payload: Todo) {
    const { data } = await $axios.post<Todo>('/api/todo', payload)
    this.add(data)
  }

  @Action({ rawError: true })
  async deleteTodo(id: Number) {
    await $axios.delete(`/api/todo/${id}`)
    this.remove(id)
  }
}