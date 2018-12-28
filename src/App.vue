<template>
    <div>
        <button @click="changeNumAsync({payload:'add'})">+</button>
        <span>{{num}}</span>
        <span>{{date}}</span>
        <button @click="changeNumAsync({payload:'odd'})">-</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    mounted(){
        console.log(this.date)
    },
    computed:{
        ...mapState({
            num: state => state.app.num
        }),
        ...mapGetters({
            date: 'app/date'
        })
    },
    methods:{
        ...mapMutations({
            changeNumas: 'app/changeNum'
        }),
        ...mapActions({
            changeNumAsync: 'app/changeNumAsync'
        }),
        
    }
}
</script>

<style>

</style>
