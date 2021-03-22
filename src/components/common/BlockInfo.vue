<template>
  <!-- <div class="page">
    <div v-for="item in baseData" class="main">
      <div class="logo">
        <img src="../../assets/osIcons/windows.png" />
      </div>
      <div class="content">
        <div class="content-top">
          <span>{{item.name}}</span>
          <span>{{item.status}}</span>
          <span>{{item.ip}}</span>
          <span>{{item.location}}</span>
        </div>
        <div class="content-bottom">
          <div class="icon-plus add" @click="addTag"></div>
          <div v-for="btn in item.resources">
            <div class="btn-tag">
              <span>{{btn}}</span>
              <span class="icon-trash"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapState } from 'vuex';
// import '../../assets/fontIcons/fonts.css'

export default {
  name: 'BlockInfo',
  data () {
    return {
    }
  },
  props: {
    // userInput: {
    //   type:  String,
    //   default: ''
    // }
  },
  components: {
  },
  computed: mapState({
    // baseData: state => state.baseData,
  }),
  mounted () {
  },
  methods: {
    
  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
</style>
