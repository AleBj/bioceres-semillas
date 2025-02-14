<template>
    <div class="relative">
        <div class="relative pt-100 s:pt-80 pb-100 s:pb-170">
            <div class="relative px-20 s:px-240">
                <div class="relative max-w-[30rem] s:max-w-[36rem] pb-60">
                    <p class="inter font-normal text-18 leading-[1.35] tracking-[-0.72px] js-t-fades">
                        Seleccioná la información para que nuestro asesor inteligente 
                        te recomiende <span class="font-semibold">como sacar el mejor provecho de tu campo.</span>
                    </p>
                </div>
                <!-- relative grid grid-cols-1 s:grid-cols-2 gap-80 s:gap-100 -->
                <div class="relative grid grid-cols-1 gap-60 s:gap-80">

                    <div class="relative flex flex-col justify-center js-t-fades">
                        <div class="relative pb-30">
                            <h2 class="relative inter font-semibold text-25 leading-none tracking-[-1px]">1. Características</h2>
                        </div>

                        <div class="relative pb-50">
                            <div class="relative grid grid-cols-2 s:grid-cols-4 gap-x-20 gap-y-35">
                                
                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">Provincia</p>
                                    </div>
                                    <div class="relative inter font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input inter relative bg-transparent appearance-none cursor-pointer" v-model="provincia" @change="selectProvincia($event)">
                                                <option v-for="(p,i) in listProvincia" :key="i" :value="p">{{ p }}</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="inter text-15 leading-none tracking-[-0.6px]">Departamento</p>
                                    </div>
                                    <div class="relative inter font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input inter relative bg-transparent appearance-none cursor-pointer" v-model="departamento" @change="selectDepartamento($event)">
                                                <option v-for="(d,i) in listDepartamento" :key="i" :value="d">{{ d }}</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="inter font-normal text-15 leading-none tracking-[-0.6px]">El ambiente</p>
                                    </div>
                                    <div class="relative inter font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input inter font-normal relative bg-transparent appearance-none cursor-pointer" v-model="ambiente" @change="selectAmbiente($event)">
                                                <option v-for="(a,i) in listAmbiente" :key="i" :value="a">{{ a }}</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="inter font-normal text-15 leading-none tracking-[-0.6px]">Preferencia de siembra</p>
                                    </div>
                                    <div class="relative inter font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input inter font-normal relative bg-transparent appearance-none cursor-pointer" v-model="siembra">
                                                <option v-for="(s,i) in listSiembra" :key="i" :value="s">{{ s }}</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="relative" @click="SearchRecomendation()">
                            <ButtonArrow color="lightblue" label="Calcular recomendación" />
                        </div>
                    </div>

                    <div v-if="filteredRecom" class="relative js-t-fades grid grid-cols-1 s:grid-cols-2 gap-30">
                        
                        <div class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-30">
                                <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Recomendación para tu campo</h2>
                            </div>

                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-20">
                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Variedad']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/yuyo-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Fecha de siembra</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Fecha de siembra']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/leafs-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative inter pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Ciclo</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Ciclo']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="26.775" height="27.776" viewBox="0 0 26.775 27.776">
                                            <path id="sprout_4293447" d="M26.77,36.21a8.068,8.068,0,0,0-2.319-5.1,7.008,7.008,0,0,0-4.622-2.074,7.152,7.152,0,0,0-5.334-2.86V19.508a8.279,8.279,0,0,0,2.529.392,8.536,8.536,0,0,0,6.021-2.525,9.848,9.848,0,0,0,2.845-6.19.914.914,0,0,0-.484-.9,8.3,8.3,0,0,0-3.715-.873,8.535,8.535,0,0,0-6.02,2.525,9.584,9.584,0,0,0-2.011,2.923,9.583,9.583,0,0,0-2.011-2.923A8.535,8.535,0,0,0,5.626,9.412a8.3,8.3,0,0,0-3.715.873.914.914,0,0,0-.484.9,9.848,9.848,0,0,0,2.845,6.19,8.535,8.535,0,0,0,6.02,2.525,8.277,8.277,0,0,0,2.529-.392v6.8a7.217,7.217,0,0,0-4.335,2.829,6.823,6.823,0,0,0-1.222-.11A6.99,6.99,0,0,0,2.32,31.112,8.068,8.068,0,0,0,0,36.21a.945.945,0,0,0,.218.686.811.811,0,0,0,.616.291h25.1a.811.811,0,0,0,.616-.291A.945.945,0,0,0,26.77,36.21Zm-5.08-25a6.72,6.72,0,0,1,2.453.459A7.358,7.358,0,0,1,17.023,18.1a6.72,6.72,0,0,1-2.452-.459A7.358,7.358,0,0,1,21.69,11.214ZM10.292,18.1a7.358,7.358,0,0,1-7.119-6.425,6.72,6.72,0,0,1,2.453-.459,7.358,7.358,0,0,1,7.119,6.425A6.719,6.719,0,0,1,10.292,18.1ZM1.822,35.385a5.751,5.751,0,0,1,5.442-4.552,5.261,5.261,0,0,1,1.374.183.809.809,0,0,0,.9-.37,5.394,5.394,0,0,1,9.2-.182.82.82,0,0,0,.687.37h.081a5.752,5.752,0,0,1,5.442,4.552Z" transform="translate(0.002 -9.412)" fill="#25284a"/>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Plantas a lograr</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Plantas a lograr por m2']}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="filteredRecom.Variedad_1" class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-30">
                                <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Recomendación para tu campo</h2>
                            </div>

                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-20">
                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Variedad_1']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/yuyo-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Fecha de siembra</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Fecha de siembra_1']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/leafs-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative inter pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Ciclo</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Ciclo_1']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="26.775" height="27.776" viewBox="0 0 26.775 27.776">
                                            <path id="sprout_4293447" d="M26.77,36.21a8.068,8.068,0,0,0-2.319-5.1,7.008,7.008,0,0,0-4.622-2.074,7.152,7.152,0,0,0-5.334-2.86V19.508a8.279,8.279,0,0,0,2.529.392,8.536,8.536,0,0,0,6.021-2.525,9.848,9.848,0,0,0,2.845-6.19.914.914,0,0,0-.484-.9,8.3,8.3,0,0,0-3.715-.873,8.535,8.535,0,0,0-6.02,2.525,9.584,9.584,0,0,0-2.011,2.923,9.583,9.583,0,0,0-2.011-2.923A8.535,8.535,0,0,0,5.626,9.412a8.3,8.3,0,0,0-3.715.873.914.914,0,0,0-.484.9,9.848,9.848,0,0,0,2.845,6.19,8.535,8.535,0,0,0,6.02,2.525,8.277,8.277,0,0,0,2.529-.392v6.8a7.217,7.217,0,0,0-4.335,2.829,6.823,6.823,0,0,0-1.222-.11A6.99,6.99,0,0,0,2.32,31.112,8.068,8.068,0,0,0,0,36.21a.945.945,0,0,0,.218.686.811.811,0,0,0,.616.291h25.1a.811.811,0,0,0,.616-.291A.945.945,0,0,0,26.77,36.21Zm-5.08-25a6.72,6.72,0,0,1,2.453.459A7.358,7.358,0,0,1,17.023,18.1a6.72,6.72,0,0,1-2.452-.459A7.358,7.358,0,0,1,21.69,11.214ZM10.292,18.1a7.358,7.358,0,0,1-7.119-6.425,6.72,6.72,0,0,1,2.453-.459,7.358,7.358,0,0,1,7.119,6.425A6.719,6.719,0,0,1,10.292,18.1ZM1.822,35.385a5.751,5.751,0,0,1,5.442-4.552,5.261,5.261,0,0,1,1.374.183.809.809,0,0,0,.9-.37,5.394,5.394,0,0,1,9.2-.182.82.82,0,0,0,.687.37h.081a5.752,5.752,0,0,1,5.442,4.552Z" transform="translate(0.002 -9.412)" fill="#25284a"/>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Plantas a lograr</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Plantas a lograr por m2_1']}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="filteredRecom.Variedad_2" class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-30">
                                <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Recomendación para tu campo</h2>
                            </div>

                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-20">
                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Variedad_2']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/yuyo-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Fecha de siembra</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Fecha de siembra_2']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/leafs-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative inter pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Ciclo</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Ciclo_2']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="26.775" height="27.776" viewBox="0 0 26.775 27.776">
                                            <path id="sprout_4293447" d="M26.77,36.21a8.068,8.068,0,0,0-2.319-5.1,7.008,7.008,0,0,0-4.622-2.074,7.152,7.152,0,0,0-5.334-2.86V19.508a8.279,8.279,0,0,0,2.529.392,8.536,8.536,0,0,0,6.021-2.525,9.848,9.848,0,0,0,2.845-6.19.914.914,0,0,0-.484-.9,8.3,8.3,0,0,0-3.715-.873,8.535,8.535,0,0,0-6.02,2.525,9.584,9.584,0,0,0-2.011,2.923,9.583,9.583,0,0,0-2.011-2.923A8.535,8.535,0,0,0,5.626,9.412a8.3,8.3,0,0,0-3.715.873.914.914,0,0,0-.484.9,9.848,9.848,0,0,0,2.845,6.19,8.535,8.535,0,0,0,6.02,2.525,8.277,8.277,0,0,0,2.529-.392v6.8a7.217,7.217,0,0,0-4.335,2.829,6.823,6.823,0,0,0-1.222-.11A6.99,6.99,0,0,0,2.32,31.112,8.068,8.068,0,0,0,0,36.21a.945.945,0,0,0,.218.686.811.811,0,0,0,.616.291h25.1a.811.811,0,0,0,.616-.291A.945.945,0,0,0,26.77,36.21Zm-5.08-25a6.72,6.72,0,0,1,2.453.459A7.358,7.358,0,0,1,17.023,18.1a6.72,6.72,0,0,1-2.452-.459A7.358,7.358,0,0,1,21.69,11.214ZM10.292,18.1a7.358,7.358,0,0,1-7.119-6.425,6.72,6.72,0,0,1,2.453-.459,7.358,7.358,0,0,1,7.119,6.425A6.719,6.719,0,0,1,10.292,18.1ZM1.822,35.385a5.751,5.751,0,0,1,5.442-4.552,5.261,5.261,0,0,1,1.374.183.809.809,0,0,0,.9-.37,5.394,5.394,0,0,1,9.2-.182.82.82,0,0,0,.687.37h.081a5.752,5.752,0,0,1,5.442,4.552Z" transform="translate(0.002 -9.412)" fill="#25284a"/>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Plantas a lograr</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Plantas a lograr por m2_2']}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="filteredRecom.Variedad_3" class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-30">
                                <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Recomendación para tu campo</h2>
                            </div>

                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-20">
                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Variedad_3']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/yuyo-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Fecha de siembra</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Fecha de siembra_3']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative left-[0.2rem] flex-shrink-0 pb-10">
                                        <img class="w-[2.6rem] scale-[1.2] h-auto object-contain" src="/leafs-icon-asesor.png" alt="">
                                    </div>
                                    <div class="relative">
                                        <p class="relative inter pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Ciclo</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Ciclo_3']}}</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="26.775" height="27.776" viewBox="0 0 26.775 27.776">
                                            <path id="sprout_4293447" d="M26.77,36.21a8.068,8.068,0,0,0-2.319-5.1,7.008,7.008,0,0,0-4.622-2.074,7.152,7.152,0,0,0-5.334-2.86V19.508a8.279,8.279,0,0,0,2.529.392,8.536,8.536,0,0,0,6.021-2.525,9.848,9.848,0,0,0,2.845-6.19.914.914,0,0,0-.484-.9,8.3,8.3,0,0,0-3.715-.873,8.535,8.535,0,0,0-6.02,2.525,9.584,9.584,0,0,0-2.011,2.923,9.583,9.583,0,0,0-2.011-2.923A8.535,8.535,0,0,0,5.626,9.412a8.3,8.3,0,0,0-3.715.873.914.914,0,0,0-.484.9,9.848,9.848,0,0,0,2.845,6.19,8.535,8.535,0,0,0,6.02,2.525,8.277,8.277,0,0,0,2.529-.392v6.8a7.217,7.217,0,0,0-4.335,2.829,6.823,6.823,0,0,0-1.222-.11A6.99,6.99,0,0,0,2.32,31.112,8.068,8.068,0,0,0,0,36.21a.945.945,0,0,0,.218.686.811.811,0,0,0,.616.291h25.1a.811.811,0,0,0,.616-.291A.945.945,0,0,0,26.77,36.21Zm-5.08-25a6.72,6.72,0,0,1,2.453.459A7.358,7.358,0,0,1,17.023,18.1a6.72,6.72,0,0,1-2.452-.459A7.358,7.358,0,0,1,21.69,11.214ZM10.292,18.1a7.358,7.358,0,0,1-7.119-6.425,6.72,6.72,0,0,1,2.453-.459,7.358,7.358,0,0,1,7.119,6.425A6.719,6.719,0,0,1,10.292,18.1ZM1.822,35.385a5.751,5.751,0,0,1,5.442-4.552,5.261,5.261,0,0,1,1.374.183.809.809,0,0,0,.9-.37,5.394,5.394,0,0,1,9.2-.182.82.82,0,0,0,.687.37h.081a5.752,5.752,0,0,1,5.442,4.552Z" transform="translate(0.002 -9.412)" fill="#25284a"/>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Plantas a lograr</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">{{filteredRecom['Plantas a lograr por m2_3']}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--
                    <div class="relative flex flex-col justify-center js-t-fades">
                        <div class="relative pb-30">
                            <h2 class="relative inter font-semibold text-25 leading-none tracking-[-1px]">2. Nutrición en suelo   </h2>
                        </div>

                        <div class="relative pb-50">
                            <div class="relative grid grid-cols-1 gap-x-16 gap-y-35">
                                
                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="inter font-normal text-15 leading-none tracking-[-0.6px]">¿Conocés la nutrición de tu suelo?</p>
                                    </div>

                                    <div class="relative w-1/2 inter font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input inter relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Si la conozco</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-4 gap-x-90 justify-between">
                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="inter font-medium text-15 leading-none tracking-[-0.6px]">N</p>
                                        </div>
                                        <div class="relative inter font-medium text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input inter font-medium relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="inter font-medium text-15 leading-none tracking-[-0.6px]">P</p>
                                        </div>
                                        <div class="relative inter font-medium text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input inter font-medium relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="inter font-medium text-15 leading-none tracking-[-0.6px]">K</p>
                                        </div>
                                        <div class="relative inter font-medium text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input inter font-medium relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="inter font-medium text-15 leading-none tracking-[-0.6px]">S</p>
                                        </div>
                                        <div class="relative inter font-medium text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input inter font-medium relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="relative">
                            <ButtonArrow color="lightblue" label="Calcular nutrición" />
                        </div>
                    </div>

                    <div class="relative js-t-fades">
                        <div class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-40">
                                <div class="relative pb-30">
                                    <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Nutrición recomendada</h2>
                                </div>

                                <div class="relative grid grid-cols-4 gap-x-16">
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">P</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">K</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">S</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>
                                </div>

                            </div>

                            <div class="relative">
                                <div class="relative pb-30">
                                    <h2 class="inter font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Fertilización recomendada</h2>
                                </div>

                                <div class="relative grid grid-cols-4 gap-x-16">
                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">P</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">K</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 inter font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">S</p>
                                        <h5 class="relative pb-5 inter font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    -->
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
    },
    data() {
        return {
            recomendaciones:[],
            provincia:'',
            departamento:'',
            ambiente:'',
            siembra:'',
            listProvincia:[],
            listDepartamento:[],
            listAmbiente:[],
            listSiembra:[],
            filteredData:[],
            filteredRecom:''
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
        
        this.recomendaciones = results.data
        this.listProvincia = [...new Set(results.data.map(item => item['Provincia']))]
        this.listProvincia.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))

        return results
    },
    mounted() {

    },

    methods: {
        selectProvincia(v){
            this.filteredRecom = ''
            this.departamento = ''
            this.ambiente = ''
            this.siembra = ''
            this.filteredData = this.recomendaciones.filter(n => n['Provincia'] == v.target.value)
            this.listDepartamento = [...new Set(this.filteredData.map(l => l['Departamento']))]
            this.listDepartamento.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
        },
        selectDepartamento(v){
            this.filteredRecom = ''
            this.ambiente = ''
            this.siembra = ''
            this.filteredData = this.recomendaciones.filter(n => n['Provincia'] == this.provincia && n['Departamento'] == v.target.value)
            this.listAmbiente = [...new Set(this.filteredData.map(l => l['Ambiente']))]
            console.log(this.filteredData)
        },
        selectAmbiente(v){
            this.filteredRecom = ''
            this.siembra = ''
            this.filteredData = this.recomendaciones.filter(n =>  n['Provincia'] == this.provincia && n['Departamento'] == this.departamento && n['Ambiente'] == v.target.value)
            this.listSiembra = [...new Set(this.filteredData.map(l => l['Preferencia de siembra']))]
            console.log(this.filteredData)
        },
        SearchRecomendation(){
            this.filteredRecom = this.recomendaciones.filter(n => n['Provincia'] == this.provincia && 
                                                                  n['Departamento'] == this.departamento &&
                                                                  n['Ambiente'] == this.ambiente &&
                                                                  n['Preferencia de siembra'] == this.siembra )[0]
            
        }
        
    },
    computed: {
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
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: .2rem;
    background: #3FADE1;
}

.shadow-card {
    box-shadow: 0px 3.3rem 6.6rem #00000012;
}
</style>