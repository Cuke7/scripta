<template>
    <div ref="render" class="sm:ml-[1px] mt-[2px] h-full sm:w-1/2 sm:block w-full">
        <div class="bg-[#03061f] h-full flex flex-col">
            <div class="flex justify-between align-center p-4 sm:px-16">
                <div class="text-white text-xl my-auto w-64">
                    {{ noteTitle }}
                </div>
                <div ref="pen" class="my-auto">
                    <Pen @click="toggle" />
                </div>
            </div>
            <hr class="bg-white sm:mx-16 h-[2px] mx-4" />

            <div class="bg-[#03061f] p-4 sm:p-16 sm:pt-8 prose prose-lg !prose-invert max-w-none w-full h-full overscroll-contain" v-html="html"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
const text = useState("text");
const noteTitle = useState("noteTitle");
const render = useState("render", () => {
    ref(null);
});
const editor = useState("editor");
const html = computed(() => {
    return marked.parse(text.value);
});

function toggle() {
    editor.value.classList.toggle("hidden");
    render.value.classList.toggle("hidden");
}
</script>
