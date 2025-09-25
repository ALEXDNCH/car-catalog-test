export interface ICar {
  id: number;
  make: string;
  model: string;
  year: number;
  image: string;
}
export interface ICarDetails {
  model_id: string;
  model_make_id: string;
  model_name: string;
  model_trim: string | null;
  model_year: string;
  model_body: string | null;
  model_engine_position: string | null;
  model_engine_cc: string | null;
  model_engine_cyl: string | null;
  model_engine_type: string | null;
  model_engine_valves_per_cyl: string | null;
  model_engine_power_ps: string | null;
  model_engine_power_rpm: string | null;
  model_engine_torque_nm: string | null;
  model_engine_torque_rpm: string | null;
  model_engine_bore_mm: string | null;
  model_engine_stroke_mm: string | null;
  model_engine_compression: string | null;
  model_engine_fuel: string | null;
  model_top_speed_kph: string | null;
  model_0_to_100_kph: string | null;
  model_drive: string | null;
  model_transmission_type: string | null;
  model_seats: string | null;
  model_doors: string | null;
  model_weight_kg: string | null;
  model_length_mm: string | null;
  model_width_mm: string | null;
  model_height_mm: string | null;
  model_wheelbase_mm: string | null;
  model_lkm_hwy: string | null;
  model_lkm_mixed: string | null;
  model_lkm_city: string | null;
  model_fuel_cap_l: string | null;
  model_sold_in_us: string | null;
  model_co2: string | null;
  model_make_display: string | null;
  make_display: string | null;
  make_country: string | null;
}
