<template>
  <div
    class="border rounded-lg p-4 flex items-center justify-between"
    @click="console.log(repo)"
  >
    <div>
      <h1 class="text-lg">{{ repo.name }}</h1>
      <div class="flex items-center [&>*:nth-child(n+2)]:ml-2 mt-2">
        <NuxtImg
          :src="repo.language_url"
          :alt="repo.language"
          class="w-6 h-6"
        />

        <div
          class="flex items-center bg-slate-400 px-2 py-0.5 rounded-md text-white"
        >
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path
              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
              fill="yellow"
            ></path>
          </svg>
          <p class="ml-1 text-sm">
            <span class="font-semibold">Star</span> {{ totalStargazerCount }}
          </p>
        </div>
      </div>

      <!-- <table>
        <tbody>
          <tr>
            <td>
              <NuxtImg :src="repo.language_url" :alt="repo.language" />
            </td>
            <td>
              <p class="flex items-bottom justify-start mt-2 text-sm">
                <span>
                  <Icon name="jam:star-f" class="text-yellow-500" />
                </span>
                <span class="ml-1 text-sub-accent">{{
                  repo.stargazers_count
                }}</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table> -->

      <!-- <div class="mt-2 flex items-center [&>*:not(:first-child)]:-ml-6">
        <NuxtImg
          v-for="stargazer in stargazers"
          :key="stargazer.node_id"
          :src="stargazer.avatar_url"
          width="40"
          height="40"
          style="clip-path: circle()"
        />
        <p
          v-if="totalStargazerCount > 5"
          class="bg-accent text-white text-sm w-[40px] h-[40px] flex items-center justify-center"
          style="clip-path: circle()"
        >
          +{{ totalStargazerCount - 5 }}
        </p>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  repo: any;
}>();

// const stargazers = computed(() => props.repo.stargazers.slice(0, 5));
const totalStargazerCount = computed(() => props.repo.stargazers.length);
</script>
