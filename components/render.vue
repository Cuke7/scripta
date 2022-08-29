<template>
    <div ref="renderDiv" class="sm:ml-[1px] mt-[2px] h-full hidden sm:w-1/2 sm:block w-full">
        <div class="bg-[#03061f] p-4 sm:p-16 prose prose-lg !prose-invert max-w-none w-full h-full overscroll-contain" v-html="html"></div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";

const text = useState("text");
const html = computed(() => {
    return marked.parse(text.value);
});
</script>
