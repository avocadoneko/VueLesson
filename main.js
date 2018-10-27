new Vue({
  el: '#app',
  data: {
    // あらかじめ空リストを用意しておく
    list: []
  },
  created: function () {
    axios.get('http://www.geocities.jp/tigre0815n/list.json').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }
})
