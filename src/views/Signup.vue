<template>
  <!--
  This component uses @tailwindcss/forms

  npm install -D @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

  <div
    class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 border bg-gray-300"
  >
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-blue-600 sm:text-3xl">
        Get started today
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>

      <form
        action="#"
        @submit.prevent="submitData"
        class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
      >
        <p class="text-lg font-medium">Sign in to your account</p>

        <div>
          <label for="email" class="text-sm font-medium">Email</label>

          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="xyz@email.com"
              v-model="check.email"
              @blur="validate('email')" 
            @keypress="validate('email')"
            />
            <p 
                class="errors" 
                v-if="!!errors.email"
            >{{errors.email}}</p>

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="********"
              v-model="check.password"
              @blur="validate('password')" 
            @keypress="validate('password')"
             
            />
            <p 
                class="errors" 
                v-if="!!errors.password"
            >{{errors.password}}</p>


            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          class="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>

        <p class="text-center text-sm text-gray-500">
          No account?
          <a class="underline" href="">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
const ArticleSchema = Yup.object().shape({
  email: Yup.string().required("this field is required"),
  password: Yup.string()
    .min(8, "password should not be less than 8 characters")
    .required("password is required"),
});
export default {
  name: "Signup",
  data() {
    return {
      check: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitData() {
      ArticleSchema.validate(this.check, { abortEarly: false })
        .then(() => {
          const submittedData = `${this.check.email} ${this.check.password}`;
          alert(submittedData);
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    validate(field) {
      ArticleSchema.validateAt(field, this.email)
        .then(() => (this.errors[field] = ""))
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
  },
};
</script>

<style scoped>
.errors {
  color: red;
}
</style>
