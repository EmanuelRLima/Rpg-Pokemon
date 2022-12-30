<template>
  <div>
    <div
      v-show="layout === 'landing'"
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
    ></div>
  
      <router-view />
    
  </div>
</template>
<script>

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
  },  
  data() {
    return {
    };
  },
  computed: {
    ...mapState([]),
  },
  mounted() {
  },
  methods: {
  
  },
};
</script>
