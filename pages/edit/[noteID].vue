<template>
    <div class="flex-1 w-full flex mb-[10px] bg-gradient-to-r from-green-400 to-blue-500">
        <Editor></Editor>
        <Render></Render>
    </div>
</template>

<script lang="ts" setup>
const user = useState("user");

// function toggleHelper() {
//     console.log("HEY");
//     // editor.value.$refs.editorDiv.classList.toggle("hidden");
//     // render.value.$refs.renderDiv.classList.toggle("hidden");
//     // eye.value.classList.toggle("hidden");
//     // pen.value.classList.toggle("hidden");
// }
</script>

<style>
/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
