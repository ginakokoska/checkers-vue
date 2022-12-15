<template>
  <Checkersnavbar></Checkersnavbar>
  <Gamecontainer></Gamecontainer>
  <Move></Move>
</template>
<script>
import Checkersnavbar from "@/components/Checkersnavbar";
import Gamecontainer from "@/components/Gamecontainer";
import Move from "@/components/Move";

export default {
  components: {Move, Gamecontainer, Checkersnavbar}
}
</script>

<style>

</style>