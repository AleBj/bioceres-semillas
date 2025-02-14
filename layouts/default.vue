<template>
    <div class="relative">
        <SiteHead :showFullNav="showFullNav" />
        <div class="fixed inset-0 bg-white select-none z-[99999] invisible js-t-mask"></div>
        <Nuxt ref="page" class="relative" />
        <SiteFoot />
    </div>
</template>
<script>
export default {

    data() {
        return {
            seo: {
                title: 'Bioceres Semillas',
                description: 'En un salón prestado en la Bolsa de Comercio de Rosario. La compañía surgió gracias a la iniciativa de 23 productores agropecuarios, muchos de los cuales eran miembros de Aapresid, frente a la necesidad de encontrar respuestas que contrarrestaran la erosión y el deterioro que los suelos sufrían debido a la intensificación de la actividad.',
                image: {
                    url: 'https://bioceres.com.ar/img/og-image.jpg',
                },
            },
            favicon: '/favicon.png',
            showFullNav:true
        }
    },
    beforeMount() {
        this.$store.commit('app/SET_DEVICE')
        this.$store.commit('app/SET_FEATURES')

        if(this.$nuxt.$route.name === 'nuestras-raices') {
            document.body.classList.add('is-about')
        } else {
            document.body.classList.remove('is-about')
        }
    },
    created() {
        if(process.client){
             window.addEventListener("scroll", this.handleScroll);
        }

  },
    mounted() {
        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0)

        this.$r?.mount?.(this.$nuxt)
        this.$s?.mount?.(this.$nuxt)
        this.onRoute()
    },

    head() {
        return {
            title: this.seo.title,
            meta: [
                { hid: 'description', name: 'description', content: this.seo.description },
                // Open Graph
                { hid: 'og:title', property: 'og:title', content: this.seo.title },
                { hid: 'og:description', property: 'og:description', content: this.seo.description },
                { hid: 'og:image', property: 'og:image', content: this.seo.image.url },
                { hid: 'og:url', property: 'og:url', content: 'https://bioceres.com.ar' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                // Twitter
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: this.seo.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.seo.description },
                { hid: 'twitter:image', name: 'twitter:image', content: this.seo.image.url },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: this.favicon },
            ],
        };
    },


    methods: {

        onRoute() {
            this.$router.beforeEach((to, from, next) => {
                this.$store.commit('app/SET_PAGE', { to, from })

                next()
            })
        },
        handleScroll() {

            if(process.client){
            var currentScrollPosition = window.scrollY

            if(currentScrollPosition < this.scrollPosition){
                console.log("Scrolling up");
                this.showFullNav = true
                //your desire logic 
            }
            else{
                this.showFullNav = false
                console.log("Scrolling down");
                //your desire logic 

            }

            this.scrollPosition = window.scrollY
            }
        }, 
    },

    destroyed() {
        if(process.client){
        window.removeEventListener("scroll",this.handleScroll);  
        }

    }
    
}
</script>
