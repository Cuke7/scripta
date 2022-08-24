<template>
    <div class="h-full pr-[2px] w-full sm:w-1/2">
        <textarea class="h-full w-full bg-[#03061f] text-white p-16 text-lg overscroll-contain" v-model="text" />
    </div>
</template>

<script lang="ts" setup>
const text = useState("text", () => "# Bonjour\n\nSome reasons why markdown is **awesome**:\n\n- easy to write,\n- easy to *style*.");
</script>

<style scoped>
textarea {
    outline: none;
    resize: none;
}
</style>
