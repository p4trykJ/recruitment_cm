<template>
  <v-row no-gutters class="flex-column fill-height">
    <v-col class="flex-grow-0">
      <v-container>
        <header class="py-10 white">
          <v-row no-gutters class="justify-start align-center">
            <v-col cols="auto" class="pr-2">
              <v-icon x-large color="success"> mdi-email-open-outline </v-icon>
            </v-col>
            <v-col cols="auto">
              <h1 class="text-h4 black--text">Wiadomości</h1>
            </v-col>
          </v-row>
        </header>
      </v-container>
    </v-col>
    <v-divider></v-divider>
    <v-col>
      <section class="fill-height">
        <v-container fill-height class="align-start">
          <v-row no-gutters class="flex-column fill-height">
            <v-col class="flex-grow-0">
              <v-row no-gutters class="align-baseline flex-nowrap">
                <v-col style="flex: 1 1 auto" class="text-truncate">
                  <h1 class="text-h5 text-truncate">Moja skrzynka odbiorcza</h1>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" class="col-lg-3">
                  <v-text-field
                    v-model="searchQuery"
                    outlined
                    dense
                    label="Szukaj"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col style="flex: 1 0 auto">
              <messages-list :messages="messages" @openMessage="openDialog">
              </messages-list>
              <message-dialog
                v-if="isDialogLoaded"
                v-model="isDialogVisible"
                :title="title"
                :message="message"
                @close="isDialogVisible = false"
              ></message-dialog>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-col>
  </v-row>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'Index',
  components: {
    MessageDialog: () => import('@/components/MessageDialog'),
  },
  async asyncData({ $axios }) {
    const messages = await $axios.$get('/api/messages')
    return {
      messages: messages.map((message) => ({
        ...message,
        date: new Date(message.date).toLocaleString(),
      })),
    }
  },
  data: () => ({
    searchQuery: '',
    clonedMessages: undefined,
    isDialogLoaded: false,
    isDialogVisible: false,
    title: undefined,
    message: undefined,
  }),
  mounted() {
    this.$watch('searchQuery', debounce(this.search, 200))
    // create copy of messages when user starts typing but only 🔛
    const unwatch = this.$watch('searchQuery', () => {
      this.clonedMessages = [...this.messages]
      unwatch()
    })
  },
  methods: {
    openDialog(title, message) {
      this.title = title
      this.message = message
      this.isDialogLoaded = true
      this.isDialogVisible = true
    },
    search(val) {
      if (val) {
        this.messages = this.clonedMessages.filter((message) => {
          return Object.values(message).some((value) =>
            value.toString().toLowerCase().includes(val.toLowerCase())
          )
        })
      } else {
        this.messages = [...this.clonedMessages]
      }
    },
  },
}
</script>
