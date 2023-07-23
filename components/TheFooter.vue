<template>
  <footer class="container px-4 pt-20">
    <div class="mb-20 flex flex-col gap-16 xl:flex-row xl:gap-[8rem]">
      <div class="flex w-full flex-col items-center justify-between md:flex-row xl:w-[30rem] xl:flex-col xl:gap-x-12">
        <div>
          <h2 class="mb-8 text-center text-2xl leading-none sm:whitespace-nowrap sm:text-left sm:text-3xl">
            Let’s stay in touch
          </h2>
          <form
            @submit.prevent=""
            class="mb-[5.5rem] flex h-14 w-full overflow-hidden rounded-3xl border sm:w-[25rem]">
            <input
              type="text"
              placeholder="Enter email..."
              class="h-full w-full bg-transparent px-6 text-center text-md font-light text-white placeholder:text-base focus:border-0 focus:outline-none" />
            <button
              type="submit"
              class="grid place-content-center rounded-3xl bg-white px-10 font-light text-black">
              Subscribe
            </button>
          </form>
        </div>
        <img
          src="~/assets/images/logo-full.png"
          alt="logo-full"
          class="max-sm:w-[60%] md:self-start" />
      </div>
      <nav class="flex-1">
        <ul
          class="grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-x-16 md:gap-y-12 md:[&>*:nth-child(3)]:row-span-2">
          <li
            v-for="item in navigation"
            :key="item.title"
            class="text-xl italic">
            <div
              @click="toggleSpoiler"
              class="flex items-center gap-3 max-sm:cursor-pointer">
              <h3 class="pointer-events-none whitespace-nowrap text-md font-light sm:text-xl">
                {{ item.title }}
              </h3>
              <IconArrowOnly class="pointer-events-none h-3 w-3 -rotate-90 transition sm:hidden" />
            </div>
            <ul class="space-y-4 transition-all max-sm:max-h-0 max-sm:overflow-hidden">
              <li
                v-for="link in item.items"
                :key="link"
                class="leading-none first:mt-4">
                <a
                  href="#"
                  class="sm:text-medium block text-base font-light not-italic transition duration-200 hover:translate-x-2 hover:text-brand-500"
                  >{{ link }}</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
      <p class="font-light">2022 Nike, Inc. All Rights Reserved ©</p>
      <ul class="flex items-center gap-x-10">
        <li
          v-for="(s, i) in socials"
          :key="i">
          <a
            href="#"
            class="transition-transform hover:scale-125"
            :aria-label="`link ${s.name}`">
            <component :is="s.icon" />
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

const toggleSpoiler = e => {
  const list = e.target.nextElementSibling;
  const lastChild = e.target.lastChild;
  lastChild.style.transform = lastChild.style.transform ? null : "rotate(180deg)";
  list.style.maxHeight = list.style.maxHeight ? null : `${list.scrollHeight}px`;
};

const socials = [
  {
    name: "Youtube",
    icon: IconYoutube,
  },
  {
    name: "Facebook",
    icon: IconFacebook,
  },
  {
    name: "Twitter",
    icon: IconTwitter,
  },
  {
    name: "Instagram",
    icon: IconInstagram,
  },
];
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
