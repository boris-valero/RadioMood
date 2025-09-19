<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="howfeel">Comment vous sentez-vous aujourd'hui ?</label>
      <input id="howfeel" v-model="answer" type="text" autocomplete="off" />
      <button type="submit">Envoyer</button>
    </form>
    <div v-if="sadSong">
      <h3>Voici une chanson triste pour vous :</h3>
      <p><strong>{{ sadSong.title_TRACK }}</strong> - {{ sadSong.artist_TRACK }}</p>
      <a :href="sadSong.url_TRACK" target="_blank">Écouter</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const answer = ref('')
const sadSong = ref(null)

async function handleSubmit() {
  if (answer.value.trim().toLowerCase().includes('triste')) {
    // Appelle l’API pour une chanson triste
    const res = await fetch('http://localhost:3000/api/sad-song')
    if (res.ok) {
      sadSong.value = await res.json()
    } else {
      sadSong.value = { title_TRACK: "Aucune chanson triste trouvée.", artist_TRACK: "", url_TRACK: "#" }
    }
  } else {
    sadSong.value = null
  }
}
</script>