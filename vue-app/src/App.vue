<template>
  <div>
    <h3>Vue App test</h3>
    <Content />
    <Button @click="emitEvent()" />
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

export default {
  components: {
    Content: defineAsyncComponent(() => import("./components/Content")),
    Button: defineAsyncComponent(() => import("./components/Button")),
  },

  methods: {
    emitEvent: function () {
      var event = new CustomEvent("incr", { bubbles: true });
      document.dispatchEvent(event);
    },
  },

  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },

};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>