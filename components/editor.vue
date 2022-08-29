<template>
    <div ref="editorDiv" class="sm:mr-[1px] mt-[2px] h-full sm:w-1/2 sm:block w-full hidden">
        <textarea class="h-full w-full bg-[#03061f] text-white p-4 sm:p-16 text-base sm:text-lg overscroll-contain font-mono" v-model="text"></textarea>
    </div>
</template>

<script lang="ts" setup>
const text = useState("text");
</script>
