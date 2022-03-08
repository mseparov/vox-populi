<template>
    <div class="articleCard">
      <div class="row">
          <div class= "column-left">
          <img class="card-img-left" width="150" height="150" :src="info.img" />
          </div>
          <div class="column-right">
            {{info.aheader}}
            <br>
            {{info.atext}}
            <br>
            {{publishTime}}
          </div>
          <Comments/>
      </div>
    </div>
</template>

<script>
import moment from 'moment';
import Comments from '@/components/Comments.vue';

export default{
  name: 'ourArticle',
  props: ['info'],
  components: {
    Comments,
  },
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
  width: 20%;
}
.column-right {
  width: 80%;
  text-align:justify;
  padding-right: 30px;
}
</style>