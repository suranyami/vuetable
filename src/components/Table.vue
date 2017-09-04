<template lang="pug">
  b-table(striped bordered hover :items="items" :fields="fields")
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
      fields: {
        name: {
          class: 'text',
          label: 'Name',
          sortable: true
        },
        price: {
          class: 'number',
          label: 'Price',
          sortable: true
        },
        quantity: {
          class: 'number',
          label: 'Quantity',
          sortable: true
        }
      },
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
<style lang="scss">
td, th {
  &.text {
    text-align: left;
  }


  &.number {
    text-align: right;
  }
}

</style>
