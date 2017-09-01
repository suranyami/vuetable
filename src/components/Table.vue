<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td>{{item.name}}</td>
        <td class="number">{{item.price}}</td>
        <td class="number">{{item.quantity}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
      items: [
        {
          name: 'Widget',
          price: '$1.23',
          quantity: 33
        },
        {
          name: 'Banana',
          price: '$0.88',
          quantity: 154
        },
        {
          name: 'Throndibulator',
          price: '$88.33',
          quantity: 99
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td.number {
  text-align: right;
}
</style>
