<template>
    <Faq />
    <CollectionPoints />
    <Location />
</template>

<script>
import CollectionPoints from '@/components/CollectionPoints.vue';
import Faq from '@/components/Faq.vue';
import Location from '@/components/Location.vue';


export default {
    components: {
        Faq,
        CollectionPoints,
        Location
    }
}

</script>

<style scoped>
* {
  font-family: var(--font-family-primary);
   font-size: var(--font-size-lg);
}
</style>