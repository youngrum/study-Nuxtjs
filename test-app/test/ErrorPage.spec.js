import { mount } from "@vue/test-utils";
import error from "@/layouts/error";

describe("ErrorPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(error, {
      propsData: {error: {
          type: Object,
          default: null
        }}
    });
  })

  it("404 success", () => {

    expect(wrapper.vm.exceptionMatch(404).message).toEqual("not found")
  })

  it("500 success", () => {

    expect(wrapper.vm.exceptionMatch(500).message).toEqual("system out...")
  })
})
