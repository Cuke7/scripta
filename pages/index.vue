<template>
    <!-- <div class="bg-[#03061f] flex justify-end content-center">
            <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-lg px-4 py-2 font-bold rounded-lg m-8">Publish</button>
        </div>
        <div class="flex bg-red-400">
            <Editor />
            <Render />
        </div> -->
    <!-- <div class="bg-red-400 w-screen h-screen flex-col">
        <div class="bg-[#03061f] flex justify-end content-center h-32">
            <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-lg px-4 py-2 font-bold rounded-lg m-8">Publish</button>
        </div>
        <div class="bg-green-400 w- h-full flex-1">
            test
        </div>
    </div> -->
    <div class="bg-[#03061f] flex flex-col h-screen">
        <div class="flex bg-[#03061f] justify-end content-center">
            <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-lg px-4 py-2 font-bold rounded-lg m-8">Publish</button>
        </div>
        <div class="flex-1 w-full flex p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <Editor />
            <Render />
            <!-- <div class="bg-blue-400 h-full w-1/2 p-2">test</div>
            <div class="bg-blue-400 h-full w-1/2 p-2">test</div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// const firebaseConfig = {
//     apiKey: "AIzaSyD7s3E9-BLTfiX-knOrbnVt-uIowXkoLfY",
//     authDomain: "mdtor-7e804.firebaseapp.com",
//     projectId: "mdtor-7e804",
//     storageBucket: "mdtor-7e804.appspot.com",
//     messagingSenderId: "265431773947",
//     appId: "1:265431773947:web:ccce8930e698b90472365e",
//     databaseURL: "https://mdtor-7e804-default-rtdb.europe-west1.firebasedatabase.app",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
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
