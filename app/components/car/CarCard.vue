<script setup lang="ts">
  import type { ICarDetails } from "~/types/cars.types";
  import { MESSAGES } from "~/constants/messages";

  const { details } = defineProps<{
    details: ICarDetails | null;
  }>();

  const engineBrief = computed(() => {
    const d = details;
    if (!d) return undefined;
    const bits = [
      d.model_engine_type,
      d.model_engine_cyl ? `${d.model_engine_cyl} cyl` : undefined,
      d.model_engine_fuel
    ].filter(Boolean);
    return bits.length ? bits.join(" · ") : undefined;
  });
</script>

<template>
  <article>
    <div
      v-if="details?.model_trim"
      class="mt-2 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
    >
      {{ details.model_trim }}
    </div>

    <dl
      v-if="Object.keys(details ?? {}).length"
      class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm"
    >
      <CarDetailMetaItem label="Body" :value="details?.model_body" />
      <CarDetailMetaItem label="Drive" :value="details?.model_drive" />
      <CarDetailMetaItem label="Transmission" :value="details?.model_transmission_type" />
      <CarDetailMetaItem label="Engine" :value="engineBrief" />
      <CarDetailMetaItem label="Power, PS" :value="details?.model_engine_power_ps" />
      <CarDetailMetaItem label="Torque, Nm" :value="details?.model_engine_torque_nm" />
      <CarDetailMetaItem label="Doors" :value="details?.model_doors" />
      <CarDetailMetaItem label="Weight, kg" :value="details?.model_weight_kg" />
      <CarDetailMetaItem label="City l/100" :value="details?.model_lkm_city" />
      <CarDetailMetaItem label="Hwy l/100" :value="details?.model_lkm_hwy" />
      <CarDetailMetaItem label="Mixed l/100" :value="details?.model_lkm_mixed" />
      <CarDetailMetaItem label="Country" :value="details?.make_country" />
    </dl>
    <UiError v-else :error-text="MESSAGES.EMPTY" />
  </article>
</template>
