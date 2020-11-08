import axios from 'axios'
const axiosConfig = {
  baseURL: process.env.VUE_APP_API_URL
}
const apiClient = axios.create(axiosConfig)

const buildPaginationParams = (pagination) => {
  return {
    page: pagination.page,
    per_page: pagination.limit
  }
}

const buildFilterParams = (filters) => {
  const filterResult = {}
  if (filters.name) {
    filterResult.beer_name = filters.name
  }
  if (filters.startDate) {
    filterResult.brewed_after = filters.startDate.split('-').reverse().join('-')
  }
  if (filters.endDate) {
    filterResult.brewed_before = filters.endDate.split('-').reverse().join('-')
  }
  if (filters.type && filters.type !== 'all') {
    if (filters.type === 'alcoholic') {
      filterResult.abv_gt = 1
    } else if (filters.type === 'alcohol-free') {
      filterResult.abv_lt = 1
    }
  }
  return filterResult
}

// state
const state = {
  data: [],
  pagination: {
    page: 1,
    limit: 12
  },
  filters: {
    name: null,
    startDate: null,
    endDate: null,
    type: null
  }
}

// getters
const getters = {
  getData () {
    return state.data
  },
  getPagination () {
    return state.pagination
  },
  getFilters () {
    return state.filters
  }
}

// actions
const actions = {
  async fetchDataPage ({ commit, getters }) {
    try {
      const queryParams = {
        ...buildPaginationParams(getters.getPagination),
        ...buildFilterParams(getters.getFilters)
      }
      const response = await apiClient.get('/beers', { params: queryParams })
      commit('SET_DATA', response.data)
    } catch (error) {
      console.log(error)
      return error
    }
  },
  filterData ({ commit, getters, dispatch }, filters) {
    commit('SET_FILTERS', filters)
    commit('SET_PAGE', 1)
    dispatch('fetchDataPage')
  },
  nextPage ({ commit, getters, dispatch }) {
    const currentPage = getters.getPagination.page
    commit('SET_PAGE', currentPage + 1)
    dispatch('fetchDataPage')
  },
  previousPage ({ commit, getters, dispatch }) {
    const currentPage = getters.getPagination.page
    if (currentPage > 1) {
      commit('SET_PAGE', currentPage - 1)
      dispatch('fetchDataPage')
    }
  }
}

// mutations
const mutations = {
  'SET_DATA' (state, data) {
    state.data = data
  },
  'SET_PAGE' (state, page) {
    state.pagination.page = page
  },
  'SET_FILTERS' (state, filters) {
    state.filters = {
      ...state.pagination.filters,
      ...filters
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
