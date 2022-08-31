<template>
    <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <div class="bg-[#03061f] flex flex-col h-screen">
                <div class="flex justify-between content-center p-4">
                    <label for="my-drawer" class="drawer-button my-auto"> <Drawer /></label>
                    <div class="text-white text-4xl my-auto">Scripta</div>
                    <div class="flex bg-[#03061f] justify-between content-center">
                        <img v-if="user" :src="user.photoURL" class="w-10 h-10 rounded-full" referrerpolicy="no-referrer" />
                        <button v-else @click="logIn()" class=""><User class="w-10 h-10" /></button>
                    </div>
                    <!-- <button @click="writeDataTest" class="text-white">Test</button> -->
                </div>
                <slot />
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-[#03061f] text-white text-base">
                <Note class="w-24 h-24 mx-auto my-8" />
                <li v-for="(key, index) in Object.keys(notes)" :key="index">
                    <NuxtLink :href="'/edit/' + key">{{ notes[key].title }}</NuxtLink>
                </li>
                <li>
                    <button @click="logOut" v-if="user" class="bg-red-800 rounded-lg text-white font-bold mt-20 mx-auto">Log out</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const user = useState("user");
const notes = useState("notes");
notes.value = {};

onAuthStateChanged(auth, (user2) => {
    if (user2) {
        user.value = user2;
        console.log("(authStateChanged) Logged in, uid: ", user.value);
        readData("notes/" + "YMM0PZhfPZNH3EAAQYiFVfbpKfB3").then((val) => {
            console.log(val);
            notes.value = val;
        });
    } else {
        user.value = null;
        console.log("(authStateChanged) Logged out");
    }
});
</script>

<style>
body {
    background-color: #282a36;
}
</style>
