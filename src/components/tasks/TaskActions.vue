<template>
  <div class="task-actions">
    <button @click="emit('edit')" class="btn btn-sm btn-circle btn-outline-secondary me-1">
        <IconPencil />
    </button>
    <button @click="emit('remove')" class="btn btn-sm btn-circle btn-outline-danger">
        <IconTrash />
    </button>
</div>
</template>
<script setup>
import IconPencil from "../icons/IconPencil.vue";
import IconTrash from "../icons/IconTrash.vue"
const emit = defineEmits(['edit', 'remove'])
</script>
<style scoped>
</style>