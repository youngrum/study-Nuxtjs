import { getAccessorType } from 'typed-vuex'
import * as hoge from '@/store/hoge'

// これらは型推論に必要のため、空でも定義しておく
export const state = () => {
    return {}
}
export const getters = {}
export const mutations = {}
export const actions = {}
export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
  // 作成したモジュールはimportして、ここに追加していく
  modules: {
    hoge,
  },
})