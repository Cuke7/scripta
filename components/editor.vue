<template>
    <div ref="editorDiv" class="sm:mr-[1px] sm:ml-[2px] mt-[2px] h-full sm:w-1/2 sm:block w-full hidden">
        <div class="bg-[#03061f] h-full flex flex-col">
            <input type="text" class="bg-transparent border-b-2 text-white text-xl py-2 w-auto ml-4 mr-32 sm:ml-16 mt-2" v-model="noteTitle" />
            <textarea class="h-full w-full bg-[#03061f] text-white p-4 sm:p-16 sm:pt-8 text-base sm:text-lg overscroll-contain font-mono" v-model="text"></textarea>
        </div>
    </div>
</template>

<script lang="ts" setup>
const noteTitle = useState("noteTitle", () => "My first note");
const text = useState("text");
</script>
