import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

export type Sample =  {
  id: string | null
  name: string | null
}

export type SampleState =  {
  sample: Sample
}

@Module ({ stateFactory: true, namespaced: true, name: 'sample' })
export default class SampleModule extends VuexModule implements SampleState {

  // stateを定義
  public sample: Sample = {
    id: null,
    name: null,
  }

  // mutationを定義
  @Mutation
  private setSample (payload: Sample) {
    this.sample = {
      id: payload.id,
      name: payload.name,
    }
  }

  // actionを定義
  @Action ({ rawError: true })
  public async updateSample (data: Sample) {
    this.setSample(data)
  }
}