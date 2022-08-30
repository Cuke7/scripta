<template>
    <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <div class="bg-[#03061f] flex flex-col h-screen">
                <div class="flex justify-between content-center p-4">
                    <label for="my-drawer" class="drawer-button my-auto"> <Drawer /></label>
                    <div class="text-white text-4xl my-auto">Scripta</div>
                    <div class="flex bg-[#03061f] justify-between content-center">
                        <img v-if="user" :src="user.photoURL" class="w-12 h-12 rounded-full" referrerpolicy="no-referrer" />
                        <button v-else @click="logIn" class=""><User class="w-10 h-10" /></button>
                    </div>
                    <div ref="pen" class="sm:hidden my-auto">
                        <Pen @click="toggle" />
                    </div>
                    <div ref="eye" class="hidden my-auto sm:hidden">
                        <Eye @click="toggle" />
                    </div>
                </div>
                <div class="flex-1 w-full flex mb-[10px] bg-gradient-to-r from-green-400 to-blue-500">
                    <Editor ref="editor"></Editor>
                    <Render ref="render"></Render>
                </div>
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-[#03061f] text-white text-base">
                <Note class="w-24 h-24 mx-auto my-8" />
                <li><a>My first note</a></li>
                <li><a>Another saved note</a></li>
                <li>
                    <button @click="logOut" v-if="user" class="bg-red-800 rounded-lg text-white font-bold mt-20 mx-auto">Log out</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref as refdB, set as setdB } from "firebase/database";

// Markdown parse
const text = useState("text");
text.value = "# Hello\n\nSome reasons why markdown is **awesome**:\n\n- easy to write,\n- easy to *style*.";
const render = ref(null);
const editor = ref(null);
const eye = ref(null);
const pen = ref(null);
function toggle() {
    editor.value.$refs.editorDiv.classList.toggle("hidden");
    render.value.$refs.renderDiv.classList.toggle("hidden");
    eye.value.classList.toggle("hidden");
    pen.value.classList.toggle("hidden");
}

const firebaseConfig = {
    apiKey: "AIzaSyCpDieJh7SInMrISXMFFO7xoUIM4Dzg5dA",
    authDomain: "scoriae.firebaseapp.com",
    projectId: "scoriae",
    storageBucket: "scoriae.appspot.com",
    messagingSenderId: "107441951302",
    appId: "1:107441951302:web:e8d88f5f6f731817c6f047",
    databaseURL: "https://scoriae-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = "fr";
const provider = new GoogleAuthProvider();
let user = ref(null);

onAuthStateChanged(auth, (user2) => {
    if (user2) {
        user.value = user2;
        console.log("Logged in, uid: ", user.value);
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

const database = getDatabase(app);

// watch(text, () => {
//     console.log("Write")
//     writeUserData();
// });

function writeUserData() {
    const db = getDatabase();
    if (user.value) {
        setdB(refdB(db, "notes/" + user.value.uid), {
            title: "my note",
            text: text.value,
        }).then(() => {
            saved.value = true;
        });
    }
}

const saved = ref(false);
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
    outline: none;
}

input {
    outline: none;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
