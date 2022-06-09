<template>
  <div v-if="event">
    <div
      v-for="(value, key) in event"
      :key="key"
    >
      <p v-if="key !== 'attendees'">
        {{ value }}
      </p>

      <ul v-else>
        <li
          v-for="(attendee, index) in value"
          :key="index"
        >
          {{ attendee.id }}: {{ attendee.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'events'],
  computed: {
    event() {
      return this.events[this.id - 1];
    }
  },
};
</script>

