<template>
        <dl>
            <dt><img :src="'/static/images/'+options.img" alt=""></dt>
            <dd>{{options.title}}</dd>
            <dd>{{options.add}}</dd>
            <dd>{{options.zt}}</dd>
        </dl>
</template>

<script>
export default {
    props:["options"]
}
</script>

<style>

</style>
