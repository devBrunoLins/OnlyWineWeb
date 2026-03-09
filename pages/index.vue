<template>
  <div>
    <section>
        <div style="padding-top: 10rem;" class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div style="width: 44vw;" class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <h1 class="text-4xl font-medium tracking-tight text-gray-900">
                            Encontre seu próximo vinho <span class="text-primary">{{ typedText }}<span class="typing-cursor">|</span></span>
                        </h1>
                        <p class="mt-6 text-lg text-gray-600">Tomar vinho nunca precisou e nunca precisará de um porquê</p>
                        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <a aria-label="Download on the App Store" class="inline-flex items-center justify-center rounded-lg transition-colors bg-black text-white hover:bg-gray-900 px-4 py-2.5" href="https://www.apple.com/br/search/onlywine?src=globalnav" target="_blank">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 mr-2">
                                    <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.17zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
                                </svg>
                                <div class="flex flex-col items-start">
                                    <span class="text-xs leading-none mb-0.5">DISPONÍVEL NA</span>
                                    <span class="text-sm font-semibold leading-none">App Store</span>
                                </div>
                            </a>
                            <a aria-label="Baixe no Google Play" class="inline-flex items-center justify-center rounded-lg transition-colors bg-black text-white hover:bg-gray-900 px-4 py-2.5" href="https://play.google.com/store" target="_blank">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 mr-2">
                                    <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l1.492-1.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"></path>
                                </svg>
                                <div class="flex flex-col items-start">
                                    <span class="text-xs leading-none mb-0.5">DISPONÍVEL NO</span>
                                    <span class="text-sm font-semibold leading-none">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-slow">
                                <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
                                <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path>
                                <defs>
                                    <linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#06b6d4"></stop>
                                        <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-reverse-slower">
                                <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
                                <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path>
                                <defs>
                                    <linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#06b6d4"></stop>
                                        <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div style="top: -8.5rem;" class="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_90%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:h-auto lg:px-0  xl:-bottom-32 phone-float">
                            <div class="relative aspect-[366/729] mx-auto max-w-[366px]">
                                <div class="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                                
                                <div class="left-[calc(23/366*100%)]">
                                    <img src="@/static/IntroScreen.png" />
                                </div>
                                <svg viewBox="0 0 366 729" aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                                    <path fill="#F2F2F2" fill-rule="evenodd" clip-rule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                                    <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
                                </svg>
                                <img alt="" fetchpriority="high" width="366" height="729" decoding="async" data-nimg="1" class="pointer-events-none absolute inset-0 h-full w-full" style="color:transparent" src="@/static/phone-frame.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</div>
</template>

<style scoped>
.bg-default {
    background-color: #BE2C55;
}

.typing-cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}

.phone-float {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      typedText: '',
      currentWordIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typingSpeed: 150,
      deletingSpeed: 100,
      pauseAfterWord: 2000,
      timeout: null as any,
      words: [
        'Vinho',
        'Tinto',
        'Branco',
        'Rosé',
        'Espumante',
        'Harmonização'
      ]
    }
  },
  mounted() {
    this.typeEffect()
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  },
  methods: {
    typeEffect() {
      const currentWord = this.words[this.currentWordIndex]
      
      if (!this.isDeleting) {
        if (this.currentCharIndex < currentWord.length) {
          this.typedText = currentWord.substring(0, this.currentCharIndex + 1)
          this.currentCharIndex++
          this.timeout = setTimeout(() => this.typeEffect(), this.typingSpeed)
        } else {
          this.timeout = setTimeout(() => {
            this.isDeleting = true
            this.typeEffect()
          }, this.pauseAfterWord)
        }
      } else {
        if (this.currentCharIndex > 0) {
          this.typedText = currentWord.substring(0, this.currentCharIndex - 1)
          this.currentCharIndex--
          this.timeout = setTimeout(() => this.typeEffect(), this.deletingSpeed)
        } else {
          this.isDeleting = false
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
          this.timeout = setTimeout(() => this.typeEffect(), 500)
        }
      }
    }
  }
})
</script>
