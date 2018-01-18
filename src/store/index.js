import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    homeForm: {
      name: "",
      addr: [],
      addrDetail: "",
      roomNumber: 0,
      remark: "",
      room: [],
      electricityFeeMode: "null",
      electricityFeePerDegree: 0,
      waterFeeMode: "null",
      waterFeePerTon: 0,
      gasFeeMode: "null",
      gasFeePerTon: 0,
      webFeeMode: "null",
      webFeePerMonth: 0,
      otherFeePerMonth: 0
    }
  }
});

export default store
