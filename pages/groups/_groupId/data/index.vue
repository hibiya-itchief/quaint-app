<template>
  <v-app>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-btn icon fab small @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-card class="pa-2 pb-8">
          <v-card-title class="text-h5">
            <v-icon class="mx-1" color="blue-grey"
              >mdi-ticket-confirmation</v-icon
            >{{ group?.groupname }}
            <span class="mx-1 grey--text text-subtitle-1"
              >整理券の残席状況</span
            >
          </v-card-title>
          <v-btn class="ma-2 mb-4" color="primary" @click="$nuxt.refresh()"
            ><v-icon class="mr-1">mdi-reload</v-icon>再読み込み</v-btn
          >

          <v-row>
            <v-col
              v-for="(event, index) in events"
              :key="event.id"
              cols="12"
              sm="6"
              md="6"
            >
              <v-card class="pa-2" outlined>
                <v-card class="ma-2 d-flex">
                  <div>
                    <v-card-text
                      class="pt-1 pb-0 mb-0 grey--text text--darken-2 text-caption"
                    >
                      {{ dateFormatter(event.starts_at) }}
                      {{ event.eventname }}
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-title class="pt-0 pb-1 text-h5">
                      {{ timeFormatter(event.starts_at) }}
                      <span class="caption pl-1">
                        - {{ timeFormatter(event.ends_at) }}</span
                      >
                    </v-card-title>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="my-auto mx-2">
                    <!--ここから配布ステータスの条件分岐-->
                    <v-btn v-if="!isAvailable(event)" color="grey" outlined
                      >時間外<v-icon>mdi-cancel</v-icon></v-btn
                    >
                    <v-btn
                      v-else-if="
                        checkTakenTickets(index) / checkStock(index) < 0.8
                      "
                      color="green"
                      outlined
                      >配布中<v-icon>mdi-circle-double</v-icon></v-btn
                    >
                    <!--8割以上で黄色になる-->
                    <v-btn
                      v-else-if="
                        checkTakenTickets(index) / checkStock(index) >= 0.8 &&
                        checkTakenTickets(index) < checkStock(index)
                      "
                      color="orange"
                      outlined
                      >僅少<v-icon>mdi-triangle-outline</v-icon></v-btn
                    >
                    <v-btn
                      v-else-if="checkTakenTickets(index) >= checkStock(index)"
                      color="red"
                      outlined
                      >完売<v-icon>mdi-close</v-icon></v-btn
                    >
                    <!--ここまで配布ステータスの条件分岐-->
                  </div>
                </v-card>
                <span class="ma-3"
                  >満席率：{{ checkTakenTickets(index) ?? '-' }} /
                  {{ checkStock(index) ?? '-' }}
                </span>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import { Event, Group } from 'types/quaint'
import Vue from 'vue'
type Data = {
  userGroups: {
    admin: string
    entry: string
    owner: string
    parents: string
    students: string
    teachers: string
    chief: string
  }
  group: Group | undefined
  events: Event[]
  listStock: string[]
  listTakenTickets: string[]
}
export default Vue.extend({
  name: 'IndivisualGroupPage',
  auth: false,
  async asyncData({ params, $axios, payload }): Promise<Partial<Data>> {
    const events = await $axios.$get('/groups/' + params.groupId + '/events')

    if (payload !== undefined) {
      return { group: payload, events }
    }
    const group = await $axios.$get('/groups/' + params.groupId)

    return { group, events }
  },
  data(): Data {
    return {
      userGroups: {
        admin: process.env.AZURE_AD_GROUPS_QUAINT_ADMIN as string,
        entry: process.env.AZURE_AD_GROUPS_QUAINT_ENTRY as string,
        owner: process.env.AZURE_AD_GROUPS_QUAINT_OWNER as string,
        parents: process.env.AZURE_AD_GROUPS_QUAINT_PARENTS as string,
        students: process.env.AZURE_AD_GROUPS_QUAINT_STUDENTS as string,
        teachers: process.env.AZURE_AD_GROUPS_QUAINT_TEACHERS as string,
        chief: process.env.AZURE_AD_GROUPS_QUAINT_CHIEF as string,
      },
      group: undefined,
      events: [],
      listStock: [],
      listTakenTickets: [],
    }
  },
  head() {
    return {
      title: this.group?.groupname + ' - 整理券の残席状況',
    }
  },
  async created() {
    if (this.events.length !== 0) {
      const getTicketsInfo = []
      for (let i = 0; i < this.events.length; i++) {
        getTicketsInfo.push(
          this.$axios.$get(
            '/groups/' +
              this.group?.id +
              '/events/' +
              this.events[i].id +
              '/tickets'
          )
        )
      }
      Promise.all(getTicketsInfo).then((ticketsInfo) => {
        for (let i = 0; i < ticketsInfo.length; i++) {
          this.listStock.push(ticketsInfo[i].stock)
          this.listTakenTickets.push(ticketsInfo[i].taken_tickets)
        }
      })
    }
    if (
      !(this.$auth.user?.groups as string[]).includes(this.userGroups.admin)
    ) {
      if (
        (this.$auth.user?.groups as string[]).includes(this.userGroups.owner)
      ) {
        if (
          !(
            (await this.$axios.$get('/users/me/owner_of')) as string[]
          ).includes(this.$route.params.groupId)
        ) {
          this.$nuxt.error({ statusCode: 403, message: 'Forbidden' })
        }
      } else {
        this.$nuxt.error({ statusCode: 403, message: 'Forbidden' })
      }
    }
  },
  methods: {
    checkStock(index: number) {
      return this.listStock[index]
    },
    checkTakenTickets(index: number) {
      return this.listTakenTickets[index]
    },

    isToday(
      inputSellStarts: string,
      inputSellEnds: string,
      inputStarts: string
    ) {
      const today = new Date().toDateString()
      const sellStartsDate = new Date(inputSellStarts).toDateString()
      const sellEndsDate = new Date(inputSellEnds).toDateString()
      const startDate = new Date(inputStarts).toDateString()
      if (startDate === today) {
        return true
      } else if (sellStartsDate < today && today < sellEndsDate) {
        return true
      } else {
        return false
      }
    },

    // isAvailable: 整理券が配布時間内であればtrue，それ以外はfalseを返すmethod
    isAvailable(event: Event) {
      if (
        new Date() > new Date(event.sell_starts) &&
        new Date(event.sell_ends) > new Date()
      ) {
        return true
      } else {
        return false
      }
    },
    dateFormatter(inputDate: string) {
      const d = new Date(inputDate)
      return d.getMonth() + 1 + '/' + d.getDate()
    },
    timeFormatter(inputDate: string) {
      const d = new Date(inputDate)
      return (
        d.getHours().toString().padStart(2, '0') +
        ':' +
        d.getMinutes().toString().padStart(2, '0')
      )
    },
  },
})
</script>