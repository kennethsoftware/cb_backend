export const CONTRACT_ADDRESS = window._config.contractAddress;
export const TRAINING_COST = window._config.trainingCost;
export const DEFAULT_SEARCH_GAS = window._config.defaultSearchGas;
export const DEFAULT_GAS = 60000;
export const DEFAULT_FIGHT_GAS = window._config.defaultFightGas;
export const DEFAULT_CALL_GAS = window._config.defaultCallGas;
// export const HEALING_PRICE_INCREASE = 1.5; Maybe reconsider this later

export const FIGHTERS_PER_PAGE = 24;

export const ACTION_TYPES = {
  core: {
    SIGNING_ACTION: 'core/SIGNING_ACTION',
    SET_PROVIDER: 'core/SET_PROVIDER',
    SET_DEFAULT_ACCOUNT: 'core/SET_DEFAULT_ACCOUNT',
    SET_CONTRACT_SERVICE: 'core/SET_CONTRACT_SERVICE'
  },
  account: {
    ADD_FIGHTERS: 'account/ADD_FIGHTERS',
    INCREASE_FIGHTER_STATS: 'account/INCREASE_FIGHTER_STATS',
    HEAL_FIGHTER: 'account/HEAL_FIGHTER',
    ADD_FIGHTER_TO_MARKETPLACE: 'account/ADD_FIGHTER_TO_MARKETPLACE',
    ADD_FIGHTER_TO_ARENA: 'account/ADD_FIGHTER_TO_ARENA',
    REMOVE_FIGHTER_FROM_ARENA: 'account/REMOVE_FIGHTER_FROM_ARENA',
    REMOVE_FIGHTER_FROM_MARKETPLACE: 'account/REMOVE_FIGHTER_FROM_MARKETPLACE'
  },
  modal: {
    SHOW_MODAL: 'modal/SHOW_MODAL',
    CLOSE_MODAL: 'modal/CLOSE_MODAL',
    UPDATE_FIGHTER_PRICE: 'modal/UPDATE_FIGHTER_PRICE'
  },
  marketplace: {
    POPULATE_MARKETPLACE: 'marketplace/POPULATE_MARKETPLACE',
    FILTER_MARKETPLACE: 'marketplace/FILTER_MARKETPLACE',
    RESET_FILTERS: 'marketplace/RESET_FILTERS',
    INCREMENT_PAGE_COUNTER: 'marketplace/INCREMENT_PAGE_COUNTER',
    RESET_PAGE_COUNTER: 'marketplace/RESET_PAGE_COUNTER',
    REMOVE_FIGHTER_FROM_MARKETPLACE: 'marketplace/REMOVE_FIGHTER_FROM_MARKETPLACE'
  },
  arena: {
    POPULATE_ARENA: 'arena/POPULATE_ARENA',
    FILTER_ARENA: 'arena/FILTER_ARENA',
    RESET_FILTERS: 'arena/RESET_FILTERS',
    INCREMENT_PAGE_COUNTER: 'arena/INCREMENT_PAGE_COUNTER',
    RESET_PAGE_COUNTER: 'arena/RESET_PAGE_COUNTER',
    SELECT_FIGHTER_TO_BRAWL: 'arena/SELECT_FIGHTER_TO_BRAWL',
    RESET_SELECTED_FIGHTER: 'arena/RESET_SELECTED_FIGHTER',
    REMOVE_FIGHTER_FROM_ARENA: 'arena/REMOVE_FIGHTER_FROM_ARENA'
  }
}
