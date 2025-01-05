export const selectContacts = state => state.contacts.contacts.items;

export const selectContactsFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectIsKeyLoading = state => state.contacts.contacts.isKeyLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectOpenModal = state => state.contacts.contacts.openMyModal;

export const selectOpenSortedAllModal = state => state.contacts.contacts.openMyAllModal;

export const selectOpenSortedPendingModal = state => state.contacts.contacts.openMyPendingModal;

export const selectOpenSortedCompletedModal = state => state.contacts.contacts.openMyCompletedModal;

export const selectOpenSortedPastDueModal = state => state.contacts.contacts.openMyPastDueModal;

export const selectedContact = state => state.contacts.contacts.selectedContact;

export const selectedSortedAllContact = state => state.contacts.contacts.selectedSortedAllContact;

export const selectedSortedPendingContact = state => state.contacts.contacts.selectedSortedPendingContact;

export const selectedSortedCompletedContact = state => state.contacts.contacts.selectedSortedCompletedContact;

export const selectedSortedPastDueContact = state => state.contacts.contacts.selectedSortedPastDueContact;

export const selectedIsSlideLoading = state => state.contacts.contacts.isSlideLoading;

export const selectedIsSlideError = state => state.contacts.contacts.isSlideError;

export const selectFilterUp = state => state.contacts.contacts.filterUpLimit;

export const selectFilterDown = state => state.contacts.contacts.filterDownLimit;
