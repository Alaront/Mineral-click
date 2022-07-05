<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "Hello",
    };
  },
});
</script>

<style src="@/assets/style/global.sass" lang="sass"></style>
