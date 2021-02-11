<template>
  <div class="media">
    <v-runtime-template :template="dom" ref="dom"></v-runtime-template>
    <div class="contain">
      <h1>{{ mediaItem.name }}</h1>
      <div class="preview">
        <video v-if="mediaItem.categories == 'video'" :src="mediaItem.preview_link" loop controls/>
        <img v-else :src="mediaItem.preview_link" />
      </div>
      <p>
        Uploaded by {{ mediaItem.author }}
        <span v-for="tag in mediaItem.tags" :key="tag" class="tagPill">
          {{ tag }}
        </span>
      </p>
      <a :href="mediaItem.download_link" download><button class='mediaButt'><svg style="margin-bottom: -6px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg> <span>Download</span></button></a>
    </div>
  </div>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";
import HUBITEMS from "../assets/hubItems.json";

export default {
  name: "Media",
  components: {
    VRuntimeTemplate,
  },
  data: function () {
    return {
      dom: "",
      mediaItem: "",
      hubList: [],
    };
  },
  mounted: function () {
    this.hubList = HUBITEMS;
    console.log("Route", this.$route);
    var mediaItem = this.$route.params.id;
    console.log(mediaItem);

    var hubList = this.hubList;
    var item;
    for (var i = 0; i < hubList.length; i++) {
      if (hubList[i].id == mediaItem) {
        item = hubList[i];
        break;
      }
      console.log(hubList[i].id);
    }

    console.log(item);
    this.mediaItem = item;
  },
  methods: {
    download(){
      console.log("Downloading");
    }
  }
};
</script>

<style scoped>
.tagPill {
  background-color: #acacac;
  font-weight: 700;
  color: white;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 0.5em;
  font-size: 0.7em;
  border-radius: 25px;
}

.preview {
  width: 100%;
}

.preview img {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin: auto auto;
}

.preview video {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin: auto auto;
}

.mediaButt{
    min-width: 200px;
    padding: 0.694rem;
    font-size: 1em;
    transition: 0.3s all;
    cursor: pointer;
    margin: 0.402rem;
    border-radius: 0.5ch;
    background: #459f29;
    color: #FFF;
    border: none;
}
</style>