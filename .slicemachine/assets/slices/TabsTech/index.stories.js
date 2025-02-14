import MyComponent from '../../../../slices/TabsTech';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TabsTech'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"label_tab":"along","titulo":"up","texto":"anything","duracion":"class","imagen":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea"},"color":"#d3393f"}],"primary":{},"slice_type":"tabs_tech","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
