<template>
  <div class="w-full py-4">
    <table class="w-full -mx-4 table-auto border-separate border-spacing-x-4">
      <tbody>
        <tr>
          <td class="w-[40px]">
            <div
              class="rounded-lg bg-white p-2 flex items-center justify-center w-[40px] h-[40px]"
            >
              <NuxtImg
                :src="data.imageUrl"
                class="w-6 h-6"
                :alt="data.company + `logo`"
              />
            </div>
          </td>
          <td>
            <p>
              {{ data.position }} at
              <span class="font-bold">{{ data.company }}</span>
            </p>
            <p class="text-sub-accent text-sm">{{ data.period }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  data: {
    company: string;
    position: string;
    period: string;
    imageUrl: string;
  };
}>();
</script>
