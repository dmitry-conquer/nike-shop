<template>
  <footer class="container pt-20 px-4">
    <div class="mb-20 flex flex-col xl:flex-row xl:gap-[8rem] gap-16">
      <div class="xl:w-[30rem] flex xl:flex-col items-center md:flex-row flex-col xl:gap-x-12 justify-between w-full">
        <div>
          <h2 class="mb-8 sm:whitespace-nowrap text-2xl sm:text-left text-center sm:text-3xl leading-none">Let’s stay in touch</h2>
          <form
            @submit.prevent=""
            class="mb-[5.5rem] flex h-14 w-full sm:w-[25rem]  overflow-hidden rounded-3xl border">
            <input
              type="text"
              placeholder="Enter email..."
              class="h-full w-full bg-transparent px-6 text-center font-light text-white placeholder:text-base text-md focus:border-0 focus:outline-none" />
            <button
              type="submit"
              class="grid place-content-center rounded-3xl bg-white px-10 font-light text-black">
              Subscribe
            </button>
          </form>
        </div>
        <img
          src="images/logo-full.png"
          alt="logo-full" class="md:self-start max-sm:w-[60%]"/>
      </div>
      <nav class="flex-1">
        <ul class="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-rows-2 justify-between gap-8 md:gap-x-16 md:gap-y-12 md:[&>*:nth-child(3)]:row-span-2">
          <li
            v-for="item in navigation"
            :key="item.title"
            class="text-xl italic">
            <h3 class="mb-4 whitespace-nowrap font-light">{{ item.title }}</h3>
            <ul class="space-y-4">
              <li
                v-for="link in item.items"
                :key="link"
                class="leading-none">
                <a
                  href="#"
                  class="block text-md font-light not-italic transition duration-200 hover:translate-x-2 hover:text-brand-500"
                  >{{ link }}</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!-- bottom -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
      <p class="font-light">2022 Nike, Inc. All Rights Reserved ©</p>
      <ul class="flex items-center gap-x-10">
        <li
          v-for="(s, i) in socials"
          :key="i">
          <a href="#" class="hover:scale-125 transition-transform block">
            <component :is="s" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import IconYoutube from "~/components/Icon/IconYoutube.vue";
import IconFacebook from "~/components/Icon/IconFacebook.vue";
import IconTwitter from "~/components/Icon/IconTwitter.vue";
import IconInstagram from "~/components/Icon/IconInstagram.vue";

const socials = [IconYoutube, IconFacebook, IconTwitter, IconInstagram];
const navigation = [
  {
    title: "SHOP  ",
    items: ["Mens", "Women", "New Arrival"],
  },
  {
    title: "OUR SERVICES",
    items: ["Customize your products", "Gift Card", "Maintain & Repair"],
  },
  {
    title: "NEED HELP ?",
    items: [
      "My Account",
      "Shipping",
      "Return & Exchanges",
      "FAQs",
      "Rewards",
      "Loyalty program",
      "How to choose your product?",
      "Sports Trends",
    ],
  },
  {
    title: "CONTACT US",
    items: ["Find a Store", "Contact Us", "Terms & Conditions"],
  },
  {
    title: "OUR ENTERPRISE",
    items: ["Who are we?", "Press and news", "Our alliances"],
  },
];
</script>
