var app = new Vue ({
  el: '#app',
  data: {
    name: 'キマイラ',
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 300 },
      { id: 3, name: 'トロイ', hp: 2 }
    ]
  },
  methods: {
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0)

      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },

    doRemove: function(index) {
      this.list.splice(index, 1)
    }
  }
})
