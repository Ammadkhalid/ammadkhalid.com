<template>
  <div>
    <Navbar></Navbar>
    <div class="text-white p-6">
        <div class="text-3xl">
          Hey Visitor, <span class="text-blue-900">I'm-</span><br>
          <div id="typewriter"></div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar.vue";
import Typewriter from 'typewriter-effect/dist/core';
import { IMText } from "@/config";


export default {
  name: 'Index',
  components: {
    Navbar,
  },
  mounted() {
    new Typewriter('#typewriter', {
      strings: [
        ...IMText
      ],
      autoStart: true,
    });
  },
}
</script>


<style lang="postcss">
</style>