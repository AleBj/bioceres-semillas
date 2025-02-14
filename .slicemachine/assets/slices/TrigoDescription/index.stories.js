import MyComponent from '../../../../slices/TrigoDescription';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TrigoDescription'
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
      mock: {"__TYPE__":"SharedSliceContent","variation":"default","primary":{"content":{"__TYPE__":"StructuredTextContent","value":[{"type":"paragraph","content":{"text":"Nisi eiusmod nostrud laborum tempor adipisicing adipisicing proident sunt elit id. Excepteur commodo occaecat Lorem non fugiat laborum consequat occaecat sit."}}]}},"items":[{"__TYPE__":"GroupItemContent","value":[]}],"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
