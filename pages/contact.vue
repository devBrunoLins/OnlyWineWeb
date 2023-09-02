<template>
    <div class="container mx-auto isolate px-6 lg:px-8">
        <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div> -->
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">How can we help you?</p>
        </div>
        <form @submit.prevent="onSubmit" action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
              <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div> -->
            <div class="sm:col-span-2 gap-x-8 gap-y-6">
              <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
              <div class="mt-2.5">
                <input v-model="emailTitle" type="text" name="emailTitle" id="emailTitle" autocomplete="emailTitle" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input v-model="firstName" type="text" name="first-name" id="first-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <span class="text-xs text-red-700" v-if="!errors.firstName.isDirty && !firstName">Required field</span>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input v-model="lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span class="text-xs text-red-700" v-if="!errors.lastName.isDirty && !lastName">Required field</span>
              </div>
            </div>

            
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span class="text-xs text-red-700" v-if="!errors.email.isDirty && !email">Required field</span>
                
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea v-model="message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span class="text-xs text-red-700" v-if="!errors.message.isDirty && !message">Required field</span>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
          </div>
        </form>
      </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      emailTitle: '',
      errors: {
        firstName: { isDirty: true },
        lastName: { isDirty: true },
        email: { isDirty: true },
        emailTitle: { },
        message: { isDirty: true },
      }
    }
  },
  methods: {
    onSubmit() {

      if(!this.validateField('firstName')){
        this.errors.firstName.isDirty = false;
      }

      if(!this.validateField('lastName')){
        this.errors.lastName.isDirty = false;
      }

      if(!this.validateField('email')){
        this.errors.email.isDirty = false;
      }

      if(!this.validateField('message')){
        this.errors.message.isDirty = false;
      }

      if(this.validateAllFields()){
        this.sendMail()
      }
    },
    validateField(key) {
      return !!this[key]
    },
    validateAllFields() {
      return !!this.firstName && !!this.lastName && !!this.email && !!this.message
    },
    cleanForm(){
      this.errors = {
        firstName: { isDirty: true },
        lastName: { isDirty: true },
        email: { isDirty: true },
        message: { isDirty: true },
      }
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.message = ''
    },
    async sendMail(){

      try {
        this.$axios.post('/send-email', {
            title: this.emailTitle,
            description: this.message,
            sender: this.email,
            firstName: this.firstName,
            lastName: this.lastName
          }).then(() => {
            Swal.fire({
              title: 'Sucesso',
              text: 'Email enviado com sucesso, em breve entraremos em contato através do email fornecido',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.cleanForm()
          })
          .catch((error) => {
            const { response } = error
            Swal.fire({
              title: 'Oops...',
              text: response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          })
      } catch (error) {
        console.error('Error sending mail: ', error);
      }
    }
  },
  head(){
    return {
      title: 'TripMap - Contact',
      meta: [{ hid: 'description', name: 'description', content: 'TripMap - Contact' }],
      bodyAttrs: {
        style: 'background-color: #f4f1ea;',
      }
    }
  }
}
</script>