import MyComponent from '../../../../slices/PerfilSanitario';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PerfilSanitario'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"titulo":"eaten","caracteristica":"dream","color":"#b1c1f2"}],"primary":{"ficha_tecnica":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"slice_type":"perfil_sanitario","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
