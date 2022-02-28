<template>
    <div class="card">
      <div class="row">
          <div class= "column-left">
          <img class="card-img-left" width="200" height="200" :src="info.img" />
          </div>
          <div class="column-right">
            {{"info.aheader"}}
            <br>
            {{"info.atext"}}
            <br>
            {{publishTime}}
          </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment';

export default{
  name: 'ourArticle',
  props: ['info'],
  computed: {
        publishTime(){
          return moment(this.info.time).fromNow();
        },
  },
};
</script>

<style scoped>
.column-left {
  float: left;
  width: 25%;
}
.column-right {
  width: 75%;
}
</style>