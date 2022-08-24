<template>
    <div class="h-full pl-[2px] hidden sm:w-1/2 sm:block">
        <div class="bg-[#03061f] p-16 prose prose-lg prose-invert max-w-none w-full h-full overscroll-contain" v-html="html"></div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
let text = useState("text");

const html = computed(() => {
    return marked.parse(text.value);
});
</script>
