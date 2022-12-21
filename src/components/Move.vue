<template>
  <div class="form-group" id="form-group">
    <label for="text-input"> </label>
    <input type="text" class="form-control" id="text-input" placeholder="Enter your move like 'XX YY'" onFocus="this.placeholder = ''" input-focus-border-color="#99999">
    <div style="padding:20px"></div>
    <button @click="parentMethod()" type="button" class="btn bouncy"> Enter</button>
    <p id="message-field"></p>
  </div>
</template>


<script>
//import $ from "jquery";
import {websocketsmixins} from "@/mixins/websocketsmixins";

export default {
  name: 'move-comp',
  mixins: [websocketsmixins],
  props: {
    method: { type: Function },
  },
  methods: {
    parentMethod() {
      this.method();
    },
  },
  created() {
    //this.gotData();
    //this.connectWebSocket();
    //this.resize(8);
  }
}

</script>

<style lang="less">

.form-control {
  border-radius: 0;
}

[class^='ion-'] {
  font-size: 1.2em;
}

.has-feedback .form-control-feedback {
  top: 0;
  left: 0;
  width: 46px;
  height: 46px;
  line-height: 46px;
  color: #555;
}

.has-feedback .form-control {
  padding-left: 42.5px;
}

.btn {
  font-weight: bold;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
}

.btn-lg {
  font-size: 18px;
}

</style>
