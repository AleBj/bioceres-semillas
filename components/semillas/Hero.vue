<template>
    <div class="relative">
        <div class="relative w-full h-[46rem]">
            <div class="relative w-full h-full flex items-center">
                <div class="absolute inset-0">
                    <figure class="relative w-full h-full">

                        <video v-if="videoHero" class="hidden s:block relative w-full h-full object-cover"             
                            src="/hero-video-1.mp4" 
                            alt="Hero Cultivos"
                            autoplay
                            playsinline
                            muted
                            loop
                        >
                        </video>
                        <img v-else class="relative w-full h-full object-cover" :src="image.url" alt="Discover">
                    </figure>
                </div>

                <div class="relative px-20 s:px-240">
                    <h1 class="relative flex flex-col items-start text-white js-t-fades">
                        <span class="mont font-semibold inline-flex text-30 s:text-42 leading-none tracking-[-2.4px]">Red de multiplicadores</span>
                        <span class="mont font-bold inline-flex text-40 s:text-60 leading-none tracking-[-2.4px]">Bioceres Semillas</span>
                    </h1>
                </div>

                <div class="px-20 s:px-240 w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div class="relative w-full gap-x-20 flex flex-col s:flex-row items-center justify-center py-25 s:py-50 text-white bg-[#3FADE1] rounded-[2.5rem] s:rounded-[5rem] overflow-hidden js-t-fades">
                        <div class="relative pb-10 s:pb-0">
                            <p class="mont font-medium text-20 leading-none tracking-[-0.8px]">Seleccioná tu región</p>
                        </div>

                        <div class="relative text-20 leading-none tracking-[-0.8px] pb-20 s:pb-0">
                            <div class="relative">
                                <select class="select-input text-center mont font-medium relative py-4 px-50 bg-transparent appearance-none cursor-pointer" @change="selectProvincia($event)">
                                    <option selected>Seleccione Provincia</option>
                                    <option v-for="(prov, index) in listProvincias" :key="index" :value="prov">{{prov}}</option>
                                </select>
                                <div class="select-line"></div>
                            </div>
                            <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none mt-[-1rem] s:mt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-white">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </div>
                        </div>

                        <div class="relative text-20 leading-none tracking-[-0.8px]">
                            <div class="relative">
                                <select class="select-input mont font-medium relative py-4 px-30 bg-transparent appearance-none cursor-pointer" v-model="localidad" @change="selectLocalidad($event)">
                                    <option value="Seleccione Localidad">Seleccione Localidad</option>      
                                    <option v-for="(prov, index) in selectedLocalidad" :key="index" :value="prov">{{prov}}</option>
                                </select>
                                <div class="select-line"></div> 
                            </div>
                            <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-white">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="relative pt-100 s:pt-130 px-20 s:px-240">
            <div v-for="(d,i) in filteredVendedores" :key="i" class="card-directions relative w-full p-30 s:p-70 bg-white js-t-fades mb-20">
                <div class="relative flex flex-col s:flex-row items-start s:items-center justify-between">
                 
                    <div class="relative w-full s:w-1/2 pb-20 s:pb-0">
                        <h4 class="relative mont pb-10 s:pb-5 font-medium text-[#25284A] text-33 leading-none tracking-[-1.32px]">{{ d['Nombre del Cliente'] }}</h4>
                        <p class="relative inter font-light text-[#A0C344] text-22 leading-none tracking-[-0.88px]">{{d.Localidad }}</p>
                    </div>

                    <div class="relative flex flex-col items-start gap-y-20 w-full s:w-1/2 text-22 leading-none tracking-[-0.88px] text-[#3FADE1]">
                        <div class="relative flex items-center gap-x-14">
                            <div class="relative">
                                <svg class="w-[2.1rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.464 26.33">
                                    <g transform="translate(-5 -2)">
                                        <path id="Path_1132" data-name="Path 1132" d="M20.8,14.15a3.65,3.65,0,1,1-3.65-3.65A3.65,3.65,0,0,1,20.8,14.15Z" transform="translate(-1.417 -1.417)" fill="none" stroke="#a0c344" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <path id="Path_1133" data-name="Path 1133" d="M15.732,3A9.732,9.732,0,0,0,6,12.732a7.832,7.832,0,0,0,1.825,5.474l7.907,9.124,7.907-9.124a7.832,7.832,0,0,0,1.825-5.474A9.732,9.732,0,0,0,15.732,3Z" transform="translate(0 0)" fill="none" stroke="#a0c344" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="inter font-medium uline">{{ d['Dirección'] }}</div>
                        </div>
                        <div class="relative flex items-center gap-x-14">
                            <div class="relative">
                                <svg class="w-[2.1rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.924 22.029">
                                    <path d="M15.985,13.2c-.274-.137-1.615-.8-1.864-.888s-.431-.136-.614.138-.7.887-.863,1.068-.319.2-.591.069a7.488,7.488,0,0,1-2.194-1.354,8.211,8.211,0,0,1-1.517-1.89c-.159-.273-.017-.42.119-.556s.273-.319.409-.477a1.849,1.849,0,0,0,.273-.456.5.5,0,0,0-.023-.477c-.068-.137-.613-1.48-.841-2.026s-.446-.459-.613-.468-.341-.009-.523-.009a1,1,0,0,0-.727.341,3.055,3.055,0,0,0-.955,2.275,5.308,5.308,0,0,0,1.113,2.822,12.161,12.161,0,0,0,4.659,4.119,15.585,15.585,0,0,0,1.555.574,3.724,3.724,0,0,0,1.718.108,2.812,2.812,0,0,0,1.841-1.3,2.287,2.287,0,0,0,.159-1.3c-.068-.114-.25-.182-.523-.319ZM11.008,20h0a9.061,9.061,0,0,1-4.62-1.266l-.329-.2-3.435.9.917-3.348-.216-.343A9.073,9.073,0,1,1,11.008,20ZM18.73,3.2A10.919,10.919,0,0,0,1.548,16.372L0,22.029l5.786-1.518A10.905,10.905,0,0,0,11,21.84h0A10.921,10.921,0,0,0,18.73,3.2" transform="translate(0 0)" fill="#a0c344"/>
                                </svg>
                            </div>
                            <div class="inter font-medium uline"><a :href="`tel:${ d['Teléfono'] }`" target="_blank">{{ d['Teléfono'] }}</a></div>
                        </div>
                        <div class="relative flex items-center gap-x-14">
                            <div class="relative">
                                <svg class="w-[2.1rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.827 16.662">
                                    <path d="M23.827,8.083A2.089,2.089,0,0,0,21.744,6H5.083A2.089,2.089,0,0,0,3,8.083v12.5a2.089,2.089,0,0,0,2.083,2.083H21.744a2.089,2.089,0,0,0,2.083-2.083Zm-2.083,0L13.414,13.29,5.083,8.083Zm0,12.5H5.083V10.165l8.331,5.207,8.331-5.207Z" transform="translate(-3 -6)" fill="#a0c344"/>
                                </svg>
                            </div>
                            <div class="inter font-medium uline"><a :href="`mailto:${ d['Mail'] }`">{{ d['Mail'] }}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Papa from 'papaparse'
export default {
    props: {
        csv: {
            type: Object
        },
        image: {
            type: Object
        },
        videoHero:{
            type: Object
        }
    },
    data() {
        return {
            vendedores:[],
            listProvincias:[],
            selectedLocalidad:[],
            localidad:'Seleccione Localidad',
            filteredVendedores:[]
        }
    },
    async fetch(){

        const csvUrl = this.csv.url
        const response = await fetch(csvUrl)
        const csvText = await response.text()
        // Use Papa Parse to parse the CSV text
        const results = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true
        })
        // console.log(results.data)
        this.vendedores = results.data
        this.listProvincias = [...new Set(results.data.map(item => item.Provincia))]
        this.listProvincias.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))

        return results
    },
    mounted() {

    },

    methods: {
        selectProvincia(v){
            this.localidad = 'Seleccione Localidad'
            this.filteredVendedores = this.vendedores.filter(n => n.Provincia == v.target.value)
            this.selectedLocalidad = this.filteredVendedores.map(l => l.Localidad)
            this.selectedLocalidad.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
        },
        selectLocalidad(v){
            
            this.filteredVendedores = this.filteredVendedores.filter(n => n.Localidad == v.target.value)
            this.filteredVendedores.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
        }
    },
    computed: {
        FilterVendedor() {
            return this.selectedLocalidad
        }
    }
}
</script>
<style lang="scss" scoped>
.select-input {
    appearance: none;
    outline: none;
}

.select-line {
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: .2rem;
    background: #fff;
}

.card-directions {
    box-shadow: 0px 3.3rem 6.6rem #00000012;
    border-radius: 5rem;
}
</style>