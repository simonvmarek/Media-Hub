<template>
  <div class="home">
    <div class="contain">
     <!-- <h1>Media Hub</h1> -->
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="1">
      <div class="items">
        
        <div class="thing" v-for="(thing,index) in hubList" v-if="index < limit" :key="index">
          <router-link :to="'media/' + thing.id">
          <div class='thing-bot'>
          <span class="item-title">{{ thing.name }}</span>
          </div>
          <video @mouseover="playVid" @mouseleave="stopVid" v-if='thing.categories=="video"' :src="thing.preview_link" loop/>
          <img v-else :src="thing.preview_link" style="width:100%;"/>
          </router-link>
        </div>
      </div>
      <div id="busy" v-if="busy">
        <p>Loading</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// accessibility
import HUBITEMS from "../assets/hubItems.json";

export default {
  name: "Home",
  // components: {
  //   //
  // },
  data: function () {
    return {
      hubList: [],
      limit: 5,
      busy: false
    };
  },
  mounted: function () {
    document.title = "Media Hub";
    this.hubList = HUBITEMS;
    console.log(this.hubList);
  },
  methods: {
    playVid(e){
      e.target.play();
    },
    stopVid(e){
      e.target.pause();
    },
    loadMore() {
      this.busy = true;
      this.limit += 5;
      setTimeout(() => {
      this.busy = false;
      }, 1000);
      if(this.limit >= this.hubList.length){
        this.busy = false;
        console.log("You've reached the end");
      }
      
    }
  }
};
</script>
