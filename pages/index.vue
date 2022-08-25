<template>
    <div class="bg-[#03061f] flex flex-col h-screen">
        <div class="flex bg-[#03061f] justify-end content-center">
            <div v-if="user">
                <button @click="logOut" class="bg-red-800 text-white text-lg px-4 py-2 font-bold rounded-lg my-8">Log out</button>
            </div>
            <div v-else>
                <button @click="logIn" class="bg-red-800 text-white text-lg px-4 py-2 font-bold rounded-lg my-8">Log in</button>
            </div>
            <button @click="toggle" class="sm:hidden bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-lg px-4 py-2 font-bold rounded-lg my-8">Switch views</button>
            <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-lg px-4 py-2 font-bold rounded-lg m-8">Publish</button>
        </div>
        <div class="flex-1 w-full flex p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <div ref="editor" class="h-full pr-[2px] sm:w-1/2 sm:block w-full">
                <textarea class="h-full w-full bg-[#03061f] text-white p-16 text-lg overscroll-contain" v-model="text" />
            </div>
            <div ref="render" class="h-full pl-[2px] hidden sm:w-1/2 sm:block w-full">
                <div class="bg-[#03061f] p-16 prose prose-lg prose-invert max-w-none w-full h-full overscroll-contain" v-html="html"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

// Markdown parse
const text = ref("# Bonjour\n\nSome reasons why markdown is **awesome**:\n\n- easy to write,\n- easy to *style*.");
const html = computed(() => {
    return marked.parse(text.value);
});
const render = ref(null);
const editor = ref(null);
function toggle() {
    editor.value.classList.toggle("hidden");
    render.value.classList.toggle("hidden");
}

const firebaseConfig = {
    apiKey: "AIzaSyD7s3E9-BLTfiX-knOrbnVt-uIowXkoLfY",
    authDomain: "mdtor-7e804.firebaseapp.com",
    databaseURL: "https://mdtor-7e804-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mdtor-7e804",
    storageBucket: "mdtor-7e804.appspot.com",
    messagingSenderId: "265431773947",
    appId: "1:265431773947:web:ccce8930e698b90472365e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = "fr";
const provider = new GoogleAuthProvider();
const user = ref(null);

onAuthStateChanged(auth, (user2) => {
    if (user2) {
        user.value = user2;
        console.log("Logged in");
    } else {
        user.value = null;
        console.log("Logged out");
    }
});

function logOut() {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
}

function logIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
            user.value = result.user;
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
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

textarea {
    resize: none;
}
</style>
