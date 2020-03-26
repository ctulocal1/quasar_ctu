<template>
  <q-page class="q-pl-xl">
    <div>
      <h2>Salary Calculator</h2>
      <h3> {{ label }}</h3>
      <div v-show="year==null" class="q-pa-md">
        <p>Choose Year:</p>
        <q-option-group
          :options="years"
          label="Choose Year"
          type="radio"
          v-model="year"
        />
      </div>
      <div v-show="(year!=null && category==null)">
        <p>Year: {{ year }} <button>Change</button></p>
        <p>Choose Employee Category</p>
        <q-option-group
          :options="categories"
          label="Choose Employee Category"
          type="radio"
          v-model="category"
          />
      </div>
      <div v-show="(category!=null && lane==null)">
        <p>Year: {{ year }} <button>Change</button></p>
        <p>Category: {{ category }}-Day Teacher<button>Change</button></p>
        <p>Choose Lane</p>
        <q-option-group
          :options="lanes"
          label="Choose Lane"
          type="radio"
          v-model="lane"
          />
      </div>
      <div v-show="(lane!=null && step==null)">
        <p>Year: {{ year }} <button>Change</button></p>
        <p>Category: {{ category }}-Day Teacher<button>Change</button></p>
        <p>Lane: {{ lane }} <button>Change</button></p>
        <p>Choose Step</p>
        <q-select
          :options="steps"
          label="Choose Step"
          type="radio"
          v-model="step"
          />
      </div>
      <div v-show="(step!=null)">
        <p>{{ year }} {{ category }}-Day Teacher</p>
        <p>Lane {{ lane }}, {{ step }}</p>
        <p>Annual Salary: {{ salary }}</p>
        <p>Pension Pickup: {{ salary * 0.09 }}</p>
        <p>Total Compensation: {{ salary * 1.09 }}</p>
        <p><q-btn icon-right="add" outline rounded color="primary" label="Add Another Salary" /></p>
      </div>
    </div>
  </q-page>
</template>

<script>
import salaryJSON from '../../statics/contract/data/sample-salary-data.json';

export default {
  name: 'SalaryCalculator',
  data() {
    return {
      year: null,
      years: [
        { label: '2019-20', value: '2019-20' },
        { label: '2020-21', value: '2020-21' },
        { label: '2021-22', value: '2021-22' },
        { label: '2022-23', value: '2022-23' },
        { label: '2023-24', value: '2023-24' },
      ],
      category: null,
      categories: [
        { label: '208-Day Employees', value: '208-Day Employees' },
        { label: '228-Day Employees', value: '228-Day Employees' },
      ],
      lane: null,
      lanes: [
        { label: 'Lane 1', value: '1' },
        { label: 'Lane 2', value: '2' },
        { label: 'Lane 3', value: '3' },
      ],
      step: null,
      steps: [
        'Step 1',
        'Step 2',
        'Step 3',
        'Step 4',
        'Step 5',
        'Step 6',
        'Step 7',
        'Step 8',
        'Step 9',
        'Step 10',
        'Step 11',
        'Step 12',
        'Step 13',
        'Step 14',
        'Step 15',
        'Step 16',
      ],
    };
  },
  computed: {
    salaryData() {
      return salaryJSON;
    },
    salary() {
      return 57395;
    },
  },
  methods: {
  },
};
</script>

<style>
  h1 {
    font-size:64px;
    line-height:1;
    padding: 0;
    margin: inherit 0 0 -5px;
  }
  p {
    padding:0;
    margin: .4em 0 0 0;
    font-size:20px;
  }
</style>
