<template>
    <picture>
      <source v-if="darkmode" media="(min-width:600px)" srcset="/images/bg-desktop-dark.jpg">
      <source v-else media="(min-width:600px)" srcset="/images/bg-desktop-light.jpg">
      <img v-if="darkmode" src="/images/bg-mobile-dark.jpg" alt="background">
      <img v-else src="/images/bg-mobile-light.jpg" alt="background">
    </picture>
</template>

<script>
export default {
    props:{
        darkmode:{
            type: Boolean
        }
    }
}
</script>