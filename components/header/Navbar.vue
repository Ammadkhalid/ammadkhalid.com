<template>
<!-- TODO add animation in menu -->
<!-- TODO add upwork profile link -->
<!-- TODO add toggle dark/light mode functionality -->
  <header
    class="sm:flex text-white border-gray-800 border-b"
  >
    <div class="flex items-center px-4 py-3 border-gray-800 border-b sm:border-none">
        <div class="logo">Ammad Khalid</div>

        <div class="sm:hidden text-gray-200 hover:bg-gray-800 p-2 rounded ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
            </svg>
            </div>

        <div class="toggle-mode-mobile xs:hidden text-gray-200 p-2 hover:bg-gray-800 rounded ml-1" @click="isOpen = !isOpen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor">

                <path v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />

                <path v-else-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />

            </svg>
        </div>

    </div>

    <nav class="sm:flex flex-col sm:flex-row items-center sm:ml-auto" :class="isOpen ? 'flex' :'hidden' ">
        
        <div class="test-nav-item">
            <a href="#" class="p-3 hover:bg-gray-900 rounded px-24 sm:px-4">Projects</a>
        </div>

        <div class="test-nav-item">
            <a href="#" class="p-3 hover:bg-gray-900 rounded px-24 sm:px-4">Resume</a>
        </div>

        <div class="test-nav-item">
            <a href="#" class="p-3 text-gray-200 border border-green-800 hover:bg-green-800 hover:border-green-400 rounded px-24 sm:px-4">
                <span class="italic text-green-400">Up</span>work
                </a>
        </div>

        <div class="hidden sm:block test-nav-item">
            <div class="p-3 sm:px-4 hover:bg-gray-900 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
            </div>
        </div>

    </nav>

  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>


<style lang="postcss">
.test-nav-item {
    @apply p-4 px-6;
}

@media sm {
    .test-nav-item:first-child {
        @apply pl-1;
    }   
}
</style>