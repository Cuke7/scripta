<template>
    <div ref="editor" class="sm:mr-[1px] sm:ml-[2px] mt-[2px] h-full sm:w-1/2 sm:block w-full hidden">
        <div class="bg-[#03061f] h-full flex flex-col">
            <div class="flex justify-between align-center p-4 sm:px-16">
                <input type="text" class="w-64 my-auto bg-transparent text-white text-xl" v-model="noteTitle" />
                <div ref="eye" class="my-auto">
                    <Eye @click="toggle" />
                </div>
            </div>
            <hr class="bg-white sm:mx-16 h-[2px] mx-4" />

            <textarea class="h-full w-full bg-[#03061f] text-white p-4 sm:p-16 sm:pt-8 text-base sm:text-lg overscroll-contain font-mono" v-model="text"></textarea>
        </div>
    </div>
</template>

<script lang="ts" setup>
const noteTitle = useState("noteTitle", () => "My first note");
const text = useState("text");
text.value = "# Hello\n\nSome reasons why markdown is **awesome**:\n\n- easy to write,\n- easy to *style*.";

const editor = useState("editor", () => {
    ref(null);
});
const render = useState("render");
function toggle() {
    editor.value.classList.toggle("hidden");
    render.value.classList.toggle("hidden");
}
</script>
