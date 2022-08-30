<template>
    <div ref="renderDiv" class="sm:ml-[1px] mt-[2px] h-full sm:w-1/2 sm:block w-full">
        <div class="bg-[#03061f] h-full flex flex-col">
            <div class="text-white text-xl py-2 w-auto ml-4 mr-auto sm:ml-16 mt-2">
                {{ noteTitle }}
            </div>
            <hr class="bg-white h-[2px] ml-4 mr-32 sm:ml-16" />
            <div class="bg-[#03061f] p-4 sm:p-16 sm:pt-8 prose prose-lg !prose-invert max-w-none w-full h-full overscroll-contain" v-html="html"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
const text = useState("text");
const noteTitle = useState("noteTitle");
const html = computed(() => {
    return marked.parse(text.value);
});
</script>
