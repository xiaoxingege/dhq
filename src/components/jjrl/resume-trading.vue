<template>
<div class="contentPage">
  <div class="middlearea">
    <fpStock></fpStock>
  </div>
  <div class="rightArea">
    <fpDetail></fpDetail>
  </div>

</div>
</template>
<script>
import fpStock from 'components/jjrl/fp-stock'
import fpDetail from 'components/jjrl/fp-detail'
export default {
  components: {
    fpStock,
    fpDetail
  },

  data() {
    return {

    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}

.middlearea {
    width: 17.8%;
    background-color: #191c1e;
    border-right: 1px solid $bgNavColor;
    height: auto;
    overflow: auto;
}
.rightArea {
    width: 82.2%;
<<<<<<< HEAD
    height: auto;
    overflow: auto;
=======
>>>>>>> a07658fb92a8de52b918d8bb39874822e6e53234
}
.contentPage {
    display: flex;
    justify-content: space-between;
}
</style>
