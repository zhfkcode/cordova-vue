<template>
  <div class="home">
    <button @click="takeCamera">打开相机</button>
    <img class="test-img" :src="imgSrc" alt="">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import { cameraTakePic } from "../assets/phone-api.js";
export default {
  name: "home",
  data() {
    return {
      imgSrc: ""
    };
  },
  components: {},
  methods: {
    takeCamera() {
      // cameraTakePic(this.picSuccess,this.picFail)
      navigator.camera.getPicture(this.picSuccess, this.picFail, {
        quality: 25,
        destinationType: Camera.DestinationType.DATA_URL
      });
    },
    picSuccess(imageData) {
      this.imgSrc = "data:image/jpeg;base64," + imageData;
      navigator.notification.alert(
        "get image success!", // message
        alertDismissed, // callback
        "a image", // title
        "Done" // buttonName
      );
      function alertDismissed() {
        alert("cheng");
      }
    },
    picFail(message) {
      alert("fail" + message);
    }
  }
};
</script>
<style>
.test-img {
  width: 50%;
}
</style>

