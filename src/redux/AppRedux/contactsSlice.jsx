
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  openModal,
  closeModal,
  openSortedAllModal,
  closeSortedAllModal,
  openSortedPendingModal,
  closeSortedPendingModal,
  fetchContactById,
  fetchSortedAllContactById,
  fetchSortedPendingContactById,
  handleFilterFowardUp,
  handleFilterFowardDown,
  handleFilterBackwardUp,
  handleFilterBackwardDown,
  updateContactAvatar,
  updateContactName,
  updateSortedAllContactName,
  updateSortedPendingContactName,
  updateContactEmail,
  updateSortedAllContactEmail,
  updateSortedPendingContactEmail,
  updateContactPhone,
  updateSortedAllContactPhone,
  updateSortedPendingContactPhone,
  updateStatus,
} from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

/*const handleKeyPending = state => {
  state.contacts.isKeyLoading = true;
  state.contacts.error = null;
};

const handleKeyRejected = (state, action) => {
  state.contacts.isKeyLoading = false;
  state.contacts.error = action.payload;
};*/

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      isKeyLoading: false,
      error: null,
      openMyModal: false,
      openMyAllModal: false,
      openMyPendingModal: false,
      selectedContact: {
        name: null,
        email: null,
        phone: null,
        avatarURL: null,
        groups: null,
      },
      selectedSortedAllContact: {
        name: null,
        email: null,
        phone: null,
        avatarURL: null,
        groups: null,
      },
      selectedSortedPendingContact: {
        name: null,
        email: null,
        phone: null,
        avatarURL: null,
        groups: null,
      },
      isSlideLoading: false,
      isSlideError: false,
      filterUpLimit: 4,
      filterDownLimit: 0,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
        //console.log(action.payload);
        //myContacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        /*state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          item => item._id === action.payload
        );
        state.contacts.items.splice(index, 1);*/
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(openModal.fulfilled, (state, action) => {
        state.contacts.openMyModal = action.payload;
      })

      .addCase(closeModal.fulfilled, (state, action) => {
        state.contacts.openMyModal = action.payload;
        //state.contacts.selectedContact = {};
      })
      .addCase(openSortedAllModal.fulfilled, (state, action) => {
        state.contacts.openMyAllModal = action.payload;
      })

      .addCase(closeSortedAllModal.fulfilled, (state, action) => {
        state.contacts.openMyAllModal = action.payload;
        //state.contacts.selectedContact = {};
      })
      .addCase(openSortedPendingModal.fulfilled, (state, action) => {
        state.contacts.openMyPendingModal = action.payload;
      })

      .addCase(closeSortedPendingModal.fulfilled, (state, action) => {
        state.contacts.openMyPendingModal = action.payload;
        //state.contacts.selectedContact = {};
      })
      /*.addCase(fetchContactById.fulfilled, (state, action) => {
        const myContact = myContacts.find(contact => {
          return contact._id === action.payload;
        });
        state.contacts.selectedContact = myContact;
      });*/
      .addCase(fetchContactById.pending, state => {
        state.contacts.isSlideLoading = true;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.contacts.selectedContact = action.payload;
        state.contacts.isSlideLoading = false;
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.contacts.isSlideLoading = false;
        state.contacts.isSlideError = action.payload;
      })

      .addCase(fetchSortedAllContactById.pending, state => {
        state.contacts.isSlideLoading = true;
      })
      .addCase(fetchSortedAllContactById.fulfilled, (state, action) => {
        state.contacts.selectedSortedAllContact = action.payload;
        state.contacts.isSlideLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedContact = action.payload;
        }
      })
      .addCase(fetchSortedAllContactById.rejected, (state, action) => {
        state.contacts.isSlideLoading = false;
        state.contacts.isSlideError = action.payload;
      })

      .addCase(fetchSortedPendingContactById.pending, state => {
        state.contacts.isSlideLoading = true;
      })
      .addCase(fetchSortedPendingContactById.fulfilled, (state, action) => {
        state.contacts.selectedSortedPendingContact = action.payload;
        state.contacts.isSlideLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedContact = action.payload;
        }
        if (
          state.contacts.selectedSortedAllContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload;
        }
      })
      .addCase(fetchSortedPendingContactById.rejected, (state, action) => {
        state.contacts.isSlideLoading = false;
        state.contacts.isSlideError = action.payload;
      })

      .addCase(handleFilterFowardUp.fulfilled, (state, action) => {
        state.contacts.filterUpLimit = action.payload;
      })
      .addCase(handleFilterFowardDown.fulfilled, (state, action) => {
        state.contacts.filterDownLimit = action.payload;
      })
      .addCase(handleFilterBackwardUp.fulfilled, (state, action) => {
        state.contacts.filterUpLimit = action.payload;
      })
      .addCase(handleFilterBackwardDown.fulfilled, (state, action) => {
        state.contacts.filterDownLimit = action.payload;
      })
      .addCase(updateContactAvatar.fulfilled, (state, action) => {
        state.contacts.selectedContact.avatarURL = action.payload.avatarURL;
        //state.token = action.payload.token;
      })
      .addCase(updateContactName.pending, handlePending)
      .addCase(updateContactName.fulfilled, (state, action) => {
        state.contacts.selectedContact.name = action.payload.newObj.name;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateContactName.rejected, handleRejected)
      .addCase(updateSortedAllContactName.pending, handlePending)
      .addCase(updateSortedAllContactName.fulfilled, (state, action) => {
        state.contacts.selectedSortedAllContact.name =
          action.payload.newObj.name;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedPendingContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedAllContactName.rejected, handleRejected)
      .addCase(updateSortedPendingContactName.pending, handlePending)
      .addCase(updateSortedPendingContactName.fulfilled, (state, action) => {
        state.contacts.selectedSortedPendingContact.name =
          action.payload.newObj.name;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedAllContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedPendingContactName.rejected, handleRejected)
      .addCase(updateContactEmail.pending, handlePending)
      .addCase(updateContactEmail.fulfilled, (state, action) => {
        state.contacts.selectedContact.email = action.payload.newObj.email;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateContactEmail.rejected, handleRejected)

      .addCase(updateSortedAllContactEmail.pending, handlePending)
      .addCase(updateSortedAllContactEmail.fulfilled, (state, action) => {
        state.contacts.selectedSortedAllContact.email =
          action.payload.newObj.email;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedPendingContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedAllContactEmail.rejected, handleRejected)
      // updateSortedPendingContactEmail
      .addCase(updateSortedPendingContactEmail.pending, handlePending)
      .addCase(updateSortedPendingContactEmail.fulfilled, (state, action) => {
        state.contacts.selectedSortedPendingContact.email =
          action.payload.newObj.email;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedAllContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedPendingContactEmail.rejected, handleRejected)
      .addCase(updateContactPhone.pending, handlePending)
      .addCase(updateContactPhone.fulfilled, (state, action) => {
        state.contacts.selectedContact.phone = action.payload.newObj.phone;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateContactPhone.rejected, handleRejected)
      //updateSortedAllContactPhone
      .addCase(updateSortedAllContactPhone.pending, handlePending)
      .addCase(updateSortedAllContactPhone.fulfilled, (state, action) => {
        state.contacts.selectedSortedAllContact.phone =
          action.payload.newObj.phone;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedPendingContact._id ===
          state.contacts.selectedSortedAllContact._id
        ) {
          state.contacts.selectedSortedPendingContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedAllContactPhone.rejected, handleRejected)
      //updateSortedPendingContactPhone
      .addCase(updateSortedPendingContactPhone.pending, handlePending)
      .addCase(updateSortedPendingContactPhone.fulfilled, (state, action) => {
        state.contacts.selectedSortedPendingContact.phone =
          action.payload.newObj.phone;
        state.contacts.items = action.payload.newRay;
        state.contacts.isLoading = false;
        if (
          state.contacts.selectedContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedContact = action.payload.newObj;
        }
        if (
          state.contacts.selectedSortedAllContact._id ===
          state.contacts.selectedSortedPendingContact._id
        ) {
          state.contacts.selectedSortedAllContact = action.payload.newObj;
        }
        //state.token = action.payload.token;
      })
      .addCase(updateSortedPendingContactPhone.rejected, handleRejected)

      .addCase(updateStatus.pending, handlePending)
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
        //state.token = action.payload.token;
      })
      .addCase(updateStatus.rejected, handleRejected);
  },
});



export const contactsReducer = contactsSlice.reducer;