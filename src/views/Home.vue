<template>
<div>
<Header />
<Hero/> 
<Productitems/> 
<Instagallery/>
<Logopartner/>
<Footer/>

    
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Productitems from '@/components/Productitems.vue'
import Instagallery from '@/components/Instagallery.vue'
import Logopartner from '@/components/Logopartner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Productitems,
    Instagallery,
    Logopartner,
    Footer
  }
}
</script>
    