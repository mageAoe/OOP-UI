<template>
  <oop-foo :msg="msg"></oop-foo>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello custom component')
</script>
