<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <div class="bg-[#03061f] flex flex-col h-screen">
                <div class="flex bg-[#03061f] justify-between content-center p-4">
                    <div class="text-white text-4xl">Scripta</div>
                    <div v-if="user">
                        <button @click="logOut" class="sm:mr-8 bg-red-800 text-white px-4 py-2 font-bold rounded-lg">Log out</button>
                    </div>
                    <div v-else>
                        <button @click="logIn" class="sm:mr-8 bg-red-800 text-white px-4 py-2 font-bold rounded-lg">Log in with Google</button>
                    </div>
                </div>
                <hr class="bg-gradient-to-r from-green-400 to-blue-500 h-[2px] border-0" />
                <div class="flex justify-between py-2 my-4">
                    <div class="flex content-center">
                        <label for="my-drawer" class="drawer-button mx-4 my-auto"> <Drawer /></label>
                        <input type="text" class="bg-transparent border-2 rounded-lg text-white text-lg p-2 w-auto" v-model="noteTitle" />
                    </div>
                    <Eye @click="toggle" class="my-auto mx-4 sm:hidden" />
                    <!-- <button @click="writeUserData" class="mr-4 sm:mr-8 bg-gradient-to-r from-green-400 to-blue-500 sm:hover:from-pink-500 sm:hover:to-yellow-500 text-white px-4 py-2 font-bold rounded-lg">
                        <span v-if="saved">Saved</span>
                        <span v-else>Save</span>
                    </button> -->
                </div>
                <div class="flex-1 w-full flex mb-2 bg-gradient-to-r from-green-400 to-blue-500">
                    <Editor ref="editor"></Editor>
                    <Render ref="render"></Render>
                </div>
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-[#03061f] text-white text-lg">
                <Note class="w-24 h-24 mx-auto my-16" />
                <!-- Sidebar content here -->
                <li><a>My first note</a></li>
                <li><a>Another saved note</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref as refdB, set as setdB } from "firebase/database";

// Markdown parse
const noteText = useState("text");
noteText.value = "# Hello\n\nSome reasons why markdown is **awesome**:\n\n- easy to write,\n- easy to *style*.";
const noteTitle = ref("My first note");
const render = ref(null);
const editor = ref(null);
function toggle() {
    editor.value.$refs.editorDiv.classList.toggle("hidden");
    render.value.$refs.renderDiv.classList.toggle("hidden");
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
        console.log("Logged in, uid: ", user.value.uid);
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

function writeUserData() {
    const db = getDatabase();
    setdB(refdB(db, "notes/" + user.value.uid), {
        title: "my note",
        text: noteText.value,
    }).then(() => {
        saved.value = true;
    });
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
