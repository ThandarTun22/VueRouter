<template>
  <h1 >Jobs</h1>
  <div class="jobs" v-for="job in jobs" :key="job.id">
    
    <router-link :to="{name: 'jobDetail', params: {id: job.id}}">
        <h1>{{job.title}}</h1>
    </router-link>

  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs : [
                {
                    id:"1",
                    title: "project manager",
                    detail : "creative coder project manager"
                },
                                {
                    id:"2",
                    title: "designer",
                    detail : "creative coder designer"
                },
                                {
                    id:"3",
                    title: "developer",
                    detail : "creative coder developer"
                }
            ]
        }
    }
}
</script>

<style>
    .jobs{
        color: crimson;
    }
</style>