<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Chicago Teachers Union
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Contract',
          caption: 'Know Your Rights',
          icon: 'subject',
          link: '#/contract/',
        },
        {
          title: 'CTU News',
          caption: 'Latest from CTU',
          icon: 'dynamic_feed',
          link: 'https://ctulocal1.org/news',
        },
        {
          title: 'Contact CTU',
          caption: 'Connect with your rep',
          icon: 'record_voice_over',
          link: '#/connect',
        },
        {
          title: 'Personalize',
          caption: 'Preferences',
          icon: 'settings',
          link: '#/preferences',
        },
        {
          title: 'Website',
          caption: 'ctulocal1.org',
          icon: 'public',
          link: 'https://www.ctulocal1.org',
        },
        {
          title: 'Twitter',
          caption: '@ctulocal1',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/ctulocal1',
        },
        {
          title: 'Facebook',
          caption: '@ctulocal1',
          icon: 'fab fa-facebook',
          link: 'https://facebook.com/ctulocal1',
        },
        {
          title: 'Instagram',
          caption: '@ctulocal1',
          icon: 'fab fa-instagram',
          link: 'https://instagram.com/ctulocal1',
        },
      ],
    };
  },
};
</script>
